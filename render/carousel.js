// 캐러셀 구성: [1] 물 위 표지 · [2] 제목 · [3~] 컷 (4~10컷, 각 1080×1350)
const fs = require('fs');
const K = require('./chars');
const { P, LINE, DEFS, sh, path, ell, ln } = K;
const Cm = require('./comic');
const { PW, PH, pencil } = Cm;
const logo = 'data:image/png;base64,' + fs.readFileSync(__dirname + '/assets/logo.png').toString('base64');
const STRIPS = __dirname + '/assets/strips';

const EXTRA_DEFS = `
<filter id="dropShadow" filterUnits="userSpaceOnUse" x="-2000" y="-2000" width="6000" height="6000">
  <feGaussianBlur in="SourceAlpha" stdDeviation="16"/><feOffset dx="46" dy="58" result="b"/>
  <feFlood flood-color="#1F5C6B" flood-opacity=".32"/><feComposite in2="b" operator="in"/>
</filter>
<filter id="waterTint" filterUnits="userSpaceOnUse" x="-2000" y="-2000" width="6000" height="6000">
  <feFlood flood-color="#7FD6E3" flood-opacity=".55"/><feComposite in2="SourceAlpha" operator="in"/>
</filter>`;

function head(inner, w = 1080, h = 1350) {
  return `<!doctype html><html><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${__dirname}/node_modules/@fontsource/gaegu/700.css">
<link rel="stylesheet" href="file://${__dirname}/node_modules/pretendard/dist/web/static/pretendard.css">
<style>html,body{margin:0;padding:0}svg{display:block}</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs>${DEFS}${EXTRA_DEFS}</defs>${inner}</svg></body></html>`;
}

// [1] 물 위 표지 — day 줄의 col번째 칸 (그리드 연결용 수면 + 캐릭터)
// char: { svg, waistY } — svg는 1080×1350 좌표, waistY 아래는 물속처럼 물빛을 씌움
function cover(ep) {
  const { day, col, char } = ep.cover;
  const x0 = col * 1012;
  const ripples = (char.ripples || []).map(([cx, cy, rx, ry]) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="#fff" stroke-width="5" opacity=".55"/><ellipse cx="${cx}" cy="${cy}" rx="${rx * 1.25}" ry="${ry * 1.25}" fill="none" stroke="#fff" stroke-width="3" opacity=".3"/>`).join('');
  const inner = `<image href="file://${STRIPS}/day${day}.png" x="${-x0}" y="0" width="3104" height="1350"/>
  ${ripples}
  <g filter="url(#dropShadow)">${char.svg}</g>
  ${char.svg}
  <clipPath id="under"><rect x="0" y="${char.waistY}" width="1080" height="${1350 - char.waistY}"/></clipPath>
  <g clip-path="url(#under)" filter="url(#waterTint)">${char.svg}</g>
  <g clip-path="url(#under)" opacity=".5">${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${200 + i * 40},${char.waistY + 30 + i * 46} q60,-16 120,0 t120,0" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round"/>`).join('')}</g>
  ${coverLabel(ep)}`;
  return head(inner);
}

// 표지 작은 제목 — 피드 분위기를 해치지 않게 왼쪽 아래 작게 (프로필 3:4 잘림·셀 여백 안쪽)
function coverLabel(ep) {
  const t = `EP.${ep.ep}  ${ep.title.replace('\n', ' ')}`;
  return `<text x="92" y="1268" font-family="Gaegu" font-weight="700" font-size="34" fill="#1F5C6B" opacity=".35" stroke="#1F5C6B" stroke-width="6" stroke-linejoin="round">${t}</text>
  <text x="92" y="1268" font-family="Gaegu" font-weight="700" font-size="34" fill="#fff" opacity=".92">${t}</text>`;
}

// [2] 제목 슬라이드
function titleSlide(ep) {
  const lines = ep.title.split('\n');
  const inner = `${K.paperBg(1080, 1350)}
  <text x="540" y="150" font-family="Gaegu" font-weight="700" font-size="46" fill="#8A8098" text-anchor="middle">물루의 수영일기</text>
  ${pencil(sh('rect', { x: 400, y: 196, width: 280, height: 76, rx: 38 }, P.purple, { lw: 4 }))}
  <text x="540" y="250" font-family="Gaegu" font-weight="700" font-size="50" fill="#fff" text-anchor="middle">EP.${ep.ep}</text>
  ${lines.map((l, i) => `<text x="540" y="${400 + i * 118}" font-family="Gaegu" font-weight="700" font-size="${lines.length > 1 ? 108 : 120}" fill="${LINE}" text-anchor="middle">${l}</text>`).join('')}
  <text x="540" y="${430 + (lines.length - 1) * 118 + 80}" font-family="Gaegu" font-weight="700" font-size="44" fill="${P.purpleD}" text-anchor="middle">${ep.teaser}</text>
  <g transform="translate(0,${(lines.length - 1) * 50}) translate(540,900) scale(1.22) translate(-540,-900)">${ep.titleArt}</g>
  <text x="70" y="1290" font-family="Gaegu" font-weight="700" font-size="38" fill="#8A8098">옆으로 넘겨 보기 →</text>
  <image href="${logo}" x="842" y="1254" width="180" height="37"/>`;
  return head(inner);
}

// [3~] 컷 슬라이드 — 490×540 컷을 2배로
function panelSlide(ep, i) {
  const inner = `${K.paperBg(1080, 1350)}
  <g transform="translate(50,64) scale(2)">
    <clipPath id="pc"><rect width="${PW}" height="${PH}" rx="18"/></clipPath>
    <g clip-path="url(#pc)">${ep.panels[i]}</g>
    ${pencil(`<rect width="${PW}" height="${PH}" rx="18" fill="none" stroke="${LINE}" stroke-width="3.4"/>`)}
  </g>
  <text x="56" y="1252" font-family="Gaegu" font-weight="700" font-size="40" fill="${LINE}">EP.${ep.ep}  <tspan fill="${P.purpleD}">${ep.title.replace('\n', ' ')}</tspan></text>
  ${ep.panels.map((_, k) => `<circle cx="${70 + k * 30}" cy="1298" r="${k === i ? 9 : 7}" fill="${k === i ? P.purpleD : '#D9D3E6'}"/>`).join('')}
  <image href="${logo}" x="842" y="1270" width="180" height="37"/>`;
  return head(inner);
}

module.exports = { cover, titleSlide, panelSlide, head };
