// 물루의 수영일기 EP.083~089 (2026-11 넷째 주 ~ 12월 게시분, 컷 8장)
const L = require('./w47_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, garage, street, swimmer, headInWater,
  B, waterFront, tipPanel, swimHead, G, bedroom, poolDeck, winter, bungeo, AP, AM, aT, appPhone, hands,
  PINK, appBg, bubbles, underwater, tilt, bag,
  kitchen, stall, entrance, kick, ring, tissue, thermo, elbowArc, noteCard,
  swimfoodTab, checkinBanner, stampDone, crewSearch, crewLounge } = L;

const speed = (x, y) => G(ln(`M${x},${y} h-90 M${x + 10},${y + 30} h-120 M${x},${y + 60} h-80`, 4, '#fff'));
const guard = (x, y, s, o = {}) => person('guard', { x, y, s, outfit: 'guard', expr: 'normal', ...o });
const momSwim = (x, y, s, o = {}) => PINK(person('mom', { x, y, s, outfit: 'swim', cap: true, gog: 'head', ...o }));
const momHead = (x, y, s, o = {}) => PINK(swimHead('mom', x, y, s, o));
const stamps = (x, y, m, n = 5, r = 22) => G([...Array(n)].map((_, i) => ell(x + (i - (n - 1) / 2) * r * 2.4, y, r, r, i < m ? AM : '#FFFFFF', { lw: 3, hatch: false })).join('')) +
  [...Array(m)].map((_, i) => `<path d="M${x + (i - (n - 1) / 2) * r * 2.4 - 9},${y} l6,7 l12,-13" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`).join('');
