// 물루의 수영일기 EP.062~068 (컷 8장)
const L = require('./w46_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, bedroom, poolDeck, heart, AP, AM, aT, aBtn, aCard, appPhone, hands,
  PINK, appBg, bubbles, underwater, laneLine, tilt, dryer, bolt, tabTop, row, miniMap } = L;

const speed = (x, y) => G(ln(`M${x},${y} h-90 M${x + 10},${y + 30} h-120 M${x},${y + 60} h-80`, 4, '#fff'));
const kick = (x, y, s = 1) => G(PROPS.kickboard(x, y, s, 0));
const spikes = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${[-60, -40, -20, 0, 20, 40, 60].map(a => { const r = a * Math.PI / 180; return ln(`M${Math.sin(r) * 60},${-Math.cos(r) * 60} L${Math.sin(r) * 104},${-Math.cos(r) * 104}`, 9, P.muluHair); }).join('')}</g>`);

// 앱 화면 — 크루 탭 랭킹
const crewRank = (hi = -1) => tabTop(['크루', '랭킹'], 1) +
  aT(14, 62, '🌊거리 📅빈도 🔥일관성', { size: 11, w: 700, col: '#8A8098' }) + aT(14, 80, '⚡속도 🌎탐험 🚀신기록', { size: 11, w: 700, col: '#8A8098' }) +
  [['엄마', '개근왕'], ['윤슬', '물길 탐험가'], ['김물루', '꾸준왕']].map(([n, t], i) => row(96 + i * 40, n, t, { col: i === hi ? '#E6FBF8' : '#F3EEFF', rc: i === hi ? '#0E9F93' : AP })).join('');
// 앱 화면 — 점령전 모드
const pin = (x, y, col) => `<path d="M${x},${y + 12} q-12,-14 -12,-22 a12,12 0 1 1 24,0 q0,8 -12,22z" fill="${col}" stroke="#fff" stroke-width="2"/><circle cx="${x}" cy="${y - 10}" r="4" fill="#fff"/>`;
const glow = (x, y, col) => `<circle cx="${x}" cy="${y - 4}" r="26" fill="${col}" opacity=".28"/>`;
const siegeMap = (won = false) => miniMap() + aCard(10, 12, 180, 30, '#FFFFFF') + aT(100, 32, '🏰 점령전 모드', { size: 12, anchor: 'middle', w: 800, col: AP }) +
  glow(56, 100, AM) + glow(130, 180, AM) + glow(150, 80, won ? AM : '#FF9C8A') + glow(60, 240, '#FF9C8A') +
  pin(56, 100, AM) + pin(130, 180, AM) + pin(150, 80, won ? AM : '#FF9C8A') + pin(60, 240, '#FF9C8A') + `<circle cx="100" cy="140" r="7" fill="#3B82F6" stroke="#fff" stroke-width="3"/>`;
const siegeList = () => `<rect width="200" height="304" fill="#F6F4FA"/>` + aT(14, 28, '🏰 점령전 모드', { size: 14, w: 800 }) +
  aT(14, 62, '🌊 우리가 차지한 수영장', { size: 12, w: 800 }) + row(70, '해오름 수영장', '물빛 ●', { col: '#E6FBF8', rc: '#0E9F93' }) +
  aT(14, 130, '🔥 접전 중인 수영장', { size: 12, w: 800 }) + row(138, '물결동 수영장', '접전', { col: '#FFF0EC', rc: '#E07A5F' });
// 앱 화면 — 수모임
const crewTab = () => tabTop(['크루', '랭킹'], 0) + aCard(12, 52, 176, 56, '#F3EEFF') + aT(24, 76, '새벽물결 🌅', { size: 13 }) + aT(24, 96, '오늘은 다들 바빠요', { size: 10.5, col: '#8A8098', w: 600 }) +
  aBtn(12, 124, 176, 34, '🏊 수모임 둘러보기', { size: 13 }) + aBtn(12, 168, 176, 32, '모임 만들기', { col: '#F3EEFF', tc: AP, size: 13 });
const meetList = () => aT(14, 28, '함께 수영해요 🏊', { size: 15, w: 800 }) +
  [['수요일 밤 자유수영', '해오름 수영장 · PM 8:00'], ['퇴근길 1km 같이', '물결동 수영장 · PM 7:30']].map(([a, b], i) => aCard(12, 48 + i * 82, 176, 72, i === 0 ? '#E6FBF8' : '#F3EEFF') + aT(24, 72 + i * 82, a, { size: 12.5 }) + aT(24, 92 + i * 82, b, { size: 10.5, col: '#8A8098', w: 600 }) + `<circle cx="34" cy="${106 + i * 82}" r="6" fill="${P.purple}"/><circle cx="46" cy="${106 + i * 82}" r="6" fill="${AM}"/><circle cx="58" cy="${106 + i * 82}" r="6" fill="#FFC4D6"/>`).join('');

module.exports = [
  // ════ EP.062 엄마의 첫 25m
  { ep: '062', title: '엄마의 첫 25m', teaser: '벽에서 벽까지, 그 먼 길',
    cover: { char: { svg: PINK(person('mom', { x: 540, y: 470, s: 1.95, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' })), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: PINK(person('mom', { x: 400, y: 800, s: 1.2, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' })) + person('mulu', { x: 700, y: 790, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }),
    panels: [
      pool(240) + PINK(swimHead('mom', 160, 222, .58, { expr: 'determined' })) + swimHead('mulu', 340, 222, .56, { expr: 'happy' }) + waterFront(262) +
      caption('토요일 · 새벽물결') + B(40, 340, '오늘은 25m 끝까지!', { tail: 'none', size: 30 }),
      pool(240) + kick(200, 250, .9) + PINK(swimHead('mom', 290, 222, .56, { gog: 'eyes', expr: 'determined' })) + waterFront(262) + speed(160, 300) +
      sfx(140, 130, '첨벙첨벙', { size: 42, rot: -8, color: '#5BB8E0' }),
      pool(240) + kick(200, 250, .9) + PINK(swimHead('mom', 290, 222, .56, { gog: 'eyes', expr: 'sad' })) + waterFront(262) + sweat(380, 150) + sweat(200, 160, .8) +
      B(40, 340, '바, 반… 왔나…?', { tail: 'none', size: 30 }),
      pool(240) + PINK(swimHead('mom', 150, 222, .52, { gog: 'eyes', expr: 'worried' })) + swimHead('mulu', 340, 222, .54, { expr: 'happy' }) + waterFront(262) +
      B(170, 60, '힘들면 서서 쉬어도 돼!', { tail: 'br', size: 25 }),
      pool(300) + PINK(person('mom', { x: 245, y: 200, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'hips', expr: 'sleepy' })) + waterFront(312) +
      caption('잠깐 서서 숨 고르고') + sfx(380, 140, '후~', { size: 44, rot: 8 }),
      pool(240) + G(sh('rect', { x: 400, y: 120, width: 100, height: 440 }, '#E5D6C6', { lw: 3.4 })) + PINK(swimHead('mom', 320, 222, .58, { expr: 'sparkle' })) + waterFront(262) + sparkle(150, 120, 16) + sparkle(220, 80, 10) +
      sfx(200, 380, '터치!', { size: 56, rot: -8 }),
      lockers() + PINK(person('mom', { x: 150, y: 250, s: .78, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'proud' })) + person('mulu', { x: 350, y: 250, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) +
      B(14, 56, '이 엄마가 해냈다!', { tail: 'bl', size: 30 }),
      tipPanel(PINK(swimHead('mom', 245, 168, .6, { expr: 'proud' })) + waterFront(210, .85, 330) + kick(380, 150, .6) + sparkle(110, 90, 12),
        '물루 TIP · 처음 25m 도전', '처음엔 킥판 잡고 반만 가도 충분해요.\n숨이 차면 무리 말고 서서 쉬었다 다시 출발!\n익숙해지면 킥판 없이 조금씩 늘려 가요.'),
    ] },

  // ════ EP.063 나의 호칭은 (앱: 크루 탭 랭킹)
  { ep: '063', title: '나의 호칭은', teaser: '새벽물결 셋, 각자의 이름표',
    cover: { char: { svg: PINK(person('mom', { x: 260, y: 500, s: 1.25, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'proud' })) + person('mulu', { x: 540, y: 480, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + person('yoonseul', { x: 820, y: 500, s: 1.25, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'wink' }), waistY: 680, ripples: [[260, 690, 150, 46], [540, 680, 160, 50], [820, 690, 150, 46]] } },
    titleArt: PINK(person('mom', { x: 300, y: 800, s: 1.1, outfit: 'apron', arms: 'up', expr: 'proud' })) + person('mulu', { x: 540, y: 780, s: 1.25, outfit: 'casual', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) + person('yoonseul', { x: 790, y: 800, s: 1.1, outfit: 'trend', arms: 'wave', expr: 'wink' }),
    panels: [
      lockers() + PINK(person('mom', { x: 100, y: 250, s: .7, outfit: 'apron', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) })) + person('mulu', { x: 250, y: 250, s: .72, outfit: 'casual', arms: 'hold', expr: 'normal', prop: G(PROPS.phone(0, 116, 1)) }) + person('yoonseul', { x: 400, y: 250, s: .7, outfit: 'trend', arms: 'hold', expr: 'happy' }) +
      caption('수영 끝 · 새벽물결') + B(20, 70, '랭킹 나왔대!', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, crewRank(-1), { tab: '크루' }) + hands(245, 440, 1) +
      caption('물루 앱 · 크루 탭 「랭킹」') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      home() + PINK(person('mom', { x: 245, y: 240, s: .88, outfit: 'apron', arms: 'up', expr: 'proud' })) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(80, 56, '엄마가 📅 개근왕!', { tail: 'bc', size: 30 }),
      street('#FFE9F0') + person('yoonseul', { x: 245, y: 250, s: .86, outfit: 'trend', arms: 'wave', expr: 'wink' }) + sparkle(400, 120, 12) +
      B(30, 56, '나는 🌎 물길 탐험가~\n수영장 투어 덕분♪', { tail: 'bc', size: 26 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'face', expr: 'worried' }) + sweat(340, 170) +
      B(60, 56, '나는 ⚡ 쾌속파 아니야…?', { tail: 'bc', size: 27 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, crewRank(2), { tab: '크루' }) + hands(245, 440, 1) + sparkle(400, 300, 14) +
      caption('물루는 「꾸준왕」'),
      garage() + person('dad', { x: 140, y: 250, s: .74, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'casual', arms: 'down', expr: 'sparkle' }) +
      B(14, 110, '빠른 것보다\n꾸준한 게 어렵다.', { tail: 'bl', size: 25 }),
      tipPanel(PINK(person('mom', { x: 140, y: 170, s: .55, outfit: 'apron', arms: 'up', expr: 'happy' })) + person('mulu', { x: 245, y: 165, s: .58, outfit: 'casual', arms: 'up', expr: 'happy' }) + person('yoonseul', { x: 350, y: 170, s: .55, outfit: 'trend', arms: 'wave', expr: 'wink' }),
        '물루 TIP · 크루 랭킹 보기', '물루 앱 크루 탭 → 「랭킹」\n🌊거리 📅빈도 🔥일관성 ⚡속도 🌎탐험 🚀신기록\n꾸준왕·개근왕… 나만의 호칭을 찾아봐요!'),
    ] },

  // ════ EP.064 정전기 대폭발
  { ep: '064', title: '정전기 대폭발', teaser: '드라이어 끄자마자 머리가 하늘로',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'head' }) },
    titleArt: spikes(540, 830, 1.3) + person('mulu', { x: 540, y: 850, s: 1.3, outfit: 'casual', arms: 'spread', expr: 'shock' }) + bolt(370, 740, 1.4) + bolt(710, 740, 1.4),
    panels: [
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'face', expr: 'happy', prop: dryer(80, -40, .9, -20) }) +
      caption('겨울 탈의실') + sfx(110, 120, '위이잉~', { size: 40, rot: -8 }),
      lockers() + spikes(245, 240, .88) + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'spread', expr: 'shock' }) + bolt(90, 140, 1.2) + bolt(400, 130, 1.2) +
      sfx(245, 470, '파지직!', { size: 50, rot: -6, color: '#E0A500' }),
      lockers() + spikes(200, 240, .84) + person('mulu', { x: 200, y: 240, s: .84, outfit: 'casual', arms: 'point', expr: 'cry' }) + bolt(330, 230, 1.3) +
      sfx(380, 150, '따끔!', { size: 46, rot: 10, color: '#E07A5F' }) + B(20, 440, '사물함도 날 거부해…', { tail: 'none', size: 26 }),
      lockers() + spikes(130, 250, .74) + person('mulu', { x: 130, y: 250, s: .74, outfit: 'casual', arms: 'down', expr: 'sad' }) + person('yoonseul', { x: 350, y: 250, s: .78, outfit: 'trend', arms: 'hips', expr: 'wink' }) + sparkle(430, 140, 12) +
      B(220, 56, '나 비법 있지~', { tail: 'br', size: 28 }),
      lockers() + person('yoonseul', { x: 245, y: 250, s: .86, outfit: 'trend', arms: 'point', expr: 'smile' }) +
      B(30, 56, '끝까지 말리고\n헤어 에센스 살짝!', { tail: 'bc', size: 27 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'hold', expr: 'sparkle' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(120, 56, '손엔 로션까지!', { tail: 'bl', size: 30 }) + caption('그리고'),
      street('#DDE6F5') + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'face', expr: 'happy' }) + sparkle(110, 120, 12) +
      B(130, 56, '오늘은 차분한 머리~', { tail: 'bl', size: 27 }) + bolt(390, 300, .8) + sfx(410, 380, '…찌릿?', { size: 30, rot: 8, color: '#E0A500' }),
      tipPanel(person('mulu', { x: 245, y: 165, s: .6, outfit: 'casual', arms: 'up', expr: 'happy' }) + bolt(130, 120, 1) + bolt(370, 120, 1),
        '물루 TIP · 겨울 정전기 줄이기', '머리는 끝까지 말리고 헤어 에센스로 마무리.\n손과 피부는 로션으로 촉촉하게!\n금속 문고리는 손바닥으로 먼저 넓게 짚기.'),
    ] },

  // ════ EP.065 물빛 쟁탈전 (앱: 점령전)
  { ep: '065', title: '물빛 쟁탈전', teaser: '우리 동네 수영장, 지금 누구 색?',
    cover: { char: { svg: person('mulu', { x: 400, y: 480, s: 1.5, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + person('yoonseul', { x: 700, y: 500, s: 1.4, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'up', expr: 'happy' }), waistY: 690, ripples: [[400, 690, 200, 60], [700, 700, 190, 56]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'office', arms: 'phone', expr: 'determined', prop: PROPS.phone(68, 30, .9) }) + G(path('M700,720 l0,-60 l20,10 l20,-10 l20,10 l20,-10 l0,60 z', AM, { lw: 3 })) + G(ln('M700,720 V860', 5)),
    panels: [
      office() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'office', arms: 'phone', expr: 'shock', prop: PROPS.phone(68, 30, .9) }) +
      caption('점심시간') + B(70, 60, '탐색 탭 위에 🏰…\n이게 뭐지?', { tail: 'bc', size: 26 }),
      appBg() + appPhone(145, 92, 1.0, siegeMap(false), { tab: '탐색' }) + hands(245, 440, 1) +
      caption('「🏰 점령전 모드」') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, siegeList(), { tab: '탐색' }) + hands(245, 440, 1) +
      caption('물빛 = 우리 크루가 쌓은 점수'),
      pool(240) + PINK(swimHead('mom', 110, 222, .5, { expr: 'shock' })) + swimHead('mulu', 245, 222, .52, { expr: 'determined' }) + swimHead('yoonseul', 380, 222, .5, { expr: 'wink' }) + waterFront(262) +
      caption('토요일 · 해오름 수영장') + B(60, 340, '물결동이 🔥 접전이래!', { tail: 'none', size: 28 }),
      pool(240) + PINK(swimHead('mom', 110, 222, .5, { gog: 'eyes', expr: 'determined' })) + swimHead('mulu', 245, 222, .52, { gog: 'eyes', expr: 'determined' }) + swimHead('yoonseul', 380, 222, .5, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      caption('일요일 · 물결동 수영장 원정') + sfx(245, 400, '새벽물결, 출동!', { size: 40, rot: -4 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, siegeMap(true), { tab: '탐색' }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('물결동도 우리 물빛!'),
      home() + PINK(person('mom', { x: 150, y: 250, s: .76, outfit: 'apron', arms: 'hips', expr: 'cry' })) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'hoodie', arms: 'up', expr: 'happy' }) +
      B(14, 56, '원정은 좋은데… 엄마 허리…', { tail: 'bl', size: 25 }),
      tipPanel(G(path('M220,230 l0,-70 l20,12 l20,-12 l20,12 l20,-12 l0,70 z', AM, { lw: 3 })) + G(ln('M220,230 V280', 5)) + sparkle(130, 120, 12) + sparkle(370, 110, 12),
        '물루 TIP · 점령전 모드', '물루 앱 탐색 탭 상단 🏰 → 「🏰 점령전 모드」\n물빛은 우리 크루가 수영장에 쌓은 점수예요.\n「🔥 접전 중인 수영장」에 크루와 함께 가 봐요!'),
    ] },

  // ════ EP.066 몇 번 저었니?
  { ep: '066', title: '몇 번 저었니?', teaser: '아빠의 질문: 25m에 팔 몇 번?',
    cover: { char: swimmer({ expr: 'worried', arms: 'face', gog: 'head' }) },
    titleArt: person('dad', { x: 360, y: 790, s: 1.25, outfit: 'trunks', arms: 'point', expr: 'flat' }) + person('mulu', { x: 700, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }),
    panels: [
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'point', expr: 'flat' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) +
      B(20, 50, '25m에 몇 번 저어?', { tail: 'bl', size: 27 }) + B(250, 450, '그걸… 세요?', { tail: 'none', size: 26 }),
      pool(240) + swimHead('mulu', 300, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(220, 280) +
      sfx(140, 120, '하나, 둘, 셋…', { size: 40, rot: -6 }),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sad' }) + sweat(330, 150) +
      B(130, 30, '24번! 헥헥', { tail: 'bl', size: 32 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .82, outfit: 'trunks', arms: 'up', expr: 'flat' }) +
      B(30, 30, '손끝으로 멀리 뻗어.\n한 번에 길게.', { tail: 'bc', size: 26 }),
      pool(240) + tilt(250, 200, 90, person('mulu', { s: .62, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined' })) + waterFront(248, .6) + speed(140, 160) +
      caption('쭈욱— 미끄러지기'),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(130, 30, '20번!!', { tail: 'bl', size: 36 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'sparkle' }) +
      B(14, 50, '덜 힘들지?', { tail: 'bl', size: 28 }) + B(250, 450, '…진짜네?', { tail: 'none', size: 28 }),
      tipPanel(tilt(250, 170, 90, person('mulu', { s: .5, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'happy' })) + waterFront(210, .5, 330) + speed(150, 140),
        '물루 TIP · 스트로크 수 세기', '25m 동안 팔 젓는 횟수를 세어 보세요.\n손끝을 멀리 뻗어 길게 미끄러지면\n횟수가 줄고 덜 지쳐요. 오늘의 숫자를 기억해 두기!'),
    ] },

  // ════ EP.067 같이 수영할 사람 (앱: 수모임)
  { ep: '067', title: '같이 수영할 사람', teaser: '크루는 바쁘고, 수요일 밤은 혼자',
    cover: { char: { svg: person('mulu', { x: 400, y: 480, s: 1.5, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'happy' }) + person('pro', { x: 700, y: 490, s: 1.4, outfit: 'trunks', cap: true, gog: 'head', arms: 'up', expr: 'smile' }), waistY: 690, ripples: [[400, 690, 200, 60], [700, 700, 190, 56]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'office', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) + swimHead('pro', 760, 760, .9, { expr: 'smile' }),
    panels: [
      office() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'office', arms: 'hold', expr: 'sad', prop: G(PROPS.phone(0, 116, 1.1)) }) +
      caption('수요일 · PM 7:00') + B(90, 60, '오늘은 다들 바쁘대…', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, crewTab(), { tab: '크루' }) + hands(245, 440, 1) +
      caption('물루 앱 · 크루 탭') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, meetList(), { tab: '크루' }) + hands(245, 440, 1) + sparkle(400, 140, 14) +
      caption('「함께 수영해요 🏊」'),
      pool(240) + swimHead('pro', 120, 222, .54, { expr: 'smile' }) + swimHead('mulu', 260, 222, .56, { expr: 'happy' }) + swimHead('guard', 390, 222, .52, { expr: 'happy' }) + waterFront(262) +
      caption('처음 만난 수모임') + B(110, 340, '반갑습니다!', { tail: 'none', size: 32 }),
      pool(240) + swimHead('pro', 120, 222, .54, { gog: 'eyes', expr: 'determined' }) + swimHead('mulu', 260, 222, .56, { gog: 'eyes', expr: 'determined' }) + swimHead('guard', 390, 222, .52, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(200, 300) +
      sfx(245, 120, '하나, 둘!', { size: 44, rot: -6 }),
      lockers() + person('pro', { x: 150, y: 250, s: .74, outfit: 'casual', arms: 'wave', expr: 'smile' }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'office', arms: 'up', expr: 'sparkle' }) +
      B(14, 56, '다음 주에도 와요~', { tail: 'bl', size: 27 }),
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'fist', expr: 'determined' }) + sparkle(110, 140, 14) +
      B(40, 56, '다음엔 내가 「모임 만들기」!', { tail: 'bc', size: 26 }),
      tipPanel(swimHead('pro', 170, 168, .5, { expr: 'smile' }) + swimHead('mulu', 320, 168, .54, { expr: 'happy' }) + waterFront(210, .85, 330),
        '물루 TIP · 수모임 찾기', '물루 앱 크루 탭 → 「🏊 수모임 둘러보기」\n「함께 수영해요 🏊」에서 같이 갈 모임 찾기!\n원하는 모임이 없으면 「모임 만들기」로 직접.'),
    ] },

  // ════ EP.068 자꾸 옆 레인으로
  { ep: '068', title: '자꾸 옆 레인으로', teaser: '똑바로 간 줄 알았는데…',
    cover: { char: swimmer({ expr: 'shock', arms: 'up', gog: 'eyes' }) },
    titleArt: tilt(540, 800, 20, person('mulu', { s: 1.4, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'shock' })),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      caption('자유형 50m') + B(110, 340, '오늘은 직진이다!', { tail: 'none', size: 30 }),
      pool(240) + rope(330) + swimHead('mulu', 330, 320, .6, { gog: 'eyes', expr: 'shock' }) + waterFront(360, .6) +
      sfx(150, 150, '툭!', { size: 56, rot: -8, color: '#E07A5F' }) + B(20, 440, '어? 또 레인줄?', { tail: 'none', size: 28 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 210, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) +
      B(50, 30, '바닥 검은 선 봤어?', { tail: 'bc', size: 28 }),
      underwater() + laneLine(380) + swimHead('mulu', 245, 220, .76, { gog: 'eyes', expr: 'sparkle' }) + bubbles([[120, 160, 10], [380, 150, 8]]) +
      B(60, 40, '이 선 따라가면 되는구나!', { tail: 'none', size: 26 }),
      pool(240) + swimHead('mulu', 300, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(220, 280) + sparkle(400, 120, 14) +
      sfx(150, 140, '쭉—', { size: 56, rot: -6 }),
      underwater() + `<rect x="215" y="380" width="60" height="160" fill="#3F6F86" opacity=".55"/><rect x="170" y="380" width="150" height="24" fill="#3F6F86" opacity=".55"/>` +
      caption('선 끝에 T자가 보이면') + B(130, 200, '곧 벽!', { tail: 'none', size: 40 }),
      poolDeck(400) + person('mulu', { x: 245, y: 210, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'proud' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(110, 30, '50m 직진 성공!', { tail: 'bl', size: 30 }),
      tipPanel(underwater() + laneLine(220) + swimHead('mulu', 245, 160, .5, { gog: 'eyes', expr: 'happy' }),
        '물루 TIP · 똑바로 헤엄치기', '바닥 가운데 검은 선을 보고 따라가요.\n선 끝의 T자 표시가 보이면 곧 벽!\n고개를 너무 들지 말고 시선은 아래로.'),
    ] },
];
