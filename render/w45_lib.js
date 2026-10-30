// EP.034~054 (2026-11 둘째 주 게시분) 공용 로컬 소품·배경·앱 화면
const S = require('./scenes');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer } = S;

// ── 말풍선: 글자 수로 폭·높이 자동 (컷 밖으로 안 나가게 x 보정)
function B(x, y, text, { tail = 'bl', size = 28, fill = '#fff' } = {}) {
  const lines = text.split('\n');
  const len = Math.max(...lines.map(l => [...l].reduce((a, c) => a + (/[ -~]/.test(c) ? .55 : 1), 0)));
  const w = Math.round(len * size * .78 + 46), h = Math.round(lines.length * size * 1.15 + 34);
  if (x + w > PW - 10) x = PW - 10 - w;
  if (x < 10) x = 10;
  return bubble(x, y, w, h, text, { tail, size, fill });
}
const waterFront = (y, op = .85, bottom = PH) => `<path d="M0,${y} q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${bottom} H0Z" fill="${P.sky}" opacity="${op}"/>`;
const tipPanel = (art, title, body, back = '#F4FAF3') => bg(back) + art + tipBox(338, title, body);
const swimHead = (who, x, y, s, o = {}) => headInWater(who, { x, y, s, cap: true, gog: 'head', expr: 'normal', capStyle: who === 'yoonseul' ? 'trend' : 'mulu', ...o });
const G = (s) => `<g filter="url(#pencil)">${s}</g>`;

