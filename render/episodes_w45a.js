// 물루의 수영일기 EP.034~040 (2026-11-02~ 게시분, 컷 8장)
const L = require('./w45_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, hotel, bedroom, restaurant, shop, poolDeck, winter, suitcase, watch, lens, bottleP, bigDrop, flags, ceilingLights, AP, AM, aT, aBtn, aCard, appPhone, hands } = L;

const appBg = (col = '#EDE7FA') => bg(col) + `<g opacity=".5">${[...Array(10)].map((_, i) => `<circle cx="${(i * 97) % 470 + 10}" cy="${(i * 61) % 500 + 20}" r="${6 + i % 4 * 3}" fill="#fff"/>`).join('')}</g>`;
const wall = (x) => pencil(sh('rect', { x, y: -10, width: PW - x + 10, height: PH + 20 }, '#E5D6C6', { lw: 3.4 }) + ln(`M${x + 30},0 V${PH}`, 2, '#CDBCA8'));
const lying = (x, y, s, o = {}) => `<g transform="translate(${x},${y}) rotate(-90)">${person('mulu', { s, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle', ...o })}</g>`;
const diving = (x, y, s, o = {}) => `<g transform="translate(${x},${y}) rotate(90)">${person('mulu', { s, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined', ...o })}</g>`;
const bubbles = (pts) => G(pts.map(([x, y, r]) => ell(x, y, r, r, 'rgba(255,255,255,.75)', { lw: 2.2, hatch: false })).join(''));
const underwater = () => bg('#9ED8EF') + tiles('#BFE6F5', '#A6D6EA', 46, 380, PH) + `<g opacity=".45">${[...Array(7)].map((_, i) => `<path d="M${i * 80 - 20},40 q30,-10 60,0" stroke="#fff" stroke-width="4" fill="none"/>`).join('')}</g>`;

// 앱 화면 — 탐색 탭 지도
const mapScreen = (sheet = false) => {
  let s = `<rect x="0" y="0" width="200" height="304" fill="#E3F4EC"/>` +
    `<path d="M-10,120 Q60,100 120,140 T220,130 M60,-10 Q70,120 40,320 M150,-10 Q140,160 170,320" stroke="#FFFFFF" stroke-width="10" fill="none"/>` +
    `<path d="M0,210 Q80,190 210,230" stroke="#BFE3F5" stroke-width="16" fill="none"/>` +
    aCard(10, 12, 180, 28, '#FFFFFF') + aT(22, 31, '🔍 수영장 검색', { size: 11, col: '#9A93A8', w: 600 }) +
    [[52, 92], [128, 70], [104, 170], [160, 196], [36, 246]].map(([x, y], i) => `<path d="M${x},${y + 12} q-12,-14 -12,-22 a12,12 0 1 1 24,0 q0,8 -12,22z" fill="${i === 2 ? AP : AM}" stroke="#fff" stroke-width="2"/><circle cx="${x}" cy="${y - 10}" r="4" fill="#fff"/>`).join('') +
    `<circle cx="96" cy="140" r="7" fill="#3B82F6" stroke="#fff" stroke-width="3"/>`;
  if (!sheet) s += aBtn(36, 214, 128, 30, '📍 가까운 수영장', { size: 12 });
  else s += `<rect x="0" y="150" width="200" height="160" rx="16" fill="#FFFFFF"/><rect x="84" y="158" width="32" height="4" rx="2" fill="#DDD6EA"/>` +
    aT(16, 188, '바다동 구민수영장', { size: 14, w: 800 }) + aT(16, 208, '25m · 6레인 · 걸어서 8분', { size: 11, col: '#8A8098', w: 600 }) +
    aBtn(16, 222, 80, 30, '팔로우', { col: AM, size: 13 }) + `<rect x="104" y="222" width="80" height="30" rx="15" fill="#fff" stroke="${AP}" stroke-width="2"/>` + aT(144, 242, '상세 보기', { size: 12, col: AP, anchor: 'middle' });
  return s;
};

module.exports = [
  // ════ EP.034 출장지에서도 수영 (앱: 수영장 찾기)
  { ep: '034', title: '출장지에서도 수영', teaser: '낯선 동네, 수영장은 어디에?',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'happy' }), waistY: 710, ripples: [[540, 710, 300, 84], [250, 1040, 40, 14]] } },
    titleArt: person('mulu', { x: 470, y: 780, s: 1.4, outfit: 'office', arms: 'hold', expr: 'determined', prop: G(PROPS.swimBag(0, 128, .7)) }) + suitcase(760, 980, 1.1),
    panels: [
      office() + person('mulu', { x: 330, y: 250, s: .86, outfit: 'office', arms: 'face', expr: 'shock' }) + sweat(420, 190) +
      caption('월요일 · 사무실') + B(20, 70, '다음 주 3일 출장…?', { tail: 'br', size: 28 }) + B(20, 300, '수영은 어떡해?!', { tail: 'none', size: 30 }),
      home() + suitcase(360, 350, .95) + G(PROPS.swimBag(360, 250, .6)) + person('mulu', { x: 160, y: 240, s: .84, outfit: 'hoodie', arms: 'point', expr: 'determined' }) + catchDog({ x: 420, y: 420, s: .42, pose: 'sit', expr: 'normal' }) +
      caption('출장 전날 밤') + B(150, 60, '수영 가방이 1순위!', { tail: 'bl', size: 29 }),
      hotel() + person('mulu', { x: 200, y: 230, s: .84, outfit: 'hoodie', arms: 'hold', expr: 'worried', prop: G(PROPS.phone(0, 116, 1.1)) }) +
      caption('출장지 · 호텔 방') + B(110, 60, '낯선 동네…\n수영장 어디 있지?', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, mapScreen(false), { tab: '탐색' }) + hands(245, 440, 1) + sparkle(110, 300, 12) +
      caption('물루 앱 · 탐색 탭') + sfx(400, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, mapScreen(true), { tab: '탐색' }) + hands(245, 440, 1) + sparkle(400, 130, 14) + sparkle(90, 220, 10) +
      caption('걸어서 8분!') + B(330, 330, '팔로우!', { tail: 'none', size: 28 }),
      street('#FFE3C8') + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'wave', expr: 'happy', prop: G(PROPS.swimBag(-70, 120, .5)) }) + sparkle(400, 90, 14) +
      caption('AM 6:30 · 낯선 아침') + B(130, 60, '지도 따라 직진~', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('pro', 120, 222, .56, { expr: 'smile', gog: 'eyes' }) + swimHead('mulu', 350, 222, .6, { expr: 'happy' }) + waterFront(258) +
      caption('바다동 구민수영장') + B(14, 70, '처음 보는 얼굴이네?', { tail: 'bl', size: 24 }) + B(250, 120, '출장 왔어요!', { tail: 'br', size: 26 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { expr: 'sparkle' }) + waterFront(210, .85, 330) + sparkle(110, 90, 12) + sparkle(380, 80, 12),
        '물루 TIP · 낯선 동네 수영장 찾기', '물루 앱 탐색 탭 → 「📍 가까운 수영장」\n마음에 드는 곳은 「팔로우」로 단골 등록!\n이용 방법은 처음 갈 때 수영장에 꼭 확인해요.'),
    ] },

  // ════ EP.035 배영 첫 도전
  { ep: '035', title: '배영 첫 도전', teaser: '누웠는데 왜 가라앉지?',
    cover: { char: { svg: `<g transform="translate(540,560) rotate(-8)">${person('mulu', { s: 2.0, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'shock' })}</g>`, waistY: 730, ripples: [[540, 730, 300, 84]] } },
    titleArt: person('dad', { x: 360, y: 790, s: 1.25, outfit: 'trunks', arms: 'point', expr: 'flat' }) + person('mulu', { x: 700, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }),
    panels: [
      pool(300) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) +
      caption('토요일 자유수영') + B(140, 60, '오늘은 배영 도전!', { tail: 'bl', size: 30 }),
      pool(160) + lying(270, 300, .72, { expr: 'shock' }) + waterFront(282, .45) + bubbles([[150, 230, 10], [180, 200, 7], [130, 190, 5]]) +
      caption('눕자마자') + sfx(330, 130, '꼬르륵…', { size: 40, rot: 6, color: '#5BB8E0' }),
      pool(240) + swimHead('mulu', 245, 220, .7, { expr: 'cry' }) + waterFront(262) + sfx(380, 380, '콜록콜록', { size: 38, rot: -6, color: '#E07A5F' }) +
      B(130, 70, '코로 물이 다…!', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('dad', { x: 170, y: 230, s: .78, outfit: 'trunks', arms: 'point', expr: 'flat' }) + swimHead('mulu', 390, 400, .5, { expr: 'shock' }) + waterFront(430, .85) +
      caption('마침 아빠 등장') + B(140, 60, '턱 당기고,\n귀까지 물에 담가.', { tail: 'bl', size: 27 }),
      pool(160) + lying(260, 250, .72, { expr: 'sparkle' }) + waterFront(262, .4) + sparkle(110, 110, 14) + sparkle(400, 120, 12) +
      caption('귀까지 퐁당') + sfx(250, 440, '둥실~', { size: 46, rot: -4, color: P.purpleD }),
      ceilingLights() + flags(330) + sparkle(400, 230, 12) +
      caption('배영의 풍경') + B(60, 200, '천장 보면서 수영이라니~', { tail: 'none', size: 28 }),
      pool(200) + wall(400) + swimHead('mulu', 330, 190, .66, { expr: 'cry' }) + waterFront(230, .85) + sfx(420, 120, '콩!', { size: 54, rot: 10, color: '#E07A5F' }) +
      B(14, 300, '깃발 보고 팔 세는 거…\n깜빡했다.', { tail: 'none', size: 28 }) + caption('그리고…'),
      tipPanel(lying(265, 210, .6, { expr: 'happy' }) + waterFront(226, .4, 330) + flags(40),
        '물루 TIP · 배영 처음 할 때', '턱을 살짝 당기고 귀까지 물에 담그면 몸이 떠요.\n배꼽을 수면 쪽으로 밀어 올리는 느낌으로!\n머리 위 깃발이 보이면 벽까지 약 5m, 팔 횟수 세기.'),
    ] },

  // ════ EP.036 쥐가 났다
  { ep: '036', title: '종아리에 쥐가 났다', teaser: '1km 지점, 갑자기 찌릿!',
    cover: { char: swimmer({ expr: 'cry', arms: 'spread', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'search', expr: 'cry' }),
    panels: [
      pool(200) + swimHead('mulu', 330, 182, .6, { gog: 'eyes', expr: 'determined' }) + waterFront(222) + G(ln('M250,240 h-120 M260,270 h-150 M250,300 h-110', 4, '#fff')) +
      caption('PM 8:00 · 목표 1.5km') + sfx(170, 420, '쭉쭉 쭉쭉', { size: 40, rot: -6 }),
      pool(200) + swimHead('mulu', 245, 190, .72, { gog: 'eyes', expr: 'shock' }) + waterFront(232) +
      caption('1km 지점') + sfx(245, 400, '찌릿!!', { size: 66, rot: -8, color: '#E07A5F' }),
      pool(150) + rope(300) + swimHead('mulu', 245, 290, .66, { expr: 'cry' }) + waterFront(320) + `<g filter="url(#pencil)">${ell(170, 302, 14, 14, P.skin, { lw: 3 })}${ell(320, 302, 14, 14, P.skin, { lw: 3 })}</g>` +
      B(80, 70, '종아리가 돌이 됐어…', { tail: 'bc', size: 30 }) + caption('레인 줄 꽉!'),
      poolDeck(330) + person('guard', { x: 140, y: 190, s: .74, outfit: 'guard', arms: 'point', expr: 'normal' }) + swimHead('mulu', 380, 320, .52, { expr: 'worried' }) + waterFront(350) +
      B(200, 60, '발끝을 몸 쪽으로\n천천히 당겨요!', { tail: 'bl', size: 26 }),
      poolDeck(440) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'forward', expr: 'worried' }) + sweat(330, 170) +
      caption('풀사이드에서 쉬는 중') + B(150, 60, '휴… 풀렸다', { tail: 'bl', size: 30 }),
      home() + person('mom', { x: 150, y: 230, s: .86, outfit: 'apron', arms: 'hips', expr: 'angry' }) + person('mulu', { x: 370, y: 260, s: .7, outfit: 'hoodie', arms: 'down', expr: 'sad' }) +
      sfx(330, 120, '버럭!', { size: 46, rot: 8, color: '#E07A5F' }) + B(14, 50, '물도 안 마시고\n1.5km를 해?!', { tail: 'bl', size: 27 }),
      home() + person('mulu', { x: 210, y: 240, s: .84, outfit: 'hoodie', arms: 'hold', expr: 'smile', prop: bottleP(0, 112, .9) }) + catchDog({ x: 390, y: 330, s: .55, pose: 'sit', expr: 'happy' }) +
      B(110, 60, '다음엔 물병부터 챙길게…', { tail: 'bl', size: 26 }) + B(330, 220, '멍!', { tail: 'bc', size: 30 }),
      tipPanel(person('mulu', { x: 245, y: 170, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'smile' }),
        '물루 TIP · 수영 중 쥐가 나면', '바로 멈추고 벽이나 레인 줄을 잡아요.\n발끝을 몸 쪽으로 천천히 당겨 근육 펴 주기.\n물 자주 마시기! 자주 반복되면 진료 받아 보기.'),
    ] },

  // ════ EP.037 준비운동 5분
  { ep: '037', title: '준비운동 5분', teaser: '추운 아침, 몸이 삐걱삐걱',
    cover: { char: swimmer({ expr: 'flat', arms: 'spread', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'determined' }),
    panels: [
      winter() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'hold', expr: 'flat' }) + sfx(380, 200, '덜덜', { size: 44, rot: 8, color: '#5BB8E0' }) +
      caption('AM 6:20 · 아침 기온 2도') + B(110, 60, '이불 밖은 위험해…', { tail: 'bl', size: 29 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .86, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + sfx(400, 420, '휘리릭', { size: 36, rot: 6 }) +
      B(80, 60, '추우니까 바로 들어가자!', { tail: 'bl', size: 28 }),
      pool(220) + swimHead('mulu', 245, 210, .74, { expr: 'shock' }) + waterFront(254) + sfx(245, 120, '으으 차가워!', { size: 42, rot: -4, color: '#5BB8E0' }) +
      caption('곧바로 입수'),
      pool(220) + swimHead('mulu', 245, 210, .74, { expr: 'worried' }) + waterFront(254) +
      sfx(390, 330, '삐걱', { size: 44, rot: 10, color: '#8A8098' }) + B(110, 60, '어깨가 안 돌아가…', { tail: 'bl', size: 29 }),
      poolDeck(430) + person('pro', { x: 120, y: 220, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) + person('mom', { x: 370, y: 225, s: .68, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'smile' }).replace(new RegExp(P.purple, 'g'), '#FF9EB8') +
      caption('옆 레인 어르신들') + B(130, 60, '체조부터 해야지~', { tail: 'bc', size: 28 }),
      poolDeck(430) + person('pro', { x: 110, y: 220, s: .62, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'happy' }) + person('mulu', { x: 280, y: 220, s: .66, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'determined' }) +
      sfx(250, 90, '하나, 둘! 하나, 둘!', { size: 36, rot: -3 }) + caption('5분 체조'),
      pool(200) + swimHead('mulu', 330, 182, .6, { gog: 'eyes', expr: 'happy' }) + waterFront(222) + G(ln('M250,240 h-120 M260,270 h-140', 4, '#fff')) + sparkle(100, 330, 12) +
      B(100, 330, '몸이 술술 풀린다!', { tail: 'none', size: 30 }),
      tipPanel(person('mulu', { x: 245, y: 170, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) + sparkle(110, 80, 12),
        '물루 TIP · 추운 날 준비운동', '추운 날일수록 몸이 굳어 있어요.\n입수 전 5분: 목·어깨 돌리기, 팔 크게 돌리기,\n발목 돌리기, 가볍게 제자리 뛰기!'),
    ] },

  // ════ EP.038 몇 바퀴였더라 (앱: 워치·건강 앱)
  { ep: '038', title: '몇 바퀴였더라', teaser: '세다가 까먹은 오늘의 거리',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + watch(540 - 106, 470 + 6, 1.2, ''), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) + watch(470, 650, 1.6, '?'),
    panels: [
      home() + person('mulu', { x: 220, y: 240, s: .86, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) + watch(340, 150, 1.4, '00:00') + sparkle(420, 90, 14) +
      caption('새 워치 개시') + B(40, 50, '오늘부터 워치 차고 수영!', { tail: 'bl', size: 27 }),
      pool(200) + swimHead('mulu', 330, 182, .6, { gog: 'eyes', expr: 'determined' }) + waterFront(222) +
      sfx(150, 340, '열하나…', { size: 34, rot: -6 }) + sfx(300, 420, '열둘…?', { size: 34, rot: 4 }) + caption('왕복 세는 중'),
      pool(220) + swimHead('mulu', 245, 210, .72, { expr: 'worried' }) + waterFront(254) +
      sfx(110, 120, '13?', { size: 40, rot: -10, color: '#8A8098' }) + sfx(380, 110, '15?', { size: 40, rot: 10, color: '#8A8098' }) + B(110, 360, '몇 바퀴였더라…?', { tail: 'none', size: 30 }),
      lockers() + person('yoonseul', { x: 130, y: 240, s: .8, outfit: 'trend', arms: 'point', expr: 'wink' }) + person('mulu', { x: 360, y: 250, s: .8, outfit: 'hoodie', arms: 'face', expr: 'cry' }) +
      B(20, 50, '워치에 다 찍혀 있잖아~', { tail: 'bl', size: 26 }),
      appBg() + appPhone(145, 92, 1.0,
        aCard(12, 44, 176, 60, '#F3EEFF') + aT(24, 68, '김물루', { size: 14, w: 800 }) + aT(24, 88, '수심 Lv.3', { size: 11, col: '#8A8098', w: 600 }) +
        aCard(12, 116, 176, 110, '#E6FBF8') + aT(100, 146, '워치에 있는 수영도', { size: 12, anchor: 'middle' }) + aT(100, 166, '💧 물루로 쌓여요', { size: 12, anchor: 'middle' }) + aBtn(56, 182, 88, 30, '연결', { col: AM, size: 13 }),
        { tab: '내정보', title: '내정보' }) + hands(245, 440, 1) +
      caption('물루 앱 · 내정보') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0,
        aCard(12, 44, 176, 70, '#E6FBF8') + aT(24, 68, '⌚ 워치·건강 앱', { size: 12, col: '#0E9F93' }) + aBtn(24, 78, 152, 28, '지금 가져오기', { size: 12 }) +
        aCard(12, 126, 176, 84, '#FFFFFF') + `<rect x="12" y="126" width="176" height="84" rx="12" fill="none" stroke="#E5E0F2" stroke-width="1.5"/>` +
        aT(24, 152, '🏊 자유수영', { size: 12 }) + aT(24, 182, '1,250m', { size: 22, col: AP, w: 800 }) + aT(176, 182, '42분', { size: 13, col: '#8A8098', anchor: 'end' }),
        { tab: '내정보', title: '내정보' }) + hands(245, 440, 1) + sparkle(400, 140, 14) +
      caption('지금 가져오기!'),
      home() + person('mulu', { x: 245, y: 240, s: .86, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) + bigDrop(110, 140, 22) + bigDrop(390, 120, 18, P.mint) +
      B(70, 330, '1,250m! 생각보다\n더 했잖아?!', { tail: 'none', size: 28 }),
      tipPanel(person('mulu', { x: 245, y: 170, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'happy' }) + watch(170, 150, 1.1, '1,250m'),
        '물루 TIP · 워치 수영도 쌓기', '물루 앱 내정보 탭 → 「연결」로 워치·건강 앱 연결\n앱을 열고 「지금 가져오기」를 누르면\n워치에 찍힌 수영이 💧 물루로 쌓여요.'),
    ] },

  // ════ EP.039 렌즈 낀 채로?
  { ep: '039', title: '렌즈 낀 채로?', teaser: '입수 직전, 윤슬의 다급한 외침',
    cover: { char: swimmer({ expr: 'shock', arms: 'face', gog: 'eyes' }) },
    titleArt: person('yoonseul', { x: 380, y: 790, s: 1.3, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'shock' }) + person('mulu', { x: 700, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }),
    panels: [
      bedroom() + person('mulu', { x: 220, y: 230, s: .86, outfit: 'casual', arms: 'face', expr: 'normal' }) + lens(205, 238, .9) + G(PROPS.swimBag(400, 400, .5)) +
      caption('AM 6:10') + B(130, 60, '렌즈 끼고 출발!', { tail: 'bl', size: 30 }),
      lockers() + person('yoonseul', { x: 140, y: 240, s: .8, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'shock' }) + person('mulu', { x: 360, y: 250, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'normal' }) +
      sfx(250, 110, '잠깐!!', { size: 50, rot: -6, color: '#E07A5F' }) + B(20, 420, '렌즈 낀 채로 들어가게?', { tail: 'none', size: 26 }),
      lockers() + person('mulu', { x: 245, y: 230, s: .92, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) + sweat(340, 170) +
      B(140, 60, '안 되는 거야…?', { tail: 'bl', size: 30 }),
      lockers() + person('yoonseul', { x: 150, y: 250, s: .8, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hips', expr: 'normal' }) + person('mulu', { x: 370, y: 260, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'worried' }) +
      B(20, 50, '수영장 물이 렌즈에 스며들면\n눈에 탈이 날 수 있대.', { tail: 'bl', size: 24 }),
      lockers() + person('yoonseul', { x: 245, y: 230, s: .9, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'none', arms: 'hold', expr: 'wink', prop: G(PROPS.goggles(0, 112, 1.3)) }) + sparkle(160, 330, 14) + sparkle(340, 320, 12) +
      caption('윤슬의 비밀템') + B(140, 60, '그래서 난 도수 수경!', { tail: 'bl', size: 28 }),
      shop() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'point', expr: 'sparkle' }) + G(PROPS.goggles(80, 160, 1) + PROPS.goggles(400, 160, 1) + PROPS.goggles(80, 260, 1)) +
      caption('주말 · 수영용품점') + B(130, 330, '도수 수경 주세요!', { tail: 'none', size: 30 }),
      underwater() + `<g transform="translate(245,230)">${person('mulu', { s: .8, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle', body: false })}</g>` + bubbles([[150, 120, 10], [130, 80, 6], [360, 100, 8]]) +
      B(90, 380, '바닥 타일까지 다 보여!', { tail: 'none', size: 28 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'sparkle' }) + waterFront(210, .85, 330),
        '물루 TIP · 렌즈 끼고 수영?', '렌즈를 낀 채 수영하면 눈 감염 위험이 커져요.\n렌즈는 빼고, 잘 안 보이면 도수 수경 쓰기!\n수영 후 눈이 계속 아프거나 빨개지면 안과 진료.'),
    ] },

  // ════ EP.040 잠영 욕심
  { ep: '040', title: '잠영 욕심', teaser: '25m 한 번에 가 볼까?',
    cover: { char: { svg: `<g opacity=".95">${person('mulu', { x: 540, y: 520, s: 2.0, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined' })}</g>`, waistY: 520, ripples: [[540, 520, 260, 70], [420, 300, 30, 10], [640, 260, 24, 8]] } },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'eyes', arms: 'fist', expr: 'determined' }),
    panels: [
      pool(300) + person('yoonseul', { x: 150, y: 220, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) + person('mulu', { x: 360, y: 220, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'sparkle' }) +
      B(14, 60, '잠영 사진 대박이지?', { tail: 'bl', size: 26 }),
      pool(300) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'eyes', arms: 'fist', expr: 'determined' }) +
      B(130, 60, '나도 25m 잠영 간다!', { tail: 'bl', size: 29 }),
      pool(240) + swimHead('mulu', 245, 220, .74, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      sfx(110, 120, '후욱', { size: 38, rot: -10 }) + sfx(380, 110, '후욱', { size: 38, rot: 10 }) + sfx(245, 420, '후욱 후욱', { size: 40, rot: -3 }) + caption('숨 몰아쉬기 10번'),
      underwater() + diving(270, 220, .64) + bubbles([[80, 210, 9], [60, 180, 6], [100, 160, 5]]) + G(ln('M40,250 h-40 M50,280 h-50', 4, '#fff')) +
      caption('물속으로 쭈욱'),
      underwater() + `<g transform="translate(245,230)">${person('mulu', { s: .8, outfit: 'swim', cap: true, gog: 'none', arms: 'up', expr: 'drunk', body: false })}</g>` + bubbles([[150, 120, 10], [360, 110, 8]]) +
      sfx(245, 420, '어질…', { size: 50, rot: -6, color: '#8A8098' }),
      poolDeck(330) + person('guard', { x: 140, y: 190, s: .74, outfit: 'guard', arms: 'point', expr: 'angry' }) + swimHead('mulu', 380, 320, .52, { expr: 'cry' }) + waterFront(350) +
      sfx(380, 120, '삐익—!', { size: 44, rot: 8, color: '#E07A5F' }) + B(14, 440, '잠영은 무리하면 위험해요!', { tail: 'none', size: 26 }),
      poolDeck(420) + person('yoonseul', { x: 150, y: 220, s: .72, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hold', expr: 'smile' }) + person('mulu', { x: 340, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'sad' }) +
      B(14, 50, '짧게, 서로 봐 주면서 하자', { tail: 'bl', size: 24 }) + B(330, 110, '응…', { tail: 'bc', size: 28 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { expr: 'smile' }) + waterFront(210, .85, 330),
        '물루 TIP · 잠영은 짧게', '잠영 전에 숨을 여러 번 몰아쉬면 오히려 위험해요.\n짧은 거리부터, 꼭 다른 사람이 보는 곳에서!\n어지럽거나 답답하면 바로 올라오기.'),
    ] },
];
