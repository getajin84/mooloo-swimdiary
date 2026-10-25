# 물루의 수영일기 — 자동 제작·게시 에이전트

```
[매주 일요일 · Claude 예약 작업]            [사람]               [매일 07:37 · GitHub Actions]
 다음 21편 기획 → 그리기 → 직접 검수   →   PR 확인·병합(=승인)  →   다음 줄 3편을 3→2→1 순서로 게시
 → 대기열(JPEG+캡션) → PR 생성                                     → state.json에 게시 기록
```

- **그리드 보호**: 한 줄(3편)을 다 채울 승인분이 없으면 그날은 올리지 않습니다. 중간에 실패하면 다음 날 같은 줄의 나머지부터 이어서 올립니다.
- **이미지 호스팅**: 인스타 API는 공개 주소의 JPEG만 받기 때문에, 이 저장소를 공개 저장소로 두고 `raw.githubusercontent.com` 주소를 씁니다. 비밀값은 저장소에 넣지 않고 GitHub 시크릿에만 둡니다.

## 폴더
| 경로 | 내용 |
|---|---|
| `render/` | 캐릭터·컷 렌더러 (chars.js, carousel.js, episodes*.js, build.js) |
| `render/assets/` | 로고, 수면 띠(strips), 원본 그리드, water.py |
| `content/queue/EPxxx/` | 게시 대기열: 1~6.jpg + meta.json(캡션) |
| `content/state.json` | 게시 완료 번호와 기록 |
| `publish/publish.py` | Instagram Graph API 캐러셀 게시 (`DRY_RUN=1`로 미리 확인) |
| `publish/refresh_token.py` | 60일 토큰 자동 갱신 |
| `agent/WEEKLY_PROMPT.md` | 주간 제작 에이전트 지시서 |
| `agent/ideas.md` | 직접 쓰는 원고·아이디어 메모 (다음 주 제작에 우선 반영) |

## 처음 한 번만 하는 설정
1. **인스타 계정을 프로페셔널로 전환**: 인스타 앱 → 설정 → 계정 유형 및 도구 → 프로페셔널 계정으로 전환 → 크리에이터 또는 비즈니스.
2. **Meta 개발자 앱 만들기**: developers.facebook.com → 앱 만들기 → 사용 사례에서 Instagram API 선택 → "Instagram 로그인을 통한 API 설정" → 계정 추가(with_mooloo) → 액세스 토큰 생성. 화면에 나오는 **Instagram 사용자 ID**와 **토큰**을 메모합니다. 권한은 `instagram_business_basic`, `instagram_business_content_publish`가 필요합니다.
3. **GitHub 시크릿 등록** (저장소 → Settings → Secrets and variables → Actions)
   - `IG_USER_ID`: 2번의 사용자 ID
   - `IG_TOKEN`: 2번의 토큰
   - `GH_PAT`: 이 저장소의 Secrets 쓰기 권한만 준 fine-grained 토큰 (토큰 자동 갱신용)
4. **시험 게시**: Actions → "수영일기 매일 게시" → Run workflow에서 dry_run=1로 먼저 확인하고, 그다음 0으로 실제 게시합니다.
