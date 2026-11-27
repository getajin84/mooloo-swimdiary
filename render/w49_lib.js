// EP.118~138 (2026-12 첫 주 게시분) 공용 로컬 소품·배경·앱 화면
const L = require('./w48_lib');
const { P, LINE, sh, path, ell, ln, pencil, bg, tiles, water, rope, G, AP, AM, aT, aBtn, aCard, PW, PH, row, miniMap, PROPS } = L;

// ── 배경
const showerRoom = () => tiles('#EAF4FB', '#D3E4F0', 40) + pencil([90, 245, 400].map(x => ln(`M${x},0 V70 Q${x},90 ${x + 20},90`, 6, '#B9B6C6') + path(`M${x + 10},82 h40 l10,20 h-60z`, '#D9D6E6', { lw: 3 })).join('') +
  sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#CFE0EC', { lw: 3.4 }));
const deepEnd = () => tiles(P.paper, '#F1DECF', 46, 0, 200) + water(200, '#6FC3E6') + `<rect x="0" y="380" width="${PW}" height="${PH - 380}" fill="#3F8FB8" opacity=".25"/>` +
  pencil(sh('rect', { x: 360, y: 120, width: 96, height: 46, rx: 8 }, '#FFFFFF', { lw: 3, hatch: false })) + `<text x="408" y="153" font-family="Gaegu" font-weight="700" font-size="28" fill="#E07A5F" text-anchor="middle">1.8m</text>`;
const lobby = () => bg('#F1ECFA') + pencil(sh('rect', { x: -10, y: 60, width: PW + 20, height: 60 }, '#DCEBFF', { lw: 3.4 }) + sh('rect', { x: -10, y: 430, width: PW + 20, height: 130 }, '#D9D3E6', { lw: 3.4 }));

// ── 소품
const clipper = (x, y, s = 1, r = -20) => G(`<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-40,-8 h70 q10,0 10,8 q0,8 -10,8 h-70z', '#C9C6D6', { lw: 3 })}${path('M-40,-8 l60,-14 l4,6 l-56,16z', '#E1DEEA', { lw: 2.6 })}</g>`);
const nailHand = (x, y, s = 1, long = true) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-34,40 v-44 q0,-8 8,-8 q8,0 8,8 v-26 q0,-8 8,-8 q8,0 8,8 v-4 q0,-8 8,-8 q8,0 8,8 v8 q0,-8 8,-8 q8,0 8,8 v66 q0,26 -34,26 q-34,0 -34,-26z', P.skin)}</g>`) +
  `<g transform="translate(${x},${y}) scale(${s})">${[[-26, -12], [-10, -38], [6, -42], [22, -38]].map(([fx, fy]) => `<path d="M${fx - 6},${fy} q6,${long ? -16 : -5} 12,0" fill="#FFF4F6" stroke="${LINE}" stroke-width="2"/>`).join('')}</g>`;
const gogglesC = (x, y, s = 1, col = '#BFEBFF', strap = P.purpleD) => G(`<g transform="translate(${x},${y}) scale(${s})">${ln('M-40,0 Q0,22 40,0', 5, strap)}${ell(-14, 0, 13, 10, col, { lw: 4, hatch: false })}${ell(14, 0, 13, 10, col, { lw: 4, hatch: false })}</g>`) +
  `<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="-18" cy="-3" rx="3" ry="4" fill="#fff" opacity=".8"/><ellipse cx="10" cy="-3" rx="3" ry="4" fill="#fff" opacity=".8"/></g>`;
const bigBag = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-40,-30 Q0,-90 40,-30', 'none', { lw: 7 })}${path('M-78,-34 h156 v110 q0,12 -12,12 h-132 q-12,0 -12,-12z', '#FF9EB8')}${ln('M-78,6 H78', 6, '#fff')}</g>`) +
  G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-50,-50 h18 v24 h-18z', P.mint, { lw: 2.6 })}${path('M-20,-62 h16 v36 h-16z', P.yellow, { lw: 2.6 })}${path('M10,-54 h22 v28 h-22z', '#CFEFFF', { lw: 2.6 })}${path('M40,-46 h20 v20 h-20z', P.peach, { lw: 2.6 })}</g>`);
const pouch = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-50,-30 h100 v56 q0,8 -8,8 h-84 q-8,0 -8,-8z', P.mint)}${ln('M-50,-18 H50', 3, '#fff')}${[-30, -10, 10, 30].map((dx, i) => path(`M${dx - 7},-44 h14 v16 h-14z`, ['#CFEFFF', P.yellow, P.peach, '#FFFFFF'][i], { lw: 2.2, hatch: false })).join('')}</g>`);
const miniBottles = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${[[-40, '#CFEFFF'], [0, P.yellow], [40, P.peach]].map(([dx, c]) => path(`M${dx - 12},-30 h24 v50 q0,6 -6,6 h-12 q-6,0 -6,-6z`, c, { lw: 2.6 }) + path(`M${dx - 7},-40 h14 v10 h-14z`, '#FFFFFF', { lw: 2.2, hatch: false })).join('')}</g>`);
const bigBottles = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${[[-46, '#CFEFFF'], [0, P.yellow], [46, P.peach]].map(([dx, c]) => path(`M${dx - 20},-60 h40 v100 q0,8 -8,8 h-24 q-8,0 -8,-8z`, c, { lw: 3 }) + path(`M${dx - 10},-76 h20 v16 h-20z`, '#FFFFFF', { lw: 2.4, hatch: false })).join('')}</g>`);
const sock = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-14,-40 h28 v44 q0,10 10,14 l14,6 q8,4 4,14 q-4,8 -14,6 l-34,-10 q-8,-4 -8,-14z', '#FFE79A')}${ln('M-14,-30 h28', 4, '#FFB36B')}</g>`);
const clock = (x, y, s = 1, h = 10, m = 0) => G(`<g transform="translate(${x},${y}) scale(${s})">${ell(0, 0, 40, 40, '#FFFFFF', { lw: 3.4, hatch: false })}</g>`) +
  `<g transform="translate(${x},${y}) scale(${s})"><path d="M0,0 L${Math.sin(h / 12 * Math.PI * 2) * 20},${-Math.cos(h / 12 * Math.PI * 2) * 20} M0,0 L${Math.sin(m / 60 * Math.PI * 2) * 30},${-Math.cos(m / 60 * Math.PI * 2) * 30}" stroke="${LINE}" stroke-width="4" stroke-linecap="round"/><circle r="4" fill="${LINE}"/></g>`;
