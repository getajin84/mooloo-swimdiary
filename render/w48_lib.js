// EP.097~117 (2026-11 마지막 주 게시분) 공용 로컬 소품·배경·앱 화면
const L = require('./w47_lib');
const { P, LINE, sh, path, ell, ln, pencil, bg, tiles, water, rope, G, AP, AM, aT, aBtn, aCard, PW, PH, row, miniMap, tabTop, avatarFig } = L;

const speed = (x, y) => G(ln(`M${x},${y} h-90 M${x + 10},${y + 30} h-120 M${x},${y + 60} h-80`, 4, '#fff'));
const zzz = (x, y, s = 1) => `<text x="${x}" y="${y}" font-family="Gaegu" font-weight="700" font-size="${40 * s}" fill="${P.purpleD}" stroke="#FFF9F0" stroke-width="6" paint-order="stroke">Z<tspan dx="4" dy="-18" font-size="${30 * s}">z</tspan><tspan dx="4" dy="-14" font-size="${22 * s}">z</tspan></text>`;

// ── 배경
const night = () => bg('#3E3A66') + `<g opacity=".9">${[...Array(16)].map((_, i) => `<circle cx="${(i * 73) % 480 + 6}" cy="${(i * 47) % 220 + 10}" r="${1.6 + i % 3}" fill="#FFF6C9"/>`).join('')}</g>` +
  G(ell(400, 80, 34, 34, '#FFF6C9', { lw: 3, hatch: false })) + pencil(sh('rect', { x: -10, y: 430, width: PW + 20, height: 130 }, '#6C6796', { lw: 3.4 }));
const nightPool = () => tiles('#DCDDF2', '#C8C9E6', 46, 0, 300) + `<rect x="0" y="0" width="${PW}" height="300" fill="#2E2A55" opacity=".18"/>` + water(300, '#7FB8E6') + rope(300);
const bus = () => bg('#E6EEF9') + pencil(sh('rect', { x: -10, y: 60, width: PW + 20, height: 170, rx: 0 }, '#CFE2F5', { lw: 3.4 }) + ln('M120,60 V230 M245,60 V230 M370,60 V230', 4, '#9FB6CF') +
  sh('rect', { x: -10, y: 300, width: PW + 20, height: 80, rx: 10 }, '#8FA3E0', { lw: 3.4 }) + sh('rect', { x: -10, y: 380, width: PW + 20, height: 180 }, '#B9B6C6', { lw: 3.4 }));
const dryerRow = () => bg('#F3EEFA') + pencil(sh('rect', { x: -10, y: 60, width: PW + 20, height: 150 }, '#DCEBFF', { lw: 3.4 }) + sh('rect', { x: -10, y: 300, width: PW + 20, height: 40 }, '#E9E4F2', { lw: 3.4 }) +
  sh('rect', { x: -10, y: 340, width: PW + 20, height: 220 }, '#D9D3E6', { lw: 3.4 }));
const shallow = () => tiles(P.paper, '#F1DECF', 46, 0, 260) + water(260, '#A9E2F2') + `<text x="440" y="240" font-family="Gaegu" font-weight="700" font-size="26" fill="${LINE}" text-anchor="middle" opacity=".7">1.0m</text>`;

