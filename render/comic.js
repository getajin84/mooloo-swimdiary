// 4컷 페이지 조립 (v2 색연필 그림체) — 1080×1350
const fs = require('fs');
const K = require('./chars');
const { P, LINE, DEFS, sh, path, ell, ln, person, catchDog, PROPS } = K;
const PW = 490, PH = 540;
const logo = 'data:image/png;base64,' + fs.readFileSync(__dirname + '/assets/logo.png').toString('base64');

const pencil = (s) => `<g filter="url(#pencil)">${s}</g>`;
function bubble(x, y, w, h, text, { tail = 'bl', size = 30, fill = '#fff' } = {}) {
  const lines = text.split('\n');
  const T = { bl: [x + w * .22, x + w * .14, x + w * .38], br: [x + w * .62, x + w * .84, x + w * .78], bc: [x + w * .42, x + w * .5, x + w * .58] }[tail];
  let s = '';
  if (T) s += path(`M${T[0]},${y + h - 4} L${T[1]},${y + h + 32} L${T[2]},${y + h - 4}`, fill, { hatch: false });
  s += sh('rect', { x, y, width: w, height: h, rx: Math.min(h / 2, 30) }, fill, { hatch: false });
  if (T) s += `<path d="M${T[0] + 4},${y + h - 3} L${T[2] - 4},${y + h - 3}" stroke="${fill}" stroke-width="7"/>`;
  const lh = size * 1.15, sy = y + h / 2 - (lines.length - 1) * lh / 2 + size * .34;
  return pencil(s) + lines.map((l, i) => `<text x="${x + w / 2}" y="${sy + i * lh}" font-family="Gaegu" font-weight="700" font-size="${size}" fill="${LINE}" text-anchor="middle">${l}</text>`).join('');
}
function caption(text, x = 16, y = 16) {
  const w = text.length * 15.5 + 34;
  return pencil(sh('rect', { x, y, width: w, height: 40, rx: 10 }, P.yellow, { hatch: true, lw: 3 })) + `<text x="${x + w / 2}" y="${y + 28}" font-family="Gaegu" font-weight="700" font-size="25" fill="${LINE}" text-anchor="middle">${text}</text>`;
}
function sfx(x, y, t, { size = 38, rot = -8, color = P.purpleD } = {}) {
  return `<text x="${x}" y="${y}" transform="rotate(${rot} ${x} ${y})" font-family="Gaegu" font-weight="700" font-size="${size}" fill="${color}" stroke="#FFF9F0" stroke-width="8" paint-order="stroke" text-anchor="middle">${t}</text>`;
}
const sweat = (x, y, s = 1) => pencil(path(`M${x},${y - 16 * s} Q${x + 12 * s},${y + 2 * s} ${x},${y + 10 * s} Q${x - 12 * s},${y + 2 * s} ${x},${y - 16 * s}Z`, P.sky, { lw: 2.6, hatch: false }));
const sparkle = (x, y, r) => pencil(path(`M${x},${y - r} Q${x + r * .2},${y - r * .2} ${x + r},${y} Q${x + r * .2},${y + r * .2} ${x},${y + r} Q${x - r * .2},${y + r * .2} ${x - r},${y} Q${x - r * .2},${y - r * .2} ${x},${y - r}Z`, P.yellow, { lw: 2.6, hatch: false }));
function tipBox(y, title, body) {
  const lines = body.split('\n'), h = 56 + lines.length * 29;
  return pencil(sh('rect', { x: 14, y, width: PW - 28, height: h, rx: 16 }, '#FFFFFF', { hatch: false }) + sh('rect', { x: 14, y, width: PW - 28, height: 42, rx: 16 }, P.mint, { hatch: true })) +
    `<text x="30" y="${y + 30}" font-family="Gaegu" font-weight="700" font-size="25" fill="${LINE}">💧</text>`.replace('💧', '◆') +
    `<text x="62" y="${y + 30}" font-family="Gaegu" font-weight="700" font-size="25" fill="${LINE}">${title}</text>` +
    lines.map((l, i) => `<text x="32" y="${y + 72 + i * 29}" font-family="Pretendard" font-weight="600" font-size="18.5" fill="${LINE}">${l}</text>`).join('');
}
// 배경
const bg = (col) => `<rect width="${PW}" height="${PH}" fill="${col}"/>`;
function tiles(col, line, size = 46, y0 = 0, y1 = PH) {
  let s = `<rect x="0" y="${y0}" width="${PW}" height="${y1 - y0}" fill="${col}"/>`;
  for (let x = size; x < PW; x += size) s += `<path d="M${x},${y0} V${y1}" stroke="${line}" stroke-width="2"/>`;
  for (let y = y0 + size; y < y1; y += size) s += `<path d="M0,${y} H${PW}" stroke="${line}" stroke-width="2"/>`;
  return s;
}
function water(top, col = P.sky, op = 1) {
  let s = `<path d="M0,${top} q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${col}" opacity="${op}"/>`;
  for (let y = top + 36; y < PH; y += 42) s += `<path d="M10,${y} q20,-7 40,0 M110,${y + 14} q20,-7 40,0 M230,${y} q20,-7 40,0 M350,${y + 14} q20,-7 40,0 M440,${y} q20,-7 40,0" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".8"/>`;
  return pencil(s + `<path d="M0,${top} q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0" fill="none" stroke="${LINE}" stroke-width="3.4"/>`);
}
function rope(y) { let s = ''; for (let x = 8, i = 0; x < PW + 10; x += 26, i++) s += ell(x, y, 12, 9, i % 2 ? '#fff' : P.purple, { lw: 2.6, hatch: false }); return pencil(s); }

function page({ ep, title, slot, date, panels }) {
  const cell = (p, i) => {
    const cx = 40 + (i % 2) * (PW + 20), cy = 190 + Math.floor(i / 2) * (PH + 20);
    return `<g transform="translate(${cx},${cy})"><clipPath id="c${i}"><rect width="${PW}" height="${PH}" rx="22"/></clipPath><g clip-path="url(#c${i})">${p}</g>${pencil(`<rect width="${PW}" height="${PH}" rx="22" fill="none" stroke="${LINE}" stroke-width="4.5"/>`)}${pencil(ell(PW - 30, 30, 17, 17, '#fff', { lw: 3, hatch: false }))}<text x="${PW - 30}" y="39" font-family="Gaegu" font-weight="700" font-size="26" fill="${LINE}" text-anchor="middle">${i + 1}</text></g>`;
  };
  const slotCol = slot.startsWith('AM') ? P.yellow : P.peach;
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="node_modules/@fontsource/gaegu/700.css">
<link rel="stylesheet" href="node_modules/pretendard/dist/web/static/pretendard.css">
<style>html,body{margin:0;padding:0}svg{display:block}</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350"><defs>${DEFS}</defs>
${K.paperBg(1080, 1350)}
${pencil(sh('rect', { x: 40, y: 34, width: 1000, height: 132, rx: 26 }, '#FFFFFF', { hatch: false, lw: 4 }))}
<text x="76" y="96" font-family="Gaegu" font-weight="700" font-size="58" fill="${LINE}">물루의 수영일기</text>
<text x="78" y="146" font-family="Gaegu" font-weight="700" font-size="34" fill="${P.purpleD}">EP.${ep}  ${title}</text>
<text x="1008" y="146" font-family="Gaegu" font-weight="700" font-size="28" fill="#8A8098" text-anchor="end">${date}</text>
${panels.map(cell).join('')}
<image href="${logo}" x="876" y="1302" width="164" height="34"/>
</svg></body></html>`;
}
module.exports = { PW, PH, page, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil };
