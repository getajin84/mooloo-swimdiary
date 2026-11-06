// 물루의 수영일기 EP.055~061 (2026-11 셋째 주 게시분, 컷 8장)
const L = require('./w46_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, bedroom, poolDeck, winter, heart, AP, AM, aT, aBtn, aCard, appPhone, hands,
  PINK, appBg, bubbles, underwater, tilt, alley, bottleW, bag, wrinkleHand, tabTop, row } = L;

const speed = (x, y) => G(ln(`M${x},${y} h-90 M${x + 10},${y + 30} h-120 M${x},${y + 60} h-80`, 4, '#fff'));

// 앱 화면 — 수영 기록 등록 / 기록 완료
const recordForm = () => aT(14, 28, '수영 기록 등록', { size: 15, w: 800 }) +
  aBtn(12, 46, 84, 30, '🏊 간편', { size: 12 }) + aBtn(104, 46, 84, 30, '✏️ 상세', { col: '#F3EEFF', tc: AP, size: 12 }) +
  row(92, '레인 길이', '25m') + row(130, '왕복 수', '24') + row(168, '시간', '32분') +
  aBtn(12, 222, 176, 34, '✓', { size: 16 });
const recordDone = () => `<rect width="200" height="304" fill="#F1FBF9"/>` + aT(100, 34, '기록 완료', { size: 16, anchor: 'middle', w: 800 }) +
  aT(100, 78, '1,200m', { size: 30, col: AP, anchor: 'middle', w: 800 }) + aT(100, 100, '페이스 2\'40"/100m', { size: 12, col: '#8A8098', anchor: 'middle', w: 700 }) +
  aCard(12, 118, 176, 40, '#FFFFFF') + aT(100, 143, '이전보다 20% 더 멀리', { size: 13, col: '#0E9F93', anchor: 'middle', w: 800 }) +
  aCard(12, 168, 176, 40, '#FFFFFF') + aT(100, 193, '해오름 수영장 전체 37위', { size: 12.5, col: AP, anchor: 'middle', w: 800 });

// 앱 화면 — 챌린지 탭
const challengeTab = (done = false) => aT(14, 28, '챌린지', { size: 15, w: 800 }) +
  aCard(12, 44, 176, 112, '#E6FBF8') + aT(24, 66, '🌱 오늘의 미션', { size: 13, w: 800 }) +
  [0, 1, 2].map(i => `<rect x="24" y="${80 + i * 24}" width="14" height="14" rx="4" fill="${done ? AM : '#fff'}" stroke="${AM}" stroke-width="2"/>` + (done ? `<path d="M27,${87 + i * 24} l3,4 l6,-7" stroke="#fff" stroke-width="2.4" fill="none"/>` : '') + `<rect x="46" y="${83 + i * 24}" width="${110 - i * 20}" height="8" rx="4" fill="${done ? '#A6E9DF' : '#CFEDE8'}"/>`).join('') +
  aCard(12, 166, 176, 92, '#F3EEFF') + aT(24, 188, '이달의 챌린지', { size: 13, w: 800 }) + `<rect x="24" y="198" width="120" height="8" rx="4" fill="#DCD3F7"/>` +
  aBtn(24, 216, 152, 30, done ? '참가 중' : '참가하기', { size: 13, col: done ? '#DCD3F7' : AP, tc: done ? AP : '#fff' });