const steam = (x, y) => `<g opacity=".7">${[0, 1, 2].map(i => `<path d="M${x + i * 20},${y} q-8,-12 0,-24 q8,-12 0,-24" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
const arrowsWave = (x, y) => G(ln(`M${x - 60},${y} q15,-20 30,0 t30,0 t30,0 t30,0`, 4, P.purpleD));
const lapBoard = (x, y, t, col = '#FFFFFF') => pencil(sh('rect', { x: x - 70, y: y - 34, width: 140, height: 60, rx: 10 }, col, { lw: 3, hatch: false })) + `<text x="${x}" y="${y + 8}" font-family="Gaegu" font-weight="700" font-size="34" fill="${LINE}" text-anchor="middle">${t}</text>`;

// ── 물루 앱 화면 (200×340 화면 좌표)
const pinAt = (x, y, col) => `<path d="M${x},${y + 12} q-12,-14 -12,-22 a12,12 0 1 1 24,0 q0,8 -12,22z" fill="${col}" stroke="#fff" stroke-width="2"/><circle cx="${x}" cy="${y - 10}" r="4" fill="#fff"/>`;
// 탐색 탭 · 「📍 가까운 수영장」 → 수영장 시트
const nearScreen = (sheet = false, name = '구름다리 수영장', sub = '25m · 회사에서 도보 6분') => miniMap() +
  aCard(10, 12, 180, 28, '#FFFFFF') + aT(22, 31, '🔍 수영장 검색', { size: 11.5, col: '#9A93A8', w: 600 }) +
  (sheet ? pinAt(100, 110, AP) + `<circle cx="70" cy="140" r="7" fill="#3B82F6" stroke="#fff" stroke-width="3"/>` +
    `<rect x="0" y="150" width="200" height="160" rx="16" fill="#FFFFFF"/><rect x="84" y="158" width="32" height="4" rx="2" fill="#DDD6EA"/>` +
    aT(16, 188, name, { size: 14, w: 800 }) + aT(16, 208, sub, { size: 10.5, col: '#8A8098', w: 600 }) +
    aBtn(16, 222, 80, 30, '팔로우', { col: AM, size: 13 }) + `<rect x="104" y="222" width="80" height="30" rx="15" fill="#fff" stroke="${AP}" stroke-width="2"/>` + aT(144, 242, '상세 보기', { size: 12, col: AP, anchor: 'middle' })
    : pinAt(100, 110, AP) + pinAt(150, 200, AM) + pinAt(50, 230, AM) + `<circle cx="70" cy="140" r="7" fill="#3B82F6" stroke="#fff" stroke-width="3"/>` +
    aBtn(40, 256, 120, 30, '📍 가까운 수영장', { size: 11.5, col: '#FFFFFF', tc: AP }) + `<rect x="40" y="256" width="120" height="30" rx="15" fill="none" stroke="${AP}" stroke-width="1.6"/>`);