// ── 배경
const office = () => bg('#F3F0EA') + pencil(sh('rect', { x: 40, y: 60, width: 260, height: 150, rx: 8 }, '#FFFFFF', { lw: 3.4, hatch: false }) + ln('M70,110 h160 M70,140 h110 M70,170 h140', 3, '#B9B6C6') + sh('rect', { x: -10, y: 400, width: PW + 20, height: 30 }, '#C99B73', { lw: 3.4 }) + sh('rect', { x: -10, y: 430, width: PW + 20, height: 120 }, '#EAD7C2', { lw: 3.4 }));
const hotel = () => bg('#EFE9F7') + pencil(sh('rect', { x: 300, y: 60, width: 150, height: 170, rx: 6 }, '#BFD8F2', { lw: 3.4 }) + ln('M375,60 V230 M300,145 H450', 3) + sh('rect', { x: -10, y: 330, width: 300, height: 90, rx: 14 }, '#FFFFFF', { lw: 3.4 }) + sh('rect', { x: -10, y: 310, width: 120, height: 40, rx: 12 }, P.lav, { lw: 3 }) + sh('rect', { x: -10, y: 420, width: PW + 20, height: 130 }, '#D9CBB8', { lw: 3.4 }));
const bedroom = (dark = false) => bg(dark ? '#C9C3DE' : '#FFF1E6') + pencil(sh('rect', { x: 290, y: 50, width: 160, height: 150, rx: 6 }, dark ? '#8C97C9' : '#CFE6F7', { lw: 3.4 }) + ln('M370,50 V200', 3) + sh('rect', { x: -10, y: 300, width: PW + 20, height: 130, rx: 16 }, '#FFFFFF', { lw: 3.4 }) + sh('rect', { x: -10, y: 430, width: PW + 20, height: 120 }, '#E9CFB4', { lw: 3.4 }));
const restaurant = () => bg('#FFE9D6') + pencil(sh('rect', { x: 310, y: 20, width: 160, height: 50, rx: 8 }, '#FFFFFF', { lw: 3 }) + sh('rect', { x: -10, y: 380, width: PW + 20, height: 24 }, '#C99B73', { lw: 3.4 }) + sh('rect', { x: -10, y: 404, width: PW + 20, height: 150 }, '#F3DCC3', { lw: 3.4 })) + `<text x="390" y="54" font-family="Gaegu" font-weight="700" font-size="26" fill="${LINE}" text-anchor="middle">국밥 · 토스트</text>`;
const shop = () => bg('#F6F0FF') + pencil([0, 1, 2, 3].map(i => sh('rect', { x: 20 + i * 118, y: 70, width: 100, height: 240, rx: 8 }, '#FFFFFF', { lw: 3 })).join('') + sh('rect', { x: -10, y: 420, width: PW + 20, height: 140 }, '#E4DCF2', { lw: 3.4 }));
const poolDeck = (top = 360) => tiles('#F2F7FB', '#DCE8F1', 46, 0, top) + water(top) + rope(top);
const winter = () => bg('#DDE6F5') + `<g opacity=".85">${[...Array(24)].map((_, i) => `<circle cx="${(i * 67) % 480 + 6}" cy="${(i * 89) % 420 + 8}" r="${3 + i % 3}" fill="#fff"/>`).join('')}</g>` + pencil(sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#F4F7FC', { lw: 3.4 }));
const petPool = () => tiles('#FFF3E2', '#F3DEC4', 46, 0, 250) + water(250, '#9FDCEB') + `<text x="245" y="70" font-family="Gaegu" font-weight="700" font-size="30" fill="${LINE}" text-anchor="middle" opacity=".7">반려견 수영장</text>`;

// ── 소품
const suitcase = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-60,-70 h120 a10,10 0 0 1 10,10 v120 a10,10 0 0 1 -10,10 h-120 a10,10 0 0 1 -10,-10 v-120 a10,10 0 0 1 10,-10z', P.coral)}${ln('M-30,-70 v-24 h60 v24', 5)}${ln('M-30,-50 v110 M30,-50 v110', 3, '#fff')}</g>`);
const watch = (x, y, s = 1, t = '1,250m') => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-12,-44 h24 v20 h-24z M-12,24 h24 v20 h-24z', P.purple, { lw: 2.6 })}${sh('rect', { x: -26, y: -26, width: 52, height: 52, rx: 12 }, '#4E4458', { lw: 3 })}</g>`) + `<text x="${x}" y="${y + 6 * s}" font-family="Gaegu" font-weight="700" font-size="${13 * s}" fill="#A8EFDD" text-anchor="middle">${t}</text>`;
const lens = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-20,0 Q-20,-16 0,-16 Q20,-16 20,0 Q10,-6 0,-6 Q-10,-6 -20,0Z', 'rgba(190,235,255,.8)', { lw: 2.6, hatch: false })}</g>`);
const capSil = (x, y, s = 1, col = P.pink) => G(PROPS.cap(x, y, s, col)) ;
const capMesh = (x, y, s = 1, col = P.mint) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-30,0 Q-32,-56 0,-58 Q32,-56 30,0 Q0,8 -30,0Z', col, { lw: 3 })}${ln('M-24,-10 L10,-50 M-10,-2 L22,-40 M-28,-30 L-4,-54 M24,-10 L-10,-50 M10,-2 L-22,-40', 1.6, '#fff')}</g>`);
const bottleP = (x, y, s = 1) => G(PROPS.bottle(x, y, s));
const bowl = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-46,-6 h92 q-6,44 -46,44 q-40,0 -46,-44z', '#FFFFFF')}${path('M-40,-6 q40,-14 80,0', '#F7D59A', { lw: 2.4 })}${ln('M-10,-30 q6,-10 0,-18 M10,-30 q6,-10 0,-18', 2.6, '#B9B6C6')}</g>`);
const toast = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-30,10 v-30 q0,-16 30,-16 q30,0 30,16 v30z', '#F2C48D')}${path('M-24,6 v-22 q0,-10 24,-10 q24,0 24,10 v22z', '#FFF3D6', { lw: 2.4, hatch: false })}</g>`);
const bungeo = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-34,0 Q-20,-20 10,-16 L30,-26 L26,0 L30,26 L10,16 Q-20,20 -34,0Z', '#E9A65E')}${ell(-18, -4, 3, 3, LINE, { line: false, hatch: false })}${ln('M-6,-8 q4,8 0,16 M4,-8 q4,8 0,16', 2, '#C8823E')}</g>`);
const vest = (s = 1) => `<g transform="scale(${s})">${path('M-46,60 Q0,46 46,60 L52,120 Q0,134 -52,120Z', '#FF9C5A')}${ln('M-46,90 H46', 5, P.yellow)}</g>`;
const flags = (y) => `<g>${[...Array(9)].map((_, i) => `<path d="M${10 + i * 56},${y} l24,0 l-12,22z" fill="${[P.pink, P.yellow, P.mint][i % 3]}" stroke="${LINE}" stroke-width="2"/>`).join('')}<path d="M0,${y} H${PW}" stroke="${LINE}" stroke-width="2.4"/></g>`;
const ceilingLights = () => tiles('#F4F1FB', '#E5E0F2', 60) + G([90, 245, 400].map(x => ell(x, 120, 50, 16, P.yellow, { lw: 3, hatch: false })).join(''));
const signBoard = (x, y, t, col = P.yellow, w = 120) => pencil(sh('rect', { x: x - w / 2, y, width: w, height: 40, rx: 8 }, col, { lw: 3, hatch: false })) + `<text x="${x}" y="${y + 29}" font-family="Gaegu" font-weight="700" font-size="24" fill="${LINE}" text-anchor="middle">${t}</text>`;
const poster = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${sh('rect', { x: -70, y: -90, width: 140, height: 180, rx: 6 }, '#FFFFFF', { lw: 3 })}${sh('rect', { x: -60, y: -20, width: 120, height: 50, rx: 6 }, P.sky, { lw: 2.4 })}</g>`) +
  `<text x="${x}" y="${y - 50 * s}" font-family="Gaegu" font-weight="700" font-size="${22 * s}" fill="${LINE}" text-anchor="middle">동호인</text><text x="${x}" y="${y - 28 * s}" font-family="Gaegu" font-weight="700" font-size="${22 * s}" fill="${LINE}" text-anchor="middle">수영대회</text><text x="${x}" y="${y + 60 * s}" font-family="Gaegu" font-weight="700" font-size="${18 * s}" fill="${P.purpleD}" text-anchor="middle">참가 신청</text>`;
const bigDrop = (x, y, r, col = P.sky) => G(path(`M${x},${y - r * 1.4} Q${x + r},${y - r * .2} ${x + r},${y + r * .3} A${r},${r} 0 1 1 ${x - r},${y + r * .3} Q${x - r},${y - r * .2} ${x},${y - r * 1.4}Z`, col, { lw: 3, hatch: false })) + `<ellipse cx="${x - r * .35}" cy="${y - r * .1}" rx="${r * .18}" ry="${r * .3}" fill="#fff" opacity=".8"/>`;
const heart = (x, y, s = 1, col = P.pink) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M0,14 C-26,-6 -18,-26 0,-14 C18,-26 26,-6 0,14Z', col, { lw: 2.6, hatch: false })}</g>`);