// ── 소품
const paddle = (x, y, s = 1, r = 0, col = '#7FC9EC') => G(`<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-30,-44 q30,-12 60,0 l6,70 q-36,22 -72,0z', col)}${[-14, 0, 14].map(dx => ell(dx, -10, 5, 5, '#fff', { lw: 2, hatch: false })).join('')}${ln('M-20,10 h40', 4, '#FFFFFF')}</g>`);
const snorkel = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-8,-110 h16 v120 q0,26 -26,26 h-10 v-16 h10 q10,0 10,-10z', '#FFD27A', { lw: 3 })}${path('M-30,10 h-14 v20 h14z', '#4E4458', { lw: 2.6 })}</g>`);
const slipper = (x, y, s = 1, col = '#7FDCC6', r = 0) => G(`<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-22,-50 q22,-14 44,0 v84 q-22,14 -44,0z', col)}${path('M-24,-24 q24,-16 48,0 l0,14 q-24,-14 -48,0z', '#FFFFFF', { lw: 2.6, hatch: false })}</g>`);
const nameTag = (x, y, t) => `<text x="${x}" y="${y}" font-family="Gaegu" font-weight="700" font-size="20" fill="${LINE}" text-anchor="middle">${t}</text>`;
const towelHead = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-74,-20 Q-76,-96 0,-98 Q76,-96 74,-20 Q40,-44 0,-44 Q-40,-44 -74,-20Z', '#FFF6C9')}${ln('M-60,-40 Q0,-70 60,-40', 3, '#FFD27A')}</g>`);
const eyeRed = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})" opacity=".85">${[-24, 24].map(dx => `<path d="M${dx - 12},-2 l6,4 M${dx + 12},-2 l-6,4 M${dx - 8},6 l5,-2" stroke="#E76A6A" stroke-width="2.2" stroke-linecap="round"/>`).join('')}</g>`;
const drops = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-12,-30 h24 v50 q0,10 -12,10 q-12,0 -12,-10z', '#CFEFFF')}${path('M-6,-46 h12 l-2,16 h-8z', '#FFFFFF', { lw: 2.6 })}</g>`);
const jelly = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-40,0 Q-40,-40 0,-40 Q40,-40 40,0 Q20,-8 0,0 Q-20,-8 -40,0Z', '#F7C8E0', { lw: 3 })}${ln('M-26,0 q-6,22 2,40 M-8,0 q6,22 -2,42 M10,0 q-6,22 2,40 M28,0 q6,20 -2,36', 3, '#E39BC1')}</g>`);
const santaHat = (x, y, s = 1, r = -12) => G(`<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-46,0 Q-30,-70 30,-80 Q20,-40 46,0Z', '#FF8A8A')}${path('M-52,-6 h104 v18 h-104z', '#FFFFFF', { lw: 3, hatch: false })}${ell(32, -82, 12, 12, '#FFFFFF', { lw: 3, hatch: false })}</g>`);
const scarfProp = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-60,-10 Q0,14 60,-10 L58,10 Q0,34 -58,10Z', '#FF9EB8')}${path('M20,10 l8,50 h22 l-12,-54z', '#FF9EB8')}</g>`);
const calendar = (x, y, s = 1, mark = []) => G(`<g transform="translate(${x},${y}) scale(${s})">${sh('rect', { x: -90, y: -70, width: 180, height: 150, rx: 10 }, '#FFFFFF', { lw: 3, hatch: false })}${sh('rect', { x: -90, y: -70, width: 180, height: 30, rx: 10 }, '#FF9EB8', { lw: 3 })}</g>`) +
  `<g transform="translate(${x},${y}) scale(${s})">${[...Array(15)].map((_, i) => `<circle cx="${-64 + (i % 5) * 32}" cy="${-14 + Math.floor(i / 5) * 30}" r="${mark.includes(i) ? 11 : 4}" fill="${mark.includes(i) ? AM : '#D9D3E6'}"/>`).join('')}</g>`;
