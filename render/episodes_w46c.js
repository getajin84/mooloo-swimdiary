// 물루의 수영일기 EP.069~075 (컷 8장)
const L = require('./w46_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, bedroom, poolDeck, winter, heart, AP, AM, aT, aBtn, aCard, appPhone, hands,
  PINK, appBg, bubbles, tilt, sauna, stairs, desk, diveBlock, sign, bottleW, bag, stink, avatarFig, row } = L;

const speed = (x, y) => G(ln(`M${x},${y} h-90 M${x + 10},${y + 30} h-120 M${x},${y + 60} h-80`, 4, '#fff'));
const steam = (x, y) => `<g opacity=".7">${[0, 1, 2].map(i => `<path d="M${x + i * 40},${y} q-12,-16 0,-32 q12,-16 0,-32" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
const suit = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-30,-50 l12,0 q18,16 36,0 l12,0 q-6,40 4,70 q-34,16 -68,0 q10,-30 4,-70z', P.purple)}${ln('M-26,0 Q0,12 26,0', 4, P.mint)}</g>`);
const rack = () => G(ln('M40,120 H450', 4) + ln('M60,120 L40,420 M430,120 L450,420', 4));
const clock = (x, y, t) => G(ell(x, y, 34, 34, '#fff', { lw: 3 })) + G(ln(`M${x},${y} V${y - 22} M${x},${y} L${x + 16},${y + 8}`, 3)) + `<text x="${x}" y="${y + 60}" font-family="Gaegu" font-weight="700" font-size="24" fill="${LINE}" text-anchor="middle">${t}</text>`;
const beanie = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-66,-6 Q-70,-84 0,-86 Q70,-84 66,-6 Q0,-22 -66,-6Z', AM, { lw: 3.4 })}${ell(0, -90, 14, 12, '#fff', { lw: 3 })}${ln('M-60,-14 Q0,-30 60,-14', 5, '#fff')}</g>`);

// 앱 화면 — 내정보
const myInfo = (hi, deco = false) => aT(14, 28, '내정보', { size: 15, w: 800 }) +
  `<circle cx="100" cy="88" r="40" fill="#F3EEFF"/>` + avatarFig(100, 84, .7, { hat: deco, scarf: deco }) +
  aT(100, 164, '김물루', { size: 14, anchor: 'middle', w: 800 }) +
  aBtn(12, 176, 176, 32, '내 한 해 기록', { col: hi === 0 ? AP : '#F3EEFF', tc: hi === 0 ? '#fff' : AP, size: 13 }) +
  aBtn(12, 216, 176, 32, '꾸미기', { col: hi === 1 ? AP : '#F3EEFF', tc: hi === 1 ? '#fff' : AP, size: 13 });
const decoScreen = (deco = false) => aT(14, 28, '꾸미기', { size: 15, w: 800 }) +
  `<rect x="12" y="40" width="176" height="150" rx="14" fill="#F1FBF9"/>` + avatarFig(100, 108, 1.3, { hat: deco, scarf: deco }) +
  [0, 1, 2, 3].map(i => `<rect x="${16 + i * 44}" y="202" width="36" height="36" rx="10" fill="${i < 2 && deco ? '#E6FBF8' : '#F3EEFF'}" stroke="${i < 2 && deco ? AM : '#E5E0F2'}" stroke-width="2"/>`).join('') +
  `<path d="M24,228 Q26,210 34,210 Q42,210 44,228Z" fill="${AM}"/><circle cx="34" cy="208" r="3" fill="#fff"/>` + `<path d="M64,214 Q78,222 92,214 L90,222 Q78,230 66,222Z" fill="#FF9EB8"/>` +
  `<circle cx="122" cy="220" r="9" fill="${P.yellow}"/>` + `<path d="M158,226 l8,-14 l8,14z" fill="${P.purple}"/>`;
