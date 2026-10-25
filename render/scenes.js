// 물루의 수영일기 EP.001~012 — 원고 + 컷 + 표지 + 제목
const K = require('./chars');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS } = K;
const { PW, PH, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil } = require('./comic');

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


module.exports = { K, P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer };
