"""렌더 결과(render/out/NN_EPxxx_제목/*.png)를 게시 대기열(content/queue)로 내보낸다.
- PNG → JPEG(인스타 API는 JPEG만 받음), 파일명 1.jpg~6.jpg (슬라이드 순서)
- meta.json에 캡션 생성

사용: python tools/export_queue.py [시작번호] [끝번호]
"""
import json, pathlib, subprocess, sys
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / "render" / "out"
QUEUE = ROOT / "content" / "queue"
TAGS = "#물루의수영일기 #수영일기 #수영스타그램 #수영 #수영장 #수영초보 #mooloo #물루"


def caption(m):
    body = " ".join(m["tipBody"])
    lines = [f"물루의 수영일기 EP.{m['ep']} · {m['title']}", m["teaser"], ""]
    if m["tipTitle"]:
        lines += [f"💧 {m['tipTitle']}", body, ""]
    lines.append(TAGS)
    return "\n".join(lines)


def main():
    lo = int(sys.argv[1]) if len(sys.argv) > 1 else 1
    hi = int(sys.argv[2]) if len(sys.argv) > 2 else 9999
    meta = json.loads(subprocess.check_output(["node", "export_meta.js"], cwd=ROOT / "render"))
    by = {int(m["ep"]): m for m in meta}
    QUEUE.mkdir(parents=True, exist_ok=True)
    for d in sorted(OUT.iterdir()):
        n = int(d.name.split("_")[0])
        if not (lo <= n <= hi) or n not in by:
            continue
        q = QUEUE / f"EP{n:03d}"
        q.mkdir(exist_ok=True)
        for i, p in enumerate(sorted(d.glob("*.png")), 1):
            Image.open(p).convert("RGB").save(q / f"{i}.jpg", quality=92, optimize=True)
        m = dict(by[n]); m["caption"] = caption(m)
        (q / "meta.json").write_text(json.dumps(m, ensure_ascii=False, indent=1))
        print("queued", q.name)


if __name__ == "__main__":
    main()