const yearRec = () => `<rect width="200" height="304" fill="#F6F4FA"/>` + aT(100, 32, '내 한 해 기록', { size: 15, anchor: 'middle', w: 800 }) +
  aT(100, 60, '2026', { size: 12, anchor: 'middle', col: '#8A8098', w: 700 }) +
  aCard(12, 72, 176, 70, '#FFFFFF') + aT(100, 116, '172km', { size: 30, col: AP, anchor: 'middle', w: 800 }) +
  row(152, '수영한 날', '186일', { col: '#FFFFFF' }) + row(190, '가장 많이 간 곳', '해오름', { col: '#FFFFFF', rc: '#0E9F93' }) +
  [...Array(12)].map((_, i) => `<rect x="${18 + i * 14}" y="${276 - [8, 10, 12, 14, 16, 18, 20, 22, 20, 24, 26, 14][i]}" width="9" height="${[8, 10, 12, 14, 16, 18, 20, 22, 20, 24, 26, 14][i]}" rx="2" fill="${i === 11 ? AM : '#DCD3F7'}"/>`).join('');

module.exports = [
  // ════ EP.069 가방 속 미스터리
  { ep: '069', title: '가방 속 미스터리', teaser: '캐치가 코를 막았다',
    cover: { char: { svg: catchDog({ x: 540, y: 560, s: 2.1, pose: 'sit', expr: 'normal' }), waistY: 720, ripples: [[540, 720, 280, 84]] } },
    titleArt: catchDog({ x: 400, y: 820, s: 1.2, pose: 'sit', expr: 'normal' }) + bag(700, 900, 1.6) + stink(670, 790),
    panels: [
      home() + bag(330, 380, .9) + stink(300, 320) + catchDog({ x: 170, y: 330, s: .7, pose: 'sit', expr: 'normal' }) +
      caption('월요일 저녁') + B(110, 120, '멍…?', { tail: 'bl', size: 30 }),
      home() + bag(330, 380, .9) + stink(290, 320) + stink(360, 300) + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'face', expr: 'shock' }) +
      sfx(380, 150, '으악!', { size: 52, rot: 10, color: '#7FA05A' }),
      home() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'hoodie', arms: 'face', expr: 'cry' }) + suit(400, 380, .9) +
      caption('토요일 수영복이 그대로…'),
      home() + PINK(person('mom', { x: 245, y: 250, s: .86, outfit: 'apron', arms: 'hips', expr: 'angry' })) +
      B(50, 56, '젖은 건 바로 꺼내랬지!', { tail: 'bc', size: 29 }),
      home('#EEF6FF') + G(path('M260,330 h200 v40 h-200z', '#FFFFFF')) + PROPS.shower(380, 200, 1) + person('mulu', { x: 170, y: 240, s: .84, outfit: 'hoodie', arms: 'hold', expr: 'determined' }) + suit(380, 330, .7) +
      caption('찬물에 조물조물 헹구고'),
      home() + rack() + suit(160, 190, 1) + G(path('M300,140 q40,-10 80,0 l-6,60 q-34,-10 -68,0z', P.yellow)) + catchDog({ x: 380, y: 360, s: .5, pose: 'sit', expr: 'happy' }) +
      caption('그늘에서 바람 솔솔') + B(240, 250, '멍!', { tail: 'bc', size: 28 }),
      home() + bag(330, 380, .9) + G(ln('M282,368 l-20,-30 M378,368 l20,-30', 4)) + person('mulu', { x: 150, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'proud' }) + catchDog({ x: 420, y: 260, s: .4, pose: 'sit', expr: 'happy' }) +
      B(60, 56, '가방도 활짝 열어서 말리기!', { tail: 'bl', size: 25 }),
      tipPanel(bag(160, 230, 1) + catchDog({ x: 330, y: 170, s: .55, pose: 'sit', expr: 'happy' }) + sparkle(250, 100, 12),
        '물루 TIP · 수영 가방 냄새', '젖은 수영복·수건은 집에 오자마자 꺼내기!\n찬물에 헹궈 그늘에서 말리고,\n가방도 지퍼를 열어 바람이 통하게 해요.'),
    ] },

  // ════ EP.070 다이빙의 꿈
  { ep: '070', title: '다이빙의 꿈', teaser: '선수처럼 스타트대에서 슝?',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: diveBlock(540, 945, '3') + person('mulu', { x: 540, y: 710, s: 1.2, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle' }),
    panels: [
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) + sparkle(110, 140, 14) +
      caption('수영 경기 영상 보다가') + B(40, 56, '나도 다이빙 해 보고 싶다!', { tail: 'bc', size: 26 }),
      poolDeck(400) + sign(370, 60, '다이빙 금지', '#FFD6D6', 180) + person('mulu', { x: 180, y: 220, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'shock' }) +
      sfx(380, 200, '앗', { size: 50, rot: 10, color: '#E07A5F' }),
      poolDeck(400) + person('guard', { x: 245, y: 220, s: .82, outfit: 'guard', arms: 'point', expr: 'flat' }) +
      sfx(110, 120, '삐익!', { size: 48, rot: -10, color: '#E07A5F' }) + B(180, 60, '여기선 안 돼요!', { tail: 'bl', size: 27 }),
      poolDeck(400) + person('guard', { x: 140, y: 220, s: .74, outfit: 'guard', arms: 'hips', expr: 'normal' }) + person('mulu', { x: 360, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'sad' }) +
      B(14, 40, '수심이 얕으면\n크게 다칠 수 있어요.', { tail: 'bl', size: 24 }),
      garage() + person('dad', { x: 245, y: 250, s: .84, outfit: 'coverall', arms: 'point', expr: 'flat' }) +
      caption('그날 저녁') + B(40, 120, '다이빙은 허용된 곳에서,\n제대로 배우고.', { tail: 'bc', size: 25 }),
      poolDeck(400) + sign(245, 60, '다이빙 연습 구역 · 수심 확인', '#E6FBF8', 330) + diveBlock(245, 330, '3') + person('mulu', { x: 245, y: 194, s: .66, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined' }) +
      caption('배울 수 있는 곳에서', 16, 480),
      pool(240) + swimHead('mulu', 245, 222, .7, { gog: 'eyes', expr: 'cry', blushStrong: true }) + waterFront(262) + G(path('M120,250 q-20,-60 0,-90 q10,40 30,50 q4,-60 26,-70 q4,50 14,70z', '#fff', { lw: 2.6, hatch: false })) +
      sfx(380, 140, '철퍼덕!', { size: 46, rot: 10, color: '#E07A5F' }) + B(80, 360, '배가… 따끔…', { tail: 'none', size: 30 }),
      tipPanel(diveBlock(160, 220, '3') + person('mulu', { x: 330, y: 170, s: .6, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }),
        '물루 TIP · 다이빙은 허용된 곳에서', '다이빙 금지 표시가 있는 곳에선 절대 뛰어들지 않기.\n수심이 충분한 허용 구역에서, 지도를 받으며 배워요.\n처음엔 앉아서 입수하기부터 차근차근.'),
    ] },

  // ════ EP.071 계단이 무서워
  { ep: '071', title: '계단이 무서워', teaser: '어제는 발차기 특훈, 오늘은…',
    cover: { char: swimmer({ expr: 'cry', arms: 'hips', gog: 'head' }) },
    titleArt: tilt(540, 800, 10, person('mulu', { s: 1.4, outfit: 'office', arms: 'spread', expr: 'cry' })),
    panels: [
      pool(240) + G(PROPS.kickboard(200, 250, .9, 0)) + swimHead('mulu', 290, 222, .56, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(160, 300) +
      caption('어제 · 발차기 특훈') + sfx(330, 130, '파바바박', { size: 42, rot: 8 }),
      bedroom() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'hips', expr: 'shock' }) + sweat(340, 170) +
      caption('다음 날 아침') + sfx(110, 150, '끄응…', { size: 44, rot: -10 }),
      stairs() + tilt(245, 240, 12, person('mulu', { s: .82, outfit: 'office', arms: 'spread', expr: 'cry' })) + sweat(340, 150) +
      caption('지하철역 계단') + B(150, 440, '다리가… 안 올라가…', { tail: 'none', size: 26 }),
      office() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'office', arms: 'hips', expr: 'cry' }) +
      sfx(390, 200, '으윽', { size: 44, rot: 10, color: '#E07A5F' }) + B(30, 420, '앉았다 일어나기가 제일 힘들어', { tail: 'none', size: 24 }),
      home() + PINK(person('mom', { x: 245, y: 250, s: .86, outfit: 'apron', arms: 'hips', expr: 'angry' })) +
      B(40, 56, '그러게 무리하지 말랬지!\n오늘은 쉬어!', { tail: 'bc', size: 27 }),
      home() + tilt(200, 360, -90, person('mulu', { s: .66, outfit: 'hoodie', arms: 'up', expr: 'sleepy' })) + catchDog({ x: 390, y: 320, s: .5, pose: 'sit', expr: 'happy' }) +
      caption('가볍게 쭉쭉 스트레칭') + B(330, 170, '멍!', { tail: 'bc', size: 28 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'happy' }) + waterFront(262) + sparkle(110, 120, 12) +
      caption('이틀 뒤 · 살살 회복 수영') + B(100, 340, '몸이 다시 가볍다~', { tail: 'none', size: 29 }),
      tipPanel(tilt(250, 200, -90, person('mulu', { s: .5, outfit: 'hoodie', arms: 'up', expr: 'happy' })) + sparkle(110, 90, 12),
        '물루 TIP · 근육통 다음 날', '운동량을 갑자기 늘리면 1~2일 뒤 근육통이 와요.\n다음 날엔 걷기·스트레칭·살살 수영 정도로!\n통증이 심하거나 오래가면 진료 받아 보기.'),
    ] },

  // ════ EP.072 내 아바타 꾸미기 (앱: 꾸미기)
  { ep: '072', title: '내 아바타 꾸미기', teaser: '윤슬: 그게 최선이야?',
    cover: { char: { svg: person('yoonseul', { x: 540, y: 470, s: 2.0, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'wink' }), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 400, y: 790, s: 1.3, outfit: 'casual', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) + avatarFig(740, 740, 2.6, { hat: true, scarf: true }),
    panels: [
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'hold', expr: 'normal', prop: G(PROPS.phone(0, 116, 1)) }) + person('yoonseul', { x: 350, y: 250, s: .78, outfit: 'trend', arms: 'point', expr: 'shock' }) +
      caption('수영 끝 · 탈의실') + B(170, 60, '아바타 그대로야?!', { tail: 'br', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, myInfo(1, false), { tab: '내정보' }) + hands(245, 440, 1) +
      caption('물루 앱 · 내정보 탭') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, decoScreen(false), { tab: '내정보', plus: false }) + hands(245, 440, 1) +
      caption('「꾸미기」'),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'hold', expr: 'worried', prop: G(PROPS.phone(0, 116, 1)) }) + person('yoonseul', { x: 350, y: 250, s: .78, outfit: 'trend', arms: 'up', expr: 'sparkle' }) + sparkle(430, 130, 12) +
      B(130, 50, '민트 비니에 핑크 목도리!\n겨울 느낌 완성♪', { tail: 'br', size: 24 }),
      appBg('#FFF0F5') + appPhone(145, 92, 1.0, decoScreen(true), { tab: '내정보', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      sfx(410, 330, '완성!', { size: 42, rot: 10, color: '#0E9F93' }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'face', expr: 'flat' }) + person('yoonseul', { x: 350, y: 250, s: .78, outfit: 'trend', arms: 'hips', expr: 'wink' }) +
      B(14, 50, '삐침머리가 모자를 뚫었어?', { tail: 'bl', size: 24 }) + B(200, 440, '그게 너의 시그니처야♪', { tail: 'none', size: 24 }),
      home() + beanie(330, 236, .62) + PINK(person('mom', { x: 130, y: 250, s: .76, outfit: 'apron', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) })) + person('mulu', { x: 330, y: 250, s: .76, outfit: 'hoodie', arms: 'up', expr: 'happy', cap: false }) + beanie(330, 236, .62) +
      caption('엄마 반응') + B(14, 56, '어머, 진짜 우리 딸이네!', { tail: 'bl', size: 25 }),
      tipPanel(avatarFig(160, 190, 1.6, { hat: true, scarf: true }) + person('mulu', { x: 340, y: 170, s: .58, outfit: 'casual', arms: 'wave', expr: 'happy' }),
        '물루 TIP · 아바타 꾸미기', '물루 앱 내정보 탭 → 「꾸미기」\n아바타를 내 스타일로 꾸며 보세요.\n계절마다 바꿔 입히는 재미도 쏠쏠!'),
    ] },

  // ════ EP.073 뜨끈한 탕의 유혹
  { ep: '073', title: '뜨끈한 탕의 유혹', teaser: '수영 끝, 딱 10분만…',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'down', gog: 'head', blushStrong: true }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'sleepy', blushStrong: true }) + steam(300, 880) + steam(680, 880),
    panels: [
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'swim', cap: true, gog: 'head', arms: 'hips', expr: 'happy' }) +
      caption('PM 8:30 · 수영 끝') + B(80, 56, '추우니까 탕 잠깐만~', { tail: 'bc', size: 28 }),
      sauna() + swimHead('mulu', 245, 310, .7, { gog: 'none', cap: false, expr: 'happy', blushStrong: true }) + waterFront(350, .9).replace(P.sky, '#F4B9A4') + steam(160, 220) +
      sfx(380, 140, '아~ 좋다', { size: 42, rot: 8 }),
      sauna() + swimHead('mulu', 245, 310, .7, { gog: 'none', cap: false, expr: 'sleepy', blushStrong: true }) + waterFront(350, .9).replace(P.sky, '#F4B9A4') + steam(160, 220) + clock(400, 100, '20분째') +
      caption('시간이 흘러…'),
      lockers() + tilt(245, 240, -8, person('mulu', { s: .86, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'drunk', blushStrong: true })) + sweat(340, 150) +
      sfx(110, 150, '핑…', { size: 52, rot: -10 }),
      lockers() + person('mulu', { x: 140, y: 270, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'sleepy', blushStrong: true }) + person('yoonseul', { x: 350, y: 250, s: .78, outfit: 'trend', arms: 'hold', expr: 'worried', prop: bottleW(0, 110, .7) }) +
      B(200, 56, '일단 앉아서 물부터!', { tail: 'br', size: 26 }),
      lockers() + person('mulu', { x: 140, y: 270, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'smile', prop: bottleW(0, 110, .6) }) + person('yoonseul', { x: 350, y: 250, s: .78, outfit: 'trend', arms: 'point', expr: 'smile' }) +
      B(130, 40, '운동하고 바로 오래 있으면\n어지러울 수 있대.', { tail: 'br', size: 23 }),
      home() + PINK(person('mom', { x: 150, y: 250, s: .76, outfit: 'apron', arms: 'point', expr: 'worried' })) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'hoodie', arms: 'hold', expr: 'smile', prop: bottleW(0, 110, .6) }) +
      B(14, 56, '탕은 짧게! 알았지?', { tail: 'bl', size: 28 }),
      tipPanel(swimHead('mulu', 245, 190, .55, { gog: 'none', cap: false, expr: 'happy' }) + waterFront(230, .9, 330).replace(P.sky, '#F4B9A4') + steam(140, 150) + bottleW(390, 200, .8),
        '물루 TIP · 수영 후 온탕', '운동 직후 뜨거운 탕은 짧게 들어가요.\n나와서 물 한 잔 마시고 천천히 일어나기.\n어지러우면 바로 나와 앉아서 쉬어요.'),
    ] },

  // ════ EP.074 올해 나는 얼마나 (앱: 내 한 해 기록)
  { ep: '074', title: '올해 나는 얼마나', teaser: '11월, 한 해를 돌아보다',
    cover: { char: swimmer({ expr: 'proud', arms: 'up', gog: 'head' }) },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'hoodie', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) + sparkle(740, 700, 30) + sparkle(800, 820, 20),
    panels: [
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'hold', expr: 'normal', prop: G(PROPS.phone(0, 116, 1.1)) }) +
      caption('일요일 밤') + B(60, 56, '올해 얼마나 헤엄쳤을까?', { tail: 'bc', size: 27 }),
      appBg() + appPhone(145, 92, 1.0, myInfo(0, true), { tab: '내정보' }) + hands(245, 440, 1) +
      caption('물루 앱 · 내정보 탭') + sfx(410, 330, '톡!', { size: 44, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, yearRec(), { tab: '내정보', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('「내 한 해 기록」'),
      bedroom(true) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'hoodie', arms: 'up', expr: 'shock' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(40, 56, '172km?! 서울에서 대전보다 멀어!', { tail: 'bc', size: 24 }),
      home() + PINK(person('mom', { x: 100, y: 250, s: .68, outfit: 'apron', arms: 'up', expr: 'happy' })) + person('mulu', { x: 250, y: 250, s: .7, outfit: 'hoodie', arms: 'phone', expr: 'proud', prop: PROPS.phone(68, 30, .9) }) + person('dad', { x: 400, y: 250, s: .68, outfit: 'coverall', arms: 'hips', expr: 'flat' }) +
      B(14, 56, '우리 딸 장하다!', { tail: 'bl', size: 26 }) + B(250, 450, '…나는 하루 10km.', { tail: 'none', size: 24 }),
      home() + person('dad', { x: 150, y: 250, s: .76, outfit: 'coverall', arms: 'down', expr: 'smile' }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'hoodie', arms: 'face', expr: 'cry' }) + catchDog({ x: 250, y: 400, s: .4, pose: 'sit', expr: 'happy' }) +
      B(14, 56, '…그래도 잘했다.', { tail: 'bl', size: 27 }),
      pool(240) + swimHead('mulu', 245, 222, .7, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + sparkle(110, 120, 14) + sparkle(390, 110, 12) +
      caption('월요일 새벽') + B(80, 340, '남은 한 달도 첨벙첨벙!', { tail: 'none', size: 28 }),
      tipPanel(person('mulu', { x: 245, y: 165, s: .6, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + sparkle(110, 90, 12) + sparkle(380, 80, 12),
        '물루 TIP · 내 한 해 기록', '물루 앱 내정보 탭 → 「내 한 해 기록」\n올해 쌓인 나의 수영을 한눈에 돌아봐요.\n작은 하루들이 모여 이만큼이 됐어요!'),
    ] },

  // ════ EP.075 옆으로 데굴
  { ep: '075', title: '옆으로 데굴', teaser: '윤슬의 자유형이 편해 보이는 이유',
    cover: { char: { svg: person('mulu', { x: 400, y: 480, s: 1.5, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) + person('yoonseul', { x: 700, y: 500, s: 1.4, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'up', expr: 'wink' }), waistY: 690, ripples: [[400, 690, 200, 60], [700, 700, 190, 56]] } },
    titleArt: tilt(400, 800, -16, person('yoonseul', { s: 1.25, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'up', expr: 'wink' })) + person('mulu', { x: 720, y: 790, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }),
    panels: [
      pool(240) + swimHead('yoonseul', 150, 222, .56, { gog: 'eyes', expr: 'smile' }) + swimHead('mulu', 360, 222, .56, { expr: 'shock' }) + waterFront(262) + sparkle(110, 120, 12) +
      B(40, 340, '윤슬 자유형은 왜 저렇게 편해 보여?', { tail: 'none', size: 23 }),
      pool(240) + swimHead('mulu', 260, 210, .66, { gog: 'eyes', expr: 'cry' }) + waterFront(262) + G(path('M150,250 q-20,-50 0,-80 q10,30 26,40 q6,-50 24,-60 q4,40 14,64z', '#fff', { lw: 2.6, hatch: false })) +
      caption('물루의 자유형') + sfx(390, 140, '푸하!', { size: 50, rot: 10, color: '#5BB8E0' }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 210, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hips', expr: 'wink' }) +
      B(60, 30, '몸을 옆으로\n데굴~ 굴려 봐!', { tail: 'bc', size: 27 }),
      poolDeck(400) + tilt(245, 220, -22, person('yoonseul', { s: .8, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'smile' })) + sparkle(400, 130, 12) +
      sfx(110, 140, '데굴~', { size: 46, rot: -10 }),
      pool(160) + L.lying(270, 300, .72, { expr: 'shock' }) + waterFront(282, .45) +
      caption('너무 많이 굴렸다') + sfx(380, 120, '어?!', { size: 52, rot: 10, color: '#E07A5F' }),
      pool(240) + tilt(250, 222, -18, swimHead('mulu', 0, 0, .64, { gog: 'eyes', expr: 'happy' })) + waterFront(262) + speed(180, 290) + sparkle(400, 120, 14) +
      B(60, 360, '살짝만! 숨쉬기 편해졌다', { tail: 'none', size: 27 }),
      lockers() + person('mulu', { x: 150, y: 250, s: .76, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'happy' }) + person('yoonseul', { x: 340, y: 250, s: .76, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'wave', expr: 'wink' }) +
      sfx(245, 150, '짝!', { size: 52, rot: -6 }) + B(110, 430, '데굴 성공 기념 하이파이브!', { tail: 'none', size: 24 }),
      tipPanel(tilt(245, 180, -20, swimHead('mulu', 0, 0, .55, { gog: 'eyes', expr: 'happy' })) + waterFront(220, .85, 330) + sparkle(110, 90, 12),
        '물루 TIP · 자유형 롤링', '팔을 저을 때 몸통을 좌우로 살짝 굴려요.\n굴린 쪽으로 고개를 돌리면 숨쉬기가 편해져요.\n너무 많이 굴리면 뒤집히니 살짝만!'),
    ] },
];