const medalOld = (x, y, s = 1) => G(L.PROPS.medal(x, y, s));
const frame = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${sh('rect', { x: -60, y: -46, width: 120, height: 92, rx: 4 }, '#E9C79B', { lw: 3 })}${sh('rect', { x: -48, y: -34, width: 96, height: 68, rx: 2 }, '#BFE6F5', { lw: 2.4, hatch: false })}</g>`) +
  `<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="-6" r="12" fill="${P.dadHair}"/><path d="M-20,30 Q0,6 20,30Z" fill="${P.navy}"/>${L.PROPS.medal(26, -8, .5)}</g>`;

// ── 물루 앱 화면 (200×340 화면 좌표)
// 수영 기록 등록 — ✏️ 상세
const recordDetail = (name = '김태랑') => aT(14, 28, '수영 기록 등록', { size: 15, w: 800 }) +
  aBtn(12, 46, 84, 30, '🏊 간편', { col: '#F3EEFF', tc: AP, size: 12 }) + aBtn(104, 46, 84, 30, '✏️ 상세', { size: 12 }) +
  row(90, '레인 길이', '50m') + row(126, '왕복 수', '10') + row(162, '시간', '25분') +
  aBtn(12, 244, 176, 34, '✓', { size: 16 });
const recordDone2 = () => `<rect width="200" height="304" fill="#F1FBF9"/>` + aT(100, 34, '기록 완료', { size: 16, anchor: 'middle', w: 800 }) +
  aT(100, 78, '1,000m', { size: 30, col: AP, anchor: 'middle', w: 800 }) + aT(100, 100, '페이스 2\'30"/100m', { size: 12, col: '#8A8098', anchor: 'middle', w: 700 }) +
  aCard(12, 118, 176, 40, '#FFFFFF') + aT(100, 143, '이전보다 30% 더 멀리', { size: 13, col: '#0E9F93', anchor: 'middle', w: 800 }) +
  aCard(12, 168, 176, 40, '#FFFFFF') + aT(100, 193, '바다동 구민수영장 전체 12위', { size: 11.5, col: AP, anchor: 'middle', w: 800 });
// 챌린지 탭 — 친구 챌린지
const friendChal = (invited = false) => aT(14, 28, '챌린지', { size: 15, w: 800 }) +
  aCard(12, 44, 176, 54, '#E6FBF8') + aT(24, 66, '🌱 오늘의 미션', { size: 12.5, w: 800 }) + `<rect x="24" y="76" width="110" height="8" rx="4" fill="#A6E9DF"/>` +
  aCard(12, 108, 176, 150, '#F3EEFF') + aT(24, 130, '친구 챌린지', { size: 13, w: 800 }) + aT(24, 150, '이번 주 같이 3번 수영', { size: 11, col: '#8A8098', w: 700 }) +
  `<circle cx="44" cy="186" r="16" fill="${P.purple}"/>` + (invited ? `<circle cx="84" cy="186" r="16" fill="${P.teaHair}"/>` + aT(84, 191, '윤', { size: 12, col: '#fff', anchor: 'middle', w: 800 }) : `<circle cx="84" cy="186" r="16" fill="#fff" stroke="#C9C2D8" stroke-width="2" stroke-dasharray="4 3"/>` + aT(84, 191, '?', { size: 13, col: '#C9C2D8', anchor: 'middle' })) +
  aBtn(24, 214, 152, 32, invited ? '함께 도전 중!' : '친구 초대하기', { size: 13, col: invited ? AM : AP });
// 챌린지 탭 → 「랭킹」 — 내 수영장 순위 · 전국 상위 · 내 강점
const myRank = (strength = false) => tabTop(['챌린지', '랭킹'], 1) +
  aCard(12, 50, 176, 62, '#F3EEFF') + aT(24, 72, '내 수영장 순위', { size: 11, col: '#8A8098', w: 700 }) + aT(24, 98, '바다동 구민수영장 41위', { size: 13, w: 800 }) +
  aCard(12, 120, 176, 44, '#FFFFFF') + `<rect x="12" y="120" width="176" height="44" rx="12" fill="none" stroke="#E5E0F2" stroke-width="1.5"/>` + aT(100, 148, '전국 상위 38%', { size: 14, col: AP, anchor: 'middle', w: 800 }) +
  (strength ? aCard(12, 174, 176, 92, '#E6FBF8') + `<rect x="12" y="174" width="176" height="92" rx="12" fill="none" stroke="${AM}" stroke-width="2"/>` + aT(24, 196, '내 강점', { size: 12, w: 800 }) +
    aT(100, 230, '📅 빈도', { size: 20, anchor: 'middle', w: 800, col: '#0E9F93' }) + aT(100, 254, '개근왕', { size: 13, anchor: 'middle', w: 800, col: AP })
    : aCard(12, 174, 176, 92, '#F7F5FB') + aT(24, 196, '내 강점', { size: 12, w: 800 }) + aT(100, 238, '?', { size: 24, anchor: 'middle', w: 800, col: '#C9C2D8' }));
// 점령전 — 접전 목록
const siegeHot = (won = false) => `<rect width="200" height="304" fill="#F6F4FA"/>` + aT(14, 28, '🏰 점령전 모드', { size: 14, w: 800 }) +
  aT(14, 62, '🔥 접전 중인 수영장', { size: 12, w: 800 }) +
  (won ? row(70, '바다동 구민수영장', '물빛 ●', { col: '#E6FBF8', rc: '#0E9F93' }) : row(70, '바다동 구민수영장', '접전', { col: '#FFF0EC', rc: '#E07A5F' })) +
  aT(14, 130, '🌊 우리가 차지한 수영장', { size: 12, w: 800 }) + row(138, '해오름 수영장', '물빛 ●', { col: '#E6FBF8', rc: '#0E9F93' }) +
  (won ? row(172, '바다동 구민수영장', 'NEW', { col: '#E6FBF8', rc: AP }) : '');
const siegeMap2 = (won = false) => {
  const pin = (x, y, col) => `<circle cx="${x}" cy="${y - 4}" r="26" fill="${col}" opacity=".28"/><path d="M${x},${y + 12} q-12,-14 -12,-22 a12,12 0 1 1 24,0 q0,8 -12,22z" fill="${col}" stroke="#fff" stroke-width="2"/><circle cx="${x}" cy="${y - 10}" r="4" fill="#fff"/>`;
  return miniMap() + aCard(10, 12, 180, 30, '#FFFFFF') + aT(100, 32, '🏰 점령전 모드', { size: 12, anchor: 'middle', w: 800, col: AP }) +
    pin(60, 110, AM) + pin(140, 190, won ? AM : '#FF9C8A') + `<circle cx="100" cy="150" r="7" fill="#3B82F6" stroke="#fff" stroke-width="3"/>`;
};
// 크루 탭 → 「모임 만들기」 / 「함께 수영해요 🏊」
const meetMake = () => aT(14, 28, '모임 만들기', { size: 15, w: 800 }) +
  row(48, '모임 이름', '토요일 가족 수영', { size: 10.5 }) + row(86, '수영장', '바다동 구민수영장', { size: 10.5, rc: '#0E9F93' }) + row(124, '날짜', '토 AM 8:00', { size: 10.5 }) +
  aBtn(12, 212, 176, 34, '모임 만들기', { size: 13 });
const meetList2 = () => aT(14, 28, '함께 수영해요 🏊', { size: 15, w: 800 }) +
  aCard(12, 48, 176, 80, '#E6FBF8') + `<rect x="12" y="48" width="176" height="80" rx="12" fill="none" stroke="${AM}" stroke-width="2"/>` + aT(24, 72, '토요일 가족 수영', { size: 12.5 }) + aT(24, 92, '바다동 구민수영장 · AM 8:00', { size: 10, col: '#8A8098', w: 600 }) +
  [P.purple, '#FF9EB8', P.dadHair].map((c, i) => `<circle cx="${34 + i * 14}" cy="112" r="7" fill="${c}" stroke="#fff" stroke-width="1.5"/>`).join('') +
  aCard(12, 138, 176, 70, '#F3EEFF') + aT(24, 162, '퇴근길 1km 같이', { size: 12 }) + aT(24, 182, '해오름 수영장 · PM 7:30', { size: 10, col: '#8A8098', w: 600 });
// 내정보 / 꾸미기 (겨울 소품)
const avatarW = (x, y, s, w = false) => avatarFig(x, y, s, { hat: false, scarf: w }) + (w ? `<g transform="translate(${x},${y}) scale(${s})"><path d="M-30,-14 Q-24,-52 6,-56 Q30,-52 34,-10 Q0,-24 -30,-14Z" fill="#FF8A8A" stroke="${LINE}" stroke-width="2"/><path d="M-34,-18 Q0,-30 36,-14 L36,-4 Q0,-20 -34,-8Z" fill="#fff" stroke="${LINE}" stroke-width="2"/><circle cx="8" cy="-58" r="7" fill="#fff" stroke="${LINE}" stroke-width="2"/></g>` : '');
const myInfo2 = (w = false, hi = 1) => aT(14, 28, '내정보', { size: 15, w: 800 }) + `<circle cx="100" cy="92" r="42" fill="#F3EEFF"/>` + avatarW(100, 88, .7, w) +
  aT(100, 166, '김물루', { size: 14, anchor: 'middle', w: 800 }) +
  aBtn(12, 180, 176, 32, '내 한 해 기록', { col: hi === 0 ? AP : '#F3EEFF', tc: hi === 0 ? '#fff' : AP, size: 13 }) + aBtn(12, 220, 176, 32, '꾸미기', { col: hi === 1 ? AP : '#F3EEFF', tc: hi === 1 ? '#fff' : AP, size: 13 });
const decoWinter = (w = false) => aT(14, 28, '꾸미기', { size: 15, w: 800 }) +
  `<rect x="12" y="40" width="176" height="150" rx="14" fill="#EAF6FF"/>` + `<g opacity=".9">${[[30, 60], [170, 70], [40, 160], [160, 150], [100, 54]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="3" fill="#fff"/>`).join('')}</g>` + avatarW(100, 112, 1.25, w) +
  [0, 1, 2, 3].map(i => `<rect x="${16 + i * 44}" y="202" width="36" height="36" rx="10" fill="${i < 2 && w ? '#E6FBF8' : '#F3EEFF'}" stroke="${i < 2 && w ? AM : '#E5E0F2'}" stroke-width="2"/>`).join('') +
  `<path d="M24,230 Q28,210 40,208 Q38,220 44,230Z" fill="#FF8A8A"/><rect x="22" y="226" width="24" height="6" rx="3" fill="#fff"/>` + `<path d="M64,214 Q78,222 92,214 L90,222 Q78,230 66,222Z" fill="#FF9EB8"/>` +
  `<circle cx="122" cy="220" r="9" fill="${P.yellow}"/>` + `<path d="M158,226 l8,-14 l8,14z" fill="${P.purple}"/>`;
// 내정보 → 「내 한 해 기록」
const yearRec2 = (hi = false) => `<rect width="200" height="304" fill="#F6F4FA"/>` + aT(100, 32, '내 한 해 기록', { size: 15, anchor: 'middle', w: 800 }) +
  aT(100, 58, '2026', { size: 12, anchor: 'middle', col: '#8A8098', w: 700 }) +
  aCard(12, 70, 176, 66, '#FFFFFF') + aT(100, 114, '186일', { size: 30, col: AP, anchor: 'middle', w: 800 }) +
  row(146, '수영한 거리', '201km', { col: hi ? '#E6FBF8' : '#FFFFFF', rc: '#0E9F93' }) + row(184, '가장 많이 간 곳', '바다동', { col: '#FFFFFF' });

module.exports = { ...L, speed, zzz, night, nightPool, bus, dryerRow, shallow, paddle, snorkel, slipper, nameTag, towelHead, eyeRed, drops, jelly, santaHat, scarfProp, calendar, medalOld, frame,
  recordDetail, recordDone2, friendChal, myRank, siegeHot, siegeMap2, meetMake, meetList2, myInfo2, decoWinter, yearRec2 };