const followed = (name = '구름다리 수영장') => miniMap() + pinAt(100, 110, AP) +
  `<rect x="0" y="150" width="200" height="160" rx="16" fill="#FFFFFF"/><rect x="84" y="158" width="32" height="4" rx="2" fill="#DDD6EA"/>` +
  aT(16, 188, name, { size: 14, w: 800 }) + aT(16, 208, '단골 수영장', { size: 10.5, col: '#0E9F93', w: 700 }) +
  aBtn(16, 222, 80, 30, '팔로우 ✓', { col: '#E6FBF8', tc: '#0E9F93', size: 12 }) + `<rect x="104" y="222" width="80" height="30" rx="15" fill="#fff" stroke="${AP}" stroke-width="2"/>` + aT(144, 242, '상세 보기', { size: 12, col: AP, anchor: 'middle' });
// 내정보 배너 — 워치 수영 가져오기
const watchBanner2 = (name = '엄마', done = false) => aT(14, 28, '내정보', { size: 15, w: 800 }) + `<circle cx="40" cy="70" r="22" fill="#FF9EB8"/>` + aT(72, 76, name, { size: 14, w: 800 }) +
  aCard(12, 108, 176, 96, '#E6FBF8') + aT(24, 130, '워치에 있는 수영도', { size: 12, w: 800 }) + aT(24, 148, '💧 물루로 쌓여요', { size: 12, w: 800, col: '#0E9F93' }) +
  aBtn(24, 162, 52, 26, '연결', { size: 11, col: '#FFFFFF', tc: AP }) + `<rect x="24" y="162" width="52" height="26" rx="13" fill="none" stroke="${AP}" stroke-width="1.5"/>` +
  aBtn(84, 162, 96, 26, '지금 가져오기', { size: 11, col: done ? '#0E9F93' : AM }) +
  (done ? aCard(12, 214, 176, 40, '#FFFFFF') + `<rect x="12" y="214" width="176" height="40" rx="12" fill="none" stroke="${AM}" stroke-width="1.6"/>` + aT(100, 239, '⌚ 오늘 수영 800m', { size: 12.5, col: AP, anchor: 'middle', w: 800 }) : '');
// 수영장 시트 → 「상세 보기」 → 커뮤니티 → 🍜 스윔푸드
const poolSheet = (name, sub) => miniMap() + pinAt(100, 110, AP) + `<rect x="0" y="150" width="200" height="160" rx="16" fill="#FFFFFF"/><rect x="84" y="158" width="32" height="4" rx="2" fill="#DDD6EA"/>` +
  aT(16, 188, name, { size: 14, w: 800 }) + aT(16, 208, sub, { size: 10.5, col: '#8A8098', w: 600 }) +
  aBtn(16, 222, 80, 30, '팔로우', { col: AM, size: 13 }) + aBtn(104, 222, 80, 30, '상세 보기', { col: AP, size: 12 });
const swimfood2 = (name = '해오름 수영장') => `<rect width="200" height="96" fill="#BFE6F5"/><path d="M0,70 q25,-10 50,0 t50,0 t50,0 t50,0 V96 H0Z" fill="#9ED8EF"/>` +
  aT(14, 120, name, { size: 15, w: 800 }) + aT(14, 146, '소개', { size: 12.5, col: '#B9B2C8', w: 600 }) + aT(66, 146, '커뮤니티', { size: 12.5, w: 800 }) + `<rect x="66" y="152" width="50" height="3" rx="1.5" fill="${AP}"/>` +
  aT(14, 178, '🍜 스윔푸드', { size: 13, w: 800 }) +
  row(188, '🍲 할매 국밥', '도보 4분', { size: 11, col: '#E6FBF8', rc: '#0E9F93' }) + row(222, '🍞 토스트 가게', '도보 2분', { size: 11 }) +
  aBtn(12, 258, 176, 30, '스윔푸드 등록하기', { size: 12.5 });
// 체크인 배너 / 첫 방문
const checkin2 = (name) => miniMap() + pinAt(100, 120, AM) + `<circle cx="100" cy="150" r="7" fill="#3B82F6" stroke="#fff" stroke-width="3"/>` +
  aCard(10, 196, 180, 92, '#FFFFFF') + `<rect x="10" y="196" width="180" height="92" rx="12" fill="none" stroke="${AM}" stroke-width="2"/>` +
  aT(22, 220, '📍 수영장 근처예요', { size: 12, w: 800 }) + aT(22, 238, name, { size: 10.5, col: '#8A8098', w: 600 }) + aBtn(22, 248, 156, 30, '인증하기', { col: AM, size: 13 });
