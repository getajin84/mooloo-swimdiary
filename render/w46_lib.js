// EP.055~075 (2026-11 셋째 주 게시분) 공용 로컬 소품·배경·앱 화면
const L = require('./w45_lib');
const { P, LINE, sh, path, ell, ln, pencil, bg, tiles, water, rope, G, AP, AM, aT, aBtn, aCard, PW, PH } = L;

const PINK = (svg) => svg.replace(new RegExp(P.purple, 'g'), '#FF9EB8');
const appBg = (col = '#EDE7FA') => bg(col) + `<g opacity=".5">${[...Array(10)].map((_, i) => `<circle cx="${(i * 97) % 470 + 10}" cy="${(i * 61) % 500 + 20}" r="${6 + i % 4 * 3}" fill="#fff"/>`).join('')}</g>`;
const bubbles = (pts) => G(pts.map(([x, y, r]) => ell(x, y, r, r, 'rgba(255,255,255,.75)', { lw: 2.2, hatch: false })).join(''));
const underwater = () => bg('#9ED8EF') + tiles('#BFE6F5', '#A6D6EA', 46, 380, PH) + `<g opacity=".45">${[...Array(7)].map((_, i) => `<path d="M${i * 80 - 20},40 q30,-10 60,0" stroke="#fff" stroke-width="4" fill="none"/>`).join('')}</g>`;
const laneLine = (y0 = 380) => `<rect x="215" y="${y0}" width="60" height="${PH - y0}" fill="#3F6F86" opacity=".55"/><rect x="190" y="${PH - 40}" width="110" height="20" fill="#3F6F86" opacity=".55"/>`;
const lying = (x, y, s, o = {}) => `<g transform="translate(${x},${y}) rotate(-90)">${L.person('mulu', { s, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'sparkle', ...o })}</g>`;
const tilt = (x, y, r, svg) => `<g transform="translate(${x},${y}) rotate(${r})">${svg}</g>`;

// ── 배경
const sauna = () => bg('#F7E3D3') + pencil(sh('rect', { x: -10, y: 300, width: PW + 20, height: 260 }, '#E7C9A9', { lw: 3.4 }) + ln('M0,340 H490 M0,380 H490', 2, '#CFAE8C')) + water(330, '#F4B9A4', .9);
const stairs = () => bg('#EAE6F2') + pencil([0, 1, 2, 3, 4, 5].map(i => sh('rect', { x: -10 + i * 0, y: 220 + i * 54, width: 500, height: 54 }, i % 2 ? '#D9D3E6' : '#E6E1F0', { lw: 3 })).join('')) + pencil(ln('M40,60 L440,300', 6, '#B9B2C8'));
const alley = (ice = false) => bg('#DDE6F5') + pencil([[60, 120, 330], [430, 110, 330]].map(([x, y, h]) => sh('rect', { x: x - 70, y, width: 140, height: h }, '#E6E2F6', { lw: 3 })).join('') + sh('rect', { x: -10, y: 430, width: PW + 20, height: 130 }, ice ? '#D3ECF8' : '#CFC8E6', { lw: 3.4 })) +
  (ice ? `<g opacity=".8">${[[80, 470, 70], [250, 500, 90], [400, 460, 60]].map(([x, y, w]) => `<path d="M${x - w / 2},${y} q${w / 2},-10 ${w},0" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>`).join('')}</g>` : '') +
  `<g opacity=".85">${[...Array(18)].map((_, i) => `<circle cx="${(i * 71) % 480 + 6}" cy="${(i * 83) % 400 + 8}" r="${3 + i % 3}" fill="#fff"/>`).join('')}</g>`;
const desk = () => bg('#F3F0EA') + pencil(sh('rect', { x: -10, y: 380, width: PW + 20, height: 30 }, '#C99B73', { lw: 3.4 }) + sh('rect', { x: -10, y: 410, width: PW + 20, height: 140 }, '#EAD7C2', { lw: 3.4 }));
const diveBlock = (x, y, n = '4') => G(path(`M${x - 40},${y} h80 l-8,60 h-64z`, '#FFFFFF') + path(`M${x - 44},${y - 10} h88 v12 h-88z`, AM, { lw: 3 })) + `<text x="${x}" y="${y + 40}" font-family="Gaegu" font-weight="700" font-size="28" fill="${LINE}" text-anchor="middle">${n}</text>`;
const sign = (x, y, t, col = '#FFD6D6', w = 200) => pencil(sh('rect', { x: x - w / 2, y, width: w, height: 46, rx: 8 }, col, { lw: 3, hatch: false })) + `<text x="${x}" y="${y + 32}" font-family="Gaegu" font-weight="700" font-size="25" fill="${LINE}" text-anchor="middle">${t}</text>`;