const barrel = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${ell(0, 0, 70, 46, 'rgba(169,221,245,.55)', { lw: 3, hatch: false })}</g>`);
const zzz = (x, y) => sfx(x, y, 'z', { size: 30, rot: -10 }) + sfx(x + 26, y - 26, 'z', { size: 38, rot: -10 }) + sfx(x + 58, y - 58, 'Z', { size: 46, rot: -10 });

module.exports = [
  // ════ EP.083 엄마의 킥판
  { ep: '083', title: '엄마의 킥판', teaser: '킥판을 잡았는데 왜 가라앉니?',
    cover: { char: swimmer({ expr: 'happy', arms: 'forward', gog: 'eyes' }) },
    titleArt: PINK(person('mom', { x: 470, y: 790, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'worried' })) + kick(470, 930, 1.3, 0) + person('mulu', { x: 780, y: 800, s: 1.2, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'smile', flip: true }),
    panels: [
      pool(240) + momHead(245, 236, .62, { expr: 'shock' }) + kick(245, 290, .9, 0) + waterFront(276) + bubbles([[300, 210, 8], [320, 190, 5]]) +
      caption('엄마 수영 3주째') + B(60, 340, '킥판 잡았는데 왜 가라앉니?', { tail: 'none', size: 25 }),
      poolDeck(400) + momSwim(245, 220, .82, { arms: 'hold', expr: 'worried' }) + kick(245, 340, .9, 0) + sweat(330, 160) +
      B(40, 30, '꽉 끌어안으면 안 돼, 엄마!', { tail: 'none', size: 25 }),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'forward', expr: 'determined' }) + kick(245, 128, .6, 0) +
      B(20, 400, '팔 쭉! 끝을 살짝 잡고!', { tail: 'none', size: 27 }),
      pool(240) + momHead(300, 236, .58, { gog: 'eyes', expr: 'determined' }) + kick(400, 270, .7, 90) + waterFront(276) +
      sfx(130, 150, '첨벙첨벙', { size: 44, rot: -8, color: '#5BB8E0' }),
      pool(240) + momHead(150, 236, .54, { expr: 'worried' }) + swimHead('mulu', 340, 236, .54, { expr: 'smile' }) + waterFront(276) +
      B(10, 40, '얼굴은?', { tail: 'bl', size: 28 }) + B(170, 360, '물에 담그고\n숨 쉴 때만 고개 앞으로!', { tail: 'none', size: 24 }),
      pool(240) + momHead(300, 236, .6, { gog: 'eyes', expr: 'sparkle' }) + kick(410, 270, .7, 90) + waterFront(276) + speed(220, 290) + sparkle(120, 110, 14) +
      B(60, 60, '가, 간다~!', { tail: 'bl', size: 32 }),
      home() + person('dad', { x: 140, y: 250, s: .74, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + PINK(person('mom', { x: 350, y: 250, s: .76, outfit: 'apron', arms: 'point', expr: 'happy', flip: true })) +
      caption('저녁') + B(20, 70, '킥판은 기본이지.', { tail: 'bl', size: 25 }) + B(250, 440, '당신도 해 봐요!', { tail: 'none', size: 25 }),
      tipPanel(kick(170, 200, 1.1, 0) + momHead(330, 180, .5, { expr: 'happy' }) + L.waterFront(220, .85, 330),
        '물루 TIP · 킥판 잡는 법', '킥판 끝을 손으로 가볍게 잡고 팔은 쭉!\n위에서 누르거나 끌어안으면 몸이 가라앉아요.\n얼굴은 물에 담그고, 숨 쉴 땐 고개만 앞으로.'),
    ] },

  // ════ EP.084 붕어빵 맛집 등록 (앱: 스윔푸드)
  { ep: '084', title: '붕어빵 맛집 등록', teaser: '수영장 앞, 숨은 붕어빵을 찾았다',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'sparkle', prop: bungeo(0, 112, 1.3) }), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'casual', arms: 'hold', expr: 'sparkle', prop: bungeo(0, 116, 1.1) }) + bungeo(780, 820, 1.8),
    panels: [
      stall() + person('mulu', { x: 130, y: 250, s: .8, outfit: 'casual', arms: 'point', expr: 'sparkle', prop: G(PROPS.swimBag(-70, 120, .5)) }) +
      caption('수영 끝 · 구민수영장 앞') + B(20, 70, '어? 이런 데가 있었네?', { tail: 'bl', size: 25 }),
      stall() + person('mulu', { x: 150, y: 250, s: .84, outfit: 'casual', arms: 'face', expr: 'happy', prop: bungeo(70, 30, .8) }) + sparkle(300, 130, 14) +
      sfx(330, 470, '바삭!', { size: 52, rot: -8, color: '#E07A5F' }) + B(20, 60, '팥이 꽉 찼어…!', { tail: 'bl', size: 28 }),
      winter() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'phone', expr: 'determined', prop: PROPS.phone(68, 30, .9) }) +
      B(80, 50, '이건 모두 알아야 해!', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, swimfoodTab(false), { tab: '탐색', plus: false }) + hands(245, 440, 1) +
      caption('「상세 보기」 → 커뮤니티'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, swimfoodTab(true), { tab: '탐색', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('「스윔푸드 등록하기」') + sfx(410, 330, '등록!', { size: 40, rot: 10, color: '#0E9F93' }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'down', expr: 'shock' }) + person('yoonseul', { x: 350, y: 250, s: .76, outfit: 'trend', arms: 'hold', expr: 'wink', prop: bungeo(0, 116, .8) }) +
      caption('다음 날') + B(160, 70, '네가 올린 거 보고 왔지~', { tail: 'br', size: 25 }),
      stall() + PINK(person('mom', { x: 360, y: 260, s: .58, outfit: 'apron', arms: 'down', expr: 'happy' })) + person('dad', { x: 440, y: 260, s: .56, outfit: 'coverall', arms: 'down', expr: 'flat' }) +
      person('yoonseul', { x: 280, y: 260, s: .56, outfit: 'trend', arms: 'down', expr: 'smile' }) + person('mulu', { x: 100, y: 250, s: .72, outfit: 'casual', arms: 'face', expr: 'shock' }) +
      B(10, 50, '줄이… 길어졌다…', { tail: 'bl', size: 27 }),
      tipPanel(bungeo(170, 200, 1.8) + person('mulu', { x: 330, y: 170, s: .6, outfit: 'casual', arms: 'wave', expr: 'happy' }),
        '물루 TIP · 스윔푸드 등록하기', '물루 앱 수영장 「상세 보기」 → 커뮤니티\n→ 「🍜 스윔푸드」에서 「스윔푸드 등록하기」\n수영 끝나고 들른 맛집을 함께 나눠요.', '#FFF4E6'),
    ] },

  // ════ EP.085 도장 하나 남았다 (앱: 체크인·도장깨기)
  { ep: '085', title: '도장 하나 남았다', teaser: '우리 동네 다섯 곳 중 네 곳',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'head' }) },
    titleArt: stamps(540, 700, 4, 5, 30) + person('mulu', { x: 540, y: 880, s: 1.3, outfit: 'casual', arms: 'fist', expr: 'determined' }),
    panels: [
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'phone', expr: 'determined', prop: PROPS.phone(68, 30, .9) }) +
      caption('토요일 아침') + B(220, 70, '도장 하나 남았다!', { tail: 'bl', size: 27 }),
      bg('#F3EEFF') + stamps(245, 230, 4) + `<text x="245" y="330" font-family="Gaegu" font-weight="700" font-size="34" fill="${LINE}" text-anchor="middle">우리 동네 5곳 중 4곳</text>` +
      sfx(390, 160, '두근', { size: 40, rot: 10 }),
      winter() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'fist', expr: 'determined', prop: G(PROPS.swimBag(-70, 120, .5)) }) +
      caption('버스 두 정거장') + B(120, 70, '마지막 한 곳, 출발!', { tail: 'bl', size: 27 }),
      entrance('하늘빛 공원 수영장') + person('mulu', { x: 245, y: 270, s: .66, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + sparkle(80, 300, 14) + sparkle(420, 290, 12) +
      B(150, 40, '여기다!', { tail: 'none', size: 32 }),
      appBg() + appPhone(145, 92, 1.0, checkinBanner(), { tab: '탐색', plus: false }) + hands(245, 440, 1) +
      caption('수영장 근처 배너 「인증하기」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, stampDone(5, 5), { tab: '탐색', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('입장권 사진까지 찰칵') + sfx(410, 330, '쾅!', { size: 48, rot: 10, color: '#0E9F93' }),
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      B(70, 340, '도장 다 모은 기념 수영~', { tail: 'none', size: 27 }),
      tipPanel(stamps(245, 150, 5, 5, 26) + person('mulu', { x: 245, y: 230, s: .38, outfit: 'casual', arms: 'up', expr: 'happy', body: false }),
        '물루 TIP · 우리 동네 도장깨기', '수영장 근처 배너 「인증하기」(GPS + 입장권/기록 사진)\n→ 「+N💧 도장 보상」 받고,\n「우리 동네 N곳 중 M곳 도장」으로 진행 확인!'),
    ] },

  // ════ EP.086 반지는 사물함에
  { ep: '086', title: '반지는 사물함에', teaser: '윤슬의 새 반지, 물속으로 쏙',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'head' }) },
    titleArt: person('yoonseul', { x: 470, y: 790, s: 1.35, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'face', expr: 'cry' }) + ring(780, 760, 2.4),
    panels: [
      lockers() + person('yoonseul', { x: 245, y: 250, s: .86, outfit: 'swimT', arms: 'wave', expr: 'wink' }) + ring(330, 140, 1) + sparkle(380, 110, 12) +
      B(30, 50, '새 반지 예쁘지?', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('yoonseul', 245, 222, .66, { gog: 'eyes', expr: 'happy' }) + waterFront(262) + ring(390, 150, 1) +
      sfx(400, 110, '쏙—', { size: 40, rot: 10, color: '#5BB8E0' }),
      pool(300) + person('yoonseul', { x: 245, y: 200, s: .8, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'face', expr: 'shock' }) + waterFront(300) +
      B(100, 40, '내 반지!!', { tail: 'bl', size: 36 }),
      underwater() + ring(300, 470, 1.1) + swimHead('mulu', 180, 220, .7, { gog: 'eyes', expr: 'worried' }) + bubbles([[200, 120, 9], [220, 90, 6]]) +
      B(240, 140, '바닥에 반짝…!', { tail: 'bl', size: 27 }),
      poolDeck(400) + guard(245, 220, .82, { arms: 'up', expr: 'smile' }) + ring(330, 150, 1) + sparkle(370, 120, 12) +
      caption('안전요원') + B(20, 440, '바닥에 떨어진 건 저희가 건져요~', { tail: 'none', size: 23 }),
      poolDeck(400) + person('yoonseul', { x: 140, y: 230, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hold', expr: 'cry' }) + person('mulu', { x: 360, y: 230, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'smile', flip: true }) +
      B(10, 40, '다행이다…', { tail: 'bl', size: 27 }) + B(200, 440, '액세서리는 사물함에!', { tail: 'none', size: 25 }),
      lockers() + person('yoonseul', { x: 245, y: 250, s: .86, outfit: 'swimT', arms: 'hold', expr: 'wink' }) + G(path('M200,330 h90 v40 h-90z', P.pink, { lw: 3 })) +
      B(80, 50, '수영할 땐 맨손!', { tail: 'bl', size: 30 }),
      tipPanel(ring(170, 190, 2) + person('yoonseul', { x: 330, y: 170, s: .6, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'wink' }),
        '물루 TIP · 액세서리는 빼고', '반지·귀걸이·목걸이는 물속에서 빠지기 쉽고\n다른 사람을 긁을 수도 있어요.\n입수 전 사물함에 넣어 두기!'),
    ] },

  // ════ EP.087 팔꿈치를 세워라
  { ep: '087', title: '팔꿈치를 세워라', teaser: '열심히 젓는데 왜 안 나갈까',
    cover: { char: swimmer({ expr: 'determined', arms: 'up', gog: 'eyes' }) },
    titleArt: person('dad', { x: 400, y: 790, s: 1.25, outfit: 'trunks', arms: 'up', expr: 'flat' }) + elbowArc(760, 720),
    panels: [
      pool(240) + swimHead('mulu', 300, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + sweat(390, 150) +
      caption('자유형 1km') + B(30, 360, '열심히 젓는데 안 나가…', { tail: 'none', size: 27 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .82, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('역시 아빠') + B(60, 70, '팔이 물을 그냥 지나간다.', { tail: 'bl', size: 26 }),
      poolDeck(400) + person('dad', { x: 170, y: 220, s: .78, outfit: 'trunks', arms: 'up', expr: 'flat' }) + elbowArc(370, 200) +
      B(130, 430, '물속에서 팔꿈치를 높게.', { tail: 'none', size: 26 }),
      poolDeck(400) + barrel(245, 330, 1.3) + person('dad', { x: 245, y: 210, s: .82, outfit: 'trunks', arms: 'hold', expr: 'flat' }) +
      B(20, 30, '큰 통을 끌어안듯 물을 뒤로.', { tail: 'none', size: 25 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + elbowArc(250, 360) +
      B(110, 60, '팔꿈치… 높게…!', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('mulu', 300, 222, .64, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(220, 280) + sparkle(400, 110, 14) +
      sfx(140, 140, '쭉—!', { size: 56, rot: -8 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'hips', expr: 'proud' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) +
      B(30, 60, '…좋다.', { tail: 'bl', size: 30 }) + B(200, 450, '아빠가 칭찬했다!!', { tail: 'none', size: 26 }),
      tipPanel(elbowArc(170, 170) + swimHead('mulu', 350, 170, .5, { gog: 'eyes', expr: 'happy' }),
        '물루 TIP · 자유형 물 잡기', '손이 물에 들어가면 팔꿈치는 높게 두고\n손과 아래팔로 물을 뒤로 밀어요.\n어깨가 아프면 범위를 줄이고 쉬어 가기.'),
    ] },

  // ════ EP.088 콧물 훌쩍
  { ep: '088', title: '콧물 훌쩍', teaser: '개근이냐, 이불이냐',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'hold', gog: 'head' }) },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'hoodie', arms: 'face', expr: 'sad' }) + tissue(780, 860, 1.8) + sfx(780, 740, '훌쩍', { size: 64, rot: 10 }),
    panels: [
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'face', expr: 'sad' }) + tissue(400, 380, 1) +
      caption('AM 5:50') + sfx(390, 170, '훌쩍', { size: 40, rot: 10 }) + B(30, 70, '그래도 가야지…', { tail: 'bl', size: 28 }),
      bedroom(true) + PINK(person('mom', { x: 245, y: 250, s: .86, outfit: 'apron', arms: 'hold', expr: 'angry', prop: thermo(0, 110, 1) })) +
      B(30, 40, '열 있잖아! 오늘은 쉬어!', { tail: 'bc', size: 27 }),
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'down', expr: 'cry' }) +
      B(110, 50, '개근이 깨진다…', { tail: 'bl', size: 30 }),
      bedroom(true) + person('mulu', { x: 160, y: 250, s: .78, outfit: 'hoodie', arms: 'hold', expr: 'sad' }) + catchDog({ x: 370, y: 330, s: .62, pose: 'sit', expr: 'happy' }) +
      B(320, 170, '멍!', { tail: 'bc', size: 30 }),
      bedroom(true) + person('dad', { x: 245, y: 250, s: .82, outfit: 'coverall', arms: 'hips', expr: 'flat' }) +
      caption('문틈으로 아빠') + B(80, 70, '쉬는 것도 훈련이다.', { tail: 'bl', size: 28 }),
      bedroom(true) + `<g transform="translate(245,330) rotate(-90)">${person('mulu', { s: .7, outfit: 'hoodie', arms: 'down', expr: 'sleepy' })}</g>` + catchDog({ x: 400, y: 330, s: .4, pose: 'sit', expr: 'happy' }) +
      caption('푹 자고') + zzz(330, 180),
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      caption('사흘 뒤') + B(110, 340, '몸이 가볍다!', { tail: 'none', size: 32 }),
      tipPanel(tissue(170, 200, 1.4) + person('mulu', { x: 330, y: 170, s: .6, outfit: 'hoodie', arms: 'wave', expr: 'happy' }),
        '물루 TIP · 감기 기운 있는 날', '열이 나거나 몸살 기운이 있으면 하루 쉬어요.\n다 나으면 짧고 가볍게 다시 시작!\n증상이 계속되면 진료 받아 보기.'),
    ] },

  // ════ EP.089 엄마의 크루 가입 (앱: 크루)
  { ep: '089', title: '엄마의 크루 가입', teaser: '"너네 크루, 나도 들어갈래!"',
    cover: { char: swimmer({ expr: 'happy', arms: 'wave', gog: 'head' }) },
    titleArt: PINK(person('mom', { x: 420, y: 790, s: 1.3, outfit: 'apron', arms: 'phone', expr: 'happy', prop: PROPS.phone(68, 30, 1) })) + person('mulu', { x: 740, y: 800, s: 1.25, outfit: 'casual', arms: 'up', expr: 'sparkle' }),
    panels: [
      kitchen() + PINK(person('mom', { x: 245, y: 210, s: .86, outfit: 'apron', arms: 'point', expr: 'happy' })) +
      B(30, 40, '너네 크루, 나도 들어갈래!', { tail: 'bc', size: 27 }),
      kitchen() + person('mulu', { x: 245, y: 210, s: .86, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) + sparkle(400, 120, 12) +
      B(60, 40, '초대 코드 보내 줄게!', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, crewSearch(''), { tab: '크루', plus: false }) + hands(245, 440, 1) +
      caption('크루 탭 → 「크루」 → 「크루 탐색」'),
      kitchen() + PINK(person('mom', { x: 245, y: 210, s: .86, outfit: 'apron', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) })) +
      B(30, 40, '코드를… 어디다 넣니?', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, crewSearch('DAWN25'), { tab: '크루', plus: false }) + hands(245, 440, 1) +
      caption('「초대 코드 입력」') + sfx(410, 330, '톡톡', { size: 40, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, crewLounge(), { tab: '크루', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('라운지 📌 공지 · 📅 일정'),
      pool(240) + momHead(110, 230, .5, { expr: 'sparkle' }) + swimHead('mulu', 245, 230, .5, { expr: 'happy' }) + swimHead('yoonseul', 380, 230, .5, { expr: 'wink' }) + waterFront(270) +
      caption('토요일 AM 7:00') + B(80, 360, '다 같이 새벽물결!', { tail: 'none', size: 28 }),
      tipPanel(momHead(170, 180, .5, { expr: 'happy' }) + swimHead('mulu', 320, 180, .5, { expr: 'happy' }) + L.waterFront(220, .85, 330),
        '물루 TIP · 초대 코드로 크루 가입', '물루 앱 크루 탭 → 「크루」 → 「크루 탐색」\n→ 「초대 코드 입력」에 받은 코드 넣기!\n라운지 📌 공지·📅 일정에서 모임 확인해요.'),
    ] },
];
