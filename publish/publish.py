"""물루의 수영일기 — 인스타그램 자동 게시 (Instagram Graph API, Instagram 로그인 방식)

규칙
- 하루에 '한 줄' = 3편. 에피소드 n은 (n-1)//3 + 1 번째 줄에 속함.
- 피드에서 왼쪽부터 작은 번호가 오도록, 줄 안에서는 큰 번호부터 게시 (3→2→1).
- 줄을 다 채우지 못하면(승인된 편이 3개 미만) 아무것도 올리지 않음 → 그리드가 밀리지 않음.
- 중간 실패 시 이미 올린 편은 state.json에 기록 → 다음 실행이 같은 줄의 나머지부터 이어서 올림.

환경변수
  IG_USER_ID      인스타 프로페셔널 계정 ID
  IG_TOKEN        Instagram 사용자 액세스 토큰 (instagram_business_content_publish 권한)
  ASSET_BASE_URL  공개 이미지 주소 앞부분 (예: https://raw.githubusercontent.com/<owner>/<repo>/main/content/queue)
  DRY_RUN=1       실제 게시 없이 무엇을 올릴지만 출력
"""
import json, os, sys, time, pathlib, urllib.parse, urllib.request, datetime

KST = datetime.timezone(datetime.timedelta(hours=9))


def now_kst():
    return datetime.datetime.now(KST)

ROOT = pathlib.Path(__file__).resolve().parents[1]
QUEUE = ROOT / "content" / "queue"
STATE = ROOT / "content" / "state.json"
GRAPH = os.environ.get("GRAPH_HOST", "https://graph.instagram.com")
VER = os.environ.get("GRAPH_VERSION", "v23.0")
DRY = os.environ.get("DRY_RUN") == "1"


def api(method, path, **params):
    params["access_token"] = os.environ["IG_TOKEN"]
    url = f"{GRAPH}/{VER}/{path}"
    data = None
    if method == "GET":
        url += "?" + urllib.parse.urlencode(params)
    else:
        data = urllib.parse.urlencode(params).encode()
    # media_publish는 재시도하지 않는다(중복 게시 위험) — 실패 시 publish_episode가 실제 게시 여부를 확인
    tries = 1 if path.endswith("media_publish") else 3
    for i in range(tries):
        req = urllib.request.Request(url, data=data, method=method)
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.loads(r.read())
        except urllib.error.HTTPError as e:
            body = e.read().decode()[:400]
            err = RuntimeError(f"{method} {path} → {e.code} {body}")
            if e.code < 500 or i == tries - 1:
                raise err
        except (urllib.error.URLError, TimeoutError, ConnectionError) as e:
            err = RuntimeError(f"{method} {path} → 네트워크 {e}")
            if i == tries - 1:
                raise err
        time.sleep(10 * (i + 1))


def wait_ready(cid, label):
    for _ in range(40):  # 최대 약 4분
        st = api("GET", cid, fields="status_code,status").get("status_code")
        if st == "FINISHED":
            return
        if st in ("ERROR", "EXPIRED"):
            raise RuntimeError(f"{label} 컨테이너 상태 {st}")
        time.sleep(6)
    raise RuntimeError(f"{label} 컨테이너 준비 시간 초과")


def load_state():
    return json.loads(STATE.read_text()) if STATE.exists() else {"posted": []}


def save_state(s):
    STATE.write_text(json.dumps(s, ensure_ascii=False, indent=1))


def episodes():
    eps = {}
    for d in sorted(QUEUE.iterdir()):
        m = d / "meta.json"
        if d.is_dir() and m.exists():
            meta = json.loads(m.read_text())
            eps[int(meta["ep"])] = (d, meta)
    return eps