// ── 소품
const bolt = (x, y, s = 1, col = P.yellow) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M6,-30 L-14,4 L0,4 L-6,30 L14,-6 L0,-6Z', col, { lw: 2.6, hatch: false })}</g>`);
const dryer = (x, y, s = 1, r = 0) => G(`<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-40,-20 h60 a20,20 0 0 1 0,40 h-60z', '#FFB3C7')}${path('M-10,20 h18 l6,50 h-30z', '#FFB3C7')}${ell(-40, 0, 8, 20, '#E9E4F2', { lw: 3 })}</g>`);
const bottleW = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-14,-44 h28 v10 q14,8 14,24 v52 q0,8 -8,8 h-40 q-8,0 -8,-8 v-52 q0,-16 14,-24z', '#CFEFFF')}${path('M-14,-56 h28 v12 h-28z', AM, { lw: 3 })}${ln('M-14,0 h28', 2.4, '#fff')}</g>`);
const bag = (x, y, s = 1) => G(L.PROPS.swimBag(x, y, s));
const stink = (x, y) => `<g opacity=".7">${[0, 1, 2].map(i => `<path d="M${x + i * 22},${y} q-10,-14 0,-28 q10,-14 0,-28" stroke="#9FBF7A" stroke-width="4" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
const wrinkleHand = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-40,40 v-50 q0,-10 10,-10 q10,0 10,10 v-30 q0,-10 10,-10 q10,0 10,10 v-6 q0,-10 10,-10 q10,0 10,10 v10 q0,-10 10,-10 q10,0 10,10 v76 q0,30 -40,30 q-40,0 -40,-30z', P.skin)}${[-30, -10, 10, 30].map(fx => ln(`M${fx - 4},-34 q4,3 8,0 M${fx - 4},-24 q4,3 8,0 M${fx - 4},-14 q4,3 8,0`, 1.8, '#D9A88A')).join('')}</g>`);
const avatarFig = (x, y, s = 1, { hat = false, scarf = false } = {}) => `<g transform="translate(${x},${y}) scale(${s})">` +
  `<circle cx="0" cy="0" r="30" fill="#FFE6D8" stroke="${LINE}" stroke-width="2"/><path d="M-30,-4 Q-30,-34 0,-34 Q30,-34 30,-4 Q18,-18 0,-18 Q-18,-18 -30,-4Z" fill="#6B5468"/>` +
  `<path d="M4,-34 Q-4,-48 8,-54 Q18,-46 10,-34" fill="#6B5468"/><circle cx="-10" cy="2" r="3" fill="${LINE}"/><circle cx="10" cy="2" r="3" fill="${LINE}"/><path d="M-5,12 Q0,16 5,12" stroke="${LINE}" stroke-width="2" fill="none"/>` +
  `<path d="M-26,36 Q0,26 26,36 L30,72 H-30Z" fill="${P.purple}" stroke="${LINE}" stroke-width="2"/>` +
  (hat ? `<path d="M-32,-14 Q-30,-50 0,-52 Q30,-50 32,-14 Q0,-24 -32,-14Z" fill="${AM}" stroke="${LINE}" stroke-width="2"/><path d="M-28,-22 Q0,-32 28,-22" stroke="#fff" stroke-width="3" fill="none"/><path d="M4,-50 Q-4,-64 8,-72 Q18,-62 10,-50" fill="#6B5468"/>` : '') +
  (scarf ? `<path d="M-24,28 Q0,40 24,28 L22,38 Q0,48 -22,38Z M10,36 l4,22 h10 l-6,-24z" fill="#FF9EB8" stroke="${LINE}" stroke-width="2"/>` : '') + `</g>`;

// ── 앱 화면 조각 (200×340 화면 좌표)
const tabTop = (items, on = 0) => items.map((t, i) => aT(14 + i * 52, 28, t, { size: i === on ? 15 : 13, w: 800, col: i === on ? LINE : '#B9B2C8' })).join('') + `<rect x="${14 + on * 52}" y="34" width="30" height="3" rx="1.5" fill="${AP}"/>`;
const row = (y, l, r, { col = '#F3EEFF', lc = LINE, rc = AP, size = 11.5 } = {}) => aCard(12, y, 176, 30, col) + aT(22, y + 20, l, { size, col: lc, w: 700 }) + aT(178, y + 20, r, { size, col: rc, anchor: 'end', w: 800 });
const miniMap = () => `<rect x="0" y="0" width="200" height="304" fill="#E3F4EC"/>` +
  `<path d="M-10,120 Q60,100 120,140 T220,130 M60,-10 Q70,120 40,320 M150,-10 Q140,160 170,320" stroke="#FFFFFF" stroke-width="10" fill="none"/><path d="M0,210 Q80,190 210,230" stroke="#BFE3F5" stroke-width="16" fill="none"/>`;

module.exports = { ...L, PINK, appBg, bubbles, underwater, laneLine, lying, tilt, sauna, stairs, alley, desk, diveBlock, sign, bolt, dryer, bottleW, bag, stink, wrinkleHand, avatarFig, tabTop, row, miniMap };
