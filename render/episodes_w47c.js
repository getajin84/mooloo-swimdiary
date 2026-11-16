// 물루의 수영일기 EP.090~096 (2026-12 첫 주 게시분, 컷 8장)
const L = require('./w47_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, garage, street, swimmer, headInWater,
  B, waterFront, tipPanel, swimHead, G, bedroom, poolDeck, winter, AP, AM, aT, appPhone, hands,
  PINK, appBg, bubbles, lying, stairs, bag,
  ceilingFlags, backFlags, couch, pullBuoy, chamois, bigTowel,
  wallet, muluCenter, writeScreen, feedComment } = L;

const speed = (x, y) => G(ln(`M${x},${y} h-90 M${x + 10},${y + 30} h-120 M${x},${y + 60} h-80`, 4, '#fff'));
const proHead = (x, y, s, expr = 'normal') => headInWater('pro', { x, y, s, cap: true, gog: 'eyes', expr }).replace(/#B8A6F0/g, '#6E6680');
const pro = (x, y, s, o = {}) => person('pro', { x, y, s, outfit: 'trunks', cap: true, gog: 'head', ...o }).replace(/#B8A6F0/g, '#6E6680');
const momP = (o) => PINK(person('mom', o));
const stars = (x, y) => sparkle(x, y, 12) + sparkle(x + 40, y - 20, 9) + sparkle(x + 70, y + 6, 11);
const snow = () => `<g opacity=".9">${[...Array(20)].map((_, i) => `<circle cx="${(i * 71) % 480 + 6}" cy="${(i * 47) % 220 + 8}" r="${3 + i % 3}" fill="#fff"/>`).join('')}</g>`;

module.exports = [
  // ════ EP.090 캐치의 수건
  { ep: '090', title: '캐치의 수건', teaser: '수건이 사라졌다, 범인은 꼬리를 흔든다',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'head' }) },
    titleArt: catchDog({ x: 480, y: 800, s: 1.4, pose: 'sit', expr: 'happy' }) + bigTowel(480, 960, 1.4) + person('mulu', { x: 800, y: 800, s: 1.15, outfit: 'hoodie', arms: 'face', expr: 'shock' }),
    panels: [
      home() + bag(320, 360, 1) + bigTowel(320, 290, .7) + person('mulu', { x: 140, y: 240, s: .8, outfit: 'hoodie', arms: 'hold', expr: 'worried' }) +
      caption('수영 가방 싸는 중') + B(220, 70, '수건이 안 들어가…', { tail: 'bl', size: 27 }),
      home() + catchDog({ x: 260, y: 330, s: .9, pose: 'run', expr: 'happy', prop: `<g transform="translate(150,30) scale(.6)">${bigTowel(0, 0, 1)}</g>` }) +
      sfx(110, 140, '휙!', { size: 52, rot: -10 }) + B(300, 60, '멍!', { tail: 'bl', size: 30 }),
      home() + person('mulu', { x: 245, y: 240, s: .86, outfit: 'hoodie', arms: 'spread', expr: 'shock' }) + sweat(340, 150) +
      B(100, 50, '캐치! 내 수건!!', { tail: 'bl', size: 32 }),
      home() + bigTowel(300, 400, 1) + catchDog({ x: 300, y: 300, s: .6, pose: 'sit', expr: 'happy' }) + person('mulu', { x: 110, y: 240, s: .74, outfit: 'hoodie', arms: 'hips', expr: 'flat' }) +
      B(180, 60, '…그래, 네 거 해.', { tail: 'bl', size: 28 }),
      lockers() + person('yoonseul', { x: 245, y: 250, s: .86, outfit: 'trend', arms: 'hold', expr: 'wink', prop: chamois(0, 112, .9) }) + sparkle(380, 130, 12) +
      caption('다음 날 탈의실') + B(60, 70, '스포츠 타월 써 봐~', { tail: 'bl', size: 28 }),
      lockers() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'swim', cap: false, arms: 'face', expr: 'sparkle', prop: chamois(40, 20, .6) }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(50, 50, '작은데 쭉 빨아들여!', { tail: 'bl', size: 28 }),
      home() + bag(140, 360, .8) + bigTowel(340, 400, .9) + catchDog({ x: 340, y: 300, s: .55, pose: 'sit', expr: 'happy' }) +
      B(20, 60, '가방도 가볍고, 캐치도 행복!', { tail: 'none', size: 25 }),
      tipPanel(chamois(170, 200, 1.4) + catchDog({ x: 330, y: 170, s: .5, pose: 'sit', expr: 'happy' }),
        '물루 TIP · 수영 가방 수건', '얇고 잘 빨아들이는 스포츠 타월은\n가방 자리를 덜 차지하고 빨리 말라요.\n쓰고 나면 꼭 펴서 말려 냄새 예방!'),
    ] },

  // ════ EP.091 배영 깃발
  { ep: '091', title: '배영 깃발', teaser: '배영 25m, 벽은 갑자기 나타난다',
    cover: { char: swimmer({ expr: 'cry', arms: 'face', gog: 'eyes' }) },
    titleArt: `<g transform="translate(160,690) scale(1.5)">${backFlags(0)}</g>` + person('mulu', { x: 540, y: 900, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'sparkle' }),
    panels: [
      pool(160) + lying(260, 250, .72, { expr: 'happy' }) + waterFront(262, .4) +
      caption('배영 25m') + B(40, 420, '쭉쭉 가는구나~', { tail: 'none', size: 30 }),
      pool(160) + G(path('M0,0 h40 v540 h-40z', '#E9E4F2', { lw: 3.4 })) + lying(170, 300, .72, { expr: 'cry' }) + waterFront(282, .45) + stars(60, 200) +
      sfx(330, 140, '쿵!', { size: 64, rot: 10, color: '#E07A5F' }),
      poolDeck(400) + person('mulu', { x: 140, y: 230, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) + person('dad', { x: 360, y: 220, s: .76, outfit: 'trunks', arms: 'point', expr: 'flat', flip: true }) +
      B(220, 40, '깃발 봤나.', { tail: 'br', size: 30 }),
      pool(300) + backFlags(110) + lying(260, 380, .6, { expr: 'shock', gog: 'eyes' }) + waterFront(392, .45) +
      B(70, 170, '저게 벽 5m 앞 신호였어?!', { tail: 'none', size: 25 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .82, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      B(30, 40, '깃발부터 벽까지 팔 몇 번인지 세라.', { tail: 'none', size: 23 }),
      pool(300) + backFlags(110) + lying(260, 380, .6, { expr: 'determined' }) + waterFront(392, .45) +
      sfx(140, 200, '하나, 둘, 셋, 넷!', { size: 36, rot: -6 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      B(80, 340, '넷에 터치! 안 부딪혔다!', { tail: 'none', size: 27 }),
      tipPanel(`<g transform="translate(0,40)">${backFlags(0)}</g>` + lying(265, 210, .6, { expr: 'happy' }) + waterFront(226, .4, 330),
        '물루 TIP · 배영 깃발 보기', '배영 깃발은 보통 벽에서 5m 앞에 걸려 있어요.\n깃발 지나 벽까지 팔 몇 번인지 세 두면\n머리 부딪힐 걱정 없이 터치!'),
    ] },

  // ════ EP.092 옆 레인 그분
  { ep: '092', title: '옆 레인 그분', teaser: '석 달째 같은 레인, 이름도 모른다',
    cover: { char: swimmer({ expr: 'worried', arms: 'hold', gog: 'head' }) },
    titleArt: person('mulu', { x: 420, y: 800, s: 1.3, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'happy' }) + pro(740, 800, 1.2, { arms: 'wave', expr: 'smile' }),
    panels: [
      pool(240) + swimHead('mulu', 330, 230, .56, { expr: 'worried' }) + proHead(140, 230, .54, 'normal') + waterFront(270) +
      caption('같은 레인 · 석 달째') + B(220, 70, '또 그분이다…', { tail: 'bl', size: 27 }),
      pool(240) + swimHead('mulu', 330, 230, .56, { expr: 'flat' }) + proHead(140, 230, .54, 'flat') + waterFront(270) +
      sfx(245, 120, '…', { size: 70, rot: 0, color: '#8A8098' }),
      lockers() + person('mulu', { x: 140, y: 250, s: .76, outfit: 'casual', arms: 'face', expr: 'worried' }) + person('yoonseul', { x: 350, y: 250, s: .76, outfit: 'trend', arms: 'point', expr: 'wink' }) +
      B(200, 40, '인사해 봐~', { tail: 'br', size: 30 }),
      pool(240) + swimHead('mulu', 330, 230, .56, { expr: 'sparkle' }) + proHead(140, 230, .54, 'smile') + waterFront(270) +
      caption('다음 날') + B(230, 70, '안, 안녕하세요!', { tail: 'bl', size: 27 }),
      pool(240) + swimHead('mulu', 330, 230, .56, { expr: 'happy' }) + proHead(140, 230, .54, 'happy') + waterFront(270) +
      B(10, 40, '제가 뒤에서 따라가도 될까요?', { tail: 'bl', size: 24 }) + B(250, 360, '그럼요!', { tail: 'none', size: 30 }),
      pool(240) + proHead(140, 230, .5, 'determined') + swimHead('mulu', 360, 230, .52, { gog: 'eyes', expr: 'determined' }) + waterFront(270) + speed(300, 300) + speed(90, 300) +
      caption('순서 정하니 편해졌다'),
      poolDeck(400) + pro(140, 230, .72, { arms: 'wave', expr: 'smile' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'wave', expr: 'sparkle', flip: true }) +
      B(20, 40, '오늘도 화이팅!', { tail: 'bl', size: 28 }) + B(240, 440, '화이팅!', { tail: 'none', size: 28 }),
      tipPanel(proHead(170, 180, .48, 'happy') + swimHead('mulu', 330, 180, .5, { expr: 'happy' }) + L.waterFront(220, .85, 330),
        '물루 TIP · 레인 메이트와 인사', '매일 만나는 레인 사람과 가볍게 인사해 봐요.\n순서·속도를 미리 말해 두면 서로 편해져요.\n추월할 땐 발을 가볍게 톡, 기억하죠?'),
    ] },

  // ════ EP.093 수심이 깊어졌다 (앱: 물루💧 보상)
  { ep: '093', title: '수심이 깊어졌다', teaser: '한 달 동안 쌓인 물루, 그 결과는',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'up', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }) + L.bigDrop(780, 800, 70),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { expr: 'proud' }) + waterFront(262) + sparkle(110, 120, 12) +
      caption('11월 마지막 날') + B(90, 340, '이번 달도 꼬박꼬박!', { tail: 'none', size: 29 }),
      appBg() + appPhone(145, 92, 1.0, wallet(), { tab: '내정보', plus: false }) + hands(245, 440, 1) +
      caption('내정보 「물루 지갑」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, muluCenter(3), { tab: '내정보', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('「💧 물루 센터」') + sfx(400, 190, '수심 UP!', { size: 38, rot: 10, color: '#0E9F93' }),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      B(100, 50, '수심이 깊어졌다!', { tail: 'bl', size: 32 }),
      garage() + person('dad', { x: 140, y: 250, s: .74, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) +
      B(20, 120, '깊다고 빠지진 마라.', { tail: 'bl', size: 25 }) + B(240, 450, '그런 뜻 아니야…', { tail: 'none', size: 25 }),
      home() + momP({ x: 160, y: 250, s: .76, outfit: 'apron', arms: 'up', expr: 'sparkle' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'casual', arms: 'down', expr: 'proud' }) +
      B(20, 60, '우리 딸 레벨업이네!', { tail: 'bl', size: 27 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'happy' }) + catchDog({ x: 370, y: 330, s: .62, pose: 'sit', expr: 'happy' }) +
      B(60, 50, '다음 달도 쌓아 보자!', { tail: 'bl', size: 27 }) + B(330, 170, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(L.bigDrop(170, 190, 50) + person('mulu', { x: 330, y: 170, s: .6, outfit: 'casual', arms: 'up', expr: 'happy' }),
        '물루 TIP · 수심 확인하기', '물루 앱 내정보 → 「물루 지갑」 → 「💧 물루 센터」\n100m마다·체크인·출석·챌린지·응원으로 쌓인\n물루💧만큼 수심 레벨이 올라가요.', '#EAF6FF'),
    ] },

  // ════ EP.094 다리 사이 풀부이
  { ep: '094', title: '다리 사이 풀부이', teaser: '노란 땅콩의 정체',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'shock', prop: pullBuoy(0, 112, 1.1) }), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) + pullBuoy(780, 820, 2),
    panels: [
      poolDeck(400) + pullBuoy(330, 340, 1.1) + person('mulu', { x: 170, y: 220, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'worried' }) +
      caption('용품 바구니 앞') + B(200, 70, '이 노란 땅콩은 뭐지?', { tail: 'bl', size: 26 }),
      poolDeck(400) + person('mulu', { x: 140, y: 230, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + pullBuoy(140, 140, .8) + person('yoonseul', { x: 360, y: 230, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'face', expr: 'happy' }) +
      B(220, 40, '그거 모자 아니야~', { tail: 'br', size: 26 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'wink' }) + pullBuoy(245, 365, .7) +
      B(20, 30, '허벅지 사이에 끼우는 거야!', { tail: 'none', size: 25 }),
      pool(240) + swimHead('mulu', 280, 222, .62, { gog: 'eyes', expr: 'shock' }) + waterFront(262) +
      B(60, 380, '다리가 둥둥 떠!', { tail: 'none', size: 30 }),
      pool(240) + swimHead('mulu', 300, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(220, 280) +
      B(30, 50, '팔만 젓는다… 팔만…!', { tail: 'bl', size: 27 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'sad' }) + sweat(330, 150) + sweat(160, 170, .8) +
      sfx(120, 120, '후들후들', { size: 40, rot: -8 }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .74, outfit: 'trunks', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 370, y: 230, s: .7, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'sad' }) +
      caption('지나가던 아빠') + B(20, 70, '팔 힘 붙겠다.', { tail: 'bl', size: 28 }),
      tipPanel(pullBuoy(170, 200, 1.3) + person('mulu', { x: 330, y: 170, s: .6, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }),
        '물루 TIP · 풀부이 쓰기', '풀부이는 허벅지 사이에 끼워 다리를 띄우고\n팔 동작에만 집중하게 해 줘요.\n처음엔 짧게, 팔·어깨가 아프면 바로 쉬기.'),
    ] },

  // ════ EP.095 아빠의 첫 댓글 (앱: 오늘의 수영 기록 + 댓글)
  { ep: '095', title: '아빠의 첫 댓글', teaser: '첫눈 오는 날 올린 기록에…',
    cover: { char: swimmer({ expr: 'shock', arms: 'up', gog: 'head' }) },
    titleArt: person('dad', { x: 400, y: 790, s: 1.25, outfit: 'coverall', arms: 'phone', expr: 'flat', prop: PROPS.phone(68, 30, 1) }) + person('mulu', { x: 740, y: 800, s: 1.25, outfit: 'casual', arms: 'face', expr: 'shock' }),
    panels: [
      pool(240) + snow() + swimHead('mulu', 245, 222, .66, { expr: 'sparkle' }) + waterFront(262) +
      caption('첫눈 오는 새벽') + B(80, 340, '눈 오는 날 수영 최고!', { tail: 'none', size: 29 }),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'phone', expr: 'happy', prop: PROPS.phone(68, 30, .9) }) +
      B(80, 50, '오늘은 꼭 남겨야지!', { tail: 'bl', size: 28 }),
      appBg() + appPhone(145, 92, 1.0, writeScreen(), { tab: '피드', plus: false }) + hands(245, 440, 1) +
      caption('「오늘의 수영 기록」 쓰기') + sfx(410, 330, '게시!', { size: 40, rot: 10 }),
      garage() + person('dad', { x: 245, y: 250, s: .84, outfit: 'coverall', arms: 'phone', expr: 'flat', prop: PROPS.phone(68, 30, .9) }) +
      caption('같은 시각', 16, 110) + sfx(130, 200, '톡…', { size: 40, rot: -8 }) + sfx(380, 160, '톡…', { size: 40, rot: 8 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, feedComment(), { tab: '피드' }) + hands(245, 440, 1) +
      caption('💬 댓글 1'),
      lockers() + person('mulu', { x: 245, y: 240, s: .88, outfit: 'casual', arms: 'face', expr: 'shock' }) + sweat(340, 150) +
      B(80, 50, '아빠가… 댓글을?!', { tail: 'bl', size: 32 }),
      home() + momP({ x: 245, y: 250, s: .86, outfit: 'apron', arms: 'hips', expr: 'wink' }) +
      caption('저녁') + B(50, 70, '어젯밤 내내 연습하더라~', { tail: 'bl', size: 27 }),
      tipPanel(snow() + swimHead('mulu', 245, 168, .62, { expr: 'happy' }) + waterFront(210, .85, 330),
        '물루 TIP · 사진과 기록 함께 올리기', '물루 앱 ＋ → 「오늘의 수영 기록」 → 사진·메모\n「수영 기록 함께 남기기」(레인 길이·왕복 수·시간)\n→ 「게시하기」! 가족·친구 댓글이 달려요.', '#EAF6FF'),
    ] },

  // ════ EP.096 정리운동
  { ep: '096', title: '정리운동', teaser: '끝났다! …아직 안 끝났다',
    cover: { char: swimmer({ expr: 'happy', arms: 'up', gog: 'head' }) },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) + catchDog({ x: 780, y: 830, s: .9, pose: 'sit', expr: 'happy' }),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) +
      caption('1.5km 끝!') + B(80, 340, '바로 샤워하러 가자~', { tail: 'none', size: 29 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .82, outfit: 'trunks', arms: 'spread', expr: 'flat' }) +
      B(100, 40, '정리운동은.', { tail: 'bl', size: 32 }),
      pool(240) + swimHead('mulu', 260, 222, .62, { gog: 'eyes', expr: 'sleepy' }) + waterFront(262) +
      caption('천천히 살살 200m') + sfx(380, 320, '느릿느릿', { size: 36, rot: 8 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) +
      B(20, 30, '어깨 쭈욱~', { tail: 'none', size: 30 }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'determined' }) +
      B(20, 30, '허벅지도 살살~', { tail: 'none', size: 30 }) + sfx(390, 120, '으으~', { size: 38, rot: 10 }),
      stairs() + person('mulu', { x: 245, y: 230, s: .82, outfit: 'office', arms: 'up', expr: 'sparkle' }) + sparkle(110, 140, 14) + sparkle(390, 130, 12) +
      caption('다음 날 계단') + B(40, 440, '어제보다 덜 뻐근해!', { tail: 'none', size: 28 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 370, y: 330, s: .62, pose: 'sit', expr: 'happy' }) +
      caption('저녁') + B(60, 70, '캐치도 쭉~', { tail: 'bl', size: 28 }) + B(330, 170, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(person('mulu', { x: 245, y: 170, s: .6, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy' }) + sparkle(110, 90, 12) + sparkle(380, 80, 12),
        '물루 TIP · 수영 후 정리운동', '마지막엔 100~200m를 천천히 살살 헤엄치고\n물 밖에서 어깨·허벅지를 가볍게 늘려 줘요.\n아픈 곳이 계속되면 진료 받아 보기.'),
    ] },
];
