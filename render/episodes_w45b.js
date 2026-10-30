// 물루의 수영일기 EP.041~047 (컷 8장)
const L = require('./w45_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer,
  B, waterFront, tipPanel, swimHead, G, restaurant, shop, poolDeck, capSil, capMesh, bowl, toast, bungeo, signBoard, bigDrop, AP, AM, aT, aBtn, aCard, appPhone, hands } = L;

const appBg = (col = '#EDE7FA') => bg(col) + `<g opacity=".5">${[...Array(10)].map((_, i) => `<circle cx="${(i * 97) % 470 + 10}" cy="${(i * 61) % 500 + 20}" r="${6 + i % 4 * 3}" fill="#fff"/>`).join('')}</g>`;
const ticket = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s}) rotate(-8)">${sh('rect', { x: -34, y: -20, width: 68, height: 40, rx: 6 }, P.yellow, { lw: 2.6 })}${ln('M14,-20 V20', 2, LINE)}</g>`);
const building = (name) => bg('#DCEBFF') + pencil(sh('rect', { x: 60, y: 120, width: 370, height: 330, rx: 10 }, '#F1ECFA', { lw: 3.4 }) + sh('rect', { x: 120, y: 140, width: 250, height: 50, rx: 10 }, P.mint, { lw: 3 }) + sh('rect', { x: 200, y: 330, width: 90, height: 120, rx: 6 }, '#BFD8F2', { lw: 3 }) + sh('rect', { x: -10, y: 450, width: PW + 20, height: 100 }, '#CFC8E6', { lw: 3.4 })) + `<text x="245" y="175" font-family="Gaegu" font-weight="700" font-size="30" fill="${LINE}" text-anchor="middle">${name}</text>`;
const fast = (x, y) => headInWater('pro', { x, y, s: .44, cap: true, gog: 'eyes', expr: 'determined' }).replace(/#B8A6F0/g, '#6E6680') + G(ln(`M${x - 50},${y + 20} h-60 M${x - 46},${y + 36} h-70`, 4, '#fff'));
const balloonSuit = (x, y) => G(ell(x, y, 92, 70, P.purple, { lw: 3.4 }) + ln(`M${x - 80},${y - 6} Q${x},${y + 10} ${x + 80},${y - 6}`, 6, P.mint));
const knee = (x, y) => G(ell(x, y, 10, 7, P.pink, { line: false, hatch: false }));
const forehead = (x, y, w = 60) => G(ln(`M${x - w / 2},${y} Q${x},${y - 8} ${x + w / 2},${y}`, 4, '#F59AAE'));

module.exports = [
  // ════ EP.041 수모 고르기
  { ep: '041', title: '실리콘이냐 메쉬냐', teaser: '수모가 다 거기서 거기라고?',
    cover: { char: swimmer({ expr: 'wink', arms: 'wave', gog: 'head' }) },
    titleArt: person('yoonseul', { x: 540, y: 780, s: 1.4, outfit: 'trend', arms: 'up', expr: 'happy' }) + capSil(330, 900, 1.3, P.pink) + capMesh(760, 900, 1.3, P.mint),
    panels: [
      home('#FFF0F5') + person('yoonseul', { x: 150, y: 240, s: .84, outfit: 'trend', arms: 'up', expr: 'happy' }) + capSil(300, 400, .9, P.pink) + capSil(370, 380, .9, P.yellow) + capMesh(440, 400, .9, P.mint) + capMesh(330, 330, .8, P.sky) +
      caption('윤슬네 집') + B(120, 56, '이번 시즌 수모 하울~♪', { tail: 'bl', size: 28 }),
      home('#FFF0F5') + person('mulu', { x: 150, y: 250, s: .82, outfit: 'casual', arms: 'down', expr: 'flat' }) + person('yoonseul', { x: 360, y: 250, s: .8, outfit: 'trend', arms: 'face', expr: 'shock' }) +
      B(14, 50, '다 거기서 거기 아냐?', { tail: 'bl', size: 27 }) + sfx(380, 140, '!!', { size: 50, rot: 8, color: '#E07A5F' }),
      home('#FFF0F5') + person('yoonseul', { x: 245, y: 240, s: .86, outfit: 'trend', arms: 'hold', expr: 'proud', prop: capSil(0, 130, 1.1, P.pink) }) +
      caption('실리콘 수모') + B(60, 56, '물이 덜 들어와서\n머릿결 지키기 좋고,', { tail: 'bl', size: 26 }),
      home('#FFF0F5') + person('yoonseul', { x: 245, y: 240, s: .86, outfit: 'trend', arms: 'hold', expr: 'wink', prop: capMesh(0, 130, 1.1, P.mint) }) +
      caption('메쉬 수모') + B(80, 56, '메쉬는 가볍고\n덜 답답해!', { tail: 'bl', size: 27 }),
      home('#FFF0F5') + person('mulu', { x: 245, y: 250, s: .9, outfit: 'casual', cap: true, gog: 'none', arms: 'face', expr: 'shock' }) +
      sfx(110, 130, '쫀쫀!', { size: 44, rot: -10 }) + sfx(390, 120, '꽈악', { size: 44, rot: 10, color: '#E07A5F' }) + caption('실리콘 첫 착용'),
      home('#FFF0F5') + person('mulu', { x: 245, y: 250, s: .9, outfit: 'casual', arms: 'face', expr: 'cry' }) + forehead(245, 250 - 40 * .9, 70) +
      sfx(245, 110, '이마에 자국…', { size: 40, rot: -4, color: '#8A8098' }),
      pool(220) + swimHead('mulu', 245, 206, .7, { expr: 'sparkle' }) + waterFront(250) + sparkle(110, 120, 14) + sparkle(390, 110, 12) +
      B(80, 340, '그래도 머리가 하나도 안 젖었어!', { tail: 'none', size: 24 }),
      tipPanel(capSil(170, 260, 1.4, P.pink) + capMesh(320, 260, 1.4, P.mint) + sparkle(245, 110, 14),
        '물루 TIP · 수모 고르기', '실리콘: 물이 덜 들어와 머리카락 보호에 좋아요.\n메쉬: 가볍고 시원해서 처음 쓰기 편해요.\n실리콘은 헹궈 말린 뒤 서로 붙지 않게 보관!'),
    ] },

  // ════ EP.042 수영 끝나고 뭐 먹지 (앱: 스윔푸드)
  { ep: '042', title: '수영 끝나고 뭐 먹지', teaser: '배꼽시계가 먼저 울렸다',
    cover: { char: swimmer({ expr: 'happy', arms: 'up', gog: 'head' }) },
    titleArt: person('mulu', { x: 420, y: 790, s: 1.35, outfit: 'casual', arms: 'hold', expr: 'sparkle', prop: bowl(0, 120, 1) }) + person('yoonseul', { x: 700, y: 790, s: 1.3, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }),
    panels: [
      lockers() + person('mulu', { x: 150, y: 250, s: .8, outfit: 'casual', arms: 'search', expr: 'cry' }) + person('yoonseul', { x: 360, y: 250, s: .78, outfit: 'trend', arms: 'search', expr: 'sad' }) +
      sfx(245, 130, '꼬르르륵', { size: 46, rot: -6, color: '#E07A5F' }) + caption('수영 끝!'),
      street('#FFE3C8') + person('mulu', { x: 140, y: 250, s: .8, outfit: 'casual', arms: 'face', expr: 'worried' }) + person('yoonseul', { x: 350, y: 250, s: .78, outfit: 'trend', arms: 'face', expr: 'worried' }) +
      B(14, 66, '뭐 먹지?', { tail: 'bl', size: 30 }) + B(290, 70, '뭐 먹지…?', { tail: 'br', size: 30 }) + caption('수영장 앞 · 고민 10분'),
      street('#FFE3C8') + person('mulu', { x: 245, y: 240, s: .9, outfit: 'casual', arms: 'hold', expr: 'sparkle', prop: G(PROPS.phone(0, 116, 1.1)) }) + sparkle(110, 120, 14) +
      B(110, 50, '물루 앱에 물어보자!', { tail: 'bl', size: 29 }),
      appBg('#FFF0E2') + appPhone(145, 92, 1.0,
        aT(14, 26, '해오름 수영장', { size: 15, w: 800 }) + aT(14, 46, '소개   커뮤니티', { size: 11, col: '#9A93A8', w: 700 }) + `<rect x="50" y="52" width="58" height="3" rx="1.5" fill="${AP}"/>` +
        aBtn(12, 64, 100, 26, '🍜 스윔푸드', { size: 12 }) +
        aCard(12, 100, 176, 52, '#FFF6EA') + aT(24, 122, '🍲 뜨끈 국밥', { size: 13 }) + aT(24, 141, '걸어서 3분 · 수영인 추천', { size: 10, col: '#8A8098', w: 600 }) +
        aCard(12, 160, 176, 52, '#FFF6EA') + aT(24, 182, '🍞 버터 토스트', { size: 13 }) + aT(24, 201, '걸어서 5분 · 아침 메뉴', { size: 10, col: '#8A8098', w: 600 }) +
        aCard(12, 220, 176, 52, '#FFF6EA') + aT(24, 242, '🥟 손만두', { size: 13 }) + aT(24, 261, '걸어서 7분', { size: 10, col: '#8A8098', w: 600 }),
        { tab: '탐색' }) + hands(245, 440, 1) +
      caption('상세 보기 → 커뮤니티'),
      restaurant() + person('mulu', { x: 150, y: 230, s: .78, outfit: 'casual', arms: 'hold', expr: 'happy' }) + person('yoonseul', { x: 350, y: 230, s: .76, outfit: 'trend', arms: 'hold', expr: 'happy' }) + bowl(150, 400, 1) + bowl(350, 400, 1) +
      sfx(250, 120, '후루룩~', { size: 44, rot: -4 }) + caption('걸어서 3분, 국밥집'),
      restaurant() + person('yoonseul', { x: 300, y: 230, s: .82, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) + bowl(140, 400, 1.2) + person('mulu', { x: 110, y: 270, s: .6, outfit: 'casual', arms: 'hold', expr: 'sparkle' }) +
      B(110, 90, '이건 찍어야 해♪', { tail: 'br', size: 28 }) + sfx(420, 300, '찰칵', { size: 34, rot: 10, color: '#FF9EB8' }),
      street('#C9C3DE') + person('mulu', { x: 150, y: 250, s: .8, outfit: 'casual', arms: 'hold', expr: 'sparkle', prop: bungeo(0, 116, 1) }) +
      appPhone(300, 120, .6, aT(100, 60, '붕어빵 · 수영장 앞', { size: 15, anchor: 'middle' }) + aCard(20, 80, 160, 90, '#FFF6EA') + aBtn(20, 190, 160, 34, '스윔푸드 등록하기', { size: 14 }), { tab: '탐색', plus: false }) +
      caption('집에 가는 길') + B(14, 380, '이것도 등록해야지!', { tail: 'none', size: 26 }),
      tipPanel(bowl(170, 240, 1.4) + toast(320, 240, 1.4) + sparkle(245, 110, 14),
        '물루 TIP · 수영 후 맛집 찾기', '물루 앱 탐색 탭 → 수영장 「상세 보기」\n→ 커뮤니티 → 「🍜 스윔푸드」에서 근처 맛집 확인!\n내 단골집은 「스윔푸드 등록하기」로 나눠요.'),
    ] },

  // ════ EP.043 도장깨기 시작 (앱: 체크인·도장깨기)
  { ep: '043', title: '도장깨기 시작', teaser: '옆 동네 수영장, 첫 방문!',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'casual', arms: 'hold', expr: 'determined', prop: ticket(0, 120, 1.3) }),
    panels: [
      building('새빛 수영장') + person('mulu', { x: 110, y: 330, s: .6, outfit: 'casual', arms: 'wave', expr: 'sparkle', prop: G(PROPS.swimBag(-50, 110, .4)) }) +
      caption('토요일 · 옆 동네') + B(220, 220, '처음 와 보는 수영장!', { tail: 'none', size: 26 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0,
        aCard(10, 12, 180, 70, '#FFFFFF') + `<rect x="10" y="12" width="180" height="70" rx="12" fill="none" stroke="${AM}" stroke-width="2"/>` +
        aT(22, 36, '📍 새빛 수영장', { size: 12 }) + aBtn(22, 46, 156, 26, '인증하기', { col: AM, size: 13 }) +
        aCard(10, 96, 180, 190, '#F3EEFF') + aT(100, 196, '피드', { size: 13, col: '#B9B2C8', anchor: 'middle' }),
        { tab: '피드' }) + hands(245, 440, 1) +
      caption('앱을 여니 배너가 똭') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'hold', expr: 'determined', prop: ticket(-40, 120, 1) + G(PROPS.phone(40, 110, 1)) }) +
      sfx(390, 140, '찰칵', { size: 40, rot: 10, color: '#FF9EB8' }) + caption('GPS + 입장권 사진'),
      appBg() + appPhone(145, 92, 1.0,
        `<circle cx="100" cy="100" r="54" fill="#F3EEFF"/><circle cx="100" cy="100" r="40" fill="none" stroke="${AP}" stroke-width="4" stroke-dasharray="6 5"/>` + aT(100, 108, '새빛', { size: 18, col: AP, anchor: 'middle', w: 800 }) +
        aT(100, 186, '첫 방문!', { size: 24, anchor: 'middle', w: 800 }) + aBtn(40, 206, 120, 32, '+10💧 도장 보상', { col: AM, size: 13 }),
        { tab: '피드', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 16) + sparkle(400, 130, 14) + sparkle(410, 300, 10),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0,
        aT(100, 40, '우리 동네 7곳 중 2곳 도장', { size: 13, anchor: 'middle' }) +
        [...Array(7)].map((_, i) => { const x = 40 + (i % 3) * 60, y = 90 + Math.floor(i / 3) * 70; return `<circle cx="${x}" cy="${y}" r="24" fill="${i < 2 ? AP : '#F3EEFF'}" stroke="${i < 2 ? AP : '#DDD6EA'}" stroke-width="2"/>` + (i < 2 ? aT(x, y + 5, '도장', { size: 11, col: '#fff', anchor: 'middle' }) : aT(x, y + 5, '?', { size: 14, col: '#B9B2C8', anchor: 'middle' })); }).join(''),
        { tab: '탐색', plus: false }) + hands(245, 440, 1) +
      caption('도장판 오픈'),
      street('#FFE9D6') + person('mulu', { x: 245, y: 240, s: .9, outfit: 'casual', arms: 'fist', expr: 'determined' }) + sfx(110, 140, '불끈', { size: 40, rot: -10, color: '#E07A5F' }) +
      B(130, 380, '7곳 다 찍고 만다!', { tail: 'none', size: 30 }),
      garage() + `<g filter="url(#pencil)">${PROPS.car(330, 330, .74)}</g>` + person('dad', { x: 140, y: 240, s: .82, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: PROPS.wrench(0, 116, .8, 10) }) + person('mulu', { x: 380, y: 250, s: .66, outfit: 'casual', arms: 'up', expr: 'sparkle' }) +
      B(14, 120, '…다 돌려면\n차 태워 줄까.', { tail: 'br', size: 26 }),
      tipPanel(ticket(170, 250, 1.6) + bigDrop(330, 250, 30, P.mint) + sparkle(245, 110, 14),
        '물루 TIP · 수영장 도장 모으기', '물루 앱: 수영장 근처 배너 → 「인증하기」\nGPS와 입장권·기록 사진으로 인증하면\n도장과 💧 물루 보상이 함께 쌓여요.'),
    ] },

  // ════ EP.044 레인 고르기
  { ep: '044', title: '나의 레인은 어디', teaser: '상급 레인에 들어가 보았다',
    cover: { char: swimmer({ expr: 'proud', arms: 'fist', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'proud' }) + signBoard(360, 640, '초급', P.mint, 110) + signBoard(540, 600, '중급', P.yellow, 110) + signBoard(720, 640, '상급', P.pink, 110),
    panels: [
      pool(300) + signBoard(90, 90, '초급', P.mint, 110) + signBoard(245, 90, '중급', P.yellow, 110) + signBoard(400, 90, '상급', P.pink, 110) + swimHead('mulu', 245, 286, .6, { expr: 'proud' }) + waterFront(320) +
      caption('새 수영장 · 레인 표지판') + B(110, 150, '오늘은 상급 가 볼까?', { tail: 'bc', size: 26 }),
      pool(200) + signBoard(400, 70, '상급', P.pink, 110) + swimHead('mulu', 245, 186, .7, { gog: 'eyes', expr: 'proud' }) + waterFront(228) +
      sfx(245, 400, '자신만만', { size: 46, rot: -4 }),
      pool(160) + fast(330, 220) + fast(380, 300) + swimHead('mulu', 140, 380, .56, { gog: 'eyes', expr: 'shock' }) + waterFront(410) +
      sfx(330, 120, '촤아아악', { size: 44, rot: -6, color: '#5BB8E0' }) + caption('추월, 또 추월'),
      pool(220) + swimHead('mulu', 245, 210, .72, { gog: 'eyes', expr: 'cry' }) + waterFront(250) + G(path('M60,250 q60,-80 140,-10 q-60,-20 -140,10z', '#fff', { lw: 2.6, hatch: false })) +
      sfx(110, 140, '파도 맛…', { size: 36, rot: -10, color: '#8A8098' }),
      pool(220) + `<g filter="url(#pencil)">${sh('rect', { x: 400, y: 0, width: 100, height: 560 }, '#E5D6C6', { lw: 3.4 })}</g>` + swimHead('mulu', 320, 210, .7, { expr: 'drunk' }) + waterFront(250) + sweat(400, 150) + sweat(240, 160, .8) +
      B(30, 340, '숨이… 숨이…', { tail: 'none', size: 32 }),
      pool(300) + signBoard(245, 70, '중급', P.yellow, 120) + swimHead('mulu', 245, 286, .6, { expr: 'happy' }) + waterFront(320) + sparkle(110, 260, 12) +
      B(130, 140, '여기가 내 자리!', { tail: 'bc', size: 28 }),
      pool(200) + swimHead('pro', 110, 182, .5, { gog: 'eyes', expr: 'smile' }) + swimHead('mulu', 260, 186, .56, { gog: 'eyes', expr: 'happy' }) + swimHead('mom', 400, 182, .5, { gog: 'eyes', expr: 'smile' }).replace(new RegExp(P.purple, 'g'), '#FFD27A') + waterFront(220) + sparkle(260, 100, 12) +
      B(100, 330, '내 속도로 쭉~', { tail: 'none', size: 32 }),
      tipPanel(signBoard(130, 200, '초급', P.mint, 110) + signBoard(245, 160, '중급', P.yellow, 110) + signBoard(360, 200, '상급', P.pink, 110) + sparkle(245, 270, 12),
        '물루 TIP · 내게 맞는 레인 고르기', '레인 표시(초·중·상급)를 먼저 확인해요.\n자꾸 추월당하거나 숨이 차면 한 단계 아래로!\n쉴 땐 벽 구석으로 비켜서 길 터 주기.'),
    ] },

  // ════ EP.045 풀사이드는 걷기
  { ep: '045', title: '풀사이드는 걷기', teaser: '마감 10분 전의 질주',
    cover: { char: swimmer({ expr: 'cry', arms: 'up', gog: 'head' }) },
    titleArt: `<g transform="translate(540,800) rotate(-14) translate(-540,-800)">${person('mulu', { x: 540, y: 780, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'shock' })}</g>`,
    panels: [
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'shock' }) + G(PROPS.alarm(400, 140, 1)) +
      caption('PM 8:50 · 마감 10분 전') + B(20, 60, '한 바퀴만 더!!', { tail: 'bl', size: 30 }),
      poolDeck(440) + `<g transform="translate(245,240) rotate(10)">${person('mulu', { s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'determined' })}</g>` + G(ln('M60,200 h-40 M70,240 h-50 M60,280 h-40', 4, '#B9B6C6')) +
      sfx(120, 400, '다다다닥', { size: 44, rot: -8, color: '#E07A5F' }),
      poolDeck(440) + `<g transform="translate(245,300) rotate(-60)">${person('mulu', { s: .78, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'shock' })}</g>` + G(ell(250, 430, 120, 14, 'rgba(169,221,245,.8)', { lw: 2, hatch: false })) +
      sfx(330, 110, '미끄덩!!', { size: 54, rot: 8, color: '#E07A5F' }),
      poolDeck(440) + person('guard', { x: 360, y: 210, s: .76, outfit: 'guard', arms: 'point', expr: 'angry', flip: true }) + person('mulu', { x: 140, y: 270, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) + knee(128, 270 + 180 * .7) +
      sfx(360, 80, '삐익—!', { size: 40, rot: 8, color: '#E07A5F' }) + B(14, 50, '풀사이드는 걷기!', { tail: 'none', size: 28 }),
      garage() + person('dad', { x: 150, y: 240, s: .82, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: G(PROPS.patch(0, 116, 1.1)) }) + person('mulu', { x: 370, y: 260, s: .7, outfit: 'casual', arms: 'down', expr: 'sad' }) +
      B(14, 110, '…선수 때도 뛰다\n넘어진 놈 많았다.', { tail: 'br', size: 25 }),
      home() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'face', expr: 'sad' }) + G(PROPS.patch(222, 400, .8)) +
      B(80, 56, '다음엔 펭귄처럼 걸을게…', { tail: 'bl', size: 27 }),
      poolDeck(440) + person('mulu', { x: 245, y: 240, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'flat' }) + G(PROPS.patch(222, 395, .7)) +
      sfx(110, 150, '뒤뚱', { size: 40, rot: -10 }) + sfx(390, 150, '뒤뚱', { size: 40, rot: 10 }) + caption('다음 날'),
      tipPanel(person('mulu', { x: 245, y: 170, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'smile' }),
        '물루 TIP · 풀사이드 안전', '물기 있는 바닥은 생각보다 훨씬 미끄러워요.\n풀사이드에선 뛰지 말고 천천히 걷기!\n‘다이빙 금지’ 같은 안전 표지도 꼭 지키기.'),
    ] },

  // ════ EP.046 엄마도 수영 시작
  { ep: '046', title: '엄마도 수영 시작', teaser: '"나도 해 볼까?" 한마디의 시작',
    cover: { char: { svg: person('mom', { x: 540, y: 470, s: 1.9, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }).replace(new RegExp(P.purple, 'g'), '#FF9EB8'), waistY: 700, ripples: [[540, 700, 300, 84]] } },
    titleArt: person('mom', { x: 420, y: 790, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }).replace(new RegExp(P.purple, 'g'), '#FF9EB8') + person('mulu', { x: 700, y: 790, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }),
    panels: [
      home() + person('mom', { x: 150, y: 240, s: .84, outfit: 'apron', arms: 'hold', expr: 'normal', prop: G(PROPS.swimBag(0, 120, .6)) }) + person('mulu', { x: 370, y: 250, s: .76, outfit: 'hoodie', arms: 'face', expr: 'shock' }) +
      caption('어느 저녁') + B(14, 50, '나도 수영 해 볼까?', { tail: 'bl', size: 28 }),
      shop() + person('mom', { x: 150, y: 240, s: .82, outfit: 'apron', arms: 'hold', expr: 'worried', prop: G(path('M-26,90 h52 l-6,70 h-40z', '#FF9EB8')) }) + person('mulu', { x: 360, y: 250, s: .76, outfit: 'casual', arms: 'up', expr: 'sparkle' }) +
      B(14, 46, '너무 화려하지 않니?', { tail: 'bl', size: 25 }) + B(250, 120, '완전 잘 어울려!', { tail: 'br', size: 25 }),
      poolDeck(400) + person('mom', { x: 245, y: 230, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }).replace(new RegExp(P.purple, 'g'), '#FF9EB8') +
      sfx(400, 220, '덜덜', { size: 40, rot: 10, color: '#5BB8E0' }) + caption('얕은 쪽부터') + B(80, 56, '물이 이렇게 넓었니…?', { tail: 'bl', size: 27 }),
      pool(200) + `<g filter="url(#pencil)">${sh('rect', { x: -10, y: 180, width: 70, height: 400 }, '#E5D6C6', { lw: 3.4 })}</g>` + swimHead('mom', 150, 200, .6, { expr: 'determined' }).replace(new RegExp(P.purple, 'g'), '#FF9EB8') + swimHead('mulu', 350, 200, .56, { expr: 'happy' }) + waterFront(236) +
      sfx(170, 380, '첨벙 첨벙', { size: 40, rot: -6, color: '#5BB8E0' }) + B(250, 60, '벽 잡고 발차기부터!', { tail: 'br', size: 24 }),
      pool(200) + `<g transform="translate(245,236)">${G(PROPS.kickboard(0, 0, 1.2, 0, '#FFD27A'))}</g>` + swimHead('mom', 245, 190, .62, { expr: 'sparkle' }).replace(new RegExp(P.purple, 'g'), '#FF9EB8') + waterFront(250, .7) + sparkle(110, 110, 14) + sparkle(390, 100, 14) +
      sfx(245, 420, '떴다!!', { size: 56, rot: -4 }),
      home() + person('mom', { x: 150, y: 240, s: .84, outfit: 'apron', arms: 'up', expr: 'happy' }) + person('dad', { x: 360, y: 240, s: .8, outfit: 'coverall', arms: 'down', expr: 'flat' }) +
      B(14, 46, '여보, 나 물에 떴어!', { tail: 'bl', size: 27 }),
      home() + person('dad', { x: 150, y: 240, s: .82, outfit: 'coverall', arms: 'down', expr: 'proud' }) + person('mom', { x: 370, y: 250, s: .76, outfit: 'apron', arms: 'hold', expr: 'happy' }) + sparkle(400, 120, 12) +
      B(14, 50, '…잘했네.\n무리는 하지 말고.', { tail: 'bl', size: 26 }),
      tipPanel(swimHead('mom', 245, 168, .62, { expr: 'happy' }).replace(new RegExp(P.purple, 'g'), '#FF9EB8') + waterFront(210, .85, 330),
        '물루 TIP · 처음 수영 시작할 때', '처음엔 얕은 곳에서 벽 잡고 발차기부터!\n킥판에 기대 물에 뜨는 느낌을 익혀요.\n초보 강습 반에 등록하면 더 안전하게 배워요.'),
    ] },

  // ════ EP.047 수영복 사이즈
  { ep: '047', title: '넉넉하게 샀더니', teaser: '물에 들어가자 수영복이…',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'casual', arms: 'hold', expr: 'sparkle', prop: G(path('M-40,90 h80 l-10,110 h-60z', P.purple) + ln('M-34,140 H34', 6, P.mint)) }),
    panels: [
      home() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'hoodie', arms: 'hold', expr: 'sparkle', prop: G(PROPS.phone(0, 116, 1.1)) }) +
      caption('온라인 쇼핑') + B(110, 56, '넉넉하게 L로 주문!', { tail: 'bl', size: 30 }),
      home() + G(sh('rect', { x: 320, y: 340, width: 130, height: 90, rx: 6 }, '#E2C29E', { lw: 3.4 })) + person('mulu', { x: 180, y: 240, s: .86, outfit: 'hoodie', arms: 'hold', expr: 'sparkle', prop: G(path('M-34,96 h68 l-8,90 h-52z', P.purple) + ln('M-28,136 H28', 6, P.mint)) }) +
      sfx(380, 200, '도착!', { size: 46, rot: 8 }),
      pool(200) + balloonSuit(245, 310) + swimHead('mulu', 245, 210, .66, { expr: 'shock' }) + waterFront(236, .6) +
      sfx(245, 460, '부풀~', { size: 50, rot: -4, color: P.purpleD }) + caption('입수 1초 후'),
      pool(240) + swimHead('yoonseul', 130, 226, .56, { expr: 'happy' }) + balloonSuit(360, 330) + swimHead('mulu', 360, 236, .56, { expr: 'cry' }) + waterFront(266, .6) +
      B(14, 50, '수영복이 풍선 됐네ㅋㅋ', { tail: 'bl', size: 25 }),
      poolDeck(420) + person('yoonseul', { x: 160, y: 230, s: .8, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'proud' }) + person('mulu', { x: 370, y: 240, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'worried' }) +
      B(14, 46, '수영복은 젖으면\n살짝 늘어나거든!', { tail: 'bl', size: 25 }),
      home() + G(sh('rect', { x: 300, y: 330, width: 140, height: 100, rx: 6 }, '#E2C29E', { lw: 3.4 })) + person('mulu', { x: 170, y: 240, s: .86, outfit: 'hoodie', arms: 'point', expr: 'determined' }) +
      B(110, 56, '교환 신청…\n한 치수 작게!', { tail: 'bl', size: 28 }),
      pool(220) + swimHead('mulu', 330, 202, .6, { gog: 'eyes', expr: 'sparkle' }) + waterFront(240) + G(ln('M250,260 h-120 M260,290 h-150', 4, '#fff')) + sparkle(400, 110, 14) +
      B(40, 360, '딱 맞으니 물살이 다르다!', { tail: 'none', size: 28 }),
      tipPanel(person('mulu', { x: 245, y: 170, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }),
        '물루 TIP · 수영복 사이즈 고르기', '수영복은 물에 젖으면 살짝 늘어나요.\n마른 상태에서 몸에 딱 맞게 고르기!\n처음 사는 브랜드는 사이즈표를 꼭 확인해요.'),
    ] },
];
