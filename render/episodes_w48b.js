// 물루의 수영일기 EP.104~110 (컷 8장)
const L = require('./w48_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, garage, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, bedroom, poolDeck, winter, restaurant, AP, AM, aT, appPhone, hands,
  PINK, appBg, bubbles, kitchen, paceWall, paceClock, banana, bottleW, bag, towelS,
  speed, zzz, bus, paddle, slipper, nameTag, calendar, myRank, siegeHot, siegeMap2, meetMake, meetList2 } = L;

const momP = (o) => PINK(person('mom', o));
const momHead = (x, y, s, o = {}) => PINK(swimHead('mom', x, y, s, o));

module.exports = [
  // ════ EP.104 수영하고 꾸벅
  { ep: '104', title: '수영하고 꾸벅', teaser: '점심 수영 2km, 그 후',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'down', gog: 'head' }) },
    titleArt: person('mulu', { x: 520, y: 790, s: 1.4, outfit: 'office', arms: 'down', expr: 'sleepy' }) + zzz(700, 760, 1.6),
    panels: [
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(170, 190) +
      caption('점심시간 수영') + B(110, 340, '오늘은 2km!', { tail: 'none', size: 32 }),
      office() + person('mulu', { x: 245, y: 250, s: .84, outfit: 'office', arms: 'down', expr: 'sleepy' }) + zzz(330, 150, 1.2) +
      caption('오후 2시'),
      office() + person('mulu', { x: 245, y: 250, s: .84, outfit: 'office', arms: 'spread', expr: 'shock' }) + sweat(330, 210) +
      B(110, 60, '앗, 회의 중이었지!', { tail: 'bl', size: 28 }),
      bus() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'casual', arms: 'down', expr: 'sleepy' }) + zzz(330, 140, 1.1) +
      caption('퇴근 버스') + sfx(110, 470, '꾸벅…', { size: 48, rot: -8 }),
      home() + momP({ x: 150, y: 250, s: .78, outfit: 'apron', arms: 'hips', expr: 'angry' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'hoodie', arms: 'down', expr: 'sleepy' }) +
      B(20, 40, '점심에 2km라니!\n무리했네!', { tail: 'bl', size: 27 }),
      home() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'hoodie', arms: 'hold', expr: 'happy' }) + bottleW(150, 300, .9) + banana(350, 300, .9, -10) +
      B(90, 50, '물 한 잔, 바나나 하나', { tail: 'bl', size: 28 }),
      office() + person('mulu', { x: 245, y: 250, s: .84, outfit: 'office', arms: 'up', expr: 'sparkle' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      caption('다음 날') + B(90, 66, '오늘은 1km만! 개운하다!', { tail: 'bl', size: 26 }),
      tipPanel(person('mulu', { x: 245, y: 140, s: .62, outfit: 'office', arms: 'up', expr: 'happy' }) + bottleW(110, 260, .7) + banana(380, 260, .8, -10),
        '물루 TIP · 수영 후 졸릴 때', '수영 뒤엔 물과 가벼운 간식을 챙겨요.\n너무 졸리면 운전하기 전에 잠깐 쉬기.\n평일엔 거리를 조금 줄여도 괜찮아요.'),
    ] },

  // ════ EP.105 내 강점은 뭘까 (앱: 랭킹 · 챌린지 탭 → 랭킹 · 내 강점)
  { ep: '105', title: '내 강점은 뭘까', teaser: '빠르지 않은 나에게도?',
    cover: { char: swimmer({ expr: 'proud', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 400, y: 790, s: 1.35, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }) + calendar(780, 770, 1.3, [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14]),
    panels: [
      poolDeck(400) + person('yoonseul', { x: 150, y: 220, s: .76, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'wink' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'worried' }) +
      B(20, 30, '내 강점은 ⚡속도래~', { tail: 'bl', size: 26 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .86, outfit: 'casual', arms: 'face', expr: 'sad' }) +
      B(60, 40, '난 느린데… 강점이 있을까?', { tail: 'bl', size: 26 }),
      appBg() + appPhone(145, 92, 1.0, myRank(false), { tab: '챌린지', plus: false }) + hands(245, 440, 1) +
      caption('「랭킹」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, myRank(true), { tab: '챌린지', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('「내 강점」') + sfx(410, 330, '두둥!', { size: 44, rot: 10, color: '#0E9F93' }),
      home() + calendar(370, 150, .9, [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14]) + person('mulu', { x: 160, y: 250, s: .8, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) +
      B(20, 420, '매일 간 게 강점이었다!', { tail: 'none', size: 27 }),
      garage() + person('dad', { x: 140, y: 250, s: .76, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'casual', arms: 'down', expr: 'happy', flip: true }) +
      B(20, 120, '꾸준한 게\n제일 무섭다.', { tail: 'bl', size: 26 }),
      winter() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'hoodie', arms: 'fist', expr: 'determined' }) + bag(360, 340, .8) +
      caption('다음 날 새벽') + B(130, 70, '오늘도 개근!', { tail: 'bl', size: 32 }),
      tipPanel(calendar(170, 190, .8, [0, 1, 2, 4, 5, 6, 7, 9, 10, 11, 12, 14]) + person('mulu', { x: 350, y: 150, s: .58, outfit: 'casual', arms: 'up', expr: 'happy' }),
        '물루 TIP · 내 강점 찾기', '물루 앱 챌린지 탭 → 「랭킹」 → 「내 강점」\n내 수영장 순위와 「전국 상위 N%」도 함께 보여요.\n빠르지 않아도 꾸준함이 강점이 돼요.'),
    ] },

  // ════ EP.106 50씩 네 번
  { ep: '106', title: '50씩 네 번', teaser: '쉬지 않고 1km? 쪼개면 된다',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 460, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + paceClock(800, 760, 1.6, 30),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) +
      caption('목표: 쉬지 않고 1km') + B(110, 340, '할 수 있다!', { tail: 'none', size: 32 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'cry' }) + sweat(330, 180) + sweat(160, 190) +
      B(110, 30, '300m에서 끝…', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('아빠') + B(30, 66, '쪼개라. 50씩 네 번부터.', { tail: 'bl', size: 27 }),
      paceWall() + paceClock(360, 170, 1, 15) + swimHead('mulu', 90, 362, .56, { gog: 'eyes', expr: 'normal' }) + waterFront(402) +
      B(40, 40, '15초 쉬고, 다시!', { tail: 'none', size: 28 }),
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(170, 190) +
      sfx(245, 400, '하나! 둘! 셋!', { size: 46, rot: -6, color: '#5BB8E0' }),
      paceWall() + paceClock(360, 170, 1, 45) + swimHead('mulu', 90, 362, .56, { gog: 'eyes', expr: 'sparkle' }) + waterFront(402) + sparkle(200, 300, 12) +
      B(40, 40, '네 번째 끝!', { tail: 'none', size: 30 }),
      poolDeck(400) + person('mulu', { x: 140, y: 230, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'proud' }) + person('dad', { x: 360, y: 220, s: .76, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      B(10, 30, '쉬어 가니까\n더 잘 돼!', { tail: 'bl', size: 25 }) + B(250, 440, '그게 인터벌이다.', { tail: 'none', size: 24 }),
      tipPanel(paceClock(150, 190, .9, 15) + swimHead('mulu', 330, 180, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 인터벌 처음 해 보기', '50m를 네 번, 사이사이 15~30초씩 쉬어요.\n쉬는 시간을 정해 두면 페이스가 고르게 나와요.\n힘들면 쉬는 시간을 늘려도 괜찮아요.'),
    ] },

  // ════ EP.107 접전 중! (앱: 점령전)
  { ep: '107', title: '접전 중!', teaser: '우리 동네 수영장을 지켜라',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 380, y: 790, s: 1.3, outfit: 'casual', arms: 'phone', expr: 'determined', prop: G(PROPS.phone(68, 30, 1.1)) }) + momP({ x: 720, y: 790, s: 1.3, outfit: 'apron', arms: 'fist', expr: 'determined' }),
    panels: [
      lockers() + person('mulu', { x: 245, y: 240, s: .86, outfit: 'casual', arms: 'phone', expr: 'shock', prop: PROPS.phone(68, 30, .9) }) +
      caption('크루 새벽물결') + B(40, 70, '우리 동네 수영장이\n넘어가게 생겼어!', { tail: 'bl', size: 26 }),
      appBg() + appPhone(145, 92, 1.0, siegeMap2(false), { tab: '탐색' }) + hands(245, 440, 1) +
      caption('탐색 탭 🏰'),
      appBg() + appPhone(145, 92, 1.0, siegeHot(false), { tab: '탐색', plus: false }) + hands(245, 440, 1) +
      caption('「🔥 접전 중인 수영장」') + sfx(410, 330, '두근!', { size: 44, rot: 10, color: '#E07A5F' }),
      home() + momP({ x: 150, y: 250, s: .78, outfit: 'apron', arms: 'fist', expr: 'determined' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'hoodie', arms: 'fist', expr: 'determined' }) +
      B(20, 40, '엄마도 간다!', { tail: 'bl', size: 30 }) + B(260, 130, '새벽물결 출동!', { tail: 'br', size: 24 }),
      pool(240) + momHead(130, 222, .54, { gog: 'eyes', expr: 'determined' }) + swimHead('mulu', 250, 222, .54, { gog: 'eyes', expr: 'determined' }) + swimHead('yoonseul', 370, 222, .54, { gog: 'eyes', expr: 'wink' }) + waterFront(262) +
      caption('그 주 내내') + sfx(245, 420, '첨벙첨벙!', { size: 50, rot: -6, color: '#5BB8E0' }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, siegeHot(true), { tab: '탐색', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('물빛이 우리 색으로!'),
      home() + momP({ x: 130, y: 250, s: .72, outfit: 'apron', arms: 'up', expr: 'proud' }) + person('mulu', { x: 280, y: 250, s: .72, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) + catchDog({ x: 410, y: 340, s: .52, pose: 'sit', expr: 'happy' }) +
      B(20, 40, '바다동 수영장 지켰다!', { tail: 'bl', size: 27 }) + B(370, 190, '멍!', { tail: 'bc', size: 26 }),
      tipPanel(momHead(170, 180, .5, { gog: 'eyes', expr: 'happy' }) + swimHead('mulu', 330, 180, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 접전 중인 수영장 보기', '물루 앱 탐색 탭 상단 🏰 → 「🔥 접전 중인 수영장」\n물빛은 우리 크루가 그 수영장에 쌓은 점수예요.\n「🌊 우리가 차지한 수영장」도 함께 확인!'),
    ] },

  // ════ EP.108 패들 첫날
  { ep: '108', title: '패들 첫날', teaser: '손바닥이 커졌다!',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 460, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + paddle(800, 780, 1.6, 10),
    panels: [
      poolDeck(400) + paddle(330, 330, .9) + paddle(400, 336, .9, 12, '#FFB3C7') + person('mulu', { x: 150, y: 220, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'sparkle' }) +
      caption('용품 바구니') + B(200, 80, '손에 끼는 거다!', { tail: 'bl', size: 27 }),
      poolDeck(400) + person('mulu', { x: 245, y: 230, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + paddle(186, 236, .6, -10) + paddle(304, 236, .6, 10) +
      B(120, 30, '손바닥이 커졌다!', { tail: 'none', size: 30 }),
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(170, 190) +
      B(110, 340, '물이 엄청 잡혀!', { tail: 'none', size: 30 }) + sfx(380, 120, '쑥쑥!', { size: 46, rot: 10 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'worried' }) + waterFront(262) + sweat(320, 180) +
      caption('400m째') + sfx(245, 400, '뻐근…', { size: 52, rot: -6 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'rub', expr: 'worried' }) +
      B(110, 30, '어깨가 묵직해…', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('yoonseul', { x: 150, y: 220, s: .76, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'worried' }) +
      B(20, 30, '처음엔 짧게! 아프면 빼고!', { tail: 'bl', size: 24 }),
      poolDeck(400) + person('mulu', { x: 245, y: 230, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'happy' }) + paddle(400, 340, .7) +
      caption('다음 날') + B(130, 70, '오늘은 200m만!', { tail: 'bl', size: 30 }),
      tipPanel(paddle(170, 200, .9) + swimHead('mulu', 330, 180, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 패들 처음 쓸 때', '처음엔 작은 패들로 짧게(100~200m) 써요.\n어깨가 아프면 바로 빼고 쉬기.\n통증이 계속되면 진료 받아 보기.'),
    ] },

  // ════ EP.109 토요일 가족 수영 (앱: 수모임 · 모임 만들기)
  { ep: '109', title: '토요일 가족 수영', teaser: '아빠도 올까?',
    cover: { char: swimmer({ expr: 'happy', arms: 'wave', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 380, y: 790, s: 1.3, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }) + momP({ x: 720, y: 790, s: 1.3, outfit: 'casual', arms: 'wave', expr: 'happy' }),
    panels: [
      kitchen() + momP({ x: 130, y: 250, s: .72, outfit: 'apron', arms: 'down', expr: 'smile' }) + person('dad', { x: 260, y: 250, s: .72, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 400, y: 260, s: .66, outfit: 'hoodie', arms: 'point', expr: 'sparkle', flip: true }) +
      caption('저녁 식탁') + B(130, 70, '토요일에 다 같이 수영 어때?', { tail: 'br', size: 23 }),
      kitchen() + person('dad', { x: 150, y: 250, s: .76, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + momP({ x: 360, y: 250, s: .74, outfit: 'apron', arms: 'up', expr: 'sparkle' }) +
      B(10, 50, '…시간 되면.', { tail: 'bl', size: 26 }) + B(250, 60, '좋아!', { tail: 'br', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, meetMake(), { tab: '크루', plus: false }) + hands(245, 440, 1) +
      caption('크루 탭 「모임 만들기」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, meetList2(), { tab: '크루', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('「함께 수영해요 🏊」'),
      lockers() + person('yoonseul', { x: 245, y: 240, s: .84, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) +
      caption('윤슬') + B(110, 70, '나도 끼워 줘~', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('dad', 90, 222, .48, { gog: 'eyes', expr: 'flat' }) + momHead(195, 222, .48, { gog: 'eyes', expr: 'happy' }) + swimHead('mulu', 300, 222, .48, { gog: 'eyes', expr: 'sparkle' }) + swimHead('yoonseul', 405, 222, .48, { gog: 'eyes', expr: 'wink' }) + waterFront(262) +
      caption('토요일 아침') + B(80, 340, '가족 수영 대성공!', { tail: 'none', size: 30 }),
      restaurant() + person('dad', { x: 140, y: 260, s: .72, outfit: 'casual', arms: 'down', expr: 'flat' }) + momP({ x: 260, y: 260, s: .68, outfit: 'casual', arms: 'up', expr: 'happy' }) + person('mulu', { x: 380, y: 260, s: .68, outfit: 'casual', arms: 'down', expr: 'sparkle' }) +
      B(10, 80, '…다음 주도 만들어라.', { tail: 'bl', size: 25 }),
      tipPanel(swimHead('dad', 120, 180, .42, { gog: 'eyes', expr: 'flat' }) + momHead(245, 180, .42, { gog: 'eyes', expr: 'happy' }) + swimHead('mulu', 370, 180, .42, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 수모임 만들기', '물루 앱 크루 탭 → 「모임 만들기」\n수영장·날짜를 정해 올리면 「함께 수영해요 🏊」에서\n같이 갈 사람을 모을 수 있어요.'),
    ] },

  // ════ EP.110 누구 슬리퍼?
  { ep: '110', title: '누구 슬리퍼?', teaser: '다 똑같이 생겼잖아',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'head' }) },
    titleArt: person('mulu', { x: 440, y: 790, s: 1.35, outfit: 'casual', arms: 'spread', expr: 'shock' }) + slipper(770, 820, 1.4) + slipper(860, 830, 1.4, '#7FDCC6', 10),
    panels: [
      poolDeck(400) + [60, 110, 160, 210, 260].map((x, i) => slipper(x, 340, .55, '#7FDCC6', i % 2 ? 8 : -6)).join('') + person('mulu', { x: 380, y: 210, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) +
      caption('수영 끝') + B(40, 80, '내 슬리퍼… 다 똑같잖아?', { tail: 'br', size: 25 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'shock' }) + slipper(245, 330, .9) +
      B(110, 30, '이거… 너무 큰데?', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('yoonseul', { x: 150, y: 220, s: .76, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'wink' }) + slipper(340, 330, .9, '#FFB3C7') + nameTag(340, 330, '윤슬') +
      B(170, 40, '내 건 이름 써 놨지~', { tail: 'bl', size: 26 }),
      home() + slipper(245, 260, 2) + nameTag(245, 262, '물루') + person('mulu', { x: 400, y: 270, s: .56, outfit: 'hoodie', arms: 'point', expr: 'determined', flip: true }) +
      caption('그날 밤') + sfx(110, 140, '쓱쓱', { size: 50, rot: -8 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + slipper(200, 360, .6) + nameTag(200, 362, '물루') + slipper(290, 362, .6, '#7FDCC6', 8) + nameTag(290, 364, '물루') +
      B(110, 30, '이제 안 헷갈려!', { tail: 'bl', size: 30 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'hold', expr: 'smile' }) + towelS(245, 360, .9) +
      B(80, 50, '발가락 사이도 꼼꼼히~', { tail: 'bl', size: 27 }),
      home() + person('mulu', { x: 150, y: 240, s: .78, outfit: 'hoodie', arms: 'spread', expr: 'shock' }) + catchDog({ x: 370, y: 330, s: .6, pose: 'sit', expr: 'happy', prop: slipper(40, 30, .5, '#7FDCC6', 70) }) +
      B(20, 40, '이름 있어도 그건 안 돼!', { tail: 'bl', size: 25 }) + B(330, 170, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(slipper(170, 200, 1) + nameTag(170, 202, '물루') + slipper(330, 200, 1, '#FFB3C7', 8) + nameTag(330, 202, '윤슬'),
        '물루 TIP · 슬리퍼·소지품 챙기기', '슬리퍼·수경·수모엔 이름이나 표시를 해 두면\n바뀌거나 잃어버릴 일이 줄어요.\n씻고 나면 발가락 사이까지 잘 말리기.'),
    ] },
];