module.exports = [
  // ════ EP.055 어제보다 조금 더 (앱: 수영 기록 등록)
  { ep: '055', title: '어제보다 조금 더', teaser: '늘 멈추던 1km, 오늘은?',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 540, y: 780, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'normal' }) + waterFront(262) +
      caption('해오름 수영장 · AM 6:30') + B(70, 340, '늘 1km에서 멈췄는데…', { tail: 'none', size: 28 }),
      pool(200) + swimHead('mulu', 320, 186, .6, { gog: 'eyes', expr: 'determined' }) + waterFront(222) + speed(240, 250) + sweat(400, 130) +
      sfx(160, 110, '한 바퀴만 더!', { size: 42, rot: -6 }),
      pool(240) + swimHead('mulu', 245, 222, .7, { expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 14) + sparkle(390, 110, 12) +
      B(150, 60, '1,200m!!', { tail: 'bl', size: 36 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'hold', expr: 'determined', prop: G(PROPS.phone(0, 116, 1.1)) }) +
      caption('샤워하고 나와서') + B(120, 60, '오늘은 꼭 남겨야지!', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, recordForm(), { tab: null, plus: false }) + hands(245, 440, 1) +
      caption('「수영 기록 등록」 · 🏊 간편') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, recordDone(), { tab: null, plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('「기록 완료」'),
      garage() + person('dad', { x: 140, y: 250, s: .74, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) +
      B(14, 110, '20%면…\n다음 주엔 1,440m.', { tail: 'bl', size: 25 }) + B(250, 440, '계산 빠르시네요…', { tail: 'none', size: 25 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { expr: 'proud' }) + waterFront(210, .85, 330) + sparkle(110, 90, 12) + sparkle(380, 80, 12),
        '물루 TIP · 기록 등록하기', '물루 앱 「수영 기록 등록」 → 🏊 간편 / ✏️ 상세\n「기록 완료」에서 페이스와 「이전보다 N% 더 멀리」 확인!\n거리는 한 번에 확 말고 조금씩 늘려요.'),
    ] },

  // ════ EP.056 손가락이 쭈글쭈글
  { ep: '056', title: '손가락이 쭈글쭈글', teaser: '수영 1시간, 손끝이 할머니가 됐다',
    cover: { char: swimmer({ expr: 'shock', arms: 'up', gog: 'head' }) },
    titleArt: person('mulu', { x: 420, y: 790, s: 1.35, outfit: 'casual', arms: 'face', expr: 'shock' }) + wrinkleHand(740, 860, 1.6),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'happy' }) + waterFront(262) +
      caption('AM 7:00 · 1시간째') + B(110, 340, '오늘 물 진짜 좋다~', { tail: 'none', size: 30 }),
      lockers() + wrinkleHand(245, 300, 2.2) + sfx(100, 150, '쭈글…', { size: 46, rot: -10, color: '#D9A88A' }) +
      caption('탈의실'),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'face', expr: 'cry' }) +
      B(110, 60, '내 손 왜 이래?!', { tail: 'bl', size: 32 }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'face', expr: 'worried' }) + person('yoonseul', { x: 350, y: 250, s: .76, outfit: 'trend', arms: 'hips', expr: 'smile' }) +
      B(220, 60, '그거 정상이야~', { tail: 'br', size: 28 }),
      lockers() + person('yoonseul', { x: 245, y: 250, s: .86, outfit: 'trend', arms: 'point', expr: 'wink' }) + sparkle(400, 130, 12) +
      B(30, 56, '물에 오래 있으면 원래 그래.\n나오면 금방 돌아와!', { tail: 'bc', size: 25 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'flat' }) + catchDog({ x: 370, y: 330, s: .62, pose: 'sit', expr: 'happy' }) +
      caption('집') + B(110, 60, '캐치 발바닥은 멀쩡하네', { tail: 'bl', size: 26 }) + B(330, 200, '멍!', { tail: 'bc', size: 28 }),
      office() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'office', arms: 'up', expr: 'sparkle' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      caption('30분 뒤 · 출근') + B(100, 400, '손가락 원상복구!', { tail: 'none', size: 30 }),
      tipPanel(wrinkleHand(170, 200, 1.1) + person('mulu', { x: 330, y: 170, s: .6, outfit: 'casual', arms: 'wave', expr: 'happy' }),
        '물루 TIP · 손끝이 쭈글쭈글해지면', '물에 오래 있으면 손발 끝이 쭈글해지는 건\n자연스러운 현상이고, 물 밖에선 금방 돌아와요.\n잘 안 돌아오거나 붓고 아프면 진료 받아 보기.'),
    ] },

  // ════ EP.057 수경이 벗겨졌다
  { ep: '057', title: '수경이 벗겨졌다', teaser: '벽 차고 나가는 순간, 세상이 뿌옇게',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'none', arms: 'hold', expr: 'shock', prop: G(PROPS.goggles(0, 112, 1.2)) }), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'none', arms: 'face', expr: 'shock' }) + G(PROPS.goggles(760, 700, 1.6, -20)),
    panels: [
      pool(240) + swimHead('mulu', 330, 222, .6, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(250, 280) +
      caption('턴 연습 중') + sfx(130, 140, '팡!', { size: 52, rot: -8 }),
      underwater() + swimHead('mulu', 245, 250, .8, { gog: 'none', expr: 'shock' }) + G(PROPS.goggles(380, 140, 1.2, 30)) + bubbles([[120, 160, 12], [150, 120, 8], [110, 100, 6], [320, 360, 10]]) +
      sfx(120, 440, '어푸어푸!', { size: 42, rot: -6, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .8, outfit: 'swim', cap: true, gog: 'none', arms: 'hold', expr: 'worried', prop: G(PROPS.goggles(0, 112, .9)) }) +
      B(110, 40, '왜 자꾸 벗겨지지?', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'point', expr: 'flat' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'shock' }) +
      caption('마침 아빠 등장') + B(60, 60, '끈이 너무 아래야.', { tail: 'bl', size: 27 }),
      poolDeck(420) + person('mulu', { x: 245, y: 210, s: .95, view: 'back', outfit: 'swim', cap: true, gog: 'head' }) + G(ln('M186,196 Q245,178 304,196', 7, P.purpleD)) +
      G(ln('M330,140 q40,-20 70,10', 4, P.purpleD)) + G(path('M400,150 l-14,-4 l6,14z', P.purpleD, { lw: 2 })) +
      B(20, 40, '뒤통수 볼록한 곳에!', { tail: 'none', size: 27 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'eyes', arms: 'face', expr: 'cry' }) +
      B(20, 60, '너무 꽉 조이지 말고.', { tail: 'bl', size: 25 }) + B(250, 450, '눈 튀어나올 뻔…', { tail: 'none', size: 25 }),
      pool(240) + swimHead('mulu', 300, 222, .64, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(220, 280) + sparkle(400, 120, 14) +
      sfx(130, 140, '쏙!', { size: 52, rot: -8 }) + B(40, 380, '이번엔 안 벗겨졌다!', { tail: 'none', size: 28 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + sparkle(110, 90, 12),
        '물루 TIP · 수경 고정하기', '수경 끈은 귀 위, 뒤통수 볼록한 곳에 걸어요.\n쓰기 전 렌즈를 눈에 눌러 살짝 붙는지 확인!\n너무 꽉 조이면 아프니 적당히 조절해요.'),
    ] },

  // ════ EP.058 빙판 지름길 (아이디어 메모: 지름길 2탄)
  { ep: '058', title: '지름길 2탄', teaser: '골목 8분 길이, 오늘은 미끄럼틀',
    cover: { char: swimmer({ expr: 'worried', arms: 'spread', gog: 'head' }) },
    titleArt: tilt(540, 800, -14, person('mulu', { s: 1.4, outfit: 'casual', arms: 'spread', expr: 'shock', prop: G(PROPS.swimBag(0, 128, .7)) })),
    panels: [
      alley(false) + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'point', expr: 'determined', prop: G(PROPS.swimBag(-70, 120, .5)) }) +
      caption('첫눈 다음 날 · AM 6:10') + B(120, 60, '골목 지름길로 가자!', { tail: 'bl', size: 28 }),
      alley(true) + tilt(245, 250, -18, person('mulu', { s: .84, outfit: 'casual', arms: 'spread', expr: 'shock' })) + sweat(360, 150) +
      sfx(370, 430, '쭈르륵', { size: 46, rot: -10, color: '#5BB8E0' }),
      alley(true) + tilt(245, 330, -70, person('mulu', { s: .78, outfit: 'casual', arms: 'up', expr: 'cry' })) + bag(250, 420, .8) +
      sfx(120, 140, '꽈당!', { size: 52, rot: -10, color: '#E07A5F' }) + B(200, 70, '가방이 쿠션이 됐다…', { tail: 'none', size: 25 }),
      home() + PINK(person('mom', { x: 245, y: 250, s: .86, outfit: 'apron', arms: 'phone', expr: 'angry', prop: PROPS.phone(68, 30, .9) })) +
      caption('전화 속 엄마') + B(30, 56, '큰길로 가! 넘어지면 큰일 나!', { tail: 'bc', size: 27 }),
      street('#DDE6F5') + person('mulu', { x: 245, y: 250, s: .84, outfit: 'casual', arms: 'spread', expr: 'flat', prop: G(PROPS.swimBag(0, 60, .45)) }) +
      `<g opacity=".85">${[...Array(14)].map((_, i) => `<circle cx="${(i * 71) % 480 + 6}" cy="${(i * 53) % 220 + 8}" r="${3 + i % 3}" fill="#fff"/>`).join('')}</g>` +
      caption('큰길 15분 · 천천히') + sfx(400, 440, '뒤뚱뒤뚱', { size: 36, rot: 8 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'happy' }) + waterFront(262) + sparkle(110, 120, 12) +
      B(80, 340, '조금 늦어도 무사히 도착!', { tail: 'none', size: 27 }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'down', expr: 'smile' }) + person('yoonseul', { x: 350, y: 250, s: .76, outfit: 'trend', arms: 'spread', expr: 'wink' }) +
      B(220, 60, '나도 오늘 펭귄이었어', { tail: 'br', size: 25 }),
      tipPanel(person('mulu', { x: 245, y: 170, s: .6, outfit: 'casual', arms: 'spread', expr: 'happy', prop: G(PROPS.swimBag(0, 60, .4)) }) + sparkle(110, 90, 12),
        '물루 TIP · 눈 온 날 수영 가는 길', '눈 온 날엔 지름길보다 넓고 밝은 큰길로!\n수영 가방은 등에 메고 두 손은 자유롭게.\n미끄럼 덜한 신발 신고 평소보다 일찍 출발해요.', '#EEF4FB'),
    ] },

  // ════ EP.059 오늘의 미션 (앱: 챌린지)
  { ep: '059', title: '오늘의 미션', teaser: '이불 속에서 시작된 작은 약속',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'wave', gog: 'head' }) },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'hoodie', arms: 'phone', expr: 'sleepy', prop: G(PROPS.phone(68, 30, 1.1)) }) + sparkle(760, 700, 30),
    panels: [
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'hold', expr: 'sleepy' }) +
      caption('AM 5:50 · 영하 3도') + B(150, 70, '오늘은… 쉴까…', { tail: 'bl', size: 30 }),
      appBg() + appPhone(145, 92, 1.0, challengeTab(false), { tab: '챌린지' }) + hands(245, 440, 1) +
      caption('이불 속에서 챌린지 탭'),
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'phone', expr: 'determined', prop: PROPS.phone(68, 30, .9) }) +
      sfx(380, 150, '참가하기, 꾹!', { size: 36, rot: 8 }) + B(20, 400, '참가했으니 가야지…!', { tail: 'none', size: 28 }),
      winter() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'fist', expr: 'determined', prop: G(PROPS.swimBag(-70, 120, .5)) }) +
      caption('이불 박차고 출발'),
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'happy' }) + waterFront(262) + sparkle(110, 120, 12) +
      B(120, 340, '오길 잘했다~', { tail: 'none', size: 32 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, challengeTab(true), { tab: '챌린지' }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('🌱 오늘의 미션') + sfx(410, 140, '완료!', { size: 42, rot: 10, color: '#0E9F93' }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'wave', expr: 'happy' }) + person('yoonseul', { x: 350, y: 250, s: .76, outfit: 'trend', arms: 'up', expr: 'sparkle' }) +
      B(220, 60, '나도 참가할래!', { tail: 'br', size: 27 }),
      tipPanel(person('mulu', { x: 245, y: 170, s: .6, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + sparkle(110, 90, 12) + sparkle(380, 80, 12),
        '물루 TIP · 챌린지로 꾸준히', '물루 앱 챌린지 탭 → 「🌱 오늘의 미션」\n이달의 챌린지는 「참가하기」 한 번이면 시작!\n추운 날일수록 작은 목표 하나가 힘이 돼요.'),
    ] },

  // ════ EP.060 물속인데 목말라
  { ep: '060', title: '물속인데 목말라', teaser: '물은 많은데 마실 물이 없다',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'happy', prop: bottleW(0, 110, 1.1) }), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) + bottleW(760, 860, 1.6),
    panels: [
      pool(240) + swimHead('mulu', 300, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(220, 280) + sweat(390, 150) +
      caption('인터벌 10세트째'),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'hips', expr: 'sad' }) + sweat(330, 150) + sweat(160, 170, .8) +
      B(130, 30, '목… 말라…', { tail: 'bl', size: 30 }),
      pool(300) + person('mulu', { x: 245, y: 200, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) + waterFront(310) +
      B(20, 50, '이 물은… 안 돼!', { tail: 'none', size: 30 }) + sfx(400, 420, '절레절레', { size: 34, rot: 8 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 210, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hold', expr: 'wink', prop: bottleW(0, 110, .7) }) + sparkle(380, 120, 12) +
      B(110, 30, '물병은 필수지~', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'happy', prop: bottleW(40, 20, .6) }) +
      sfx(110, 140, '꿀꺽꿀꺽', { size: 42, rot: -10, color: '#5BB8E0' }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      caption('지나가던 아빠') + B(100, 60, '물속에서도 땀 난다.', { tail: 'bl', size: 28 }),
      home() + bag(330, 380, .8) + bottleW(420, 380, .8) + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'determined' }) + catchDog({ x: 400, y: 260, s: .4, pose: 'sit', expr: 'happy' }) +
      B(80, 56, '가방 1순위: 물병!', { tail: 'bl', size: 28 }),
      tipPanel(bottleW(170, 220, 1.2) + person('mulu', { x: 320, y: 170, s: .6, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }),
        '물루 TIP · 수영 중 물 마시기', '물속에서도 땀이 나서 몸은 물을 잃어요.\n물병을 챙겨 세트 사이사이 한 모금씩!\n어지럽거나 힘들면 바로 쉬어 가기.'),
    ] },

  // ════ EP.061 평영 팔은 작게
  { ep: '061', title: '평영 팔은 작게', teaser: '크게 저을수록 느려진다고?',
    cover: { char: swimmer({ expr: 'determined', arms: 'spread', gog: 'eyes' }) },
    titleArt: person('dad', { x: 360, y: 790, s: 1.25, outfit: 'trunks', arms: 'point', expr: 'flat' }) + person('mulu', { x: 700, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'worried' }),
    panels: [
      pool(300) + person('mulu', { x: 245, y: 190, s: .78, outfit: 'swim', cap: true, gog: 'eyes', arms: 'spread', expr: 'determined' }) + waterFront(300) +
      caption('평영 연습') + B(20, 400, '크게! 시원하게!', { tail: 'none', size: 30 }),
      pool(300) + person('mulu', { x: 245, y: 190, s: .78, outfit: 'swim', cap: true, gog: 'eyes', arms: 'spread', expr: 'worried' }) + waterFront(300) + sweat(320, 120) +
      sfx(400, 80, '휘이익', { size: 38, rot: 10 }) + B(60, 410, '…왜 제자리지?', { tail: 'none', size: 30 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .82, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('마침 아빠') + B(100, 50, '팔이 너무 커.', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('dad', { x: 160, y: 220, s: .76, outfit: 'trunks', arms: 'hold', expr: 'flat' }) + heart(160, 300, 1.2, P.pink) + heart(360, 200, 3.2, P.pink) +
      B(20, 40, '가슴 앞에서 하트 그리듯.', { tail: 'none', size: 26 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'determined' }) + heart(245, 330, 1.4) +
      B(20, 440, '모으고… 쭉!', { tail: 'none', size: 30 }),
      pool(240) + swimHead('mulu', 300, 222, .64, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(220, 280) + sparkle(400, 110, 14) +
      sfx(140, 140, '슝~', { size: 52, rot: -8 }),
      pool(240) + PINK(swimHead('mom', 150, 222, .56, { expr: 'happy' })) + swimHead('mulu', 340, 222, .58, { expr: 'happy' }) + waterFront(262) + heart(245, 130, 1.2) +
      B(20, 50, '하트 평영 귀엽네~', { tail: 'bl', size: 27 }),
      tipPanel(heart(245, 170, 3, P.pink) + swimHead('mulu', 245, 250, .4, { gog: 'eyes', expr: 'happy' }),
        '물루 TIP · 평영 팔 젓기', '팔은 어깨 너비 안쪽, 가슴 앞에서 작게 그려요.\n손을 모아 앞으로 쭉 뻗고 잠깐 미끄러지기.\n팔 → 발차기 → 쭉, 순서를 천천히 연습해요.'),
    ] },
];
