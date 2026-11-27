// 물루의 수영일기 EP.118~124 (2026-12 첫 주 게시분, 컷 8장)
const L = require('./w49_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, street, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, poolDeck, AP, AM, appPhone, hands, watch,
  PINK, appBg, kick, couch, speed, night, nameTag,
  nailHand, clipper, gogglesC, clock, arrowsWave, nearScreen, followed, watchBanner2 } = L;

const momP = (o) => PINK(person('mom', o));
const momHead = (x, y, s, o = {}) => PINK(swimHead('mom', x, y, s, o));
const tag = (x, y, t) => `<text x="${x}" y="${y}" font-family="Gaegu" font-weight="700" font-size="32" fill="${LINE}" text-anchor="middle">${t}</text>`;
const dim = `<rect width="${PW}" height="${PH}" fill="#2E2A55" opacity=".35"/>`;

module.exports = [
  // ════ EP.118 손톱이 길어서
  { ep: '118', title: '손톱이 길어서', teaser: '스치기만 했는데 “앗, 따가!”',
    cover: { char: swimmer({ expr: 'worried', arms: 'face', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 420, y: 790, s: 1.35, outfit: 'casual', arms: 'face', expr: 'shock' }) + nailHand(780, 820, 1.5, true),
    panels: [
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'face', expr: 'shock' }) +
      caption('레인에서 스친 순간') + sfx(380, 140, '앗, 따가!', { size: 46, rot: 10, color: '#E07A5F' }),
      poolDeck(400) + person('yoonseul', { x: 140, y: 220, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'worried' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) + sweat(420, 200) +
      B(10, 30, '살짝 긁혔나 봐~', { tail: 'bl', size: 25 }) + B(260, 120, '미안해!!', { tail: 'br', size: 27 }),
      bg('#FFF4EC') + nailHand(245, 300, 2.0, true) + caption('범인은…') + sfx(245, 110, '내 손톱?!', { size: 54, rot: -6 }),
      home() + momP({ x: 150, y: 240, s: .78, outfit: 'apron', arms: 'hips', expr: 'angry' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'hoodie', arms: 'face', expr: 'worried' }) +
      B(20, 40, '손톱이 그게 뭐니!', { tail: 'bl', size: 28 }),
      home() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'hold', expr: 'determined', prop: clipper(0, 118, .7) }) +
      caption('그날 밤') + sfx(380, 140, '똑! 똑!', { size: 50, rot: 8 }),
      home() + nailHand(190, 300, 1.5, false) + sparkle(110, 150, 12) + catchDog({ x: 390, y: 340, s: .55, pose: 'sit', expr: 'happy' }) +
      B(40, 50, '짧고 동글게~', { tail: 'bl', size: 30 }) + B(340, 190, '멍!', { tail: 'bc', size: 28 }),
      pool(240) + swimHead('yoonseul', 150, 222, .58, { expr: 'wink' }) + swimHead('mulu', 340, 222, .58, { expr: 'happy' }) + waterFront(262) + sparkle(245, 110, 14) +
      B(70, 340, '이제 안심하고 슝~', { tail: 'none', size: 30 }),
      tipPanel(nailHand(170, 220, 1.1, false) + clipper(340, 200, 1.1),
        '물루 TIP · 손발톱은 짧게', '긴 손발톱은 옆 사람을 긁거나\n수영복·수모에 구멍을 낼 수 있어요.\n수영 가기 전 짧고 둥글게 다듬어요.'),
    ] },

  // ════ EP.119 회사 옆 수영장 (앱: 수영장 찾기 · 📍 가까운 수영장 · 팔로우)
  { ep: '119', title: '회사 옆 수영장', teaser: '사무실 이사 첫날, 수영장부터 찾는다',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.35, outfit: 'office', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }),
    panels: [
      office() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'office', arms: 'up', expr: 'sparkle' }) +
      caption('사무실 이사 첫날') + B(150, 70, '새 동네, 새 출발!', { tail: 'bl', size: 27 }),
      office() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'office', arms: 'face', expr: 'worried' }) + sweat(330, 200) +
      B(110, 40, '근데 이 동네\n수영장은 어디지?', { tail: 'bl', size: 27 }),
      appBg() + appPhone(145, 92, 1.0, nearScreen(false), { tab: '탐색', plus: false }) + hands(245, 440, 1) +
      caption('탐색 탭'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, nearScreen(true), { tab: '탐색', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('「📍 가까운 수영장」') + sfx(410, 330, '6분!', { size: 46, rot: 10, color: '#0E9F93' }),
      appBg() + appPhone(145, 92, 1.0, followed(), { tab: '탐색', plus: false }) + hands(245, 440, 1) + sparkle(400, 130, 12) +
      caption('「팔로우」 = 단골'),
      street() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'office', arms: 'fist', expr: 'determined', prop: G(PROPS.swimBag(-60, 120, .6)) }) + speed(150, 230) +
      caption('퇴근하자마자') + B(170, 60, '바로 간다!', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      B(80, 340, '출근이 기다려진다!', { tail: 'none', size: 30 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + sparkle(110, 90, 12),
        '물루 TIP · 가까운 수영장 찾기', '물루 앱 탐색 탭 → 「📍 가까운 수영장」\n마음에 드는 곳은 시트에서 「팔로우」!\n단골 수영장으로 등록돼요.'),
    ] },

  // ════ EP.120 딱 10분만
  { ep: '120', title: '딱 10분만', teaser: '가기 싫은 날의 주문',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'down', gog: 'head' }) },
    titleArt: person('mulu', { x: 440, y: 790, s: 1.35, outfit: 'hoodie', arms: 'face', expr: 'sleepy' }) + clock(800, 760, 1.6, 7, 10),
    panels: [
      night() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'hoodie', arms: 'face', expr: 'worried' }) +
      caption('퇴근길, 영하 5도') + B(40, 70, '오늘은 쉴까…', { tail: 'bl', size: 30 }),
      couch() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'down', expr: 'sleepy' }) +
      B(120, 40, '소파가 날 붙잡아…', { tail: 'bl', size: 28 }),
      couch() + momP({ x: 150, y: 240, s: .78, outfit: 'casual', arms: 'point', expr: 'smile' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'hoodie', arms: 'down', expr: 'shock' }) +
      B(20, 40, '딱 10분만\n하고 와!', { tail: 'bl', size: 28 }),
      lockers() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) +
      caption('딱 10분만이다') + B(150, 70, '진짜 10분만!', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('mulu', 260, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(160, 190) +
      caption('5분 뒤') + B(90, 340, '어라, 몸이 풀린다?', { tail: 'none', size: 30 }),
      poolDeck(400) + clock(390, 110, 1.1, 8, 40) + person('mulu', { x: 200, y: 220, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'shock' }) +
      sfx(200, 110, '벌써 40분?!', { size: 46, rot: -6 }),
      home() + momP({ x: 150, y: 240, s: .78, outfit: 'apron', arms: 'hips', expr: 'proud' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'hoodie', arms: 'up', expr: 'happy' }) +
      B(20, 40, '10분이라며~?', { tail: 'bl', size: 27 }) + B(280, 130, '하다 보니!', { tail: 'br', size: 26 }),
      tipPanel(clock(170, 200, 1.1, 7, 10) + swimHead('mulu', 340, 200, .55, { gog: 'eyes', expr: 'happy' }) + waterFront(240, .85, 330),
        '물루 TIP · 가기 싫은 날엔', '“딱 10분만” 하고 가볍게 시작해 봐요.\n막상 물에 들어가면 몸이 풀려요.\n아프거나 많이 지친 날은 푹 쉬기!'),
    ] },

  // ════ EP.121 접배평자
  { ep: '121', title: '접배평자', teaser: '윤슬의 개인혼영 도전',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('yoonseul', { x: 540, y: 790, s: 1.35, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'fist', expr: 'sparkle' }) + sfx(830, 700, '접·배·평·자!', { size: 60, rot: 10 }),
    panels: [
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'fist', expr: 'sparkle' }) +
      caption('윤슬의 도전') + B(140, 70, '오늘은 개인혼영!', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) +
      B(130, 40, '근데 순서가\n뭐였더라?', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('지나가던 아빠') + B(40, 60, '접, 배, 평, 자.', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('yoonseul', 245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + arrowsWave(245, 140) +
      caption('접영 → 배영') + sfx(245, 420, '촤악! 첨벙!', { size: 44, rot: -4, color: '#5BB8E0' }),
      pool(240) + swimHead('yoonseul', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(150, 190) +
      caption('평영 → 자유형') + sfx(245, 420, '마지막 25m!', { size: 44, rot: -4, color: '#5BB8E0' }),
      poolDeck(400) + person('yoonseul', { x: 140, y: 220, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hips', expr: 'happy' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + sweat(200, 190) +
      B(10, 30, '헉헉, 100m 끝!', { tail: 'bl', size: 26 }) + B(270, 120, '멋져!!', { tail: 'br', size: 28 }),
      poolDeck(400) + person('mulu', { x: 160, y: 220, s: .78, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + person('yoonseul', { x: 370, y: 220, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'wink' }) +
      B(10, 30, '접배평자! 접배평자!', { tail: 'bl', size: 25 }) + B(250, 440, '외우기 쉽지?', { tail: 'none', size: 25 }),
      tipPanel(swimHead('yoonseul', 170, 180, .5, { gog: 'eyes', expr: 'happy' }) + swimHead('mulu', 330, 180, .5, { expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 개인혼영 순서', '개인혼영은 접영 → 배영 → 평영 → 자유형.\n“접배평자”로 외워요!\n처음엔 25m씩 쉬면서 이어 보기.'),
    ] },

  // ════ EP.122 일주일 쉬었더니
  { ep: '122', title: '일주일 쉬었더니', teaser: '연말 야근 끝, 다시 물로',
    cover: { char: swimmer({ expr: 'cry', arms: 'face', gog: 'head' }) },
    titleArt: person('mulu', { x: 520, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) + sweat(700, 700, 2),
    panels: [
      office() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'office', arms: 'down', expr: 'sleepy' }) +
      caption('연말 야근 일주일째') + B(150, 70, '수영… 가고 싶다…', { tail: 'bl', size: 27 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) +
      caption('드디어 수영장!') + B(90, 340, '평소처럼 1km 가자!', { tail: 'none', size: 30 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'shock' }) + waterFront(262) + sweat(320, 170) + sweat(170, 180, .8) +
      caption('200m째') + sfx(245, 420, '헉… 헉…', { size: 50, rot: -4, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) +
      B(110, 30, '몸이 다 잊었어…', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      caption('옆 레인의 아빠') + B(40, 60, '쉬었으면\n반만 해라.', { tail: 'bl', size: 30 }),
      pool(240) + kick(170, 250, .7) + swimHead('mulu', 260, 222, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(262) +
      caption('절반부터 천천히') + B(110, 340, '500m만 천천히~', { tail: 'none', size: 30 }),
      home() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 400, y: 340, s: .55, pose: 'sit', expr: 'happy' }) + sparkle(100, 130, 12) +
      B(60, 40, '다음엔 조금 더!', { tail: 'bl', size: 30 }) + B(350, 190, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + kick(110, 150, .5),
        '물루 TIP · 쉬었다 다시 할 때', '며칠 넘게 쉬었다면 평소 거리의 절반부터!\n천천히 몸을 깨우고 조금씩 늘려요.\n아픈 곳이 생기면 바로 멈추기.'),
    ] },

  // ════ EP.123 엄마의 워치 수영 (앱: 워치·건강 앱 · 내정보 지금 가져오기)
  { ep: '123', title: '엄마의 워치 수영', teaser: '분명 수영했는데 기록이 없다?',
    cover: { char: swimmer({ expr: 'happy', arms: 'wave', gog: 'eyes' }) },
    titleArt: momP({ x: 440, y: 790, s: 1.35, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + watch(780, 780, 2.2, '800m'),
    panels: [
      home() + momP({ x: 220, y: 240, s: .82, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + watch(390, 170, 1.2, 'NEW') +
      caption('엄마의 새 워치') + B(40, 70, '나도 워치 샀다!', { tail: 'bl', size: 28 }),
      pool(240) + momHead(245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + watch(400, 120, 1, '800m') +
      caption('워치 차고 수영') + sfx(150, 420, '800m 완주!', { size: 44, rot: -4, color: '#5BB8E0' }),
      home() + momP({ x: 245, y: 240, s: .84, outfit: 'casual', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) +
      B(100, 40, '물루 앱엔 왜\n아무것도 없지?', { tail: 'bl', size: 27 }),
      home() + momP({ x: 150, y: 250, s: .76, outfit: 'casual', arms: 'down', expr: 'worried' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'hoodie', arms: 'point', expr: 'smile', flip: true }) +
      B(230, 30, '앱 열고\n가져와야 해~', { tail: 'br', size: 26 }),
      appBg() + appPhone(145, 92, 1.0, watchBanner2('엄마', false), { tab: '내정보' }) + hands(245, 440, 1) +
      caption('내정보 「지금 가져오기」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, watchBanner2('엄마', true), { tab: '내정보' }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      sfx(410, 330, '쏙!', { size: 50, rot: 10, color: '#0E9F93' }),
      home() + momP({ x: 150, y: 240, s: .78, outfit: 'casual', arms: 'hips', expr: 'proud' }) + person('dad', { x: 360, y: 250, s: .76, outfit: 'coverall', arms: 'hips', expr: 'flat' }) +
      B(10, 40, '800m 들어왔어!', { tail: 'bl', size: 27 }) + B(270, 140, '…잘했네.', { tail: 'br', size: 26 }),
      tipPanel(watch(170, 200, 1.6, '800m') + momHead(330, 190, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(230, .85, 330),
        '물루 TIP · 워치 수영 가져오기', '물루 앱 내정보 → 「지금 가져오기」\n워치에 있는 수영도 💧 물루로 쌓여요.\n처음이라면 「연결」부터 눌러 주세요.'),
    ] },

  // ════ EP.124 윤슬의 수경 서랍
  { ep: '124', title: '윤슬의 수경 서랍', teaser: '렌즈 색이 다 다른 이유',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'hips', gog: 'eyes' }) },
    titleArt: person('yoonseul', { x: 420, y: 790, s: 1.35, outfit: 'trend', arms: 'spread', expr: 'wink' }) + gogglesC(820, 680, 3, '#BFEBFF') + gogglesC(820, 860, 3, '#B9A9F0', '#FF9EB8'),
    panels: [
      bg('#FFF1F6') + person('yoonseul', { x: 245, y: 250, s: .84, outfit: 'trend', arms: 'spread', expr: 'sparkle' }) +
      gogglesC(90, 90, 1.7, '#BFEBFF') + gogglesC(245, 74, 1.7, '#B9A9F0', '#FF9EB8') + gogglesC(400, 90, 1.7, '#8F99A8', P.mint) +
      caption('윤슬의 수경 서랍', 16, 480) ,
      bg('#FFF1F6') + gogglesC(125, 220, 2.6, '#BFEBFF') + gogglesC(365, 220, 2.6, '#B9A9F0', '#FF9EB8') + gogglesC(245, 390, 2.6, '#8F99A8', P.mint) +
      tag(125, 300, '투명') + tag(365, 300, '미러') + tag(245, 470, '스모크') + B(110, 40, '색이 다 달라!', { tail: 'none', size: 28 }),
      bg('#FFF1F6') + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'point', expr: 'sparkle' }) + gogglesC(395, 160, 1.8, '#B9A9F0', '#FF9EB8') + sparkle(440, 110, 12) +
      B(40, 40, '반짝이는 거 빌려줘!', { tail: 'bl', size: 27 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'worried' }) + waterFront(262) + dim +
      caption('실내 수영장에서') + B(110, 340, '어… 어두워…', { tail: 'none', size: 32 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) +
      B(30, 40, '미러는 햇빛 센\n야외용이야~', { tail: 'bl', size: 27 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'determined', prop: gogglesC(0, 112, 1.5, '#BFEBFF') }) +
      caption('투명 렌즈로 바꿔서') + sfx(390, 130, '찰칵', { size: 44, rot: 10 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      B(110, 340, '잘 보인다!', { tail: 'none', size: 34 }),
      tipPanel(gogglesC(140, 200, 2.4, '#BFEBFF') + gogglesC(350, 200, 2.4, '#B9A9F0', '#FF9EB8'),
        '물루 TIP · 수경 렌즈 색 고르기', '실내 수영장엔 투명·연한 색 렌즈가 잘 보여요.\n미러·스모크 렌즈는 햇빛 강한 야외용.\n렌즈 안쪽은 손으로 문지르지 않기!'),
    ] },
];
