// 물루의 수영일기 EP.020~026
const S = require('./scenes');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer } = S;

// ── 로컬 소품·배경
const pg = (s) => `<g filter="url(#pencil)">${s}</g>`;
const dryer = (x, y, s = 1, r = 0) => pg(`<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-40,-18 h56 q18,0 18,18 q0,18 -18,18 h-56z', P.pink, { lw: 3 })}${path('M-10,18 h18 l-4,46 h-12z', P.pink, { lw: 3 })}${ell(-40, 0, 8, 18, '#C9C6D6', { lw: 2.6, hatch: false })}</g>`);
const frame = (x, y, w, h, inner) => pg(sh('rect', { x, y, width: w, height: h, rx: 6 }, '#E2C29E', { lw: 3.4 }) + sh('rect', { x: x + 12, y: y + 12, width: w - 24, height: h - 24, rx: 4 }, '#DDF1F7', { lw: 2.6, hatch: false })) + inner;
const snow = (n = 18, seed = 3) => { let s = ''; for (let i = 0; i < n; i++) { const x = (i * 97 + seed * 31) % PW, y = (i * 53 + seed * 17) % 420 + 20; s += `<circle cx="${x}" cy="${y}" r="${4 + (i % 3)}" fill="#fff" opacity=".9"/>`; } return s; };
const winterStreet = () => bg('#CFDDF2') + pencil([[60, 250, 200], [160, 220, 230], [350, 240, 210], [450, 210, 240]].map(([x, y, h], i) => sh('rect', { x: x - 40, y, width: 80, height: h }, i % 2 ? '#E6E9F6' : '#F3F1FA', { lw: 3 })).join('') + sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#F4F6FB', { lw: 3.4 })) + snow(20, 2);
const office = () => bg('#F3F0EA') + pencil(sh('rect', { x: 40, y: 60, width: 260, height: 150, rx: 8 }, '#FFFFFF', { lw: 3.4, hatch: false }) + ln('M70,110 h160 M70,140 h110 M70,170 h140', 3, '#B9B6C6') + sh('rect', { x: -10, y: 400, width: PW + 20, height: 30 }, '#C99B73', { lw: 3.4 }) + sh('rect', { x: -10, y: 430, width: PW + 20, height: 120 }, '#EAD7C2', { lw: 3.4 }));
const panda = `<ellipse cx="-24" cy="3" rx="22" ry="17" fill="none" stroke="#F28FA6" stroke-width="5"/><ellipse cx="24" cy="3" rx="22" ry="17" fill="none" stroke="#F28FA6" stroke-width="5"/>`;
const icicle = pg([-56, -36, 36, 56].map((x, i) => path(`M${x - 6},38 L${x},${62 + (i % 2) * 10} L${x + 6},38Z`, '#CDEBFA', { lw: 2.2, hatch: false })).join(''));
const shiver = (x, y) => pencil(ln(`M${x},${y} q6,-6 0,-12 q-6,-6 0,-12 M${x + 14},${y} q6,-6 0,-12 q-6,-6 0,-12`, 3, '#8FD3F0'));
const lotion = (x, y, s = 1) => pg(`<g transform="translate(${x},${y}) scale(${s})">${path('M-16,-10 h32 v52 q0,8 -8,8 h-16 q-8,0 -8,-8z', P.mint, { lw: 3 })}${path('M-6,-26 h12 v16 h-12z', '#fff', { lw: 2.6, hatch: false })}${path('M-2,-34 h14 v8 h-14z', '#fff', { lw: 2.4, hatch: false })}</g>`);
const itch = (x, y) => pencil(ln(`M${x},${y} l10,-10 M${x + 6},${y + 10} l12,-8 M${x - 4},${y + 18} l10,-8`, 3, '#E07A5F'));
const sofa = () => pg(sh('rect', { x: 40, y: 330, width: 410, height: 100, rx: 24 }, P.mintD, { lw: 3.4 }) + sh('rect', { x: 20, y: 300, width: 60, height: 130, rx: 20 }, P.mintD, { lw: 3.4 }) + sh('rect', { x: 410, y: 300, width: 60, height: 130, rx: 20 }, P.mintD, { lw: 3.4 }));
const waterIn = (y) => `<path d="M0,${y} q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".85"/>`;
const youngDad = (x, y, s) => person('dad', { x, y, s, outfit: 'trunks', cap: true, gog: 'head', arms: 'up', expr: 'proud' }).replace(/#B8A6F0/g, '#7C8FD0');

module.exports = [
  // ════ EP.020 엄마의 보온병
  { ep: '020', title: '엄마의 보온병', teaser: '수영 끝나고 오들오들…',
    cover: { char: swimmer({ expr: 'sad', arms: 'hold', gog: 'head', prop: `<g filter="url(#pencil)">${PROPS.thermos(0, 112, 1)}</g>` }) },
    titleArt: person('mom', { x: 420, y: 790, s: 1.35, outfit: 'apron', arms: 'hold', expr: 'smile', prop: PROPS.thermos(0, 112, .9) }) + person('mulu', { x: 700, y: 800, s: 1.3, outfit: 'hoodie', arms: 'hold', expr: 'sad' }),
    panels: [
      winterStreet() + person('mulu', { x: 240, y: 250, s: .9, outfit: 'hoodie', arms: 'hold', expr: 'sad', prop: `<g filter="url(#pencil)">${PROPS.swimBag(-70, 120, .5)}</g>` }) + shiver(140, 200) + shiver(320, 210) + sfx(380, 380, '덜덜덜', { size: 42, rot: 8, color: '#5BB8E0' }) +
      caption('PM 8:10 · 수영장 나오는 길') + bubble(150, 70, 320, 76, '으으… 몸이 안 녹아', { tail: 'bl', size: 31 }),
      home('#FFF6E6') + person('mom', { x: 300, y: 240, s: .9, outfit: 'apron', arms: 'hold', expr: 'worried', prop: PROPS.thermos(0, 112, .9) }) + person('mulu', { x: 120, y: 250, s: .8, outfit: 'hoodie', arms: 'hold', expr: 'sad' }) +
      caption('현관') + bubble(200, 60, 270, 92, '이거 마셔!\n머리부터 말리고!', { tail: 'br', size: 30 }),
      home('#FFF6E6') + `<g filter="url(#pencil)">${PROPS.cup(250, 330, 1.3, P.peach)}</g>` + person('mulu', { x: 170, y: 220, s: .86, outfit: 'hoodie', arms: 'hold', expr: 'happy' }) + pencil(ln('M240,280 q-8,-14 0,-26 M262,280 q-8,-14 0,-26', 3, '#C9C6D6')) +
      sparkle(350, 140, 14) + bubble(260, 70, 210, 76, '살 것 같아…', { tail: 'bl', size: 32 }) + caption('보리차 한 잔'),
      bg('#FFF6E6') + person('mulu', { x: 160, y: 180, s: .74, outfit: 'hoodie', arms: 'hold', expr: 'happy' }) + person('mom', { x: 340, y: 180, s: .72, outfit: 'apron', arms: 'hips', expr: 'proud' }) +
      tipBox(338, '물루 TIP · 수영 후 체온 지키기', '물속에선 생각보다 체온을 많이 빼앗겨요.\n따뜻한 물이나 차로 몸을 데우고,\n젖은 머리는 바로 말려 주세요!'),
    ] },

  // ════ EP.021 정비소 옛 사진
  { ep: '021', title: '정비소 옛 사진', teaser: '벽에 걸린 낯선 수영 선수',
    cover: { char: swimmer({ expr: 'shock', arms: 'up', gog: 'head' }) },
    titleArt: person('dad', { x: 420, y: 790, s: 1.35, outfit: 'coverall', arms: 'face', expr: 'flat' }) + person('mulu', { x: 700, y: 800, s: 1.3, outfit: 'casual', arms: 'point', expr: 'shock' }),
    panels: [
      garage() + frame(300, 130, 150, 180, youngDad(375, 200, .34) + `<g filter="url(#pencil)">${PROPS.medal(430, 280, .7)}</g>`) + person('mulu', { x: 170, y: 250, s: .86, outfit: 'casual', arms: 'point', expr: 'normal' }) +
      caption('태랑모터스 구석 벽') + bubble(16, 110, 220, 76, '어? 이 사진 뭐야?', { tail: 'br', size: 28 }),
      bg('#EEF2F8') + frame(70, 60, 350, 400, youngDad(245, 230, .9)) + pencil(sh('rect', { x: 120, y: 410, width: 250, height: 36, rx: 6 }, '#fff', { lw: 2.6, hatch: false })) +
      `<text x="245" y="436" font-family="Gaegu" font-weight="700" font-size="24" fill="${LINE}" text-anchor="middle">국가대표 선발전 · 자유형</text>` + sparkle(440, 90, 14),
      garage() + `<g filter="url(#pencil)">${PROPS.car(330, 318, .78)}</g>` + person('dad', { x: 130, y: 240, s: .84, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: PROPS.wrench(76, 140, .8, 10) }) + sweat(190, 160) +
      bubble(210, 124, 260, 76, '…차 고치러 가야지.', { tail: 'bl', size: 28 }) + caption('아빠, 딴청', 16, 484),
      garage() + person('mulu', { x: 245, y: 180, s: .76, outfit: 'casual', arms: 'face', expr: 'determined' }) + sfx(400, 140, '수상해…', { size: 32, rot: 6, color: P.purpleD }) +
      tipBox(338, '물루 TIP · 기본은 스트림라인', '국가대표도 매일 연습하는 기본자세, 스트림라인.\n두 팔을 귀 뒤로 붙여 머리 위로 쭉 뻗고,\n손을 겹쳐 몸을 화살처럼 곧게!'),
    ] },

  // ════ EP.022 캐치와 이미지 트레이닝
  { ep: '022', title: '거실 수영장', teaser: '캐치, 너도 스트림라인?',
    cover: { char: { svg: person('mulu', { x: 400, y: 470, s: 1.7, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined' }) + catchDog({ x: 760, y: 560, s: 1.25, pose: 'sit', expr: 'happy', gog: true }), waistY: 720, ripples: [[400, 690, 230, 70], [760, 720, 160, 50]] } },
    titleArt: person('mulu', { x: 440, y: 790, s: 1.35, outfit: 'hoodie', arms: 'up', expr: 'determined' }) + catchDog({ x: 720, y: 870, s: 1.1, pose: 'sit', expr: 'happy' }),
    panels: [
      home() + sofa() + person('mulu', { x: 240, y: 240, s: .9, outfit: 'hoodie', arms: 'up', expr: 'determined' }) + caption('일요일 · 거실') + bubble(16, 70, 210, 76, '이미지 트레이닝!', { tail: 'br', size: 28 }),
      home() + person('mulu', { x: 160, y: 240, s: .86, outfit: 'hoodie', arms: 'up', expr: 'determined' }) + catchDog({ x: 360, y: 330, s: .62, pose: 'sit', expr: 'normal' }) +
      bubble(300, 150, 150, 64, '멍!', { tail: 'bl', size: 34 }) + caption('따라하는 캐치'),
      home() + pencil(sh('rect', { x: 380, y: 40, width: 100, height: 390 }, '#F7E9DA', { lw: 3.4 })) + person('mulu', { x: 330, y: 240, s: .86, outfit: 'hoodie', arms: 'up', expr: 'flat', flip: true }) +
      sfx(130, 200, '벽에 착!', { size: 38, rot: -8 }) + bubble(30, 70, 230, 76, '팔이… 안 붙어…', { tail: 'br', size: 28 }) + caption('벽에 등 대고'),
      home() + person('mulu', { x: 150, y: 170, s: .72, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 360, y: 250, s: .55, pose: 'sit', expr: 'proud' }) +
      tipBox(338, '물루 TIP · 집에서 스트림라인', '벽에 머리·등·엉덩이를 붙이고 서서\n두 팔을 귀 뒤로 쭉 올려 손을 겹쳐 보세요.\n하루 30초씩, 몸이 자세를 기억해요.'),
    ] },

  // ════ EP.023 겨울 출근길 젖은 머리
  { ep: '023', title: '고드름 머리', teaser: '머리 덜 말리고 나왔더니…',
    cover: { char: swimmer({ expr: 'sleepy', arms: 'down', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'office', arms: 'face', expr: 'shock', prop: icicle }),
    panels: [
      lockers() + person('mulu', { x: 200, y: 250, s: .9, outfit: 'office', arms: 'hold', expr: 'shock' }) + `<g filter="url(#pencil)">${PROPS.alarm(380, 160, 1.1)}</g>` +
      caption('AM 7:52 · 탈의실') + bubble(16, 70, 300, 76, '지각이다! 머리는 대충!', { tail: 'br', size: 28 }),
      winterStreet() + person('mulu', { x: 240, y: 250, s: .9, outfit: 'office', arms: 'down', expr: 'normal' }) + sfx(380, 160, '휘이잉', { size: 40, rot: 8, color: '#5BB8E0' }) + caption('영하 5도'),
      winterStreet() + person('mulu', { x: 240, y: 230, s: 1.0, outfit: 'office', arms: 'face', expr: 'shock', prop: icicle }) + sfx(90, 380, '쩡', { size: 46, rot: -10, color: '#5BB8E0' }) +
      bubble(150, 50, 300, 76, '머리카락이 얼었어?!', { tail: 'bl', size: 29 }),
      bg('#EEF2F8') + dryer(330, 150, 1.1, -20) + person('mulu', { x: 180, y: 170, s: .74, outfit: 'hoodie', arms: 'hold', expr: 'happy' }) +
      tipBox(338, '물루 TIP · 겨울 수영 후 머리', '두피까지 꼼꼼히 드라이하고 나가기.\n젖은 머리로 찬바람을 맞으면 감기에 걸리기 쉬워요.\n시간이 없는 날은 모자를 꼭 챙기기!'),
    ] },

  // ════ EP.024 판다 눈
  { ep: '024', title: '판다 눈으로\n회의 입장', teaser: '아침 수영의 흔적',
    cover: { char: swimmer({ expr: 'flat', gog: 'none', arms: 'up', prop: panda }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'office', arms: 'face', expr: 'worried', prop: panda }),
    panels: [
      pool(300) + headInWater('mulu', { x: 245, y: 270, s: .9, cap: true, gog: 'eyes', expr: 'determined' }) + waterIn(330) + pencil(ln('M150,250 l-20,-10 M340,250 l20,-10', 4)) +
      sfx(390, 160, '꽉!', { size: 44, rot: 8, color: '#E07A5F' }) + caption('AM 6:30') + bubble(16, 70, 280, 76, '물 한 방울도 못 들어와!', { tail: 'br', size: 26 }),
      office() + person('guard', { x: 380, y: 240, s: .8, outfit: 'office', arms: 'down', expr: 'shock', flip: true }) + person('mulu', { x: 150, y: 240, s: .86, outfit: 'office', arms: 'hold', expr: 'normal', prop: panda }) +
      caption('AM 9:00 · 회의실') + bubble(250, 60, 220, 76, '물루 씨… 눈이?', { tail: 'br', size: 28 }),
      office() + person('mulu', { x: 245, y: 230, s: 1.0, outfit: 'office', arms: 'face', expr: 'cry', prop: panda }) + sfx(400, 140, '화끈', { size: 40, rot: 8, color: '#E07A5F' }) +
      bubble(30, 50, 250, 76, '수, 수경 자국이에요…', { tail: 'br', size: 27 }),
      bg('#F3F0EA') + person('mulu', { x: 245, y: 170, s: .74, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'smile' }) +
      tipBox(338, '물루 TIP · 수경 자국 줄이기', '끈은 물이 안 들어올 만큼만, 너무 세게 조이지 않기.\n눈두덩에 맞는 크기의 패킹을 고르면 자국이 덜해요.\n벗은 뒤엔 눈가를 가볍게 마사지!'),
    ] },

  // ════ EP.025 접영 첫 도전
  { ep: '025', title: '접영 첫 도전', teaser: '나비가 되고 싶었는데…',
    cover: { char: swimmer({ expr: 'determined', arms: 'spread', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 420, y: 800, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'determined' }) + person('yoonseul', { x: 730, y: 800, s: 1.25, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }),
    panels: [
      pool(300) + headInWater('mulu', { x: 245, y: 270, s: .9, cap: true, gog: 'head', expr: 'sparkle' }) + waterIn(330) + caption('오늘의 강습: 접영') + bubble(140, 70, 300, 76, '드디어 나도 나비!', { tail: 'bl', size: 32 }),
      pool(240) + headInWater('mulu', { x: 250, y: 210, s: .78, cap: true, gog: 'eyes', expr: 'shock' }) + waterIn(260) +
      pencil(ln('M150,230 q-30,-60 -10,-100 M350,230 q30,-60 10,-100', 14, P.skin)) + sfx(110, 380, '푸덕', { size: 44, rot: -8, color: '#5BB8E0' }) + sfx(380, 420, '첨벙!', { size: 44, rot: 8, color: '#5BB8E0' }) + caption('현실'),
      tiles(P.paper, '#F1DECF', 46, 0, 330) + water(330) + person('yoonseul', { x: 200, y: 230, s: .86, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'happy', prop: PROPS.phone(68, 30, .9) }) +
      sfx(400, 260, 'ㅋㅋㅋ', { size: 46, rot: 8, color: '#E07A5F' }) + bubble(260, 60, 210, 92, '이거 릴스각…!', { tail: 'bl', size: 30 }),
      pool(200) + headInWater('mulu', { x: 245, y: 180, s: .7, cap: true, gog: 'head', expr: 'sad' }) + waterIn(222) +
      tipBox(320, '물루 TIP · 접영은 웨이브부터', '팔로 물을 세게 누르기 전에\n가슴과 허리로 물결 타듯 웨이브를 먼저 익혀요.\n킥판 잡고 돌핀킥 연습부터 차근차근!'),
    ] },

  // ════ EP.026 수영 후 피부 건조
  { ep: '026', title: '간질간질', teaser: '수영 다녀오면 온몸이…',
    cover: { char: swimmer({ expr: 'worried', arms: 'face', gog: 'head' }) },
    titleArt: person('mulu', { x: 440, y: 790, s: 1.35, outfit: 'hoodie', arms: 'face', expr: 'worried' }) + lotion(720, 880, 2.2),
    panels: [
      office() + person('mulu', { x: 240, y: 240, s: .9, outfit: 'office', arms: 'face', expr: 'worried' }) + itch(320, 300) + itch(150, 330) +
      caption('PM 2:00 · 사무실') + bubble(150, 70, 320, 76, '팔이 왜 이렇게 간지럽지', { tail: 'bl', size: 27 }),
      bg('#FFF4F6') + person('yoonseul', { x: 300, y: 240, s: .86, outfit: 'trend', arms: 'point', expr: 'shock', flip: true }) + person('mulu', { x: 120, y: 250, s: .8, outfit: 'casual', arms: 'face', expr: 'sad' }) +
      bubble(200, 60, 270, 92, '수영하고 보습 안 했지?\n염소 때문이야!', { tail: 'br', size: 26 }),
      lockers() + lotion(360, 330, 1.4) + person('mulu', { x: 180, y: 250, s: .88, outfit: 'swim', arms: 'hold', expr: 'happy' }) + sparkle(300, 200, 12) + sparkle(100, 180, 10) +
      caption('다음 날 · 샤워 직후') + bubble(200, 70, 270, 76, '물기 있을 때 바로!', { tail: 'bl', size: 30 }),
      bg('#FFF4F6') + person('mulu', { x: 245, y: 170, s: .74, outfit: 'casual', arms: 'hold', expr: 'sparkle' }) + sparkle(380, 110, 12) +
      tipBox(338, '물루 TIP · 수영 후 보습', '수영장 물의 소독 성분은 피부를 건조하게 해요.\n샤워 후 물기가 조금 남았을 때 바로 보습제를!\n물도 충분히 마시면 더 좋아요.'),
    ] },
];
