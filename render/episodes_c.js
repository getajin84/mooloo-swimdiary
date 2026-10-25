// 물루의 수영일기 EP.027~033
const S = require('./scenes');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer } = S;

// ── 로컬 소품
const fin = (x, y, s = 1, r = 0, col = '#FFD27A') => `<g filter="url(#pencil)" transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-14,-30 h28 v20 q30,40 16,62 q-16,10 -30,0 q-14,-10 -30,0 q-14,-22 16,-62z', col, { lw: 3 })}${ln('M-6,-4 v40 M6,-4 v40', 2.4, '#fff')}</g>`;
const finsOnFeet = (x, y, s = 1) => fin(x - 22 * s, y, .7 * s, 8) + fin(x + 22 * s, y, .7 * s, -8);
const umbrella = (x, y, s = 1, col = P.sky) => `<g filter="url(#pencil)" transform="translate(${x},${y}) scale(${s})">${path('M-70,0 Q-70,-62 0,-64 Q70,-62 70,0 Q52,-12 35,0 Q18,-12 0,0 Q-18,-12 -35,0 Q-52,-12 -70,0Z', col)}${ln('M0,0 V70 q0,12 -12,12', 4)}</g>`;
const rain = (n = 26) => `<g opacity=".7">${[...Array(n)].map((_, i) => { const x = (i * 53) % 500, y = (i * 97) % 520; return `<path d="M${x},${y} l-8,22" stroke="#7FB8E8" stroke-width="3" stroke-linecap="round"/>`; }).join('')}</g>`;
const cake = (x, y, s = 1) => `<g filter="url(#pencil)" transform="translate(${x},${y}) scale(${s})">${path('M-60,0 h120 v50 h-120z', '#FFE3EC')}${path('M-60,0 q15,14 30,0 t30,0 t30,0 t30,0 v-10 h-120z', '#fff', { lw: 3 })}${path('M-40,-30 h80 v30 h-80z', P.mint)}${ln('M-20,-30 v-22 M0,-30 v-22 M20,-30 v-22', 4, P.yellow)}${ell(-20, -58, 4, 7, '#FFB36B', { line: false, hatch: false })}${ell(0, -58, 4, 7, '#FFB36B', { line: false, hatch: false })}${ell(20, -58, 4, 7, '#FFB36B', { line: false, hatch: false })}</g>`;
const giftBox = (x, y, s = 1) => `<g filter="url(#pencil)" transform="translate(${x},${y}) scale(${s})">${path('M-40,-20 h80 v56 h-80z', P.navy)}${path('M-46,-34 h92 v16 h-92z', '#A9B4E0')}${ln('M0,-34 V36', 6, P.yellow)}${path('M0,-34 q-22,-24 -30,-6 q8,10 30,6 q22,4 30,-6 q-8,-18 -30,6z', P.yellow, { lw: 2.6 })}</g>`;
const compSuit = (x, y, s = 1) => `<g filter="url(#pencil)" transform="translate(${x},${y}) scale(${s})">${path('M-30,-50 l12,0 q18,16 36,0 l12,0 q-6,40 4,70 q-34,16 -68,0 q10,-30 4,-70z', '#3E4A8A')}${ln('M-26,10 Q0,22 26,10', 4, P.mint)}</g>`;
const phoneTimer = (x, y, s = 1, t = '00:52') => `<g filter="url(#pencil)" transform="translate(${x},${y}) scale(${s})">${path('M-34,-54 h68 a8,8 0 0 1 8,8 v92 a8,8 0 0 1 -8,8 h-68 a8,8 0 0 1 -8,-8 v-92 a8,8 0 0 1 8,-8z', '#FFFFFF', { lw: 3.2 })}${path('M-30,-40 h60 v18 h-60z', P.sky, { lw: 2, hatch: false })}</g><text x="${x}" y="${y + 12 * s}" font-family="Gaegu" font-weight="700" font-size="${26 * s}" fill="${LINE}" text-anchor="middle">${t}</text><text x="${x}" y="${y - 26 * s}" font-family="Gaegu" font-weight="700" font-size="${14 * s}" fill="${LINE}" text-anchor="middle">mooloo</text>`;
const crowdHeads = (y, xs, s = .42) => xs.map((x, i) => headInWater(i % 2 ? 'pro' : 'guard', { x, y: y + (i % 3) * 8, s, cap: true, gog: 'eyes', expr: ['flat', 'normal', 'determined'][i % 3] }).replace(/#B8A6F0/g, ['#6E6680', '#FF9EB8', '#7FDCC6', '#FFD27A'][i % 4])).join('');
const waterFront = (y, op = .85, bottom = PH) => `<path d="M0,${y} q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${bottom} H0Z" fill="${P.sky}" opacity="${op}"/>`;
const wall = (x) => pencil(sh('rect', { x, y: -10, width: PW - x + 10, height: PH + 20 }, '#E5D6C6', { lw: 3.4 }) + ln(`M${x + 30},0 V${PH}`, 2, '#CDBCA8'));
const confetti = () => `<g>${[...Array(22)].map((_, i) => { const x = (i * 71) % 480 + 5, y = (i * 43) % 300 + 10, c = [P.pink, P.mint, P.yellow, P.sky, P.purple][i % 5]; return `<rect x="${x}" y="${y}" width="10" height="16" rx="3" fill="${c}" transform="rotate(${(i * 37) % 90} ${x} ${y})"/>`; }).join('')}</g>`;

module.exports = [
  // ════ EP.027 오리발 데이
  { ep: '027', title: '오리발 데이', teaser: '나… 갑자기 물개가 됐어',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle' }) + finsOnFeet(540, 470 + 205 * 2.0, 2.0), waistY: 710, ripples: [[540, 710, 300, 84], [540, 1110, 160, 46]] } },
    titleArt: person('mulu', { x: 540, y: 780, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + finsOnFeet(540, 780 + 200 * 1.45, 1.45),
    panels: [
      lockers() + person('mulu', { x: 240, y: 230, s: .86, outfit: 'swim', cap: true, gog: 'head', arms: 'hold', expr: 'sparkle', prop: fin(0, 120, .7, 0) }) + sparkle(110, 150, 14) + sparkle(380, 140, 12) +
      caption('목요일 · 오리발 데이') + bubble(150, 66, 320, 76, '드디어 오리발 쓰는 날!', { tail: 'bl', size: 30 }),
      pool(230) + headInWater('mulu', { x: 340, y: 210, s: .64, cap: true, gog: 'eyes', expr: 'sparkle' }) + waterFront(250) + fin(150, 310, .8, 70) + fin(110, 330, .8, 60) +
      pencil(ln('M190,300 h-110 M200,330 h-130 M190,360 h-100', 4, '#fff')) + sfx(150, 440, '슈우우웅', { size: 42, rot: -6 }) + caption('PM 7:20 · 25m 순삭') + bubble(150, 60, 320, 76, '나 갑자기 물개 됐어!!', { tail: 'br', size: 30 }),
      home() + person('mulu', { x: 220, y: 240, s: .86, outfit: 'hoodie', arms: 'search', expr: 'cry' }) + sfx(330, 400, '찌릿찌릿', { size: 40, rot: 8, color: '#E07A5F' }) + sweat(310, 160) +
      caption('다음 날 아침') + bubble(150, 60, 320, 76, '종아리가… 내 종아리가…', { tail: 'bl', size: 28 }),
      pool(190) + headInWater('mulu', { x: 245, y: 168, s: .64, cap: true, gog: 'head', expr: 'worried' }) + waterFront(210, .85, 330) +
      tipBox(320, '물루 TIP · 오리발 처음 쓸 때', '발목에 힘을 빼고 허벅지부터 부드럽게 차기.\n처음엔 25m 몇 번 정도로 짧게 시작하고,\n끝나면 종아리 스트레칭 꼭 해 주기!'),
    ] },

  // ════ EP.028 붐비는 저녁 레인
  { ep: '028', title: '6명이 한 레인', teaser: '퇴근 후 7시, 모두의 생각은 같았다',
    cover: { char: swimmer({ expr: 'worried', arms: 'down', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }),
    panels: [
      bg('#FFE9D6') + pencil(sh('rect', { x: -10, y: 380, width: PW + 20, height: 30 }, '#D9B08C', { lw: 3.4 }) + sh('rect', { x: -10, y: 410, width: PW + 20, height: 140 }, '#EED4B8', { lw: 3.4 })) +
      person('mulu', { x: 245, y: 230, s: .86, outfit: 'office', arms: 'fist', expr: 'determined' }) + caption('PM 6:00 · 칼퇴') + bubble(150, 66, 320, 76, '오늘은 1시간 꽉 채운다!', { tail: 'bl', size: 29 }),
      pool(180) + crowdHeads(170, [50, 130, 210, 290, 370, 450]) + waterFront(205, .85) + headInWater('mulu', { x: 245, y: 345, s: .7, cap: true, gog: 'head', expr: 'shock' }) + waterFront(372, .85) +
      caption('PM 7:00 · 3레인') + sfx(245, 140, '바글바글', { size: 40, rot: -4, color: '#E07A5F' }),
      pool(240) + crowdHeads(230, [60, 160, 330, 430], .4) + headInWater('mulu', { x: 245, y: 230, s: .6, cap: true, gog: 'eyes', expr: 'flat' }) + waterFront(265, .85) +
      sfx(120, 380, '앞사람 발…', { size: 30, rot: -4, color: '#8A8098' }) + sfx(370, 430, '뒷사람 손…', { size: 30, rot: 4, color: '#8A8098' }) + caption('수영인지 줄서기인지'),
      pool(190) + headInWater('mulu', { x: 245, y: 168, s: .64, cap: true, gog: 'head', expr: 'smile' }) + waterFront(210, .85, 330) + sparkle(110, 90, 12) +
      tipBox(320, '물루 TIP · 붐비는 시간 피하기', '퇴근 직후(저녁 7~8시)는 대부분 수영장이 가장 붐벼요.\n조금 늦은 시간이나 주말 오후를 노려 보기.\n물루 앱에서 시간대별 혼잡도를 미리 확인!'),
    ] },

  // ════ EP.029 윤슬 vs 물루 50m 대결
  { ep: '029', title: '50m 대결', teaser: '윤슬은 사진, 물루는 진심',
    cover: { char: { svg: person('mulu', { x: 400, y: 480, s: 1.55, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined' }) + person('yoonseul', { x: 720, y: 500, s: 1.45, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }), waistY: 690, ripples: [[400, 690, 200, 60], [720, 700, 190, 56]] } },
    titleArt: person('mulu', { x: 400, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + person('yoonseul', { x: 700, y: 790, s: 1.3, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }),
    panels: [
      pool(300) + person('yoonseul', { x: 140, y: 210, s: .74, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'proud' }) + person('mulu', { x: 350, y: 210, s: .76, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) +
      caption('토요일 자유수영') + bubble(20, 66, 230, 76, '50m 한 판 어때?', { tail: 'bl', size: 29 }) + bubble(270, 66, 200, 70, '좋아, 진심으로!', { tail: 'br', size: 26 }),
      pool(200) + headInWater('mulu', { x: 130, y: 182, s: .6, cap: true, gog: 'eyes', expr: 'determined' }) + pencil(ln('M70,230 h-60 M80,250 h-70', 4, '#fff')) + headInWater('yoonseul', { x: 360, y: 186, s: .6, cap: true, capStyle: 'trend', gog: 'head', expr: 'wink' }) +
      waterFront(224, .85) + `<g filter="url(#pencil)">${PROPS.phone(410, 140, .9)}</g>` + sfx(130, 360, '첨벙첨벙!!', { size: 40, rot: -6, color: '#5BB8E0' }) + sfx(370, 340, '찰칵 ♪', { size: 36, rot: 6, color: '#FF9EB8' }) + caption('출발!'),
      pool(260) + headInWater('mulu', { x: 150, y: 236, s: .68, cap: true, gog: 'head', expr: 'proud' }) + headInWater('yoonseul', { x: 360, y: 240, s: .62, cap: true, capStyle: 'trend', gog: 'head', expr: 'happy' }) + waterFront(282, .85) +
      phoneTimer(380, 400, 1.1, '00:52') + bubble(20, 66, 220, 70, '52초! 신기록!', { tail: 'bl', size: 30 }) + bubble(260, 120, 210, 70, '난 사진 신기록♪', { tail: 'br', size: 24 }),
      bg('#F4FAF3') + phoneTimer(245, 170, 1.6, '00:52') + sparkle(120, 90, 14) + sparkle(380, 100, 12) +
      tipBox(338, '물루 TIP · 기록은 남겨야 보여요', '그날그날 거리·시간을 적어 두면\n조금씩 빨라지는 게 눈에 보여요.\n물루 앱에 기록하고 내 성장 그래프 확인하기!'),
    ] },

  // ════ EP.030 아빠의 생일 선물
  { ep: '030', title: '아빠의 생일 선물', teaser: '현관에 놓인 파란 상자 하나',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'cry' }).replace(new RegExp(P.purple, 'g'), '#3E4A8A'), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('dad', { x: 420, y: 780, s: 1.35, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: giftBox(0, 112, .9) }) + person('mulu', { x: 700, y: 800, s: 1.25, outfit: 'hoodie', arms: 'hold', expr: 'sparkle' }),
    panels: [
      home() + giftBox(370, 380, 1.1) + person('mulu', { x: 170, y: 240, s: .86, outfit: 'hoodie', arms: 'point', expr: 'shock' }) + sfx(370, 300, '?', { size: 50, rot: 0 }) +
      caption('생일 아침 · 현관') + bubble(150, 60, 290, 76, '이거… 누가 놨지?', { tail: 'bl', size: 30 }),
      home() + person('mulu', { x: 245, y: 230, s: .9, outfit: 'hoodie', arms: 'hold', expr: 'sparkle' }) + compSuit(245, 338, .95) + sparkle(110, 140, 16) + sparkle(390, 120, 14) + sparkle(380, 330, 10) +
      bubble(110, 54, 270, 76, '경기용 수영복이다!!', { tail: 'bc', size: 30 }),
      garage() + `<g filter="url(#pencil)">${PROPS.car(330, 318, .78)}</g>` + person('dad', { x: 140, y: 240, s: .84, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: PROPS.wrench(0, 116, .8, 10) }) + person('mulu', { x: 370, y: 250, s: .72, outfit: 'casual', arms: 'down', expr: 'cry' }) +
      bubble(20, 120, 250, 72, '…사이즈 맞으면 입어.', { tail: 'br', size: 27 }),
      bg('#EEF2F8') + person('dad', { x: 150, y: 190, s: .7, outfit: 'coverall', arms: 'down', expr: 'proud' }) + person('mulu', { x: 330, y: 200, s: .68, outfit: 'casual', arms: 'hold', expr: 'happy' }) +
      tipBox(338, '물루 TIP · 경기용 수영복 관리', '경기용(타이트) 수영복은 평소 연습용과 구분해서\n대회·기록 측정 날에만 아껴 입기.\n입고 벗을 땐 손톱 조심, 찬물 헹굼 후 그늘 건조!'),
    ] },

  // ════ EP.031 비 오는 날 수영
  { ep: '031', title: '비 오는 날 수영', teaser: '어차피 젖을 건데 뭐!',
    cover: { char: { ...swimmer({ expr: 'happy', arms: 'up', gog: 'head' }), ripples: [[540, 710, 300, 84], [220, 300, 40, 14], [860, 420, 36, 12], [300, 1000, 44, 14], [800, 1080, 30, 10], [160, 640, 30, 10]] } },
    titleArt: person('mulu', { x: 540, y: 800, s: 1.4, outfit: 'casual', arms: 'wave', expr: 'happy', prop: umbrella(72, -64, 1) }),
    panels: [
      bg('#C9D3EA') + rain() + pencil(sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#A9B1CC', { lw: 3.4 })) + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'face', expr: 'sad' }) +
      caption('AM 6:00 · 창밖은 비') + bubble(150, 66, 300, 76, '오늘은 쉴까…?', { tail: 'bl', size: 31 }),
      bg('#C9D3EA') + rain() + person('mulu', { x: 245, y: 250, s: .86, outfit: 'casual', arms: 'wave', expr: 'determined', prop: umbrella(72, -64, 1) }) + `<g filter="url(#pencil)">${PROPS.swimBag(330, 380, .55)}</g>` +
      bubble(20, 40, 290, 76, '어차피 젖을 건데 뭐!', { tail: 'bl', size: 30 }),
      pool(190) + headInWater('mulu', { x: 245, y: 168, s: .66, cap: true, gog: 'eyes', expr: 'sparkle' }) + waterFront(210, .85) + sparkle(110, 100, 12) + sparkle(380, 90, 14) +
      caption('텅 빈 레인') + bubble(130, 300, 250, 76, '레인 전세 냈다!', { tail: 'none', size: 32 }),
      bg('#E6ECF8') + rain(14) + person('mulu', { x: 245, y: 180, s: .7, outfit: 'casual', arms: 'wave', expr: 'happy', prop: umbrella(72, -64, 1) }) +
      tipBox(338, '물루 TIP · 비 오는 날 수영', '비 오는 날은 실내 수영장이 한산한 편이라 기회!\n젖은 수건·수영복은 지퍼백에 따로 담고,\n머리는 꼭 말리고 나와서 감기 조심하기.'),
    ] },

  // ════ EP.032 턴 연습
  { ep: '032', title: '턴 연습', teaser: '벽이 생각보다 가까웠다',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'eyes', arms: 'face', expr: 'cry' }),
    panels: [
      pool(260) + wall(410) + headInWater('mulu', { x: 150, y: 236, s: .68, cap: true, gog: 'eyes', expr: 'determined' }) + waterFront(282, .85, PH) +
      caption('오늘의 목표') + bubble(140, 70, 250, 76, '멋진 플립턴!', { tail: 'bl', size: 32 }),
      pool(260) + wall(410) + `<g transform="translate(330,300) rotate(170)">${person('mulu', { s: .5, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'shock' })}</g>` + waterFront(300, .6, PH) +
      sfx(200, 160, '빙그르…', { size: 40, rot: -10 }) + caption('벽까지 너무 가까이'),
      pool(260) + wall(410) + headInWater('mulu', { x: 330, y: 230, s: .72, cap: true, gog: 'head', expr: 'cry' }) + waterFront(282, .85, PH) +
      sfx(400, 150, '쿵!', { size: 56, rot: 10, color: '#E07A5F' }) + pencil(ell(330, 170, 14, 8, P.pink, { line: false, hatch: false })) + bubble(20, 80, 230, 70, '벽이랑 인사함…', { tail: 'br', size: 28 }),
      pool(190) + wall(410) + headInWater('mulu', { x: 230, y: 168, s: .64, cap: true, gog: 'head', expr: 'smile' }) + waterFront(210, .85, 330) +
      tipBox(320, '물루 TIP · 턴 연습 순서', '처음엔 벽을 손으로 짚고 도는 오픈턴부터!\n플립턴은 벽 약 1m 앞에서 회전 시작,\n바닥 T자 표시를 보면 거리 잡기가 쉬워요.'),
    ] },

  // ════ EP.033 수영 3주년
  { ep: '033', title: '수영 3주년', teaser: '물에 처음 뜬 날부터 오늘까지',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'happy', propBack: `<g filter="url(#pencil)">${PROPS.tubeBack(118, P.yellow)}</g>` }) + `<g transform="translate(540,470) scale(2.0)"><g filter="url(#pencil)">${PROPS.tubeFront(118, P.yellow)}</g></g>`, waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mom', { x: 300, y: 800, s: 1.1, outfit: 'apron', arms: 'hold', expr: 'smile' }) + person('mulu', { x: 540, y: 780, s: 1.3, outfit: 'casual', arms: 'up', expr: 'happy' }) + person('dad', { x: 790, y: 800, s: 1.1, outfit: 'coverall', arms: 'wave', expr: 'proud' }),
    panels: [
      home('#FFF1E6') + person('mulu', { x: 245, y: 230, s: .9, outfit: 'casual', arms: 'hold', expr: 'normal', prop: `<g filter="url(#pencil)">${PROPS.phone(0, 116, 1.1)}</g>` }) +
      caption('밤 · 내 방') + bubble(110, 60, 300, 92, '수영 시작한 지\n딱 3년이네…', { tail: 'bc', size: 30 }),
      home('#FFF1E6') + confetti() + person('yoonseul', { x: 110, y: 250, s: .74, outfit: 'trend', arms: 'up', expr: 'happy' }) + person('mulu', { x: 250, y: 260, s: .74, outfit: 'casual', arms: 'face', expr: 'shock' }) + person('mom', { x: 390, y: 260, s: .72, outfit: 'apron', arms: 'up', expr: 'happy' }) +
      sfx(250, 90, '서프라이즈!!', { size: 46, rot: -4, color: '#E07A5F' }),
      home('#FFF1E6') + person('dad', { x: 120, y: 200, s: .7, outfit: 'coverall', arms: 'down', expr: 'flat' }) + person('mulu', { x: 280, y: 210, s: .7, outfit: 'casual', arms: 'hold', expr: 'cry' }) + catchDog({ x: 410, y: 300, s: .5, pose: 'sit', expr: 'happy' }) +
      cake(245, 430, 1.1) + bubble(10, 60, 240, 70, '…3년 버텼으면 진짜다.', { tail: 'br', size: 24 }) + bubble(350, 150, 110, 60, '멍!', { tail: 'bc', size: 32 }),
      bg('#FFF6E6') + confetti() + person('mulu', { x: 245, y: 170, s: .74, outfit: 'casual', arms: 'up', expr: 'happy' }) +
      tipBox(338, '오늘의 물루 한마디', '처음엔 25m도 벅찼는데, 매일 조금씩 하다 보니 3년.\n빨리 가는 날도, 둥둥 뜨는 날도 다 내 수영이었어요.\n같이 헤엄쳐 줘서 고마워요. 내일도 물에서 만나요!'),
    ] },
];
