const fs = require('fs');
const K = require('./chars');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS } = K;
const Cm = require('./comic');
const { PW, PH, page, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil } = Cm;

// ════ EP.001 수모 어디 갔니 (AM 08:00)
const city = (() => { let s = ''; [[60, 250, 190], [150, 210, 230], [340, 230, 210], [440, 200, 240]].forEach(([x, y, h], i) => { s += sh('rect', { x: x - 38, y, width: 76, height: h }, i % 2 ? '#E6E2F6' : '#F1ECFA', { lw: 3 }); for (let k = 0; k < 3; k++) s += sh('rect', { x: x - 20, y: y + 24 + k * 50, width: 14, height: 18 }, P.yellow, { lw: 2, hatch: false }) + sh('rect', { x: x + 6, y: y + 24 + k * 50, width: 14, height: 18 }, P.yellow, { lw: 2, hatch: false }); }); return pencil(s); })();
const ep1 = [
  bg('#DCE6FF') + pencil(ell(390, 120, 44, 44, '#FFD7A8', { lw: 3 })) + city + pencil(sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#CFC8E6', { lw: 3.4 })) +
  person('mulu', { x: 215, y: 255, s: .92, outfit: 'casual', arms: 'wave', expr: 'happy' }) + `<g filter="url(#pencil)">${PROPS.swimBag(310, 372, .7)}</g>` +
  caption('AM 6:10 · 새벽반 가는 길') + bubble(150, 70, 316, 92, '오늘은 자유형 50m\n노브레이크 간다!', { tail: 'bl', size: 31 }),

  tiles('#EEF6FF', '#D9E7F5', 52) + pencil([0, 1, 2, 3, 4].map(i => sh('rect', { x: i * 100 - 6, y: 64, width: 96, height: 300 }, '#CBD6F2', { lw: 3 }) + sh('rect', { x: i * 100 + 58, y: 190, width: 9, height: 32, rx: 4 }, LINE, { line: false, hatch: false })).join('') + sh('rect', { x: -10, y: 420, width: PW + 20, height: 40 }, P.beige, { lw: 3 })) +
  person('mulu', { x: 200, y: 262, s: .92, outfit: 'swim', arms: 'search', expr: 'shock' }) +
  `<g filter="url(#pencil)">${path('M180,384 h140 v84 q0,10 -10,10 h-120 q-10,0 -10,-10z', P.purple)}${ln('M180,410 H320', 6, P.mint)}</g>` +
  pencil(sh('rect', { x: 84, y: 462, width: 60, height: 24, rx: 10 }, P.pink, { lw: 2.6 }) + sh('rect', { x: 380, y: 470, width: 52, height: 34, rx: 8 }, P.yellow, { lw: 2.6 })) +
  sweat(272, 178) + sweat(134, 170, .8) + sfx(410, 360, '뒤적뒤적', { rot: 10 }) +
  caption('AM 6:35 · 탈의실') + bubble(196, 66, 270, 70, '...어? 수모 어디?', { tail: 'bl', size: 32 }),

  bg('#FFF4D9') + pencil(sh('rect', { x: -10, y: 70, width: PW + 20, height: 190 }, '#FFFFFF', { lw: 3.4, hatch: false })) +
  `<text x="245" y="114" font-family="Gaegu" font-weight="700" font-size="34" fill="${LINE}" text-anchor="middle">수영용품</text>` +
  pencil([P.purple, P.coral, P.sky, P.yellow, P.mint].map((c, i) => { const x = 60 + i * 92; return path(`M${x - 34},222 Q${x - 36},150 ${x},148 Q${x + 36},150 ${x + 34},222 Z`, c, { lw: 3 }) + sh('rect', { x: x - 36, y: 230, width: 72, height: 22, rx: 5 }, '#fff', { lw: 2.4, hatch: false }); }).join('')) +
  [0, 1, 2, 3, 4].map(i => `<text x="${60 + i * 92}" y="247" font-family="Gaegu" font-weight="700" font-size="15" fill="${LINE}" text-anchor="middle">15,000원</text>`).join('') +
  pencil(sh('rect', { x: -10, y: 420, width: PW + 20, height: 130 }, P.beige, { lw: 3.4 })) +
  person('mulu', { x: 170, y: 306, s: .82, outfit: 'swim', arms: 'hold', expr: 'cry', prop: pencil(sh('rect', { x: -22, y: 100, width: 44, height: 28, rx: 5 }, P.sky, { lw: 2.6 })) }) +
  caption('AM 6:40 · 결국 매점행') + bubble(236, 290, 236, 84, '수모 하나\n주세요...(또)', { tail: 'bl', size: 29 }),

  tiles('#FFF0F3', '#F5DDE3', 46) + pencil(sh('rect', { x: 262, y: 66, width: 210, height: 236 }, '#EFD8C2', { lw: 3.4 }) + [0, 1, 2].map(k => ln(`M262,${142 + k * 78} H472`, 3)).join('') +
    [[295, 140, P.purple], [352, 140, P.coral], [412, 140, P.sky], [300, 218, P.yellow], [360, 218, P.mint], [424, 218, P.pink], [340, 296, '#fff']].map(([x, y, c]) => path(`M${x - 26},${y} Q${x - 28},${y - 50} ${x},${y - 52} Q${x + 28},${y - 50} ${x + 26},${y} Z`, c, { lw: 3 })).join('')) +
  sfx(372, 58, '×7', { size: 48, rot: 8, color: '#E07A5F' }) +
  person('mom', { x: 118, y: 176, s: .7, outfit: 'apron', arms: 'point', expr: 'angry', prop: `<g filter="url(#pencil)">${PROPS.cap(108, 70, .9, P.purple)}</g>` }) +
  catchDog({ x: 216, y: 250, s: .5, pose: 'sit', expr: 'normal' }) +
  bubble(16, 62, 214, 66, '수모 또 두고 갔지!', { tail: 'br', size: 27 }) +
  tipBox(338, '물루 TIP · 수영가방 체크리스트', '수모·수경·수영복·샴푸·타월 5개를\n가방 고리에 적어 두고, 나가기 전\n손가락으로 하나씩 짚어 보기!'),
];

// ════ EP.002 새 물안경 개봉기 (PM 05:30)
const ep2 = [
  bg('#FFEBDD') + pencil(sh('rect', { x: 300, y: 60, width: 160, height: 130 }, '#CFEAFB', { lw: 3.4 }) + ln('M380,60 V190 M300,125 H460', 3) + ell(420, 100, 22, 22, '#FFB59A', { line: false })) +
  pencil(sh('rect', { x: -10, y: 380, width: PW + 20, height: 30 }, '#D9B08C', { lw: 3.4 }) + sh('rect', { x: -10, y: 410, width: PW + 20, height: 140 }, '#EED4B8', { lw: 3.4 }) + sh('rect', { x: 36, y: 290, width: 124, height: 90, rx: 8 }, P.navy, { lw: 3.4 }) + sh('rect', { x: 48, y: 300, width: 100, height: 66, rx: 4 }, P.sky, { lw: 2.4, hatch: false })) +
  `<text x="98" y="344" font-family="Gaegu" font-weight="700" font-size="26" fill="${LINE}" text-anchor="middle">17:29</text>` +
  person('mulu', { x: 262, y: 222, s: .86, outfit: 'office', arms: 'hold', expr: 'sparkle', prop: `<g filter="url(#pencil)">${path('M-46,80 h92 v60 h-92z', '#E2B98C')}${ln('M-46,104 H46 M-12,80 V140', 4, '#C4976A')}${sh('rect', { x: -28, y: 112, width: 40, height: 20 }, '#fff', { lw: 2.4, hatch: false })}</g>` }) +
  sparkle(150, 210, 15) + sparkle(390, 250, 12) + sparkle(176, 128, 10) +
  caption('PM 5:29 · 퇴근 1분 전') + bubble(18, 70, 262, 92, '새 수경 도착!!\n퇴근하자마자 간다', { tail: 'br', size: 30 }),

  tiles(P.paper, '#F1DECF', 46, 0, 330) + water(330) + rope(330) +
  person('mulu', { x: 245, y: 296, s: 1.02, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle' }) +
  `<path d="M0,410 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".82"/>` +
  sfx(110, 196, '뽁!', { size: 52, rot: -12 }) + sparkle(84, 262, 14) + sparkle(414, 222, 16) +
  caption('PM 7:10 · 저녁 자유수영') + bubble(168, 66, 304, 94, '헉 착 붙어...\n물 한 방울도 안 들어와!', { tail: 'bl', size: 29 }),

  bg('#E6F8F2') + `<g opacity=".5">${[...Array(6)].map((_, i) => `<path d="M${i * 90 - 20},540 L${i * 90 + 60},0" stroke="#CDEFE4" stroke-width="30"/>`).join('')}</g>` +
  person('mulu', { x: 230, y: 250, s: 1.02, outfit: 'swim', cap: true, arms: 'rub', expr: 'happy', prop: `<g filter="url(#pencil)" transform="translate(34,-6) rotate(-20)">${ell(0, 0, 20, 15, 'rgba(190,235,255,.7)', { lw: 5, hatch: false })}</g>` }) +
  sfx(388, 252, '쓱쓱쓱', { size: 42, rot: 12, color: '#E07A5F' }) +
  caption('옛날 수경 쓰던 습관') + bubble(16, 70, 296, 94, '김 서리기 전에\n안쪽을 손가락으로~♪', { tail: 'br', size: 29 }),

  tiles(P.paper, '#F1DECF', 46, 0, 250) + water(250, '#DCEFF5') +
  person('mulu', { x: 150, y: 196, s: .84, outfit: 'swim', cap: true, gog: 'eyes', expr: 'flat', body: false }).replace(/rgba\(190,235,255,\.55\)/g, '#F1F3F5') +
  `<path d="M50,${250} q31,-12 62,0 t62,0 t62,0 V300 H50Z" fill="#DCEFF5"/>` +
  person('yoonseul', { x: 380, y: 150, s: .62, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'angry', flip: true }) +
  sweat(214, 132) + sfx(110, 110, '뿌옇...', { size: 34, rot: -6, color: '#8A8098' }) +
  bubble(190, 14, 240, 60, '그거 문지르면 안 돼!!', { tail: 'br', size: 26 }) +
  tipBox(330, '물루 TIP · 새 수경 김서림', '새 수경 안쪽엔 김서림 방지 코팅이 있어요.\n손가락·휴지로 문지르면 코팅이 벗겨져요.\n물로 살살 헹구고 그늘에서 말리기!'),
];

module.exports = { ep1, ep2 };
if (require.main === module) {
fs.writeFileSync(__dirname + '/EP001.html', page({ ep: '001', title: '수모 어디 갔니', slot: 'AM 08:00', date: '2026.10.24', panels: ep1 }));
fs.writeFileSync(__dirname + '/EP002.html', page({ ep: '002', title: '새 물안경 개봉기', slot: 'PM 05:30', date: '2026.10.24', panels: ep2 }));
}
