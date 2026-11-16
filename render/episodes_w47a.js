// 물루의 수영일기 EP.076~082 (2026-11 넷째 주 게시분, 컷 8장)
const L = require('./w47_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, garage, swimmer, headInWater,
  B, waterFront, tipPanel, swimHead, G, bedroom, poolDeck, winter, watch, AP, AM, aT, appPhone, hands,
  PINK, appBg, bubbles, underwater, lying, capSil,
  kitchen, glassPool, paceWall, couch, paceClock, rice, chicken, banana, kick,
  searchScreen, detailIntro, linkScreen, watchBanner } = L;

const speed = (x, y) => G(ln(`M${x},${y} h-90 M${x + 10},${y + 30} h-120 M${x},${y + 60} h-80`, 4, '#fff'));
const guard = (x, y, s, o = {}) => person('guard', { x, y, s, outfit: 'guard', expr: 'normal', ...o });
const box = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-60,-30 h120 v70 h-120z', '#FFE2C2')}${path('M-60,-30 l20,-20 h120 l-20,20z', '#FFF1E0')}</g>`);
const ropeHang = () => pool(300) + person('mulu', { x: 245, y: 200, s: .78, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'sleepy' }) + waterFront(300);

module.exports = [
  // ════ EP.076 윤슬이 말한 그 수영장 (앱: 수영장 찾기 · 수영장 검색)
  { ep: '076', title: '윤슬이 말한\n그 수영장', teaser: '천장이 유리라고? 어디야, 거기!',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'head' }) },
    titleArt: person('yoonseul', { x: 380, y: 790, s: 1.3, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, 1) }) + person('mulu', { x: 720, y: 800, s: 1.3, outfit: 'casual', arms: 'face', expr: 'sparkle' }),
    panels: [
      lockers() + person('yoonseul', { x: 150, y: 250, s: .76, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) + person('mulu', { x: 360, y: 250, s: .76, outfit: 'casual', arms: 'down', expr: 'sparkle' }) +
      B(20, 50, '하늘빛 수영장 가 봤어?\n천장이 유리야!', { tail: 'bl', size: 25 }),
      couch() + person('mulu', { x: 245, y: 220, s: .84, outfit: 'hoodie', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) +
      caption('그날 밤') + B(170, 70, '하늘빛… 어디랬지?', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, searchScreen('하늘빛', false), { tab: '탐색' }) + hands(245, 440, 1) +
      caption('탐색 탭 「수영장 검색」'),
      appBg() + appPhone(145, 92, 1.0, searchScreen('하늘빛', true), { tab: '탐색' }) + hands(245, 440, 1) +
      caption('찾았다!') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, detailIntro(), { tab: '탐색', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('「상세 보기」 → 소개'),
      glassPool() + swimHead('mulu', 245, 232, .66, { expr: 'sparkle' }) + waterFront(272) + sparkle(100, 120, 14) + sparkle(400, 110, 12) +
      caption('주말 아침') + B(90, 360, '햇살 받으며 수영이다~', { tail: 'none', size: 28 }),
      glassPool() + swimHead('yoonseul', 140, 232, .58, { expr: 'wink' }) + swimHead('mulu', 340, 232, .58, { expr: 'happy' }) + waterFront(272) +
      B(10, 340, '팔로우해 뒀지?', { tail: 'none', size: 26 }) + B(220, 420, '단골 하나 추가!', { tail: 'none', size: 26 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { expr: 'sparkle' }) + waterFront(210, .85, 330) + sparkle(110, 90, 12) + sparkle(380, 80, 12),
        '물루 TIP · 이름으로 수영장 찾기', '물루 앱 탐색 탭 → 「수영장 검색」에 이름 입력\n시트의 「상세 보기」로 소개를 확인하고,\n마음에 들면 「팔로우」로 단골 등록!', '#EAF6FF'),
    ] },

  // ════ EP.077 코가 찡
  { ep: '077', title: '코가 찡', teaser: '배영하다 코로 물이 훅',
    cover: { char: swimmer({ expr: 'cry', arms: 'face', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) + sfx(810, 740, '찡—!', { size: 80, rot: 10 }),
    panels: [
      pool(160) + lying(260, 250, .72, { expr: 'happy' }) + waterFront(262, .4) +
      caption('배영 연습') + B(40, 420, '하늘 보며 둥둥~', { tail: 'none', size: 30 }),
      pool(160) + lying(270, 300, .72, { expr: 'shock' }) + waterFront(282, .45) + bubbles([[150, 230, 10], [180, 200, 7]]) +
      sfx(140, 120, '찡—!', { size: 60, rot: -10, color: '#E07A5F' }),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) +
      B(110, 30, '코 끝이 매워…', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('mulu', { x: 140, y: 230, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) + person('yoonseul', { x: 350, y: 220, s: .76, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) +
      B(200, 40, '코로 숨을 내쉬어 봐~', { tail: 'br', size: 25 }),
      underwater() + swimHead('yoonseul', 245, 250, .8, { gog: 'eyes', expr: 'normal' }) + bubbles([[230, 330, 9], [250, 360, 7], [220, 390, 10], [255, 420, 6]]) +
      sfx(380, 140, '흥~', { size: 56, rot: 8, color: '#5BB8E0' }) + B(20, 440, '물이 못 들어오게!', { tail: 'none', size: 27 }),
      pool(160) + lying(260, 250, .72, { expr: 'determined' }) + waterFront(262, .4) + bubbles([[150, 200, 9], [130, 170, 6], [160, 150, 5]]) +
      sfx(390, 120, '흥~ 흥~', { size: 44, rot: 8, color: '#5BB8E0' }),
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      B(110, 340, '이제 안 매워!', { tail: 'none', size: 32 }),
      tipPanel(lying(265, 210, .6, { expr: 'happy' }) + waterFront(226, .4, 330) + bubbles([[150, 170, 8], [130, 150, 5]]),
        '물루 TIP · 코에 물이 들어갈 때', '배영·잠영 땐 코로 숨을 살살 내쉬어\n물이 들어오지 못하게 해요(흥~).\n맵고 아픈 게 계속되면 진료 받아 보기.'),
    ] },

  // ════ EP.078 레인줄은 잡지 마요
  { ep: '078', title: '레인줄은 잡지 마요', teaser: '잠깐 매달렸을 뿐인데…',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'spread', gog: 'head' }) },
    titleArt: person('mulu', { x: 420, y: 790, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'shock' }) + guard(760, 800, 1.1, { arms: 'point', flip: true }),
    panels: [
      ropeHang() + caption('400m 끝') + B(130, 40, '잠깐만 쉬자~', { tail: 'bl', size: 30 }),
      ropeHang() + sfx(110, 420, '출렁~', { size: 48, rot: -8, color: '#5BB8E0' }) + sfx(380, 90, '삐익!', { size: 48, rot: 10, color: '#E07A5F' }),
      poolDeck(400) + guard(245, 220, .84, { arms: 'point', flip: true }) +
      caption('안전요원') + B(60, 66, '레인줄에 매달리면 안 돼요~', { tail: 'bl', size: 25 }),
      pool(300) + person('mulu', { x: 245, y: 200, s: .78, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) + waterFront(300) +
      B(110, 40, '앗, 죄송합니다!', { tail: 'bl', size: 30 }),
      poolDeck(400) + guard(150, 220, .76, { arms: 'hips', expr: 'smile' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'worried' }) +
      B(20, 30, '줄이 늘어나고\n옆 사람도 출렁여요.', { tail: 'bl', size: 25 }),
      paceWall() + swimHead('mulu', 80, 362, .56, { expr: 'happy' }) + waterFront(402) +
      B(170, 160, '쉴 땐 벽 쪽 구석에!', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      caption('지나가던 아빠') + B(80, 66, '나도 옛날에 많이 혼났다.', { tail: 'bl', size: 26 }),
      tipPanel(swimHead('mulu', 245, 168, .6, { expr: 'happy' }) + waterFront(210, .85, 330) + L.rope(150),
        '물루 TIP · 레인줄 매너', '레인줄(코스 로프)에 매달리거나 걸터앉지 않아요.\n쉴 땐 벽 쪽 구석에 붙어서 숨 고르기.\n레인을 옮길 땐 안전요원 안내에 따라요.'),
    ] },

  // ════ EP.079 수모 쓰기 대작전
  { ep: '079', title: '수모 쓰기 대작전', teaser: '쓰려고만 하면 튕겨 나가는 수모',
    cover: { char: swimmer({ expr: 'determined', arms: 'up', gog: 'head' }) },
    titleArt: person('mulu', { x: 470, y: 800, s: 1.35, outfit: 'swim', arms: 'up', expr: 'shock' }) + capSil(770, 790, 1.8, P.purple) + sfx(830, 720, '휙!', { size: 70, rot: 12 }),
    panels: [
      lockers() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'swim', arms: 'up', expr: 'determined' }) + capSil(245, 170, 1.1, P.purple) +
      caption('탈의실 · 입수 5분 전') + B(130, 66, '으으… 안 들어가…', { tail: 'bl', size: 28 }),
      lockers() + person('mulu', { x: 200, y: 250, s: .86, outfit: 'swim', arms: 'up', expr: 'cry' }) + capSil(400, 130, 1.1, P.purple) +
      sfx(420, 230, '탁!', { size: 56, rot: 12, color: '#E07A5F' }) + B(20, 50, '아야! 머리카락!', { tail: 'none', size: 28 }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'swim', arms: 'face', expr: 'cry' }) + person('yoonseul', { x: 350, y: 250, s: .76, outfit: 'swimT', arms: 'hips', expr: 'smile' }) +
      B(180, 40, '마른 머리에 쓰면 그래~', { tail: 'br', size: 25 }),
      lockers() + G(PROPS.shower(330, 130, 1.2)) + person('yoonseul', { x: 200, y: 250, s: .8, outfit: 'swimT', arms: 'up', expr: 'wink' }) +
      B(20, 40, '머리를 먼저 적시고', { tail: 'none', size: 27 }),
      lockers() + person('yoonseul', { x: 245, y: 260, s: .82, outfit: 'swimT', arms: 'up', expr: 'smile' }) + capSil(245, 166, 1.25, '#FF9EB8') +
      B(20, 40, '두 손 넣고 쫙 벌려서', { tail: 'none', size: 26 }) + sfx(400, 430, '쫙~', { size: 44, rot: 8 }),
      lockers() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(100, 40, '이마부터 뒤로… 쓱!', { tail: 'bl', size: 28 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'flat' }) + catchDog({ x: 370, y: 330, s: .62, pose: 'sit', expr: 'happy', prop: PROPS.cap(0, -40, 1.1, P.mint) }) +
      caption('집') + B(80, 50, '캐치는 안 써도 돼…', { tail: 'bl', size: 26 }) + B(330, 160, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(capSil(170, 190, 1.5, P.purple) + person('mulu', { x: 330, y: 170, s: .6, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'happy' }),
        '물루 TIP · 수모 쉽게 쓰기', '머리를 물로 먼저 적시면 덜 당겨요.\n두 손을 수모 안에 넣어 벌리고 이마부터 뒤로!\n긴 머리는 묶어 위로 말아 올린 뒤 써요.'),
    ] },

  // ════ EP.080 새 워치 연결하기 (앱: 워치·건강 앱)
  { ep: '080', title: '새 워치 연결하기', teaser: '손목은 준비 완료, 앱은?',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'sparkle' }) + watch(540 - 66 * 2, 470 + 56 * 2, 1.4, '800m'), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'casual', arms: 'fist', expr: 'sparkle' }) + watch(780, 720, 2.4, '1,000m'),
    panels: [
      couch() + box(360, 380, 1) + person('mulu', { x: 180, y: 220, s: .84, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) + watch(400, 300, 1.2, '0m') + sparkle(430, 230, 12) +
      caption('연말 선물로 나에게') + B(170, 60, '수영 워치 개봉!', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, linkScreen(false), { tab: '내정보', plus: false }) + hands(245, 440, 1) +
      caption('설정 → 연동 → 「워치·건강 앱」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, linkScreen(true), { tab: '내정보', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('「연결」') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + watch(380, 150, 1, '1,000m') +
      caption('다음 날 AM 6:30') + B(40, 360, '손목이 알아서 세 준다~', { tail: 'none', size: 27 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) +
      B(60, 50, '근데 앱엔 아직 0m…?', { tail: 'bl', size: 28 }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) + person('yoonseul', { x: 350, y: 250, s: .76, outfit: 'trend', arms: 'point', expr: 'wink' }) +
      B(190, 40, '앱을 열어야 가져와~', { tail: 'br', size: 26 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, watchBanner(), { tab: '내정보' }) + hands(245, 440, 1) + sparkle(400, 120, 12) +
      caption('내정보 「지금 가져오기」') + sfx(410, 330, '쏙!', { size: 44, rot: 10, color: '#0E9F93' }),
      tipPanel(watch(170, 190, 1.8, '1,000m') + person('mulu', { x: 330, y: 170, s: .6, outfit: 'casual', arms: 'wave', expr: 'happy' }),
        '물루 TIP · 워치 연결하기', '물루 앱 설정 → 연동 → 「워치·건강 앱」 → 「연결」\n수영 후 앱을 열면 새 수영을 가져와요.\n내정보 「지금 가져오기」로 바로 불러오기!'),
    ] },

  // ════ EP.081 배부른 수영
  { ep: '081', title: '배부른 수영', teaser: '든든하게 먹었더니 몸이 돌덩이',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'hold', gog: 'head' }) },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'casual', arms: 'hold', expr: 'sleepy' }) + rice(780, 860, 1.6) + chicken(780, 760, 1.2),
    panels: [
      kitchen() + rice(140, 300, 1) + chicken(330, 300, 1) + person('mulu', { x: 245, y: 150, s: .7, outfit: 'office', arms: 'up', expr: 'sparkle' }) +
      caption('PM 6:40 · 퇴근 후') + B(250, 66, '든든하게 먹자!', { tail: 'bl', size: 27 }),
      kitchen() + person('mulu', { x: 245, y: 200, s: .84, outfit: 'office', arms: 'hold', expr: 'sleepy' }) + sfx(390, 330, '배불러~', { size: 40, rot: 8 }) +
      B(40, 40, '7시 자유수영 가야지!', { tail: 'bl', size: 27 }),
      kitchen() + PINK(person('mom', { x: 245, y: 210, s: .86, outfit: 'apron', arms: 'hips', expr: 'angry' })) +
      B(30, 40, '먹자마자 수영? 쉬었다 가!', { tail: 'bc', size: 26 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sad' }) + waterFront(262) + sweat(350, 150) +
      caption('결국 그냥 왔다') + B(60, 340, '몸이… 돌덩이…', { tail: 'none', size: 30 }) + sfx(400, 120, '꾸르륵', { size: 36, rot: 10 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 370, y: 240, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'sad' }) +
      B(20, 40, '먹고 바로는 힘들다.', { tail: 'bl', size: 27 }),
      kitchen() + person('mulu', { x: 245, y: 200, s: .84, outfit: 'office', arms: 'face', expr: 'happy' }) + banana(360, 250, 1.1, -20) +
      caption('다음 날 · 수영 1시간 반 전') + B(40, 70, '오늘은 바나나 하나!', { tail: 'bl', size: 27 }),
      pool(240) + swimHead('mulu', 300, 222, .64, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(220, 280) + sparkle(400, 110, 14) +
      sfx(140, 140, '가볍다!', { size: 48, rot: -8 }),
      tipPanel(banana(170, 200, 1.6, -20) + person('mulu', { x: 330, y: 170, s: .6, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }),
        '물루 TIP · 수영 전 식사', '배부르게 먹었다면 1~2시간 쉬었다 수영해요.\n바로 가야 하면 바나나처럼 가벼운 간식 조금만.\n속이 불편하면 무리하지 말고 쉬어 가기.'),
    ] },

  // ════ EP.082 벽시계의 비밀
  { ep: '082', title: '벽시계의 비밀', teaser: '수영장 벽, 저 큰 시계는 뭐지?',
    cover: { char: swimmer({ expr: 'normal', arms: 'point', gog: 'head' }) },
    titleArt: paceClock(380, 760, 2.4, 10) + person('dad', { x: 760, y: 800, s: 1.2, outfit: 'trunks', arms: 'point', expr: 'flat', flip: true }),
    panels: [
      paceWall() + paceClock(360, 150, 1.2, 20) + swimHead('mulu', 150, 362, .56, { expr: 'normal' }) + waterFront(402) +
      caption('자유수영 레인') + B(20, 240, '저 큰 시계는 뭐지?', { tail: 'bl', size: 26 }),
      poolDeck(400) + paceClock(380, 110, .9, 20) + person('dad', { x: 200, y: 220, s: .8, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('아빠 등장') + B(20, 440, '페이스 시계다.', { tail: 'none', size: 30 }),
      bg('#F2F7FB') + paceClock(245, 250, 2.4, 0) + B(20, 30, '빨간 바늘이 60에 오면 출발.', { tail: 'none', size: 25 }),
      pool(240) + swimHead('mulu', 300, 222, .64, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(220, 280) +
      caption('50m 왕복') + sfx(140, 140, '출발!', { size: 50, rot: -8 }),
      paceWall() + paceClock(360, 150, 1.2, 50) + swimHead('mulu', 150, 362, .56, { expr: 'shock' }) + waterFront(402) +
      B(20, 240, '50초 걸렸다!', { tail: 'bl', size: 28 }),
      paceWall() + paceClock(360, 150, 1.2, 0) + swimHead('mulu', 150, 362, .56, { gog: 'eyes', expr: 'determined' }) + waterFront(402) +
      B(10, 220, '10초 쉬고 60에 다시!', { tail: 'bl', size: 26 }) + sfx(400, 300, '척척', { size: 40, rot: 8 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'hips', expr: 'proud' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) +
      B(10, 40, '선수 땐 다 이걸로 했지.', { tail: 'bl', size: 25 }) + B(250, 450, '아빠 멋있다…', { tail: 'none', size: 25 }),
      tipPanel(paceClock(170, 180, 1.3, 0) + swimHead('mulu', 340, 170, .5, { gog: 'head', expr: 'happy' }),
        '물루 TIP · 페이스 시계 보기', '벽의 큰 시계 바늘이 60(맨 위)에 올 때 출발,\n도착하면 몇 초 걸렸는지 확인해요.\n쉬는 시간도 바늘로 정하면 연습이 깔끔해져요.'),
    ] },
];