def next_row(eps, posted):
    """아직 다 올라가지 않은 가장 이른 줄을 찾는다."""
    if not eps:
        return None, []
    last = max(eps)
    for row in range(1, (last + 2) // 3 + 1):
        nums = [3 * row - 2, 3 * row - 1, 3 * row]
        todo = [n for n in nums if n not in posted]
        if todo:
            if any(n not in eps for n in todo):
                return row, None  # 이 줄을 채울 승인 편이 부족
            return row, sorted(todo, reverse=True)
    return None, []


def publish_episode(d, meta, base):
    ig = os.environ["IG_USER_ID"]
    folder = urllib.parse.quote(d.name)
    imgs = sorted((p.name for p in d.glob("*.jpg")), key=lambda n: int(n.split(".")[0]))  # 10.jpg가 2.jpg 앞에 오지 않게
    if not 2 <= len(imgs) <= 20:
        raise RuntimeError(f"{d.name}: 이미지 {len(imgs)}장 (2~20장 필요)")
    children = []
    for name in imgs:
        url = f"{base}/{folder}/{urllib.parse.quote(name)}"
        c = api("POST", f"{ig}/media", image_url=url, is_carousel_item="true")["id"]
        wait_ready(c, name)
        children.append(c)
    car = api("POST", f"{ig}/media", media_type="CAROUSEL", children=",".join(children), caption=meta["caption"])["id"]
    wait_ready(car, "carousel")
    try:
        return api("POST", f"{ig}/media_publish", creation_id=car)["id"]
    except RuntimeError as e:
        # 인스타는 게시가 실제로 됐는데도 오류를 돌려줄 때가 있다 → 확인 후 판단
        print(f"  media_publish 오류, 실제 게시 여부 확인: {e}")
        for _ in range(10):
            time.sleep(15)
            mid = find_posted(int(meta["ep"]))
            if mid:
                return mid
        raise


def find_posted(ep):
    """최근 게시물 캡션에서 'EP.0NN'을 찾아 이미 올라간 편인지 확인 (중복 게시 방지)."""
    tag = f"EP.{ep:03d} "
    res = api("GET", f"{os.environ['IG_USER_ID']}/media", fields="id,caption,timestamp", limit="30")
    for m in res.get("data", []):
        if tag in (m.get("caption") or ""):
            return m["id"]
    return None


def main():
    state = load_state()
    posted = set(state["posted"])
    eps = episodes()
    row, todo = next_row(eps, posted)
    # 하루 한 줄만: 예비 실행(늦은 시간 cron)이 다음 날 분량까지 올리지 않게
    today = now_kst().strftime("%Y-%m-%d")
    done_today = [l for l in state.get("log", []) if l.get("media_id") and str(l.get("at", "")).startswith(today)]
    if todo and len(todo) == 3 and done_today and not DRY and not os.environ.get("FORCE_ROW"):
        print(f"오늘({today}) 줄은 이미 게시됨 → 다음 줄은 내일. (강제로 올리려면 FORCE_ROW=1)")
        return 0
    if row is None:
        print("올릴 줄이 없습니다 (대기열 비어 있음).")
        return 0
    if todo is None:
        print(f"{row}번째 줄을 채울 승인된 에피소드가 부족해 이번엔 건너뜁니다 (그리드 보호).")
        return 2
    print(f"{row}번째 줄 게시 순서: {', '.join(f'EP.{n:03d}' for n in todo)}")
    if DRY:
        # 연결 확인: 토큰·계정·게시 한도, 공개 이미지 주소 (게시는 하지 않음)
        me = api("GET", "me", fields="user_id,username")
        print("토큰 확인:", me.get("username"), me.get("user_id"))
        if str(me.get("user_id")) != os.environ["IG_USER_ID"]:
            print("  ! IG_USER_ID 시크릿과 토큰 계정 ID가 다릅니다")
        print("게시 한도:", api("GET", f"{os.environ['IG_USER_ID']}/content_publishing_limit", fields="quota_usage,config"))
        base = os.environ["ASSET_BASE_URL"].rstrip("/")
        for n in todo:
            d, meta = eps[n]
            url = f"{base}/{d.name}/1.jpg"
            try:
                with urllib.request.urlopen(urllib.request.Request(url, method="HEAD"), timeout=30) as r:
                    ok = f"{r.status} {r.headers.get('Content-Type')}"
            except Exception as e:
                ok = f"실패 {e}"
            print(f"  [DRY] {d.name} · 이미지 {len(list(d.glob('*.jpg')))}장 · 공개주소 {ok}\n{meta['caption']}\n")
        return 0
    base = os.environ["ASSET_BASE_URL"].rstrip("/")
    limit = api("GET", f"{os.environ['IG_USER_ID']}/content_publishing_limit", fields="quota_usage,config")
    print("게시 한도:", limit)
    for n in todo:
        d, meta = eps[n]
        mid = find_posted(n)
        if mid:
            print(f"  EP.{n:03d} 이미 게시돼 있음 → 기록만 갱신 ({mid})")
        else:
            try:
                mid = publish_episode(d, meta, base)
            except Exception as e:
                # 실패 원인을 공개 기록(state.json)에 남겨 로그인 없이도 확인 가능하게
                state.setdefault("log", []).append({"ep": n, "error": str(e)[:500], "at": now_kst().strftime("%Y-%m-%dT%H:%M:%S%z")})
                save_state(state)
                print(f"  EP.{n:03d} 실패: {e}")
                return 1
        state["posted"].append(n)
        state.setdefault("log", []).append({"ep": n, "media_id": mid, "at": now_kst().strftime("%Y-%m-%dT%H:%M:%S%z")})
        save_state(state)
        print(f"  EP.{n:03d} 게시 완료 → {mid}")
        time.sleep(20)  # 순서 보장용 간격
    return 0


def run():
    """어디서 실패하든 오류 문구를 state.json에 남긴다 (로그인 없이 원인 확인용)."""
    try:
        return main()
    except Exception as e:
        import traceback
        tb = traceback.format_exc().strip().splitlines()
        where = next((l.strip() for l in reversed(tb) if l.strip().startswith("File")), "")
        st = load_state()
        st.setdefault("log", []).append({"error": f"{type(e).__name__}: {e}"[:500], "where": where[:200],
                                         "at": now_kst().strftime("%Y-%m-%dT%H:%M:%S%z")})
        save_state(st)
        print("실패:", e)
        return 1


if __name__ == "__main__":
    sys.exit(run())
