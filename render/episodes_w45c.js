// 물루의 수영일기 EP.048~054 (컷 8장)
const L = require('./w45_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, bedroom, poolDeck, petPool, vest, poster, bigDrop, heart, AP, AM, aT, aBtn, aCard, appPhone, hands } = L;

const appBg = (col = '#EDE7FA') => bg(col) + `<g opacity=".5">${[...Array(10)].map((_, i) => `<circle cx="${(i * 97) % 470 + 10}" cy="${(i * 61) % 500 + 20}" r="${6 + i % 4 * 3}" fill="#fff"/>`).join('')}</g>`;
const PINK = (svg) => svg.replace(new RegExp(P.purple, 'g'), '#FF9EB8');
const splash = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-50,0 q-20,-50 -6,-70 q10,30 22,40 q4,-50 22,-64 q4,40 12,60 q18,-36 38,-40 q-8,40 -18,74z', '#fff', { lw: 2.6, hatch: false })}</g>`);
const compSuit = (x, y, s = 1) => `<g filter="url(#pencil)" transform="translate(${x},${y}) scale(${s})">${path('M-30,-50 l12,0 q18,16 36,0 l12,0 q-6,40 4,70 q-34,16 -68,0 q10,-30 4,-70z', '#3E4A8A')}${ln('M-26,10 Q0,22 26,10', 4, P.mint)}</g>`;
const towel = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-60,-20 q60,-30 120,0 l-6,50 q-54,-20 -108,0z', P.yellow)}${ln('M-50,0 q50,-20 100,0', 2.4, '#fff')}</g>`);
const lyingBelly = (x, y, s, o = {}) => `<g transform="translate(${x},${y}) rotate(-90)">${person('mulu', { s, view: 'back', outfit: 'hoodie', ...o })}</g>`;
// 앱 화면 — 피드 카드 (오늘의 수영 기록)
const feedCard = (cheered = false) => aCard(10, 44, 180, 220, '#FFFFFF') + `<rect x="10" y="44" width="180" height="220" rx="12" fill="none" stroke="#E5E0F2" stroke-width="1.5"/>` +
  `<circle cx="30" cy="66" r="11" fill="${P.purple}"/>` + aT(48, 64, '김물루', { size: 12 }) + aT(48, 79, '오늘의 수영 기록', { size: 9.5, col: '#9A93A8', w: 600 }) +
  `<rect x="20" y="88" width="160" height="80" rx="8" fill="#BFE6F5"/><path d="M20,140 q20,-8 40,0 t40,0 t40,0 t40,0 V168 H20Z" fill="#9ED8EF"/>` +
  aT(20, 188, '25m × 왕복 20 · 1,000m · 40분', { size: 10.5, col: AP }) + aT(20, 206, '오늘 자유형 1km 완주!', { size: 11, w: 600 }) +
  aBtn(20, 220, 96, 28, '🌊 응원하기', { col: cheered ? AM : '#F3EEFF', tc: cheered ? '#fff' : AP, size: 11.5 }) + aT(128, 239, '💬 댓글', { size: 11, col: '#9A93A8', w: 600 });

module.exports = [
  // ════ EP.048 우리 크루 생겼다 (앱: 크루)
  { ep: '048', title: '우리 크루 생겼다', teaser: '셋이 모이면 이름이 필요해',
    cover: { char: { svg: person('mulu', { x: 400, y: 480, s: 1.5, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) + person('yoonseul', { x: 700, y: 500, s: 1.4, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'wink' }), waistY: 690, ripples: [[400, 690, 200, 60], [700, 700, 190, 56]] } },
    titleArt: PINK(person('mom', { x: 300, y: 800, s: 1.1, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' })) + person('mulu', { x: 540, y: 780, s: 1.25, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + person('yoonseul', { x: 790, y: 800, s: 1.1, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'wink' }),
    panels: [
      pool(220) + PINK(swimHead('mom', 110, 204, .52, { expr: 'happy' })) + swimHead('mulu', 245, 204, .54, { expr: 'happy' }) + swimHead('yoonseul', 380, 204, .52, { expr: 'wink' }) + waterFront(238) +
      caption('토요일 아침 · 셋이 함께') + B(110, 330, '우리 셋, 이름 붙일까?', { tail: 'none', size: 28 }),
      lockers() + PINK(person('mom', { x: 100, y: 250, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'proud' })) + person('mulu', { x: 250, y: 250, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + person('yoonseul', { x: 400, y: 250, s: .7, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hold', expr: 'happy' }) +
      B(14, 56, '‘새벽물결’ 어때?', { tail: 'bl', size: 28 }) + sparkle(400, 100, 14),
      appBg() + appPhone(145, 92, 1.0,
        aT(14, 28, '크루', { size: 15, w: 800 }) + aT(60, 28, '랭킹', { size: 13, col: '#B9B2C8', w: 700 }) + `<rect x="14" y="34" width="30" height="3" rx="1.5" fill="${AP}"/>` +
        aCard(12, 52, 176, 70, '#F3EEFF') + `<circle cx="70" cy="87" r="14" fill="#DCD3F7"/><circle cx="100" cy="87" r="14" fill="#C7EFE9"/><circle cx="130" cy="87" r="14" fill="#FFE1EA"/>` +
        aBtn(12, 136, 176, 32, '크루 탐색', { col: '#F3EEFF', tc: AP, size: 13 }) + aBtn(12, 178, 176, 32, '크루 만들기', { size: 13 }),
        { tab: '크루' }) + hands(245, 440, 1) +
      caption('물루 앱 · 크루 탭') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0,
        aT(14, 28, '크루 만들기', { size: 15, w: 800 }) +
        aT(14, 64, '크루 이름', { size: 11, col: '#8A8098', w: 600 }) + aCard(12, 72, 176, 32, '#F3EEFF') + aT(24, 93, '새벽물결 🌅', { size: 14 }) +
        aT(14, 128, '초대 코드', { size: 11, col: '#8A8098', w: 600 }) + aCard(12, 136, 176, 40, '#E6FBF8') + aT(100, 162, 'SBMG-7', { size: 18, col: '#0E9F93', anchor: 'middle', w: 800 }),
        { tab: '크루', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('크루 만들기 완료!'),
      lockers() + person('yoonseul', { x: 245, y: 240, s: .88, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) + sparkle(110, 140, 14) +
      caption('윤슬은 초대 코드로 합류') + B(120, 380, 'SBMG-7… 합류 완료♪', { tail: 'none', size: 27 }),
      appBg() + appPhone(145, 92, 1.0,
        aT(14, 28, '새벽물결 라운지', { size: 15, w: 800 }) +
        aCard(12, 46, 176, 62, '#FFF6E0') + aT(24, 68, '📌 공지', { size: 12 }) + aT(24, 92, '토요일 아침 7시 자유수영!', { size: 11.5, w: 600 }) +
        aCard(12, 118, 176, 62, '#E6FBF8') + aT(24, 140, '📅 일정', { size: 12 }) + aT(24, 164, '토 AM 7:00 · 해오름 수영장', { size: 11, w: 600 }) +
        aCard(12, 190, 176, 44, '#F3EEFF') + aT(100, 218, '우리 크루 활동 온도 36°C', { size: 12, col: AP, anchor: 'middle' }),
        { tab: '크루' }) + hands(245, 440, 1) +
      caption('크루 라운지'),
      home() + PINK(person('mom', { x: 110, y: 250, s: .7, outfit: 'apron', arms: 'up', expr: 'happy' })) + person('mulu', { x: 250, y: 250, s: .72, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + person('yoonseul', { x: 390, y: 250, s: .7, outfit: 'trend', arms: 'up', expr: 'wink' }) +
      B(90, 56, '활동 온도 올리러 가자!', { tail: 'bc', size: 28 }),
      tipPanel(swimHead('mulu', 245, 168, .58, { expr: 'happy' }) + PINK(swimHead('mom', 120, 176, .5, { expr: 'smile' })) + swimHead('yoonseul', 370, 176, .5, { expr: 'wink' }) + waterFront(214, .85, 330),
        '물루 TIP · 크루 만들기', '물루 앱 크루 탭 → 「크루」 → 「크루 만들기」\n친구는 「크루 탐색」 → 「초대 코드 입력」으로 합류!\n라운지에 📌 공지·📅 일정을 올려 함께 수영해요.'),
    ] },

  // ════ EP.049 개구리 발차기
  { ep: '049', title: '개구리 발차기', teaser: '열심히 찼는데 제자리?',
    cover: { char: swimmer({ expr: 'determined', arms: 'spread', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 420, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + catchDog({ x: 720, y: 900, s: 1.0, pose: 'sit', expr: 'happy' }),
    panels: [
      pool(300) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) +
      caption('11월 목표') + B(130, 56, '이번 달엔 평영 정복!', { tail: 'bl', size: 29 }),
      pool(200) + swimHead('mulu', 245, 190, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(226) + splash(245, 340, .9) +
      sfx(110, 420, '퍽퍽퍽', { size: 42, rot: -8, color: '#5BB8E0' }) + caption('열심히 찼는데'),
      pool(220) + swimHead('mulu', 245, 210, .72, { gog: 'eyes', expr: 'worried' }) + waterFront(250) +
      sfx(390, 130, '제자리…', { size: 36, rot: 8, color: '#8A8098' }) + B(80, 360, '왜 앞으로 안 가지…?', { tail: 'none', size: 29 }),
      poolDeck(420) + person('pro', { x: 140, y: 220, s: .76, outfit: 'guard', arms: 'point', expr: 'smile' }).replace('안전요원', '강사') + swimHead('mulu', 390, 410, .48, { expr: 'shock' }) + waterFront(440) +
      B(160, 50, '발목을 몸 쪽으로 꺾고\n발바닥으로 물을 밀어요!', { tail: 'bl', size: 23 }),
      home() + lyingBelly(250, 380, .66) + sfx(380, 200, '쭉— 착!', { size: 40, rot: 8 }) +
      caption('그날 밤 · 거실 특훈') + B(40, 60, '꺾고, 밀고, 모으고…', { tail: 'none', size: 28 }),
      home() + lyingBelly(170, 380, .6) + catchDog({ x: 380, y: 330, s: .6, pose: 'run', expr: 'happy' }) +
      B(300, 120, '멍!', { tail: 'bc', size: 32 }) + sfx(390, 470, '따라 하는 중', { size: 26, rot: -4, color: '#8A8098' }),
      pool(200) + swimHead('mulu', 340, 182, .6, { gog: 'eyes', expr: 'sparkle' }) + waterFront(220) + G(ln('M260,240 h-130 M270,270 h-160 M260,300 h-120', 4, '#fff')) + sparkle(420, 110, 14) +
      sfx(160, 420, '쭈우욱!', { size: 46, rot: -6 }) + B(250, 380, '개구리 됐다!', { tail: 'none', size: 26 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330),
        '물루 TIP · 평영 발차기', '발목을 몸 쪽으로 꺾어 발바닥으로 물을 밀어요.\n무릎은 너무 벌리지 말고 뒤꿈치를 엉덩이 쪽으로.\n찬 뒤엔 다리를 모아 쭉 뻗고 잠깐 미끄러지기!'),
    ] },

  // ════ EP.050 물루가 도착했어요 (앱: 물루💧 보상)
  { ep: '050', title: '물루가 도착했어요', teaser: '1km 헤엄친 날, 앱을 열었더니',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }), waistY: 710, ripples: [[540, 710, 300, 84], [300, 300, 30, 10], [800, 320, 26, 9]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) + bigDrop(760, 820, 60),
    panels: [
      pool(220) + swimHead('mulu', 245, 206, .72, { expr: 'happy' }) + waterFront(250) + sweat(340, 150) +
      caption('PM 9:00') + B(110, 340, '오늘 1km 완주!', { tail: 'none', size: 32 }),
      bedroom(true) + person('mulu', { x: 220, y: 230, s: .84, outfit: 'hoodie', arms: 'hold', expr: 'normal', prop: G(PROPS.phone(0, 116, 1.1)) }) +
      caption('집에 와서 앱을 열었더니'),
      appBg() + appPhone(145, 92, 1.0,
        `<rect width="200" height="304" fill="#E9F7FD"/>` + aT(100, 60, '물루가 도착했어요', { size: 16, anchor: 'middle', w: 800 }) +
        `<path d="M100,92 Q132,130 132,158 A32,32 0 1 1 68,158 Q68,130 100,92Z" fill="#7FD3F0" stroke="#fff" stroke-width="3"/><ellipse cx="88" cy="150" rx="6" ry="10" fill="#fff" opacity=".8"/>` +
        aBtn(36, 222, 128, 34, '톡 눌러 터뜨리기', { size: 13 }),
        { tab: '피드', plus: false }) + hands(245, 440, 1) + sparkle(100, 160, 14),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0,
        `<rect width="200" height="304" fill="#E9F7FD"/>` + [[60, 90, 12], [140, 80, 10], [100, 140, 16], [50, 180, 9], [150, 170, 12], [90, 220, 8], [130, 240, 10]].map(([x, y, r]) => `<path d="M${x},${y - r * 1.4} Q${x + r},${y - r * .2} ${x + r},${y + r * .3} A${r},${r} 0 1 1 ${x - r},${y + r * .3} Q${x - r},${y - r * .2} ${x},${y - r * 1.4}Z" fill="#7FD3F0" stroke="#fff" stroke-width="2"/>`).join(''),
        { tab: '피드', plus: false }) + hands(245, 440, 1) +
      sfx(100, 140, '톡!', { size: 50, rot: -10 }) + sfx(400, 150, '퐁퐁!', { size: 44, rot: 10, color: '#5BB8E0' }),
      bedroom(true) + person('mulu', { x: 170, y: 230, s: .8, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) + catchDog({ x: 380, y: 330, s: .55, pose: 'sit', expr: 'happy' }) + bigDrop(330, 150, 16) + bigDrop(420, 110, 12, P.mint) +
      B(30, 56, '100m마다 쌓였대!', { tail: 'bl', size: 27 }) + B(330, 220, '멍!', { tail: 'bc', size: 28 }),
      appBg() + appPhone(145, 92, 1.0,
        aT(14, 28, '💧 물루 센터', { size: 15, w: 800 }) +
                `<rect x="12" y="60" width="176" height="150" rx="14" fill="#E9F7FD"/><rect x="12" y="60" width="176" height="44" rx="14" fill="#D3F0FB"/><rect x="12" y="104" width="176" height="56" fill="#A6DDF2"/><rect x="12" y="160" width="176" height="50" rx="14" fill="#6EC3E6"/>` +
        aT(100, 92, '수심 Lv.4', { size: 18, col: AP, anchor: 'middle', w: 800 }) +
        `<circle cx="100" cy="186" r="7" fill="#fff"/>`,
        { tab: '내정보', plus: false }) + hands(245, 440, 1) +
      caption('「물루 지갑」 → 「💧 물루 센터」'),
      appBg('#FFF0E2') + appPhone(145, 92, 1.0,
        aT(14, 28, '💧 물루 센터', { size: 15, w: 800 }) + aCard(12, 60, 176, 70, '#FFF6E0') +
        aT(100, 88, '3개월 동안 안 쓴 물루는', { size: 11.5, anchor: 'middle' }) + aT(100, 108, '자연 사라집니다', { size: 11.5, anchor: 'middle' }),
        { tab: '내정보', plus: false }) + hands(245, 440, 1) +
      sfx(90, 160, '헉', { size: 50, rot: -10, color: '#E07A5F' }) + B(14, 470, '아껴 두기만 하면 안 되겠다!', { tail: 'none', size: 24 }),
      tipPanel(bigDrop(170, 250, 30) + bigDrop(250, 230, 38, P.mint) + bigDrop(330, 250, 30) + sparkle(250, 110, 14),
        '물루 TIP · 💧 물루 모으기', '물루 앱 내정보 탭 → 「물루 지갑」 → 「💧 물루 센터」\n100m 헤엄칠 때마다, 체크인·출석·챌린지로도 쌓여요.\n앱을 열면 「톡 눌러 터뜨리기」로 받아 가기!'),
    ] },

  // ════ EP.051 첨벙 말고 쏙
  { ep: '051', title: '첨벙 말고 쏙', teaser: '아빠: …물을 때리고 있네',
    cover: { char: swimmer({ expr: 'determined', arms: 'up', gog: 'eyes' }) },
    titleArt: person('dad', { x: 380, y: 790, s: 1.25, outfit: 'coverall', arms: 'point', expr: 'flat' }) + person('mulu', { x: 700, y: 790, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'determined' }),
    panels: [
      pool(200) + swimHead('mulu', 245, 190, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(226) + splash(130, 230, .8) + splash(370, 230, .8) +
      sfx(245, 420, '철퍼덕 철퍼덕', { size: 42, rot: -4, color: '#5BB8E0' }) + caption('오늘도 열심히'),
      poolDeck(420) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      caption('구경 온 아빠') + B(150, 50, '…물을 때리고 있네.', { tail: 'bl', size: 28 }),
      pool(220) + swimHead('mulu', 245, 210, .74, { gog: 'head', expr: 'shock' }) + waterFront(254) +
      B(110, 360, '때린다고…?', { tail: 'none', size: 34 }),
      garage() + person('dad', { x: 200, y: 230, s: .86, outfit: 'coverall', arms: 'up', expr: 'flat' }) + sparkle(400, 200, 12) +
      caption('태랑모터스 특훈') + B(14, 380, '손끝부터 쏙 넣고,\n팔꿈치는 높게.', { tail: 'none', size: 27 }),
      garage() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'casual', arms: 'up', expr: 'determined' }) + person('dad', { x: 380, y: 250, s: .7, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: PROPS.wrench(0, 116, .8, 10) }) +
      sfx(160, 140, '쏙, 쏙', { size: 40, rot: -8 }) + B(300, 120, '…다시.', { tail: 'bc', size: 26 }),
      pool(200) + swimHead('mulu', 340, 182, .6, { gog: 'eyes', expr: 'happy' }) + waterFront(220) + G(ln('M260,240 h-120 M270,270 h-150', 4, '#fff')) +
      sfx(170, 420, '쏙… 쏙…', { size: 42, rot: -4 }) + sparkle(420, 110, 12),
      poolDeck(420) + person('dad', { x: 140, y: 230, s: .72, outfit: 'trunks', arms: 'down', expr: 'proud' }) + swimHead('mulu', 370, 410, .5, { expr: 'sparkle' }) + waterFront(440) +
      B(220, 60, '소리가 조용해졌어!', { tail: 'br', size: 27 }) + sfx(140, 110, '끄덕', { size: 34, rot: -8, color: '#8A8098' }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'smile' }) + waterFront(210, .85, 330),
        '물루 TIP · 자유형 입수', '손끝부터 살며시 물에 넣어요.\n물속에선 팔꿈치를 높게 세워 물을 뒤로 밀기!\n첨벙 소리가 줄면 잘 되고 있다는 신호예요.'),
    ] },

  // ════ EP.052 엄마의 응원 버튼 (앱: 오늘의 수영 기록 · 응원하기)
  { ep: '052', title: '엄마의 응원 버튼', teaser: '기록을 올렸더니 1초 만에',
    cover: { char: swimmer({ expr: 'happy', arms: 'wave', gog: 'head' }) },
    titleArt: PINK(person('mom', { x: 380, y: 800, s: 1.2, outfit: 'apron', arms: 'phone', expr: 'happy', prop: PROPS.phone(68, 30, .9) })) + person('mulu', { x: 700, y: 790, s: 1.3, outfit: 'office', arms: 'up', expr: 'sparkle' }) + heart(540, 640, 1.6),
    panels: [
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'hold', expr: 'sparkle', prop: G(PROPS.phone(0, 116, 1.1)) }) +
      caption('AM 7:30 · 수영 끝') + B(110, 56, '오늘 기록 남겨야지!', { tail: 'bl', size: 29 }),
      appBg() + appPhone(145, 92, 1.0,
        `<rect width="200" height="304" fill="#F6F4FA"/><rect x="0" y="150" width="200" height="160" rx="16" fill="#FFFFFF"/>` +
        aBtn(16, 196, 168, 38, '오늘의 수영 기록', { size: 14 }),
        { tab: '피드', plus: false }) + hands(245, 440, 1) +
      caption('보라색 ＋ 버튼') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0,
        aT(14, 28, '오늘의 수영 기록', { size: 15, w: 800 }) +
        `<rect x="12" y="40" width="56" height="56" rx="8" fill="#BFE6F5"/>` + aT(78, 62, '오늘 자유형 1km!', { size: 12 }) + aT(78, 80, '물 진짜 좋았다~', { size: 10.5, col: '#8A8098', w: 600 }) +
        aCard(12, 108, 176, 108, '#F3EEFF') + aT(24, 130, '☑ 수영 기록 함께 남기기', { size: 11.5, col: AP }) +
        aT(24, 154, '레인 길이   25m', { size: 11, w: 600 }) + aT(24, 176, '왕복 수      20', { size: 11, w: 600 }) + aT(24, 198, '시간          40분', { size: 11, w: 600 }) +
        aBtn(12, 230, 176, 34, '게시하기', { size: 14 }),
        { tab: '피드', plus: false }) + hands(245, 440, 1) +
      caption('사진·메모 + 기록'),
      street('#DCE6FF') + person('mulu', { x: 245, y: 250, s: .86, outfit: 'office', arms: 'wave', expr: 'happy' }) + sparkle(110, 120, 12) +
      caption('출근길') + B(130, 56, '올렸다~ 출근 완료!', { tail: 'bl', size: 28 }),
      appBg('#FFF0F5') + appPhone(145, 92, 1.0, feedCard(true), { tab: '피드', title: '피드' }) + hands(245, 440, 1) +
      caption('같은 시각, 엄마의 폰') + sfx(410, 330, '꾹!', { size: 46, rot: 10, color: '#FF9EB8' }) + heart(90, 200, 1.2),
      office() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'office', arms: 'hold', expr: 'sparkle', prop: G(PROPS.phone(0, 116, 1.1)) }) + heart(380, 150, 1.2) + heart(110, 170, .9) +
      B(130, 380, '엄마가 응원했다!', { tail: 'none', size: 30 }),
      home() + PINK(person('mom', { x: 245, y: 240, s: .86, outfit: 'apron', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) })) +
      caption('그리고 댓글') + B(100, 56, '💬 근데 아침은 먹었니?', { tail: 'bc', size: 28 }),
      tipPanel(PINK(person('mom', { x: 160, y: 170, s: .62, outfit: 'apron', arms: 'up', expr: 'happy' })) + person('mulu', { x: 330, y: 170, s: .64, outfit: 'office', arms: 'up', expr: 'happy' }) + heart(245, 120, 1),
        '물루 TIP · 오늘의 수영 기록', '물루 앱 ＋ 버튼 → 「오늘의 수영 기록」\n사진·메모에 「수영 기록 함께 남기기」 → 「게시하기」\n친구 글엔 「🌊 응원하기」로 힘을 보태요!'),
    ] },

  // ════ EP.053 캐치 수영 데뷔
  { ep: '053', title: '캐치 수영 데뷔', teaser: '수영 가방만 보면 꼬리가 살랑',
    cover: { char: { svg: catchDog({ x: 540, y: 560, s: 2.1, pose: 'sit', expr: 'happy', prop: vest(1) }), waistY: 720, ripples: [[540, 720, 280, 84]] } },
    titleArt: catchDog({ x: 540, y: 780, s: 1.6, pose: 'sit', expr: 'happy', prop: vest(1) }),
    panels: [
      home() + G(PROPS.swimBag(330, 380, .7)) + catchDog({ x: 200, y: 330, s: .7, pose: 'sit', expr: 'normal' }) + person('mulu', { x: 400, y: 230, s: .6, outfit: 'hoodie', arms: 'face', expr: 'smile' }) +
      B(180, 56, '캐치도 수영 가고 싶어?', { tail: 'br', size: 26 }) + B(40, 170, '멍…', { tail: 'bc', size: 28 }),
      street('#FFE9D6') + L.signBoard(330, 80, '반려견 수영장', P.yellow, 220) + person('dad', { x: 120, y: 250, s: .72, outfit: 'coverall', arms: 'wave', expr: 'flat' }) + person('mulu', { x: 290, y: 260, s: .7, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + catchDog({ x: 420, y: 370, s: .5, pose: 'sit', expr: 'happy' }) +
      caption('주말 · 아빠 차 타고'),
      home('#FFF3E2') + catchDog({ x: 245, y: 250, s: 1.1, pose: 'sit', expr: 'proud', prop: vest(1) }) + sparkle(110, 140, 14) + sparkle(390, 130, 14) +
      B(110, 56, '구명조끼 장착!', { tail: 'bc', size: 30 }),
      petPool() + `<g>${catchDog({ x: 245, y: 290, s: .9, pose: 'sit', expr: 'happy', prop: vest(1) })}</g>` + waterFront(320, .8) +
      sfx(120, 440, '첨벙첨벙', { size: 40, rot: -6, color: '#5BB8E0' }) + sfx(390, 460, '패들패들', { size: 32, rot: 6 }),
      petPool() + person('dad', { x: 140, y: 230, s: .72, outfit: 'coverall', arms: 'down', expr: 'proud' }) + catchDog({ x: 360, y: 290, s: .6, pose: 'sit', expr: 'happy', prop: vest(1) }) + waterFront(320, .8) +
      B(14, 360, '…개헤엄 원조네.', { tail: 'none', size: 28 }),
      petPool() + person('mulu', { x: 160, y: 230, s: .74, outfit: 'casual', arms: 'face', expr: 'happy' }) + catchDog({ x: 370, y: 290, s: .6, pose: 'sit', expr: 'proud', prop: vest(1) }) + waterFront(320, .8) +
      B(14, 360, '캐치가 나보다 잘해!', { tail: 'none', size: 28 }),
      home() + person('mulu', { x: 150, y: 240, s: .8, outfit: 'hoodie', arms: 'hold', expr: 'happy' }) + catchDog({ x: 350, y: 320, s: .7, pose: 'sit', expr: 'happy' }) + towel(350, 240, .9) +
      sfx(350, 140, '부르르르', { size: 42, rot: 6, color: '#5BB8E0' }) + caption('집에 와서'),
      tipPanel(catchDog({ x: 245, y: 200, s: .9, pose: 'sit', expr: 'happy', prop: vest(1) }),
        '물루 TIP · 반려견과 물놀이', '반려견은 반려견 전용 수영장에서 놀아요.\n처음엔 구명조끼를 입히고 짧게 시작하기.\n끝나면 귀와 털을 잘 말려 주세요!', '#FFF6E6'),
    ] },

  // ════ EP.054 첫 대회 신청
  { ep: '054', title: '첫 대회 신청', teaser: '게시판에 붙은 포스터 한 장',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'eyes', arms: 'fist', expr: 'determined' }).replace(new RegExp(P.purple, 'g'), '#3E4A8A'), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'casual', arms: 'fist', expr: 'determined' }) + poster(770, 860, 1.3),
    panels: [
      lockers() + poster(360, 200, 1) + person('yoonseul', { x: 140, y: 250, s: .78, outfit: 'trend', arms: 'point', expr: 'wink' }) +
      caption('수영장 게시판') + B(14, 380, '동호인 대회 나가 볼래?', { tail: 'none', size: 26 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .9, outfit: 'casual', arms: 'face', expr: 'shock' }) + sweat(340, 170) + sweat(160, 180, .8) +
      B(110, 56, '내가…? 대회를…?', { tail: 'bl', size: 31 }),
      garage() + person('dad', { x: 150, y: 240, s: .84, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: PROPS.wrench(0, 116, .8, 10) }) + person('mulu', { x: 380, y: 260, s: .68, outfit: 'casual', arms: 'down', expr: 'worried' }) +
      B(14, 110, '…나가 봐.\n완주가 먼저다.', { tail: 'br', size: 27 }),
      home() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'hoodie', arms: 'hold', expr: 'determined', prop: G(PROPS.phone(0, 116, 1.1)) }) + sparkle(110, 150, 12) + sparkle(390, 140, 14) +
      caption('그날 밤') + B(90, 56, '자유형 50m, 신청 완료!', { tail: 'bl', size: 28 }),
      pool(200) + swimHead('mulu', 330, 182, .6, { gog: 'eyes', expr: 'determined' }) + waterFront(220) + G(ln('M250,240 h-120 M260,270 h-150', 4, '#fff')) + G(PROPS.stopwatch(120, 380, 1.4)) +
      caption('훈련 1일차') + sfx(330, 420, '쭉쭉!', { size: 44, rot: 6 }),
      home() + PINK(person('mom', { x: 150, y: 240, s: .84, outfit: 'apron', arms: 'hold', expr: 'worried', prop: G(PROPS.thermos(0, 112, 1)) })) + person('mulu', { x: 370, y: 250, s: .74, outfit: 'hoodie', arms: 'up', expr: 'happy' }) +
      B(14, 50, '기록보다 몸이 먼저야!', { tail: 'bl', size: 26 }),
      home('#EEF2F8') + person('mulu', { x: 245, y: 230, s: .9, outfit: 'casual', arms: 'hold', expr: 'sparkle' }) + compSuit(245, 340, .95) + sparkle(110, 140, 16) + sparkle(390, 120, 14) +
      caption('D-30') + B(60, 400, '생일 선물 수영복, 드디어 개시!', { tail: 'none', size: 24 }),
      tipPanel(poster(245, 180, 1) + sparkle(120, 120, 14) + sparkle(370, 110, 12),
        '물루 TIP · 첫 대회 준비', '동호인 대회는 완주가 첫 목표예요!\n신청 전 종목·거리와 출발·턴 규칙을 확인하고,\n대회 날 쓸 수영복·수경은 미리 입어 보기.'),
    ] },
];
