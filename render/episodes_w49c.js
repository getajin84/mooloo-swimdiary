// 물루의 수영일기 EP.132~138 (2026-12 첫 주 게시분, 컷 8장)
const L = require('./w49_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, street, entrance, swimmer,
  B, waterFront, tipPanel, swimHead, G, bedroom, poolDeck, AP, AM, appPhone, hands, bigDrop, noteCard,
  PINK, appBg, bubbles, bag, towelS, speed,
  showerRoom, arrowsWave, lapBoard, arrive, feedCheer } = L;

const momP = (o) => PINK(person('mom', o));
const momHead = (x, y, s, o = {}) => PINK(swimHead('mom', x, y, s, o));
const spray = (x) => G(ln([...Array(5)].map((_, i) => `M${x + i * 10 - 10},110 l-4,${50 + (i % 2) * 16}`).join(' '), 3, '#8FD3F0'));
const finger = (x, y) => G(ell(x, y, 16, 22, P.skin, { lw: 3, hatch: false }));

module.exports = [
  // ════ EP.132 샤워기 하나 둘
  { ep: '132', title: '샤워기 하나 둘', teaser: '물 틀어 놓고 자리 맡기?',
    cover: { char: swimmer({ expr: 'flat', arms: 'hips', gog: 'head' }) },
    titleArt: person('mulu', { x: 460, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'hips', expr: 'flat' }) + G(PROPS.shower(820, 760, 1.4)),
    panels: [
      showerRoom() + person('mulu', { x: 245, y: 250, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'worried' }) +
      caption('수영 끝, 샤워실') + B(150, 60, '자리가 없네…', { tail: 'bl', size: 30 }),
      showerRoom() + spray(100) + spray(255) + spray(410) + towelS(100, 200, .8) + towelS(410, 200, .8, P.pink) +
      caption('물은 콸콸, 사람은 없음') + sfx(250, 300, '쏴아—', { size: 52, rot: -6, color: '#5BB8E0' }),
      showerRoom() + person('yoonseul', { x: 140, y: 250, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'worried' }) + person('mulu', { x: 360, y: 255, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'shock' }) +
      B(10, 50, '물 틀어 두고\n자리 맡기는 반칙~', { tail: 'bl', size: 24 }),
      showerRoom() + spray(255) + momP({ x: 250, y: 250, s: .8, outfit: 'swim', cap: false, arms: 'up', expr: 'happy' }) +
      caption('한편, 엄마는') + sfx(390, 230, '♪ 랄랄라~', { size: 40, rot: 8 }),
      showerRoom() + person('mulu', { x: 150, y: 255, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'smile' }) + momP({ x: 360, y: 250, s: .74, outfit: 'swim', arms: 'face', expr: 'shock' }) +
      B(10, 50, '엄마, 뒤에\n기다려요!', { tail: 'bl', size: 26 }),
      showerRoom() + momP({ x: 245, y: 250, s: .8, outfit: 'swim', arms: 'wave', expr: 'happy' }) +
      B(110, 60, '얼른 쓰세요~', { tail: 'bl', size: 30 }),
      showerRoom() + spray(255) + person('mulu', { x: 250, y: 250, s: .8, outfit: 'swim', cap: false, arms: 'up', expr: 'happy' }) + sparkle(100, 200, 12) +
      B(40, 60, '짧고 깔끔하게!', { tail: 'bl', size: 30 }),
      tipPanel(G(PROPS.shower(200, 230, 1.3)) + towelS(360, 240, 1),
        '물루 TIP · 샤워실 매너', '물을 틀어 둔 채 자리를 맡지 않아요.\n사람이 많을 땐 짧게 쓰고 양보하기.\n다 쓰면 물 잠그고 거품은 헹궈 두기.'),
    ] },

  // ════ EP.133 속옷 어디 갔지
  { ep: '133', title: '속옷 어디 갔지', teaser: '수영복 입고 출발한 날',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'head' }) },
    titleArt: person('mulu', { x: 460, y: 790, s: 1.35, outfit: 'casual', arms: 'search', expr: 'shock' }) + bag(800, 860, 1.4),
    panels: [
      bedroom() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'casual', arms: 'fist', expr: 'sparkle' }) +
      caption('시간 절약 작전') + B(30, 70, '수영복 입고 가면\n바로 입수!', { tail: 'bl', size: 26 }),
      pool(240) + swimHead('mulu', 260, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(160, 190) +
      caption('입수까지 1분!') + sfx(245, 420, '최단 기록!', { size: 50, rot: -4, color: '#5BB8E0' }),
      lockers() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'swim', cap: false, arms: 'search', expr: 'worried' }) + bag(390, 400, .7) +
      caption('수영 끝, 탈의실') + sfx(380, 160, '어…?', { size: 52, rot: 8 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'swim', cap: false, arms: 'face', expr: 'shock' }) + sweat(330, 200) + sweat(160, 210, .8) +
      B(60, 40, '갈아입을 속옷을\n안 챙겼다!!', { tail: 'bl', size: 28 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'swim', cap: false, arms: 'phone', expr: 'cry', prop: PROPS.phone(68, 30, .9) }) +
      B(130, 50, '엄마아…', { tail: 'bl', size: 34 }),
      entrance() + momP({ x: 170, y: 250, s: .76, outfit: 'casual', arms: 'hold', expr: 'angry', prop: G(PROPS.swimBag(0, 116, .5)) }) + catchDog({ x: 370, y: 350, s: .55, pose: 'run', expr: 'happy' }) +
      caption('20분 뒤') + B(240, 200, '이럴 줄 알았다!', { tail: 'none', size: 26 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'determined' }) + bag(370, 380, .9) + noteCard(370, 250, '속옷 먼저!', '#FFF6C9', 160) +
      B(20, 40, '다음부턴 이것부터!', { tail: 'bl', size: 27 }),
      tipPanel(bag(170, 230, 1) + noteCard(340, 190, '속옷 먼저!', '#FFF6C9', 160),
        '물루 TIP · 수영복 입고 가는 날', '수영복을 입고 출발하는 날엔\n갈아입을 속옷부터 가방에 먼저 넣어요.\n전날 밤 가방을 싸 두면 더 든든!'),
    ] },

  // ════ EP.134 숨 쉴 때 앞 팔
  { ep: '134', title: '숨 쉴 때 앞 팔', teaser: '숨만 쉬면 가라앉는 이유',
    cover: { char: swimmer({ expr: 'worried', arms: 'down', gog: 'eyes' }) },
    titleArt: person('dad', { x: 420, y: 790, s: 1.3, outfit: 'trunks', arms: 'point', expr: 'flat' }) + person('mulu', { x: 760, y: 800, s: 1.2, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      caption('자유형 호흡 연습') + sfx(245, 420, '하나, 둘, 후!', { size: 46, rot: -4, color: '#5BB8E0' }),
      pool(240) + swimHead('mulu', 245, 262, .66, { gog: 'eyes', expr: 'shock' }) + waterFront(262) + bubbles([[170, 200, 10], [330, 210, 8], [300, 180, 6]]) +
      caption('숨 쉴 때마다') + sfx(245, 140, '꼬르륵…', { size: 52, rot: -6, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) +
      B(110, 30, '숨만 쉬면\n몸이 가라앉아…', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('옆 레인의 아빠') + B(40, 60, '숨 쉴 때\n앞 팔은 어디 있나.', { tail: 'bl', size: 27 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'shock' }) + G(path('M340,250 v60 l-12,-10 m12,10 l12,-10', 'none', { lw: 5 })) +
      caption('물루의 앞 팔') + sfx(380, 200, '툭…', { size: 46, rot: 8 }),
      poolDeck(400) + person('dad', { x: 200, y: 220, s: .8, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      B(40, 30, '앞 팔은 쭉 뻗어\n받쳐 둬라.', { tail: 'bl', size: 27 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(150, 190) + sparkle(390, 110, 12) +
      B(90, 340, '안 가라앉는다!', { tail: 'none', size: 34 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + speed(140, 140),
        '물루 TIP · 숨 쉴 때 앞 팔', '숨을 쉬는 동안 앞 팔은 쭉 뻗어 두세요.\n앞 팔이 몸을 받쳐 줘서 덜 가라앉아요.\n고개는 들지 말고 옆으로만 살짝!'),
    ] },

  // ════ EP.135 톡! 터뜨리기 (앱: 물루💧 보상)
  { ep: '135', title: '톡! 터뜨리기', teaser: '수영 끝나고 앱을 열었더니',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 460, y: 790, s: 1.35, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }) + bigDrop(800, 760, 50, '#CFEFFF') + bigDrop(880, 880, 30, '#CFEFFF'),
    panels: [
      lockers() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'phone', expr: 'smile', prop: PROPS.phone(68, 30, .9) }) +
      caption('수영 끝, 앱을 켜니') + B(120, 60, '어? 뭐가 왔다!', { tail: 'bl', size: 29 }),
      appBg('#E6F3FB') + appPhone(145, 92, 1.0, arrive(false), { tabs: false, plus: false }) + hands(245, 440, 1) +
      caption('「물루가 도착했어요」'),
      bg('#EAF6FF') + person('mulu', { x: 245, y: 250, s: .84, outfit: 'casual', arms: 'spread', expr: 'shock' }) + bigDrop(100, 150, 30, '#CFEFFF') + bigDrop(400, 130, 36, '#CFEFFF') + bigDrop(380, 330, 22, '#CFEFFF') +
      B(110, 30, '물방울이 동동!', { tail: 'bl', size: 30 }),
      appBg('#E6F3FB') + appPhone(145, 92, 1.0, arrive(false), { tabs: false, plus: false }) + hands(245, 440, 1) + finger(300, 372) +
      caption('「톡 눌러 터뜨리기」') + sfx(420, 300, '톡!', { size: 56, rot: 10 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, arrive(true), { tabs: false, plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      sfx(410, 330, '팡팡!', { size: 50, rot: 10, color: '#0E9F93' }),
      street() + person('mulu', { x: 150, y: 250, s: .74, outfit: 'casual', arms: 'point', expr: 'sparkle' }) + person('yoonseul', { x: 360, y: 250, s: .72, outfit: 'trend', arms: 'down', expr: 'shock', flip: true }) +
      B(10, 40, '100m마다 쌓이고\n응원해도 쌓여!', { tail: 'bl', size: 25 }) + B(330, 160, '오~', { tail: 'br', size: 28 }),
      home() + person('mulu', { x: 180, y: 240, s: .82, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 390, y: 340, s: .55, pose: 'sit', expr: 'happy' }) +
      B(40, 40, '내일도 터뜨리러 간다!', { tail: 'bl', size: 27 }) + B(340, 190, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(bigDrop(170, 200, 46, '#CFEFFF') + bigDrop(330, 210, 34, '#CFEFFF'),
        '물루 TIP · 톡! 눌러서 받기', '물루 앱을 열면 「물루가 도착했어요」\n→ 「톡 눌러 터뜨리기」로 받아요.\n100m마다, 체크인·출석·응원으로도 쌓여요.'),
    ] },

  // ════ EP.136 발차기는 두 번
  { ep: '136', title: '발차기는 두 번', teaser: '아빠가 손뼉을 두 번 친 이유',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('dad', { x: 420, y: 790, s: 1.3, outfit: 'trunks', arms: 'hold', expr: 'flat' }) + sfx(780, 720, '짝! 짝!', { size: 80, rot: 10 }),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + arrowsWave(245, 140) +
      caption('접영 연습 중') + sfx(245, 420, '첨벙! 첨벙!', { size: 48, rot: -4, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) +
      B(110, 30, '박자가 자꾸\n엉켜…', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      caption('옆 레인의 아빠') + B(60, 60, '발은 두 번이다.', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hold', expr: 'flat' }) +
      caption('손 넣을 때 한 번, 밀 때 한 번') + sfx(120, 140, '짝!', { size: 56, rot: -10 }) + sfx(380, 140, '짝!', { size: 56, rot: 10 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + arrowsWave(245, 140) +
      sfx(245, 420, '쿵— 짝! 쿵— 짝!', { size: 42, rot: -4, color: '#5BB8E0' }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(150, 190) + sparkle(390, 110, 12) +
      B(100, 340, '리듬을 탔다!', { tail: 'none', size: 34 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .78, outfit: 'trunks', arms: 'hips', expr: 'proud' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) +
      B(10, 30, '…좀 접영 같네.', { tail: 'bl', size: 26 }) + B(250, 440, '아빠 박수 덕분!', { tail: 'none', size: 25 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + arrowsWave(245, 90),
        '물루 TIP · 접영 발차기 두 번', '접영은 한 번 저을 때 발차기 두 번!\n손이 물에 들어갈 때 한 번,\n손으로 물을 밀어낼 때 한 번 차요.'),
    ] },

  // ════ EP.137 응원은 친구에게 (앱: 피드 · 🌊 응원하기)
  { ep: '137', title: '응원은 친구에게', teaser: '내 글엔 왜 안 눌리지?',
    cover: { char: swimmer({ expr: 'happy', arms: 'wave', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 380, y: 790, s: 1.3, outfit: 'hoodie', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }) + person('yoonseul', { x: 720, y: 790, s: 1.3, outfit: 'trend', arms: 'wave', expr: 'wink' }),
    panels: [
      bedroom() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'phone', expr: 'smile', prop: PROPS.phone(68, 30, .9) }) +
      caption('자기 전 피드 구경') + B(30, 70, '윤슬 오늘 1.5km?!', { tail: 'bl', size: 27 }),
      appBg() + appPhone(145, 92, 1.0, feedCheer('윤슬', false), { tab: '피드' }) + hands(245, 440, 1) +
      caption('피드 탭'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, feedCheer('윤슬', true), { tab: '피드' }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('「🌊 응원하기」') + sfx(420, 330, '꾹!', { size: 52, rot: 10, color: '#0E9F93' }),
      bedroom() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) +
      B(60, 50, '내 글에도\n눌러 볼까?', { tail: 'bl', size: 29 }),
      appBg('#F1EFF5') + appPhone(145, 92, 1.0, feedCheer('김물루', false, true), { tab: '피드' }) + hands(245, 440, 1) +
      caption('내 글') + sfx(245, 512, '…어? 안 눌려?', { size: 40, rot: -4 }),
      lockers() + person('yoonseul', { x: 245, y: 240, s: .84, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) +
      caption('윤슬') + B(80, 50, '응원은 친구가\n주는 거지~ 꾹!', { tail: 'bl', size: 27 }),
      bedroom() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'up', expr: 'sparkle' }) + sparkle(110, 120, 14) + sparkle(390, 110, 12) +
      caption('그날 밤') + B(110, 430, '응원 받았다!', { tail: 'none', size: 32 }),
      tipPanel(swimHead('yoonseul', 170, 180, .5, { expr: 'happy' }) + swimHead('mulu', 330, 180, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 친구 응원하기', '물루 앱 피드 탭 → 카드의 「🌊 응원하기」\n친구의 수영 기록에 응원을 보내요.\n내 글에는 누를 수 없어요!'),
    ] },

  // ════ EP.138 엄마의 100m
  { ep: '138', title: '엄마의 100m', teaser: '천천히 가야 멀리 간다',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: momP({ x: 460, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + `<g transform="translate(820,760) scale(1.8) translate(-820,-760)">${lapBoard(820, 760, '100m', P.yellow)}</g>`,
    panels: [
      pool(240) + momHead(245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(150, 190) +
      caption('목표: 쉬지 않고 100m') + sfx(245, 420, '출발!', { size: 52, rot: -4, color: '#5BB8E0' }),
      pool(240) + momHead(245, 222, .66, { gog: 'eyes', expr: 'shock' }) + waterFront(262) + sweat(320, 170) + sweat(170, 180, .8) +
      caption('25m째') + sfx(245, 420, '헉… 헉…', { size: 50, rot: -4, color: '#5BB8E0' }),
      poolDeck(400) + momP({ x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) +
      B(110, 30, '처음부터\n너무 달렸나 봐…', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'smile' }) +
      B(60, 30, '말할 수 있을 만큼\n천천히!', { tail: 'bl', size: 28 }),
      pool(240) + momHead(245, 222, .66, { gog: 'eyes', expr: 'happy' }) + waterFront(262) +
      caption('다시, 천천히') + sfx(245, 420, '느긋~ 느긋~', { size: 46, rot: -4, color: '#5BB8E0' }),
      pool(240) + momHead(245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + lapBoard(390, 110, '100m', P.yellow) + sparkle(60, 190, 14) +
      sfx(140, 110, '해냈다!', { size: 52, rot: -8, color: '#0E9F93' }),
      home() + momP({ x: 120, y: 250, s: .7, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + person('dad', { x: 260, y: 250, s: .72, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 400, y: 255, s: .66, outfit: 'hoodie', arms: 'up', expr: 'happy' }) +
      B(10, 30, '나 해냈어!', { tail: 'bl', size: 26 }) + B(200, 440, '…천천히가 빠른 거다.', { tail: 'none', size: 24 }),
      tipPanel(momHead(170, 180, .55, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330) + lapBoard(350, 140, '100m', P.yellow),
        '물루 TIP · 처음 긴 거리 도전', '처음 긴 거리는 옆 사람과 말할 수 있을\n만큼 천천히, 같은 속도로 가요.\n힘들면 벽에서 잠깐 쉬어도 괜찮아요.'),
    ] },
];