const firstVisit = () => `<rect width="200" height="304" fill="#F1FBF9"/>` + aT(100, 50, '첫 방문!', { size: 22, col: AP, anchor: 'middle', w: 800 }) +
  `<circle cx="100" cy="112" r="34" fill="${AM}"/><path d="M84,112 l11,11 l20,-22" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round"/>` +
  aCard(12, 166, 176, 40, '#FFFFFF') + aT(100, 191, '+50💧 도장 보상', { size: 14, col: '#0E9F93', anchor: 'middle', w: 800 });
// 크루 라운지 — 활동 온도
const lounge2 = (temp = 12, after = false) => aT(14, 28, '새벽물결', { size: 15, w: 800 }) +
  aCard(12, 40, 176, 40, temp > 20 ? '#FFF0EC' : '#EAF2FF') + aT(100, 65, `우리 크루 활동 온도 ${temp}°C`, { size: 12, col: temp > 20 ? '#E07A5F' : '#5B7FD6', anchor: 'middle', w: 800 }) +
  aCard(12, 90, 176, 52, '#FFF6E0') + aT(22, 110, '📌 공지', { size: 12, w: 800 }) + aT(22, 130, after ? '이번 주 다 같이 2번!' : '추워도 화이팅…', { size: 11, w: 600 }) +
  aCard(12, 150, 176, 52, '#E6FBF8') + aT(22, 170, '📅 일정', { size: 12, w: 800 }) + aT(22, 190, after ? '수 PM 8:00 · 토 AM 7:00' : '등록된 일정 없음', { size: 11, w: 600, col: after ? LINE : '#9A93A8' }) +
  [0, 1, 2, 3].map(i => `<circle cx="${40 + i * 32}" cy="${232}" r="12" fill="${[P.purple, P.teaHair, '#FF9EB8', P.mint][i]}" stroke="#fff" stroke-width="2"/>`).join('');
// 「물루가 도착했어요」 → 「톡 눌러 터뜨리기」
const arrive = (popped = false) => `<rect width="200" height="340" fill="#EAF6FF"/>` + aT(100, 50, '물루가 도착했어요', { size: 15, anchor: 'middle', w: 800 }) +
  (popped ? `<g opacity=".9">${[[60, 120], [140, 110], [100, 170], [50, 190], [150, 190]].map(([x, y]) => `<path d="M${x - 10},${y} l-8,-4 M${x + 10},${y} l8,-4 M${x},${y - 12} l0,-8" stroke="${AM}" stroke-width="3" stroke-linecap="round"/>`).join('')}</g>` +
    aT(100, 160, '+120💧', { size: 30, col: '#0E9F93', anchor: 'middle', w: 800 })
    : [[100, 140, 34], [56, 110, 18], [150, 104, 20], [60, 190, 14], [148, 186, 16]].map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#CFEFFF" stroke="${AM}" stroke-width="2.4"/><circle cx="${x - r * .35}" cy="${y - r * .35}" r="${r * .22}" fill="#fff"/>`).join('') + aT(100, 147, '💧', { size: 26, anchor: 'middle' })) +
  (popped ? '' : aBtn(28, 236, 144, 34, '톡 눌러 터뜨리기', { size: 13 }));
// 피드 카드 — 「🌊 응원하기」
const feedCheer = (who = '윤슬', on = false, own = false) => aCard(10, 12, 180, 196, '#FFFFFF') + `<rect x="10" y="12" width="180" height="196" rx="12" fill="none" stroke="#E5E0F2" stroke-width="1.5"/>` +
  `<circle cx="30" cy="34" r="11" fill="${own ? P.purple : P.teaHair}"/>` + aT(48, 32, who, { size: 12 }) + aT(48, 47, '오늘의 수영 기록', { size: 9.5, col: '#9A93A8', w: 600 }) +
  `<rect x="20" y="56" width="160" height="70" rx="8" fill="#BFE6F5"/><path d="M20,110 q20,-8 40,0 t40,0 t40,0 t40,0 V126 H20Z" fill="#9ED8EF"/>` +
  aT(20, 146, own ? '25m × 왕복 16 · 800m' : '25m × 왕복 30 · 1,500m', { size: 10.5, col: AP }) +
  (own ? `<rect x="20" y="160" width="100" height="30" rx="15" fill="#F1EFF5"/>` + aT(70, 180, '🌊 응원하기', { size: 11.5, col: '#C9C2D8', anchor: 'middle', w: 700 })
    : aBtn(20, 160, 100, 30, '🌊 응원하기', { size: 11.5, col: on ? AM : AP })) +
  aT(132, 180, '💬 댓글', { size: 11, col: '#9A93A8', w: 600 });

module.exports = { ...L, showerRoom, deepEnd, lobby, clipper, nailHand, gogglesC, bigBag, pouch, miniBottles, bigBottles, sock, clock, steam, arrowsWave, lapBoard,
  nearScreen, followed, watchBanner2, poolSheet, swimfood2, checkin2, firstVisit, lounge2, arrive, feedCheer };
