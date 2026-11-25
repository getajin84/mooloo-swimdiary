// 물루의 수영일기 EP.111~117 (컷 8장)
const L = require('./w48_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, garage, swimmer,
  B, waterFront, tipPanel, swimHead, G, office, bedroom, poolDeck, winter, AP, AM, aT, appPhone, hands,
  PINK, appBg, bubbles, underwater, tilt, kick, bag,
  speed, night, nightPool, snorkel, santaHat, scarfProp, frame, myInfo2, decoWinter, yearRec2 } = L;

const momP = (o) => PINK(person('mom', o));
const flat = (x, y, s, o = {}) => tilt(x, y, 90, person('mulu', { s, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined', ...o }));
const arrow = (d) => G(ln(d, 5, P.purpleD));

module.exports = [
  // ════ EP.111 하나 둘, 쭉~
  { ep: '111', title: '하나 둘, 쭉~', teaser: '열심히 저을수록 제자리인 평영',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 480, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) + sfx(800, 740, '쭉~', { size: 80, rot: 10, color: '#5BB8E0' }),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + bubbles([[150, 230, 9], [340, 230, 8], [320, 200, 6]]) +
      caption('평영 연습') + sfx(245, 400, '파닥파닥!', { size: 52, rot: -6, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'cry' }) + sweat(330, 180) +
      B(60, 30, '쉬지 않고 저었는데 제자리…', { tail: 'bl', size: 25 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) +
      B(20, 30, '평영엔 쉬는 구간이 있어~', { tail: 'bl', size: 26 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'up', expr: 'wink' }) +
      B(30, 30, '당기고, 차고, 쭉~ 하나 둘!', { tail: 'bl', size: 25 }),
      underwater() + flat(245, 260, .62) + bubbles([[110, 230, 8], [90, 260, 6], [120, 290, 9]]) + G(ln('M150,230 h-60 M140,262 h-80 M150,294 h-60', 4, '#fff')) +
      caption('쭉~ 하나, 둘'),
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(170, 190) +
      sfx(245, 400, '스르륵~', { size: 54, rot: -6, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'proud' }) + sparkle(110, 120, 14) + sparkle(390, 110, 12) +
      B(40, 30, '덜 저었는데 더 멀리 왔어!', { tail: 'bl', size: 25 }),
      tipPanel(flat(245, 170, .5, { expr: 'happy' }) + G(ln('M150,150 h-50 M140,172 h-70 M150,194 h-50', 4, '#9ED8EF')),
        '물루 TIP · 평영 글라이드', '팔 당기고 → 발 차고 → 쭉 뻗어 1~2초 미끄러지기.\n급하게 젓지 말고 쭉 구간을 꼭 넣어요.\n몸이 일자일수록 더 멀리 가요.'),
    ] },

  // ════ EP.112 끝까지 밀어
  { ep: '112', title: '끝까지 밀어', teaser: '팔이 반만 왔다 간다?',
    cover: { char: swimmer({ expr: 'determined', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('dad', { x: 380, y: 790, s: 1.25, outfit: 'trunks', arms: 'point', expr: 'flat' }) + person('mulu', { x: 730, y: 800, s: 1.25, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }),
    panels: [
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(170, 190) +
      caption('자유형 400m') + B(70, 340, '팔은 열심히 젓는데…', { tail: 'none', size: 28 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('아빠') + B(40, 66, '팔이 반만 왔다 간다.', { tail: 'bl', size: 27 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) +
      B(150, 30, '반만…?', { tail: 'bl', size: 32 }),
      poolDeck(400) + person('dad', { x: 200, y: 220, s: .8, outfit: 'trunks', arms: 'down', expr: 'flat' }) + arrow('M300,220 Q330,280 310,340') + G(path('M310,340 l-14,-6 l14,-10z', P.purpleD, { lw: 2 })) +
      B(150, 30, '허벅지 스칠 때까지 밀어.', { tail: 'bl', size: 25 }),
      underwater() + swimHead('mulu', 160, 250, .7, { gog: 'eyes', expr: 'determined' }) + arrow('M260,230 Q340,250 420,300') + G(path('M420,300 l-6,-14 l-8,12z', P.purpleD, { lw: 2 })) +
      caption('허벅지까지 쭉!') + bubbles([[300, 360, 8], [340, 390, 6]]),
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(170, 190) + speed(170, 300) +
      sfx(245, 420, '쭈욱—!', { size: 56, rot: -6, color: '#5BB8E0' }),
      garage() + person('dad', { x: 140, y: 250, s: .76, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'casual', arms: 'up', expr: 'sparkle', flip: true }) +
      B(200, 120, '한 번에 더 멀리 가!', { tail: 'br', size: 25 }) + B(20, 440, '…원래 그런 거다.', { tail: 'none', size: 25 }),
      tipPanel(swimHead('mulu', 160, 180, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330) + G(ln('M240,190 Q300,200 360,240', 4, P.purpleD)),
        '물루 TIP · 자유형 끝까지 밀기', '물을 잡은 팔은 허벅지를 스칠 때까지 밀어요.\n중간에 빼면 힘만 들고 덜 나가요.\n끝까지 민 다음, 팔은 가볍게 들어 올리기.'),
    ] },

  // ════ EP.113 다리가 가라앉아
  { ep: '113', title: '다리가 가라앉아', teaser: '열심히 찰수록 아래로…',
    cover: { char: swimmer({ expr: 'worried', arms: 'spread', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 520, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) + sfx(810, 740, '꼬르륵', { size: 64, rot: 10, color: '#5BB8E0' }),
    panels: [
      pool(240) + kick(170, 250, .7) + swimHead('mulu', 260, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      caption('발차기 연습') + B(80, 340, '열심히 차는데…', { tail: 'none', size: 30 }),
      underwater() + tilt(245, 270, 50, person('mulu', { s: .62, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'shock' })) + bubbles([[380, 400, 8], [400, 440, 6]]) +
      caption('다리가 점점 아래로') + sfx(370, 160, '꼬르륵…', { size: 44, rot: 8, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) +
      B(90, 30, '하체가 무거운 걸까?', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) +
      B(40, 30, '고개를 들어서 그래~', { tail: 'bl', size: 28 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'up', expr: 'wink' }) +
      B(20, 30, '시선은 바닥,\n가슴은 살짝 누르기!', { tail: 'bl', size: 26 }),
      underwater() + flat(245, 250, .62) + bubbles([[110, 230, 8], [90, 260, 6]]) +
      sfx(245, 420, '수평!', { size: 58, rot: -6, color: '#0E9F93' }),
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(170, 190) + sparkle(390, 110, 12) +
      B(100, 340, '다리가 떴다!', { tail: 'none', size: 32 }),
      tipPanel(flat(245, 170, .5, { expr: 'happy' }),
        '물루 TIP · 다리가 가라앉을 때', '고개를 들면 다리가 가라앉아요.\n시선은 바닥, 가슴을 살짝 물속으로 누르면\n몸이 수평에 가까워져요.'),
    ] },

  // ════ EP.114 아바타도 겨울옷 (앱: 꾸미기)
  { ep: '114', title: '아바타도 겨울옷', teaser: '첫눈 온 날, 내 아바타도 추워 보여서',
    cover: { char: swimmer({ expr: 'happy', arms: 'wave', gog: 'head' }) },
    titleArt: person('mulu', { x: 420, y: 790, s: 1.35, outfit: 'hoodie', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }) + santaHat(790, 720, 1.3) + scarfProp(790, 880, 1.3),
    panels: [
      winter() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'face', expr: 'worried' }) +
      caption('첫눈') + B(150, 70, '추워! 목도리 꺼내야지', { tail: 'bl', size: 26 }),
      home() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) +
      B(70, 40, '내 아바타도 추워 보이네?', { tail: 'bl', size: 26 }),
      appBg() + appPhone(145, 92, 1.0, myInfo2(false, 1), { tab: '내정보', plus: false }) + hands(245, 440, 1) +
      caption('내정보 「꾸미기」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, decoWinter(true), { tab: '내정보', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('모자랑 목도리!') + sfx(410, 330, '톡톡!', { size: 44, rot: 10 }),
      lockers() + person('yoonseul', { x: 245, y: 240, s: .84, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) +
      B(110, 50, '어머, 귀엽다~', { tail: 'bl', size: 30 }),
      home() + person('mulu', { x: 150, y: 240, s: .78, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 370, y: 330, s: .6, pose: 'sit', expr: 'happy' }) + scarfProp(370, 350, .55) +
      B(20, 40, '캐치도 겨울옷!', { tail: 'bl', size: 28 }) + B(330, 170, '멍!', { tail: 'bc', size: 28 }),
      winter() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'fist', expr: 'sparkle' }) + scarfProp(245, 300, .7) + bag(370, 350, .7) +
      B(90, 50, '따뜻하게 수영 가자!', { tail: 'bl', size: 28 }),
      tipPanel(santaHat(170, 200, .8) + scarfProp(330, 220, .8),
        '물루 TIP · 아바타 꾸미기', '물루 앱 내정보 → 「꾸미기」\n마음에 드는 아이템으로 내 아바타를 꾸며 봐요.\n추운 날엔 아바타도 따뜻하게!'),
    ] },

  // ════ EP.115 밤 수영의 맛
  { ep: '115', title: '밤 수영의 맛', teaser: '새벽을 놓친 날',
    cover: { char: swimmer({ expr: 'smile', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 480, y: 790, s: 1.4, outfit: 'casual', arms: 'down', expr: 'happy' }) + bag(620, 900, 1.2) + G(ell(820, 700, 60, 60, '#FFF6C9', { lw: 3, hatch: false })),
    panels: [
      office() + person('mulu', { x: 245, y: 250, s: .84, outfit: 'office', arms: 'face', expr: 'sad' }) +
      caption('야근한 날') + B(120, 70, '새벽 수영 못 갔다…', { tail: 'bl', size: 28 }),
      night() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'fist', expr: 'determined' }) + bag(360, 350, .7) +
      B(100, 60, '그럼 밤 수영이다!', { tail: 'bl', size: 30 }),
      nightPool() + swimHead('mulu', 245, 282, .66, { gog: 'eyes', expr: 'happy' }) + waterFront(322) +
      caption('밤 9시 수영장') + sfx(245, 450, '고요~', { size: 52, rot: -6 }),
      nightPool() + swimHead('mulu', 280, 282, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(322) + speed(170, 250) +
      B(80, 60, '사람도 적고 좋다~', { tail: 'none', size: 30 }) + sfx(245, 450, '첨벙첨벙!', { size: 46, rot: -6 }),
      bedroom(true) + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'down', expr: 'shock' }) +
      caption('밤 12시') + B(130, 70, '…잠이 안 와!', { tail: 'bl', size: 30 }),
      bedroom(true) + momP({ x: 150, y: 240, s: .78, outfit: 'apron', arms: 'hips', expr: 'angry' }) + person('mulu', { x: 360, y: 240, s: .74, outfit: 'hoodie', arms: 'face', expr: 'worried' }) +
      B(10, 40, '밤늦게 세게 하니까\n잠이 달아나지!', { tail: 'bl', size: 25 }),
      nightPool() + swimHead('mulu', 245, 282, .66, { gog: 'eyes', expr: 'smile' }) + waterFront(322) +
      caption('다음 밤 수영') + B(70, 60, '오늘은 살살, 일찍 끝!', { tail: 'none', size: 28 }),
      tipPanel(G(ell(140, 120, 34, 34, '#FFF6C9', { lw: 3, hatch: false })) + swimHead('mulu', 300, 180, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 밤에 수영할 때', '늦은 밤엔 강도를 낮춰 가볍게 수영해요.\n잠이 잘 안 오면 조금 더 일찍 끝내 보기.\n끝나면 머리 잘 말리고 따뜻하게 귀가!'),
    ] },

  // ════ EP.116 아빠에게 보여 준 한 해 (앱: 내 한 해 기록)
  { ep: '116', title: '아빠에게 보여 준\n한 해', teaser: '올해 몇 번 갔게?',
    cover: { char: swimmer({ expr: 'proud', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 380, y: 790, s: 1.3, outfit: 'casual', arms: 'phone', expr: 'proud', prop: G(PROPS.phone(68, 30, 1.1)) }) + person('dad', { x: 730, y: 790, s: 1.25, outfit: 'coverall', arms: 'hips', expr: 'flat' }),
    panels: [
      garage() + person('dad', { x: 140, y: 250, s: .74, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: PROPS.wrench(0, 116, .8, 10) }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'casual', arms: 'point', expr: 'sparkle', flip: true }) +
      B(170, 120, '아빠, 나 올해\n몇 번 갔게?', { tail: 'br', size: 25 }),
      garage() + person('dad', { x: 245, y: 250, s: .82, outfit: 'coverall', arms: 'hips', expr: 'flat' }) +
      B(130, 120, '…백 번?', { tail: 'bl', size: 32 }),
      appBg() + appPhone(145, 92, 1.0, myInfo2(false, 0), { tab: '내정보', plus: false }) + hands(245, 440, 1) +
      caption('내정보 「내 한 해 기록」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, yearRec2(true), { tab: '내정보', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('186일!') + sfx(410, 330, '두둥!', { size: 44, rot: 10, color: AP }),
      garage() + person('dad', { x: 245, y: 250, s: .82, outfit: 'coverall', arms: 'down', expr: 'shock' }) + sweat(330, 210) +
      B(140, 120, '……', { tail: 'bl', size: 36 }),
      garage() + frame(370, 200, 1) + person('dad', { x: 150, y: 250, s: .76, outfit: 'coverall', arms: 'hips', expr: 'proud' }) +
      B(200, 300, '선수 때\n나보다 성실하네.', { tail: 'none', size: 25 }),
      home() + momP({ x: 130, y: 250, s: .72, outfit: 'apron', arms: 'up', expr: 'sparkle' }) + person('mulu', { x: 280, y: 250, s: .72, outfit: 'hoodie', arms: 'up', expr: 'proud' }) + catchDog({ x: 410, y: 340, s: .52, pose: 'sit', expr: 'happy' }) +
      B(10, 40, '내년엔 엄마랑 200일!', { tail: 'bl', size: 27 }) + B(370, 190, '멍!', { tail: 'bc', size: 26 }),
      tipPanel(person('mulu', { x: 170, y: 150, s: .56, outfit: 'casual', arms: 'phone', expr: 'happy', prop: PROPS.phone(68, 30, .9) }) + person('dad', { x: 330, y: 150, s: .56, outfit: 'coverall', arms: 'hips', expr: 'flat' }),
        '물루 TIP · 한 해 돌아보기', '물루 앱 내정보 → 「내 한 해 기록」\n올해 수영한 날과 거리, 가장 많이 간 곳을\n한눈에 돌아볼 수 있어요.'),
    ] },

  // ════ EP.117 스노클 낀 날
  { ep: '117', title: '스노클 낀 날', teaser: '고개를 안 돌려도 숨을 쉰다고?',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 500, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle' }) + snorkel(500, 820, 1.3),
    panels: [
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'eyes', arms: 'hips', expr: 'wink' }) + snorkel(245, 236, .8) +
      caption('윤슬의 신상') + B(240, 70, '센터 스노클이야~', { tail: 'bl', size: 25 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'sparkle' }) +
      B(130, 30, '나도 해 볼래!', { tail: 'bl', size: 32 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'shock' }) + snorkel(245, 236, .62) + waterFront(262) + bubbles([[150, 220, 10], [180, 190, 7]]) +
      sfx(245, 400, '푸하! 코로 쉬었다!', { size: 40, rot: -6, color: '#E07A5F' }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) +
      B(40, 30, '입으로만 숨 쉬는 거야~', { tail: 'bl', size: 27 }),
      pool(240) + kick(150, 250, .7) + swimHead('mulu', 260, 222, .62, { gog: 'eyes', expr: 'determined' }) + snorkel(260, 236, .58) + waterFront(262) +
      caption('킥판 잡고 천천히') + sfx(245, 420, '스읍— 후—', { size: 46, rot: -6, color: '#5BB8E0' }),
      pool(240) + swimHead('mulu', 280, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + snorkel(280, 236, .62) + waterFront(262) + speed(170, 190) +
      B(70, 340, '고개 안 돌려도 된다!', { tail: 'none', size: 29 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'proud' }) + sparkle(110, 120, 14) + sparkle(390, 110, 12) +
      B(40, 30, '팔 동작에만 집중된다!', { tail: 'bl', size: 27 }),
      tipPanel(swimHead('mulu', 245, 180, .56, { gog: 'eyes', expr: 'happy' }) + snorkel(245, 192, .52) + waterFront(220, .85, 330),
        '물루 TIP · 센터 스노클 처음 쓸 때', '숨은 입으로만, 천천히 들이쉬고 내쉬기.\n처음엔 킥판 잡고 발차기부터 해 봐요.\n수영장마다 사용 가능한지 먼저 확인!'),
    ] },
];