// ── 물루 앱 화면 (실제 UI를 단순화한 색연필 그림) — 화면 좌표 200×340, Purple #7E53FF · Mint #00CFBE
const AP = '#7E53FF', AM = '#00CFBE';
const aT = (x, y, t, { size = 13, col = LINE, w = 700, anchor = 'start' } = {}) => `<text x="${x}" y="${y}" font-family="Pretendard" font-weight="${w}" font-size="${size}" fill="${col}" text-anchor="${anchor}">${t}</text>`;
const aBtn = (x, y, w, h, label, { col = AP, tc = '#fff', size = 13 } = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${col}"/>` + aT(x + w / 2, y + h / 2 + size * .36, label, { size, col: tc, anchor: 'middle' });
const aCard = (x, y, w, h, col = '#F3EEFF') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${col}"/>`;
const TABS = ['피드', '탐색', '챌린지', '크루', '내정보'];
function appPhone(x, y, s, inner, { tab = null, title = '', plus = true, tabs = true } = {}) {
  const bar = tabs ? `<rect x="0" y="304" width="200" height="36" fill="#FFFFFF"/><path d="M0,304 H200" stroke="#E5E0F2" stroke-width="1.5"/>` +
    TABS.map((t, i) => aT(20 + i * 40, 327, t, { size: 10, col: t === tab ? AP : '#9A93A8', anchor: 'middle', w: t === tab ? 800 : 600 })).join('') : '';
  const fab = plus ? `<circle cx="172" cy="278" r="17" fill="${AP}"/><path d="M172,270 V286 M164,278 H180" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>` : '';
  const head = title ? aT(14, 28, title, { size: 15, w: 800 }) : '';
  return `<g transform="translate(${x},${y}) scale(${s})">` +
    pencil(sh('rect', { x: -14, y: -22, width: 228, height: 384, rx: 30 }, '#E8E4F2', { lw: 3.4, hatch: false })) +
    `<clipPath id="scr${x}_${y}"><rect width="200" height="340" rx="16"/></clipPath><g clip-path="url(#scr${x}_${y})"><rect width="200" height="340" fill="#FFFFFF"/>${head}${inner}${bar}${fab}</g>` +
    `<rect width="200" height="340" rx="16" fill="none" stroke="${LINE}" stroke-width="2"/></g>`;
}
// 앱 화면을 든 손 (화면 아래쪽)
const hands = (x, y, s) => G(ell(x - 100 * s, y + 16, 20 * s, 26 * s, P.skin, { lw: 3, hatch: false }) + ell(x + 100 * s, y + 16, 20 * s, 26 * s, P.skin, { lw: 3, hatch: false }));

module.exports = { ...S, B, waterFront, tipPanel, swimHead, G, office, hotel, bedroom, restaurant, shop, poolDeck, winter, petPool, suitcase, watch, lens, capSil, capMesh, bottleP, bowl, toast, bungeo, vest, flags, ceilingLights, signBoard, poster, bigDrop, heart, AP, AM, aT, aBtn, aCard, appPhone, hands };
