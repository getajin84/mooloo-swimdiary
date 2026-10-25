"""Instagram 장기 토큰(60일) 갱신 → GitHub 시크릿 IG_TOKEN 교체.
환경변수: IG_TOKEN, GH_REPO(owner/repo), GH_TOKEN(시크릿 쓰기 권한 PAT, gh CLI가 사용)
"""
import json, os, subprocess, urllib.parse, urllib.request

url = "https://graph.instagram.com/refresh_access_token?" + urllib.parse.urlencode(
    {"grant_type": "ig_refresh_token", "access_token": os.environ["IG_TOKEN"]})
with urllib.request.urlopen(url, timeout=60) as r:
    new = json.loads(r.read())
token = new["access_token"]
subprocess.run(["gh", "secret", "set", "IG_TOKEN", "--repo", os.environ["GH_REPO"], "--body", token], check=True)
print(f"토큰 갱신 완료 · 만료까지 {int(new.get('expires_in', 0)) // 86400}일")
