// 물루의 수영일기 EP.001~012 — 원고 + 컷 + 표지 + 제목
const K = require('./chars');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS } = K;
const { PW, PH, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil } = require('./comic');
const { ep1, ep2 } = require('./ep001_002');

// ── 공용 배경
const pool = (top = 330) => tiles(P.paper, '#F1DECF', 46, 0, top) + water(top) + rope(top);
const home = (wall = '#FFF1E6', floorY = 420) => bg(wall) + `<g opacity=".55">${[...Array(12)].map((_, i) => `<path d="M${i * 44},0 V${floorY}" stroke="#F6DCCB" stroke-width="10"/>`).join('')}</g>` + pencil(sh('rect', { x: -10, y: floorY, width: PW + 20, height: PH - floorY + 10 }, '#E9CFB4', { lw: 3.4 }));
const street = (sky = '#DCE6FF') => bg(sky) + pencil([[60, 250, 200], [160, 220, 230], [350, 240, 210], [450, 210, 240]].map(([x, y, h], i) => sh('rect', { x: x - 40, y, width: 80, height: h }, i % 2 ? '#E6E2F6' : '#F1ECFA', { lw: 3 })).join('') + sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#CFC8E6', { lw: 3.4 }));
const lockers = () => tiles('#EEF6FF', '#D9E7F5', 52) + pencil([0, 1, 2, 3, 4].map(i => sh('rect', { x: i * 100 - 6, y: 64, width: 96, height: 300 }, '#CBD6F2', { lw: 3 }) + sh('rect', { x: i * 100 + 58, y: 190, width: 9, height: 32, rx: 4 }, LINE, { line: false, hatch: false })).join('') + sh('rect', { x: -10, y: 420, width: PW + 20, height: 140 }, P.beige, { lw: 3 }));
const garage = () => bg('#EEF2F8') + pencil(sh('rect', { x: -10, y: 60, width: PW + 20, height: 40 }, P.mint, { lw: 3.4 }) + sh('rect', { x: -10, y: 430, width: PW + 20, height: 130 }, '#C9CBD8', { lw: 3.4 })) + `<text x="245" y="90" font-family="Gaegu" font-weight="700" font-size="28" fill="${LINE}" text-anchor="middle">태랑모터스</text>`;
const headInWater = (who, o) => person(who, { ...o, body: false });
const tw = (svg) => svg; // 가독성용

// ── 표지(물 위) 캐릭터: 1080×1350 좌표
const swimmer = (o) => ({ svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle', ...o }), waistY: 710, ripples: [[540, 710, 300, 84]] });

const EPS = [
  { ep: '001', title: '수모 어디 갔니', teaser: '가방을 아무리 뒤져도…', panels: ep1,
    cover: { char: swimmer({ cap: false, gog: 'none', expr: 'shock', arms: 'up' }) },
    titleArt: person('mulu', { x: 540, y: 780, s: 1.5, outfit: 'swim', arms: 'search', expr: 'shock' }) + PROPS.cap(780, 980, 1.3, P.purple).replace('<g ', '<g filter="url(#pencil)" ') },
  { ep: '002', title: '새 물안경 개봉기', teaser: '착 붙는 그 느낌, 그런데…', panels: ep2,
    cover: { char: swimmer({}) },
    titleArt: person('mulu', { x: 540, y: 780, s: 1.5, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle' }) },

  // ════ EP.003 입수 전 샤워
  { ep: '003', title: '그냥 들어가면\n안 돼요', teaser: '강습 1분 전, 물루의 질주',
    cover: { char: { ...swimmer({ expr: 'happy', gog: 'head' }), ripples: [[540, 710, 300, 84], [260, 360, 40, 14], [830, 330, 30, 10]] } },
    titleArt: person('mulu', { x: 540, y: 760, s: 1.45, outfit: 'swim', cap: true, arms: 'up', expr: 'shock' }) + person('guard', { x: 830, y: 800, s: 1.1, outfit: 'guard', arms: 'point', expr: 'normal', flip: true }),
    panels: [
      tiles('#EEF6FF', '#D9E7F5', 52) + person('mulu', { x: 250, y: 250, s: .92, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'shock' }) + sfx(110, 420, '다다다다', { size: 44, rot: -10, color: '#E07A5F' }) + sweat(330, 170) + sweat(170, 180, .8) +
      caption('AM 6:29 · 강습 1분 전') + bubble(170, 70, 300, 76, '늦었다 늦었다!!', { tail: 'bl', size: 34 }),
      pool(300) + person('guard', { x: 370, y: 210, s: .85, outfit: 'guard', arms: 'point', expr: 'normal', flip: true }) + person('mulu', { x: 140, y: 240, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'shock' }) +
      sfx(260, 120, '삐익—!', { size: 46, rot: -6, color: '#E07A5F' }) + caption('풀 입구') + bubble(232, 330, 238, 84, '샤워하고\n오세요~', { tail: 'none', size: 32 }),
      tiles('#EAF3F8', '#D3E3EC', 40) + `<g filter="url(#pencil)">${PROPS.shower(150, 120, 1.5)}</g>` + person('mulu', { x: 240, y: 270, s: .9, outfit: 'swim', arms: 'face', expr: 'flat' }) +
      pencil([[150, 300, 22], [330, 260, 16], [360, 330, 12], [130, 380, 14], [300, 200, 10]].map(([x, y, r]) => ell(x, y, r, r, 'rgba(255,255,255,.7)', { lw: 2.4, hatch: false })).join('')) +
      sfx(410, 200, '쏴아', { size: 40, rot: 8, color: '#5BB8E0' }) + caption('샤워실') + bubble(16, 430, 300, 80, '비누칠까지 꼼꼼히…', { tail: 'none', size: 30 }),
      pool(200) + headInWater('mulu', { x: 245, y: 170, s: .9, cap: true, gog: 'eyes', expr: 'happy' }) + `<path d="M0,218 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V330 H0Z" fill="${P.sky}" opacity=".9"/>` + sparkle(120, 110, 14) + sparkle(380, 90, 12) +
      tipBox(320, '물루 TIP · 입수 전 샤워는 규칙', '땀·화장품·선크림은 물을 탁하게 해요.\n비누로 샤워하고, 수모를 쓴 뒤 입수!\n대부분 수영장의 기본 이용 규칙이에요.'),
    ] },

  // ════ EP.004 캐치 출동
  { ep: '004', title: '캐치 출동', teaser: '현관에 남겨진 물안경 하나',
    cover: { char: { svg: `<g transform="translate(540,560) scale(2.1)"><g filter="url(#pencil)">${PROPS.tubeBack(80, P.mint)}</g></g>` + catchDog({ x: 540, y: 560, s: 2.1, pose: 'sit', expr: 'happy', gog: true }) + `<g transform="translate(540,560) scale(2.1)"><g filter="url(#pencil)">${PROPS.tubeFront(80, P.mint)}</g></g>`, waistY: 740, ripples: [[540, 740, 280, 84]] } },
    titleArt: catchDog({ x: 540, y: 760, s: 1.6, pose: 'run', expr: 'normal', prop: PROPS.goggles(136, 22, .8) }),
    panels: [
      home() + pencil(sh('rect', { x: 300, y: 250, width: 170, height: 170 }, '#E2C29E', { lw: 3.4 })) + `<g filter="url(#pencil)">${PROPS.goggles(380, 240, .9)}</g>` +
      person('mulu', { x: 170, y: 230, s: .86, outfit: 'casual', arms: 'wave', expr: 'happy' }) + `<g filter="url(#pencil)">${PROPS.swimBag(100, 360, .55)}</g>` + catchDog({ x: 330, y: 400, s: .55, pose: 'sit', expr: 'normal' }) +
      sfx(420, 340, '!', { size: 60, rot: 0, color: '#E07A5F' }) + caption('AM 6:05 · 현관') + bubble(150, 60, 290, 76, '다녀오겠습니다~', { tail: 'bl', size: 32 }),
      street('#FFE9D6') + catchDog({ x: 250, y: 330, s: .95, pose: 'run', expr: 'normal', prop: PROPS.goggles(136, 22, .8) }) + sfx(90, 260, '다다다닥', { size: 42, rot: -10 }) +
      pencil(ln('M40,420 q20,-10 40,0 M20,380 q20,-10 40,0', 4, '#B9B6C6')) + caption('3분 뒤'),
      tiles('#F4F1FB', '#E3DDF0', 50) + pencil(sh('rect', { x: 300, y: 60, width: 180, height: 380 }, 'rgba(200,235,250,.6)', { lw: 3.4 }) + ln('M390,60 V440', 3)) +
      person('mulu', { x: 160, y: 250, s: .86, outfit: 'casual', arms: 'search', expr: 'sad' }) + `<g filter="url(#pencil)">${path('M100,370 h120 v70 q0,10 -10,10 h-100 q-10,0 -10,-10z', P.purple)}</g>` +
      catchDog({ x: 395, y: 330, s: .6, pose: 'sit', expr: 'normal', prop: PROPS.goggles(0, 24, .7) }) + caption('수영장 로비') + bubble(16, 70, 260, 76, '수경이 없어…', { tail: 'br', size: 32 }) + bubble(330, 140, 120, 64, '멍!', { tail: 'bc', size: 34 }),
      bg('#FFF1E4') + person('mulu', { x: 180, y: 190, s: .78, outfit: 'casual', arms: 'hold', expr: 'cry' }) + catchDog({ x: 330, y: 230, s: .55, pose: 'sit', expr: 'proud', gog: true }) + sparkle(420, 120, 14) +
      bubble(240, 50, 230, 66, '캐치 너 천재야?!', { tail: 'bl', size: 28 }) +
      tipBox(338, '물루 TIP · 여분 수경 하나', '가방 안주머니에 예비 수경을 하나 넣어 두면\n깜빡한 날도 안심!\n오래 써서 바꾼 수경을 예비로 쓰면 딱이에요.'),
    ] },

  // ════ EP.005 윤슬의 신상 수영복
  { ep: '005', title: '윤슬의\n신상 수영복', teaser: '“이거 요즘 수영장에서 제일 핫해!”',
    cover: { char: { svg: person('yoonseul', { x: 540, y: 460, s: 1.9, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9), propBack: `<g filter="url(#pencil)">${PROPS.tubeBack(118)}</g>` }) + `<g transform="translate(540,460) scale(1.9)"><g filter="url(#pencil)">${PROPS.tubeFront(118)}</g></g>`, waistY: 700, ripples: [[540, 700, 300, 84]] } },
    titleArt: person('yoonseul', { x: 420, y: 790, s: 1.35, outfit: 'trend', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) + person('mulu', { x: 700, y: 800, s: 1.3, outfit: 'casual', arms: 'down', expr: 'normal' }),
    panels: [
      bg('#FFF4F6') + person('yoonseul', { x: 150, y: 250, s: .86, outfit: 'trend', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) + person('mulu', { x: 350, y: 260, s: .84, outfit: 'casual', arms: 'down', expr: 'normal' }) +
      caption('토요일 · 수영 전') + bubble(16, 64, 300, 92, '요즘 이 물결 패턴\n완전 난리야!', { tail: 'bl', size: 30 }),
      lockers() + person('mulu', { x: 180, y: 250, s: .9, outfit: 'swimT', arms: 'face', expr: 'worried' }).replace(/#FFAFBD/g, '#FF9DB0') + person('yoonseul', { x: 380, y: 270, s: .78, outfit: 'trend', arms: 'fist', expr: 'sparkle' }) + sparkle(420, 150, 14) + sparkle(90, 160, 10) +
      caption('탈의실') + bubble(16, 380, 220, 84, '나… 어울려?', { tail: 'none', size: 32 }) + bubble(260, 70, 210, 70, '완전!!', { tail: 'br', size: 36 }),
      lockers() + pencil(sh('rect', { x: 280, y: 250, width: 170, height: 180, rx: 12 }, '#E3E1EC', { lw: 3.4 }) + ell(365, 330, 52, 52, '#BFE3F2', { lw: 3.4 })) +
      person('mulu', { x: 160, y: 250, s: .84, outfit: 'casual', arms: 'point', expr: 'happy' }) + person('yoonseul', { x: 400, y: 160, s: .56, outfit: 'trend', arms: 'up', expr: 'shock', body: false }) +
      caption('수영 끝!') + bubble(16, 70, 260, 76, '탈수기에 휙~', { tail: 'br', size: 32 }) + sfx(300, 110, '잠깐!!', { size: 46, rot: 8, color: '#E07A5F' }),
      bg('#FFF4F6') + person('yoonseul', { x: 140, y: 190, s: .74, outfit: 'trend', arms: 'point', expr: 'proud' }) + person('mulu', { x: 340, y: 200, s: .72, outfit: 'casual', arms: 'face', expr: 'sad' }) +
      tipBox(338, '물루 TIP · 수영복 오래 입기', '수영 후엔 찬물로 바로 헹구고 그늘에서 말리기.\n탈수기·드라이기·뜨거운 물은 원단이 늘어나요.\n염소에 강한 소재(폴리에스터)면 더 오래가요.'),
    ] },

  // ════ EP.006 새벽 5시 50분
  { ep: '006', title: '새벽 5시 50분', teaser: '이불 밖은 위험해, 그래도…',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'spread', gog: 'head' }) },
    titleArt: `<g filter="url(#pencil)">${PROPS.alarm(300, 820, 2.2)}</g>` + person('mulu', { x: 620, y: 780, s: 1.45, outfit: 'hoodie', arms: 'face', expr: 'sleepy' }),
    panels: [
      bg('#D9D6F2') + pencil(sh('rect', { x: 30, y: 300, width: 430, height: 160, rx: 30 }, '#FFFFFF', { lw: 3.4 }) + path('M60,320 Q240,250 440,320 L440,440 L60,440Z', P.lav)) + headInWater('mulu', { x: 140, y: 300, s: .62, expr: 'sleepy' }) +
      `<g filter="url(#pencil)">${PROPS.alarm(380, 190, 1.3)}</g>` + sfx(380, 120, '따르릉!!', { size: 40, rot: 8, color: '#E07A5F' }) + caption('AM 5:50'),
      bg('#D9D6F2') + pencil(sh('rect', { x: 30, y: 300, width: 430, height: 160, rx: 30 }, '#FFFFFF', { lw: 3.4 }) + path('M40,280 Q240,220 450,290 L450,440 L40,440Z', P.lav)) +
      catchDog({ x: 360, y: 210, s: .62, pose: 'sit', expr: 'normal', prop: `<g filter="url(#pencil)">${PROPS.swimBag(0, 40, .5)}</g>` }) + bubble(40, 100, 230, 76, '5분만… 아니 10분…', { tail: 'br', size: 26 }) + sfx(390, 90, '…', { size: 50, rot: 0 }),
      home('#FFF1E6', 430) + person('mulu', { x: 200, y: 250, s: .9, outfit: 'hoodie', arms: 'hold', expr: 'flat' }) + `<g filter="url(#pencil)">${PROPS.swimBag(370, 380, .75)}</g>` +
      pencil(ln('M330,330 l20,-20 M410,330 l-20,-20', 3)) + bubble(150, 60, 320, 92, '어젯밤에 가방 싸 둔\n나, 고마워…', { tail: 'bl', size: 30 }),
      bg('#FFE7CF') + pencil(ell(380, 140, 60, 60, '#FFC48A', { line: false }) + sh('rect', { x: -10, y: 280, width: PW + 20, height: 60 }, '#CFC8E6', { lw: 3 })) + person('mulu', { x: 160, y: 140, s: .66, outfit: 'casual', arms: 'wave', expr: 'happy' }) + sparkle(260, 80, 14) +
      tipBox(338, '물루 TIP · 새벽 수영 성공법', '전날 밤에 수영가방을 싸서 현관에 두기.\n아침엔 고민할 거리를 하나도 남기지 않는 게\n새벽반 개근의 비결이에요.'),
    ] },

  // ════ EP.007 아빠의 한마디
  { ep: '007', title: '아빠의 한마디', teaser: '발차기만 하면 가라앉는 물루',
    cover: { char: { svg: person('mulu', { x: 540, y: 540, s: 1.95, outfit: 'swim', cap: true, gog: 'eyes', arms: 'forward', expr: 'determined', prop: `<g filter="url(#pencil)">${PROPS.kickboard(0, -40, 1.1)}</g>` }), waistY: 770, ripples: [[540, 770, 290, 84], [540, 1010, 140, 44]] } },
    titleArt: person('dad', { x: 400, y: 780, s: 1.4, outfit: 'coverall', arms: 'down', expr: 'flat', prop: PROPS.wrench(76, 140, .8, 10) }) + person('mulu', { x: 700, y: 800, s: 1.25, outfit: 'casual', arms: 'hold', expr: 'shock' }),
    panels: [
      pool(260) + headInWater('mulu', { x: 160, y: 236, s: .72, cap: true, gog: 'eyes', expr: 'sad' }) + `<g filter="url(#pencil)">${PROPS.kickboard(160, 300, .9)}</g>` + `<path d="M0,300 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".7"/>` +
      sfx(360, 380, '첨벙첨벙', { size: 40, rot: 6, color: '#5BB8E0' }) + sfx(380, 450, '(가라앉는 중)', { size: 26, rot: 0, color: '#8A8098' }) + caption('저녁 자유수영') + bubble(180, 70, 290, 76, '발차기만 하면 가라앉아…', { tail: 'bl', size: 26 }),
      garage() + `<g filter="url(#pencil)">${PROPS.car(330, 318, .78)}</g>` + person('dad', { x: 120, y: 240, s: .8, outfit: 'coverall', arms: 'down', expr: 'flat', prop: PROPS.wrench(76, 140, .8, 10) }) + person('mulu', { x: 300, y: 250, s: .72, outfit: 'casual', arms: 'face', expr: 'sad', flip: true }) +
      bubble(230, 120, 240, 76, '아빠, 킥이 안 돼…', { tail: 'bl', size: 28 }),
      garage() + `<g filter="url(#pencil)">${PROPS.car(250, 318, .78)}</g>` + person('dad', { x: 140, y: 240, s: .84, outfit: 'coverall', arms: 'hold', expr: 'flat' }) + person('mulu', { x: 380, y: 240, s: .72, outfit: 'casual', arms: 'down', expr: 'shock' }) +
      bubble(30, 120, 250, 72, '…킥은 허벅지부터야.', { tail: 'br', size: 27 }) + sfx(400, 140, '?!', { size: 50, rot: 0, color: '#E07A5F' }),
      pool(160) + headInWater('mulu', { x: 150, y: 140, s: .62, cap: true, gog: 'eyes', expr: 'sparkle' }) + `<path d="M0,182 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V330 H0Z" fill="${P.sky}" opacity=".8"/>` + sfx(330, 120, '어? 뜬다!', { size: 40, rot: -4 }) +
      tipBox(338, '물루 TIP · 발차기는 허벅지부터', '무릎을 굽혀 차면 다리가 가라앉아요.\n허벅지(엉덩이)부터 채찍처럼 움직이고,\n무릎은 살짝만, 발목은 힘을 빼고 쭉!'),
    ] },

  // ════ EP.008 엄마의 큰소리
  { ep: '008', title: '엄마의 큰소리', teaser: '주 6일 수영, 3주째',
    cover: { char: swimmer({ arms: 'spread', expr: 'smile', gog: 'head' }) },
    titleArt: person('mom', { x: 420, y: 790, s: 1.4, outfit: 'apron', arms: 'point', expr: 'angry', prop: PROPS.ladle(96, 50, .9, 20) }) + person('mulu', { x: 700, y: 810, s: 1.25, outfit: 'hoodie', arms: 'face', expr: 'worried' }),
    panels: [
      home() + pencil(sh('rect', { x: 40, y: 300, width: 410, height: 130, rx: 24 }, P.mintD, { lw: 3.4 })) + person('mulu', { x: 240, y: 230, s: .86, outfit: 'hoodie', arms: 'face', expr: 'worried' }) + sweat(320, 150) +
      caption('주 6일 수영 3주째') + bubble(160, 66, 310, 76, '어깨가… 좀 뻐근하네', { tail: 'bl', size: 29 }),
      home('#FFE9E0') + person('mom', { x: 245, y: 240, s: 1.0, outfit: 'apron', arms: 'point', expr: 'angry', prop: PROPS.ladle(96, 50, .9, 20) }) + sfx(70, 160, '쾅!', { size: 50, rot: -12, color: '#E07A5F' }) +
      bubble(40, 40, 410, 90, '김물루! 어깨 또 무리했지!', { tail: 'bc', size: 32 }),
      home() + person('mulu', { x: 150, y: 240, s: .84, outfit: 'hoodie', arms: 'down', expr: 'sad', flip: true }) + `<g filter="url(#pencil)">${PROPS.patch(176, 300, 1.2, -10)}</g>` + person('mom', { x: 340, y: 230, s: .86, outfit: 'apron', arms: 'hold', expr: 'worried' }) +
      bubble(210, 60, 260, 92, '쉬는 것도\n운동이야.', { tail: 'br', size: 32 }),
      bg('#FFF6E6') + person('mulu', { x: 245, y: 170, s: .74, outfit: 'hoodie', arms: 'spread', expr: 'smile' }) + sparkle(90, 90, 12) + sparkle(400, 100, 12) +
      tipBox(338, '물루 TIP · 어깨 지키기', '수영 전후 어깨 스트레칭 5분씩.\n일주일에 하루 이틀은 쉬는 날로 정해 두기.\n통증이 계속되면 쉬고, 병원에서 확인하기!'),
    ] },

  // ════ EP.009 우리 동네 지름길
  { ep: '009', title: '우리 동네\n지름길', teaser: '큰길 15분, 골목 8분?',
    cover: { char: swimmer({ arms: 'wave', expr: 'happy' }) },
    titleArt: person('mulu', { x: 420, y: 800, s: 1.3, outfit: 'casual', arms: 'point', expr: 'sparkle', prop: `<g filter="url(#pencil)">${PROPS.swimBag(-70, 120, .5)}</g>` }) + person('dad', { x: 730, y: 790, s: 1.25, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: `<g filter="url(#pencil)">${PROPS.stopwatch(0, 112, 1.2)}</g>` }),
    panels: [
      bg('#F4FAF3') + pencil(sh('rect', { x: 40, y: 80, width: 410, height: 400, rx: 20 }, '#FFFFFF', { lw: 3.4, hatch: false }) + ln('M90,420 L90,140 L400,140 L400,420', 14, '#E3E1EC') + ln('M100,420 Q200,300 260,280 T400,140', 5, '#FF9EB8') +
        ell(90, 420, 18, 18, P.yellow, { lw: 3 }) + ell(400, 140, 22, 22, P.sky, { lw: 3 })) +
      `<text x="90" y="470" font-family="Gaegu" font-weight="700" font-size="24" fill="${LINE}" text-anchor="middle">집</text><text x="400" y="116" font-family="Gaegu" font-weight="700" font-size="24" fill="${LINE}" text-anchor="middle">수영장</text><text x="250" y="200" font-family="Gaegu" font-weight="700" font-size="22" fill="#8A8098" text-anchor="middle">큰길 15분</text><text x="250" y="330" font-family="Gaegu" font-weight="700" font-size="24" fill="#E07A5F" text-anchor="middle">골목 8분?</text>` +
      caption('우리 동네 지도'),
      street('#FFF3E2') + person('mulu', { x: 240, y: 260, s: .88, outfit: 'casual', arms: 'point', expr: 'sparkle', prop: `<g filter="url(#pencil)">${PROPS.swimBag(-70, 120, .5)}</g>` }) + sparkle(400, 200, 14) +
      caption('처음 들어가 본 골목') + bubble(150, 70, 320, 76, '진짜 8분 만에 도착?!', { tail: 'bl', size: 30 }),
      garage() + person('dad', { x: 140, y: 240, s: .82, outfit: 'coverall', arms: 'wave', expr: 'flat' }) + person('mulu', { x: 370, y: 250, s: .76, outfit: 'casual', arms: 'down', expr: 'shock' }) +
      caption('골목 중간쯤') + bubble(240, 120, 230, 92, '…여기\n아빠 가게였지', { tail: 'br', size: 29 }),
      garage() + person('dad', { x: 245, y: 180, s: .78, outfit: 'coverall', arms: 'hold', expr: 'proud', prop: `<g filter="url(#pencil)">${PROPS.stopwatch(0, 112, 1.2)}</g>` }) + bubble(20, 120, 180, 76, '오늘 3초\n빨랐군…', { tail: 'br', size: 26 }) +
      tipBox(338, '물루 TIP · 자유수영 시간표', '동네 수영장 자유수영은 강습 사이 시간에 열려요.\n요일마다 다르니 미리 확인하기!\n물루 앱 수영장 탭에서 한눈에 볼 수 있어요.'),
    ] },

  // ════ EP.010 회식 다음 날
  { ep: '010', title: '회식 다음 날', teaser: '“내일 새벽반 간다아~”',
    cover: { char: { svg: `<g transform="translate(540,560) scale(2.1)"><g filter="url(#pencil)">${PROPS.tubeBack(80, P.yellow)}</g></g>` + catchDog({ x: 540, y: 560, s: 2.1, pose: 'sit', expr: 'happy' }) + `<g transform="translate(540,560) scale(2.1)"><g filter="url(#pencil)">${PROPS.tubeFront(80, P.yellow)}</g></g>`, waistY: 740, ripples: [[540, 740, 280, 84]] } },
    titleArt: person('mulu', { x: 440, y: 790, s: 1.35, outfit: 'office', arms: 'wave', expr: 'drunk' }) + catchDog({ x: 720, y: 870, s: 1.1, pose: 'sit', expr: 'normal' }),
    panels: [
      bg('#3E4270') + pencil(ell(400, 100, 40, 40, P.yellow, { line: false })) + pencil(sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#6E6FA0', { lw: 3 })) +
      person('mulu', { x: 180, y: 250, s: .88, outfit: 'office', arms: 'wave', expr: 'drunk' }) + catchDog({ x: 360, y: 340, s: .55, pose: 'sit', expr: 'normal' }) +
      caption('PM 11:40 · 골목 어귀') + bubble(160, 66, 310, 76, '내일 새벽반 간다아~', { tail: 'bl', size: 30 }),
      bg('#D9D6F2') + pencil(sh('rect', { x: 30, y: 300, width: 430, height: 160, rx: 30 }, '#FFFFFF', { lw: 3.4 }) + path('M60,320 Q240,250 440,320 L440,440 L60,440Z', P.lav)) + headInWater('mulu', { x: 140, y: 300, s: .62, expr: 'drunk' }) +
      catchDog({ x: 370, y: 220, s: .55, pose: 'sit', expr: 'normal', prop: `<g filter="url(#pencil)">${PROPS.swimBag(0, 40, .5)}</g>` }) + sfx(260, 160, '(가방 압수)', { size: 30, rot: -4, color: '#8A8098' }) + caption('그날 밤'),
      home() + person('mulu', { x: 160, y: 250, s: .86, outfit: 'hoodie', arms: 'search', expr: 'sleepy' }) + catchDog({ x: 370, y: 330, s: .6, pose: 'sit', expr: 'proud' }) + `<g filter="url(#pencil)">${PROPS.swimBag(370, 420, .6)}</g>` +
      caption('AM 5:50') + bubble(180, 66, 290, 76, '내 가방 어디 갔지…', { tail: 'bl', size: 29 }),
      bg('#FFF1E4') + catchDog({ x: 245, y: 200, s: .8, pose: 'sit', expr: 'proud', gog: true }) + sparkle(120, 100, 14) + sparkle(380, 110, 12) +
      tipBox(338, '물루 TIP · 술 마신 다음 날', '술 마신 다음 날은 수영도 쉬기.\n몸에 수분이 부족해서 평소보다 쉽게 지쳐요.\n물 많이 마시고 푹 자는 게 오늘의 훈련!'),
    ] },

  // ════ EP.011 톡톡의 의미
  { ep: '011', title: '발을 톡톡', teaser: '누, 누가 내 발을 만졌어?!',
    cover: { char: swimmer({ expr: 'shock', arms: 'up' }) },
    titleArt: person('mulu', { x: 420, y: 800, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'shock' }) + person('pro', { x: 720, y: 800, s: 1.25, outfit: 'trunks', cap: true, gog: 'head', arms: 'wave', expr: 'smile' }).replace(/#B8A6F0/g, '#6E6680'),
    panels: [
      pool(200) + headInWater('mulu', { x: 330, y: 180, s: .6, cap: true, gog: 'eyes', expr: 'normal' }) + headInWater('pro', { x: 120, y: 200, s: .56, cap: true, gog: 'eyes', expr: 'determined' }).replace(/#B8A6F0/g, '#6E6680') +
      `<path d="M0,222 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".85"/>` + sfx(220, 330, '톡톡', { size: 46, rot: -8, color: '#E07A5F' }) + caption('저녁 자유수영 · 3레인'),
      pool(260) + headInWater('mulu', { x: 245, y: 230, s: .9, cap: true, gog: 'head', expr: 'shock' }) + `<path d="M0,290 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".85"/>` + sweat(330, 150) +
      bubble(100, 60, 300, 76, '누, 누가 내 발을?!', { tail: 'bc', size: 32 }),
      pool(260) + pencil(sh('rect', { x: 400, y: 0, width: 100, height: 540 }, '#E5D6C6', { lw: 3.4 })) + headInWater('mulu', { x: 330, y: 230, s: .7, cap: true, gog: 'head', expr: 'smile' }) +
      headInWater('pro', { x: 130, y: 250, s: .6, cap: true, gog: 'eyes', expr: 'happy' }).replace(/#B8A6F0/g, '#6E6680') + `<path d="M0,290 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".85"/>` +
      sfx(120, 380, '슝~', { size: 40, rot: -6 }) + caption('벽에서 잠깐 옆으로') + bubble(30, 80, 230, 70, '감사합니다~', { tail: 'bl', size: 30 }),
      pool(200) + headInWater('mulu', { x: 245, y: 180, s: .7, cap: true, gog: 'head', expr: 'proud' }) + `<path d="M0,222 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V330 H0Z" fill="${P.sky}" opacity=".85"/>` +
      tipBox(320, '물루 TIP · 레인 매너', '뒤에서 발을 톡톡 = “먼저 가도 될까요?” 신호.\n벽에 도착하면 잠깐 옆으로 비켜 주세요.\n레인 안에서는 모두 같은 방향으로 돌기!'),
    ] },

  // ════ EP.012 수영 끝, 배고픔 시작
  { ep: '012', title: '수영 끝,\n배고픔 시작', teaser: '꼬르르르르…',
    cover: { char: { ...swimmer({ arms: 'up', expr: 'happy', gog: 'head', prop: `<g filter="url(#pencil)">${PROPS.banana(60, 0, 1.1, -30)}</g>` }) } },
    titleArt: person('mulu', { x: 440, y: 800, s: 1.35, outfit: 'casual', arms: 'hold', expr: 'happy', prop: `<g filter="url(#pencil)">${PROPS.banana(0, 112, 1)}</g>` }) + person('mom', { x: 730, y: 800, s: 1.25, outfit: 'apron', arms: 'hold', expr: 'smile', prop: PROPS.thermos(0, 112, .9) }),
    panels: [
      street('#FFF3E2') + person('mulu', { x: 240, y: 250, s: .9, outfit: 'casual', arms: 'face', expr: 'flat', prop: `<g filter="url(#pencil)">${PROPS.swimBag(-70, 120, .5)}</g>` }) + sfx(380, 360, '꼬르르륵', { size: 42, rot: 10, color: '#E07A5F' }) +
      caption('수영장 나오는 길') + bubble(160, 70, 240, 70, '배고파…', { tail: 'bl', size: 34 }),
      bg('#FFF4F6') + person('yoonseul', { x: 160, y: 250, s: .84, outfit: 'trend', arms: 'phone', expr: 'wink', prop: `<g filter="url(#pencil)">${PROPS.cup(70, 30, 1.1)}</g>` }) + person('mulu', { x: 360, y: 260, s: .82, outfit: 'casual', arms: 'down', expr: 'sparkle' }) +
      bubble(20, 64, 300, 92, '요즘 수영러들은\n이거 마셔!', { tail: 'bl', size: 30 }),
      home('#FFF6E6') + person('mulu', { x: 150, y: 190, s: .7, outfit: 'hoodie', arms: 'hold', expr: 'happy', body: true }) + person('mom', { x: 360, y: 180, s: .72, outfit: 'apron', arms: 'hips', expr: 'smile' }) +
      pencil(sh('rect', { x: 30, y: 300, width: 430, height: 120, rx: 10 }, '#D9B08C', { lw: 3.4 }) + [80, 160, 240, 320, 400].map((x, i) => ell(x, 296, 28, 14, [P.yellow, P.mint, P.peach, P.pink, P.sky][i], { lw: 2.6 })).join('')) +
      bubble(250, 40, 220, 70, '많이 먹어~', { tail: 'br', size: 30 }) + caption('집', 16, 480),
      bg('#FFF6E6') + person('mulu', { x: 245, y: 170, s: .74, outfit: 'hoodie', arms: 'hold', expr: 'happy', prop: `<g filter="url(#pencil)">${PROPS.banana(0, 112, 1)}</g>` }) +
      tipBox(338, '물루 TIP · 수영 후 허기', '물속에선 체온을 지키느라 힘을 많이 써서 배가 고파요.\n바나나·우유처럼 가벼운 간식으로 먼저 채우고,\n늦은 밤 폭식은 피하기!'),
    ] },
];

// 업로드 배치: 하루 3편, 오른쪽 칸부터 올림 (인스타는 최신이 왼쪽)
EPS.forEach((e, i) => { e.cover.day = Math.floor(i / 3) + 1; e.cover.col = i % 3; e.upload = i + 1; });
module.exports = EPS;
