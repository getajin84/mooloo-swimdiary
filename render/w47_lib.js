// EP.076~096 (2026-11 넷째 주 ~ 12월 첫 주 게시분) 공용 로컬 소품·배경·앱 화면
const L = require('./w46_lib');
const { P, LINE, sh, path, ell, ln, pencil, bg, tiles, water, rope, G, AP, AM, aT, aBtn, aCard, PW, PH, row, miniMap } = L;

// ── 배경
const kitchen = () => bg('#FFF1E6') + pencil(sh('rect', { x: -10, y: 300, width: PW + 20, height: 30 }, '#C99B73', { lw: 3.4 }) + sh('rect', { x: -10, y: 330, width: PW + 20, height: 220 }, '#F3DCC3', { lw: 3.4 }) +
  sh('rect', { x: 300, y: 60, width: 150, height: 120, rx: 6 }, '#CFE6F7', { lw: 3.4 })) + ln('M375,60 V180', 3);
const glassPool = () => bg('#CFEFFF') + pencil([0, 1, 2, 3, 4].map(i => sh('rect', { x: i * 100 - 6, y: -10, width: 96, height: 210 }, '#E6F7FF', { lw: 3 })).join('')) +
  `<g opacity=".6">${[60, 180, 300, 420].map(x => `<path d="M${x},20 l30,40" stroke="#fff" stroke-width="6" stroke-linecap="round"/>`).join('')}</g>` + water(250, '#8FD8F2') + rope(250);
const paceWall = () => tiles('#F2F7FB', '#DCE8F1', 46, 0, 380) + water(380) + rope(380);
const backFlags = (y = 70) => {
  let s = `<path d="M-10,${y} H${PW + 10}" stroke="${LINE}" stroke-width="2.4"/>`;
  for (let i = 0; i < 11; i++) s += `<path d="M${6 + i * 46},${y} l30,0 l-15,30z" fill="${[P.pink, P.yellow, P.mint, P.sky][i % 4]}" stroke="${LINE}" stroke-width="2"/>`;
  return s;
};
const ceilingFlags = () => bg('#E6F3FB') + pencil(sh('rect', { x: -10, y: -10, width: PW + 20, height: 60 }, '#F4F1FB', { lw: 3 })) + backFlags(90);
const stall = () => bg('#DDE6F5') + `<g opacity=".85">${[...Array(16)].map((_, i) => `<circle cx="${(i * 71) % 480 + 6}" cy="${(i * 53) % 200 + 8}" r="${3 + i % 3}" fill="#fff"/>`).join('')}</g>` +
  pencil(sh('rect', { x: 230, y: 150, width: 240, height: 230, rx: 8 }, '#FFE2C2', { lw: 3.4 }) + path('M220,150 L250,96 H450 L480,150Z', '#FF9EB8') + sh('rect', { x: 250, y: 260, width: 200, height: 26, rx: 4 }, '#C99B73', { lw: 3 }) +
    sh('rect', { x: -10, y: 440, width: PW + 20, height: 120 }, '#CFC8E6', { lw: 3.4 })) + `<text x="350" y="136" font-family="Gaegu" font-weight="700" font-size="28" fill="${LINE}" text-anchor="middle">붕어빵</text>`;
const entrance = (name = '바다동 구민수영장') => bg('#DCEBFF') + pencil(sh('rect', { x: 40, y: 110, width: 410, height: 340, rx: 10 }, '#F1ECFA', { lw: 3.4 }) + sh('rect', { x: 90, y: 130, width: 310, height: 50, rx: 10 }, P.mint, { lw: 3 }) +
  sh('rect', { x: 190, y: 320, width: 110, height: 130, rx: 6 }, '#BFD8F2', { lw: 3 }) + sh('rect', { x: -10, y: 450, width: PW + 20, height: 100 }, '#CFC8E6', { lw: 3.4 })) +
  `<text x="245" y="165" font-family="Gaegu" font-weight="700" font-size="28" fill="${LINE}" text-anchor="middle">${name}</text>`;
const couch = () => bg('#FFF1E6') + pencil(sh('rect', { x: 20, y: 260, width: 450, height: 120, rx: 30 }, '#CDB8F0', { lw: 3.4 }) + sh('rect', { x: -10, y: 420, width: PW + 20, height: 130 }, '#E9CFB4', { lw: 3.4 }));

// ── 소품
const pullBuoy = (x, y, s = 1, r = 0) => G(`<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${ell(0, -22, 26, 18, '#FFD27A', { lw: 3 })}${ell(0, 22, 26, 18, '#FFD27A', { lw: 3 })}${path('M-16,-8 h32 v16 h-32z', '#FFD27A', { lw: 2.6 })}</g>`);
const paceClock = (x, y, s = 1, hand = 0) => G(`<g transform="translate(${x},${y}) scale(${s})">${ell(0, 0, 60, 60, '#FFFFFF', { lw: 4, hatch: false })}${ell(0, 0, 52, 52, '#FFFFFF', { lw: 2, hatch: false })}</g>`) +
  `<g transform="translate(${x},${y}) scale(${s})">${[0, 15, 30, 45].map(n => { const a = (n / 60) * Math.PI * 2; return `<text x="${Math.sin(a) * 38}" y="${-Math.cos(a) * 38 + 7}" font-family="Gaegu" font-weight="700" font-size="20" fill="${LINE}" text-anchor="middle">${n || 60}</text>`; }).join('')}` +
  `<path d="M0,0 L${Math.sin(hand / 60 * Math.PI * 2) * 28},${-Math.cos(hand / 60 * Math.PI * 2) * 28}" stroke="#E07A5F" stroke-width="4" stroke-linecap="round"/><circle r="5" fill="#E07A5F"/></g>`;
const ring = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${ell(0, 0, 16, 16, 'none', { lw: 5, hatch: false })}${path('M-6,-22 l6,-8 l6,8 l-6,6z', '#BFEFFF', { lw: 2.2, hatch: false })}</g>`);
const tray = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-60,-14 h120 l-10,28 h-100z', '#E9E4F2')}</g>`);
const tissue = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-34,-14 h68 v34 h-68z', '#CFEFFF')}${path('M-10,-14 q10,-26 20,0', '#FFFFFF', { lw: 2.4, hatch: false })}</g>`);
const thermo = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-6,-40 h12 v54 a12,12 0 1 1 -12,0z', '#FFFFFF', { lw: 2.6, hatch: false })}${ell(0, 24, 7, 7, '#FF8A8A', { line: false, hatch: false })}</g>`);
const towelS = (x, y, s = 1, col = P.yellow) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-60,-20 q60,-30 120,0 l-6,50 q-54,-20 -108,0z', col)}${ln('M-50,0 q50,-20 100,0', 2.4, '#fff')}</g>`);
const chamois = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-40,-26 h80 v52 h-80z', '#7FDCC6')}${ln('M-30,-10 h60 M-30,4 h60', 2, '#fff')}</g>`);
const bigTowel = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-80,-50 h160 v100 h-160z', '#FFB3C7')}${ln('M-80,-30 H80 M-80,30 H80', 4, '#fff')}</g>`);
const rice = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-40,-4 h80 q-6,38 -40,38 q-34,0 -40,-38z', '#FFFFFF')}${path('M-36,-4 q36,-30 72,0', '#FFFDF8', { lw: 2.4 })}</g>`);
const chicken = (x, y, s = 1) => G(`<g transform="translate(${x},${y}) scale(${s})">${path('M-50,10 h100 l-10,30 h-80z', '#E9C79B')}${ell(-20, 0, 22, 16, '#D98E4A', { lw: 2.6 })}${ell(18, -4, 22, 16, '#D98E4A', { lw: 2.6 })}${ell(0, -18, 20, 14, '#D98E4A', { lw: 2.6 })}</g>`);
const banana = (x, y, s = 1, r = 0) => G(L.PROPS.banana(x, y, s, r));
const kick = (x, y, s = 1, r = 0, col) => G(L.PROPS.kickboard(x, y, s, r, col));
const elbowArc = (x, y) => G(ln(`M${x - 70},${y + 50} Q${x - 40},${y - 30} ${x + 10},${y - 20} Q${x + 50},${y - 10} ${x + 70},${y + 40}`, 4, P.purpleD)) + G(path(`M${x + 70},${y + 40} l-14,-4 l10,-10z`, P.purpleD, { lw: 2 }));
const noteCard = (x, y, t, col = '#FFF6C9', w = 200) => pencil(sh('rect', { x: x - w / 2, y, width: w, height: 56, rx: 6 }, col, { lw: 3, hatch: false })) + t.split('\n').map((l, i) => `<text x="${x}" y="${y + 24 + i * 24}" font-family="Gaegu" font-weight="700" font-size="22" fill="${LINE}" text-anchor="middle">${l}</text>`).join('');

// ── 물루 앱 화면 (200×340 화면 좌표, Purple #7E53FF · Mint #00CFBE)
// 탐색 탭 · 「수영장 검색」 결과 + 시트
const searchScreen = (q = '하늘빛', sheet = false) => miniMap() +
  aCard(10, 12, 180, 28, '#FFFFFF') + `<rect x="10" y="12" width="180" height="28" rx="12" fill="none" stroke="${AP}" stroke-width="1.6"/>` + aT(22, 31, `🔍 ${q}`, { size: 12, w: 700 }) +
  (sheet ? `<rect x="0" y="150" width="200" height="160" rx="16" fill="#FFFFFF"/><rect x="84" y="158" width="32" height="4" rx="2" fill="#DDD6EA"/>` +
    aT(16, 188, '하늘빛 수영장', { size: 14, w: 800 }) + aT(16, 208, '25m · 유리 천장', { size: 11, col: '#8A8098', w: 600 }) +
    aBtn(16, 222, 80, 30, '팔로우', { col: AM, size: 13 }) + `<rect x="104" y="222" width="80" height="30" rx="15" fill="#fff" stroke="${AP}" stroke-width="2"/>` + aT(144, 242, '상세 보기', { size: 12, col: AP, anchor: 'middle' })
    : aCard(10, 48, 180, 92, '#FFFFFF') + aT(20, 70, '수영장 검색', { size: 10, col: '#9A93A8', w: 600 }) +
    [0, 1].map(i => `<circle cx="28" cy="${90 + i * 28}" r="7" fill="${i ? AM : AP}"/>` + aT(42, 94 + i * 28, i ? '하늘빛 공원 수영장' : '하늘빛 수영장', { size: 11.5, w: i ? 600 : 800 })).join(''));
// 수영장 상세 — 소개 / 커뮤니티
const poolDetail = (tab = '소개', name = '하늘빛 수영장') => `<rect width="200" height="96" fill="#BFE6F5"/><path d="M0,70 q25,-10 50,0 t50,0 t50,0 t50,0 V96 H0Z" fill="#9ED8EF"/>` +
  aT(14, 120, name, { size: 15, w: 800 }) +
  ['소개', '커뮤니티'].map((t, i) => aT(14 + i * 52, 146, t, { size: 12.5, col: t === tab ? LINE : '#B9B2C8', w: t === tab ? 800 : 600 })).join('') +
  `<rect x="${tab === '소개' ? 14 : 66}" y="152" width="${tab === '소개' ? 26 : 50}" height="3" rx="1.5" fill="${AP}"/>`;
const detailIntro = () => poolDetail('소개') + aCard(12, 166, 176, 66, '#F3EEFF') + `<rect x="22" y="180" width="140" height="8" rx="4" fill="#DCD3F7"/><rect x="22" y="196" width="110" height="8" rx="4" fill="#DCD3F7"/><rect x="22" y="212" width="126" height="8" rx="4" fill="#DCD3F7"/>` +
  aCard(12, 242, 176, 40, '#E6FBF8') + `<rect x="22" y="258" width="120" height="8" rx="4" fill="#A6E9DF"/>`;
const swimfoodTab = (added = false) => poolDetail('커뮤니티', '바다동 구민수영장') + aT(14, 178, '🍜 스윔푸드', { size: 13, w: 800 }) +
  row(188, '🥟 만두집', '도보 3분', { size: 11 }) + (added ? row(222, '🐟 붕어빵 포차', 'NEW', { col: '#E6FBF8', rc: '#0E9F93', size: 11 }) : row(222, '🍲 국밥집', '도보 5분', { size: 11 })) +
  aBtn(12, 258, 176, 30, '스윔푸드 등록하기', { size: 12.5 });
// 체크인 — 배너 / 도장 결과
const checkinBanner = () => miniMap() + aCard(10, 196, 180, 92, '#FFFFFF') + `<rect x="10" y="196" width="180" height="92" rx="12" fill="none" stroke="${AM}" stroke-width="2"/>` +
  aT(22, 220, '📍 수영장 근처예요', { size: 12, w: 800 }) + aT(22, 238, '하늘빛 공원 수영장', { size: 10.5, col: '#8A8098', w: 600 }) + aBtn(22, 248, 156, 30, '인증하기', { col: AM, size: 13 });
const stampDone = (m = 5, n = 5) => `<rect width="200" height="304" fill="#F1FBF9"/>` + aT(100, 44, '첫 방문!', { size: 20, col: AP, anchor: 'middle', w: 800 }) +
  aT(100, 70, '+50💧 도장 보상', { size: 13, col: '#0E9F93', anchor: 'middle', w: 800 }) +
  [...Array(n)].map((_, i) => `<circle cx="${30 + i * 35}" cy="118" r="14" fill="${i < m ? AM : '#fff'}" stroke="${AM}" stroke-width="2"/>` + (i < m ? `<path d="M${24 + i * 35},118 l5,5 l8,-9" stroke="#fff" stroke-width="2.6" fill="none"/>` : '')).join('') +
  aCard(12, 148, 176, 40, '#FFFFFF') + aT(100, 173, `우리 동네 ${n}곳 중 ${m}곳 도장`, { size: 12.5, col: AP, anchor: 'middle', w: 800 });
// 설정 → 연동 → 「워치·건강 앱」 / 내정보 배너
const linkScreen = (on = false) => aT(14, 28, '연동', { size: 15, w: 800 }) + aT(14, 52, '설정 › 연동', { size: 10, col: '#9A93A8', w: 600 }) +
  aCard(12, 64, 176, 74, '#F3EEFF') + aT(24, 88, '⌚ 워치·건강 앱', { size: 13, w: 800 }) + `<rect x="24" y="98" width="100" height="7" rx="3.5" fill="#DCD3F7"/>` +
  aBtn(24, 110, 70, 22, on ? '연결됨' : '연결', { size: 11, col: on ? AM : AP }) +
  aCard(12, 148, 176, 40, '#F7F5FB') + `<rect x="24" y="164" width="120" height="8" rx="4" fill="#E5E0F2"/>`;
const watchBanner = () => aT(14, 28, '내정보', { size: 15, w: 800 }) + `<circle cx="40" cy="70" r="22" fill="${P.purple}"/>` + aT(72, 66, '김물루', { size: 14, w: 800 }) + aT(72, 84, '새벽물결', { size: 10.5, col: '#9A93A8', w: 600 }) +
  aCard(12, 108, 176, 86, '#E6FBF8') + aT(24, 130, '워치에 있는 수영도', { size: 12, w: 800 }) + aT(24, 148, '💧 물루로 쌓여요', { size: 12, w: 800, col: '#0E9F93' }) +
  aBtn(24, 158, 110, 26, '지금 가져오기', { size: 11.5, col: AM });
// 크루 탭 → 「크루 탐색」 → 「초대 코드 입력」
const crewSearch = (code = '') => aT(14, 28, '크루 탐색', { size: 15, w: 800 }) +
  aCard(12, 44, 176, 96, '#F3EEFF') + aT(24, 66, '초대 코드 입력', { size: 12.5, w: 800 }) +
  `<rect x="24" y="76" width="152" height="28" rx="8" fill="#fff" stroke="${AP}" stroke-width="1.6"/>` + aT(100, 95, code || '______', { size: 13, w: 800, anchor: 'middle', col: code ? LINE : '#C9C2D8' }) +
  aBtn(24, 110, 152, 24, '확인', { size: 11.5 }) +
  [0, 1].map(i => aCard(12, 152 + i * 46, 176, 38, '#F7F5FB') + `<circle cx="32" cy="${171 + i * 46}" r="10" fill="${i ? P.pink : P.mint}"/><rect x="50" y="${166 + i * 46}" width="${100 - i * 20}" height="8" rx="4" fill="#E5E0F2"/>`).join('');
const crewLounge = () => aT(14, 28, '새벽물결', { size: 15, w: 800 }) + aT(186, 28, '우리 크루 활동 온도 38°C', { size: 9.5, col: '#E07A5F', anchor: 'end', w: 800 }) +
  aCard(12, 44, 176, 52, '#FFF6E0') + aT(22, 64, '📌 공지', { size: 12, w: 800 }) + aT(22, 84, '엄마 크루 가입 환영!', { size: 11, w: 600 }) +
  aCard(12, 104, 176, 52, '#E6FBF8') + aT(22, 124, '📅 일정', { size: 12, w: 800 }) + aT(22, 144, '토 AM 7:00 함께 수영', { size: 11, w: 600 }) +
  [0, 1, 2].map(i => `<circle cx="${40 + i * 34}" cy="186" r="13" fill="${[P.purple, P.pink, '#FF9EB8'][i]}" stroke="#fff" stroke-width="2"/>`).join('');
// 내정보 → 「물루 지갑」 → 「💧 물루 센터」
const muluCenter = (lv = 2) => `<rect width="200" height="304" fill="#EAF6FF"/>` + aT(14, 28, '💧 물루 센터', { size: 15, w: 800 }) +
  aT(100, 72, '수심 레벨', { size: 12, col: '#8A8098', anchor: 'middle', w: 700 }) + aT(100, 104, '💧💧💧', { size: 22, anchor: 'middle', w: 800 }) +
  `<rect x="24" y="118" width="152" height="10" rx="5" fill="#D6E9F7"/><rect x="24" y="118" width="${lv > 2 ? 30 : 140}" height="10" rx="5" fill="${AM}"/>` +
  [0, 1, 2, 3].map(i => `<rect x="${24 + i * 40}" y="${150 + i * 8}" width="32" height="${100 - i * 8}" rx="6" fill="${['#CFEFFF', '#A9DDF5', '#7FC9EC', '#5BB8E0'][i]}" opacity="${i < lv ? 1 : .35}"/>`).join('') +
  aT(100, 286, '3개월 동안 안 쓴 물루는 자연 사라집니다', { size: 8.5, col: '#9A93A8', anchor: 'middle', w: 600 });
const wallet = () => aT(14, 28, '물루 지갑', { size: 15, w: 800 }) + aCard(12, 44, 176, 70, '#E6FBF8') + aT(100, 74, '💧 1,280', { size: 22, col: '#0E9F93', anchor: 'middle', w: 800 }) +
  aT(100, 98, '이번 달 +420', { size: 11, col: '#8A8098', anchor: 'middle', w: 700 }) + aBtn(24, 126, 152, 30, '💧 물루 센터', { size: 12.5 }) +
  aT(100, 182, '3개월 동안 안 쓴 물루는', { size: 9.5, col: '#9A93A8', anchor: 'middle', w: 600 }) + aT(100, 196, '자연 사라집니다', { size: 9.5, col: '#9A93A8', anchor: 'middle', w: 600 });
// ＋ → 「오늘의 수영 기록」 작성
const writeScreen = () => aT(14, 28, '오늘의 수영 기록', { size: 15, w: 800 }) +
  `<rect x="12" y="40" width="80" height="64" rx="8" fill="#BFE6F5"/><path d="M12,84 q20,-8 40,0 t40,0 V104 H12Z" fill="#9ED8EF"/><g opacity=".9">${[[30, 52], [60, 60], [80, 48]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3" fill="#fff"/>`).join('')}</g>` +
  `<rect x="100" y="40" width="88" height="64" rx="8" fill="#F7F5FB"/>` + aT(108, 60, '첫눈 오는 날', { size: 10.5, w: 600 }) + aT(108, 76, '새벽 수영 🌨', { size: 10.5, w: 600 }) +
  aCard(12, 114, 176, 26, '#E6FBF8') + `<rect x="22" y="121" width="12" height="12" rx="3" fill="${AM}"/><path d="M24,127 l3,3 l5,-6" stroke="#fff" stroke-width="2" fill="none"/>` + aT(40, 132, '수영 기록 함께 남기기', { size: 11, w: 800 }) +
  row(146, '레인 길이', '25m', { size: 10.5 }) + row(180, '왕복 수', '20', { size: 10.5 }) + row(214, '시간', '40분', { size: 10.5 }) +
  aBtn(12, 252, 176, 30, '게시하기', { size: 13 });
const feedComment = () => aCard(10, 12, 180, 150, '#FFFFFF') + `<rect x="10" y="12" width="180" height="150" rx="12" fill="none" stroke="#E5E0F2" stroke-width="1.5"/>` +
  `<circle cx="30" cy="34" r="11" fill="${P.purple}"/>` + aT(48, 32, '김물루', { size: 12 }) + aT(48, 47, '오늘의 수영 기록', { size: 9.5, col: '#9A93A8', w: 600 }) +
  `<rect x="20" y="56" width="160" height="56" rx="8" fill="#BFE6F5"/><path d="M20,96 q20,-8 40,0 t40,0 t40,0 t40,0 V112 H20Z" fill="#9ED8EF"/>` +
  aT(20, 130, '25m × 왕복 20 · 1,000m · 40분', { size: 10.5, col: AP }) + aT(20, 150, '🌊 응원하기  💬 댓글 1', { size: 10.5, col: '#9A93A8', w: 600 }) +
  aCard(10, 172, 180, 56, '#F3EEFF') + `<circle cx="28" cy="192" r="9" fill="${P.dadHair}"/>` + aT(44, 196, '김태랑', { size: 11.5, w: 800 }) + aT(22, 218, '팔꿈치 높게.', { size: 12, w: 700 });

module.exports = { ...L, kitchen, glassPool, paceWall, backFlags, ceilingFlags, stall, entrance, couch, pullBuoy, paceClock, ring, tray, tissue, thermo, towelS, chamois, bigTowel, rice, chicken, banana, kick, elbowArc, noteCard,
  searchScreen, detailIntro, swimfoodTab, checkinBanner, stampDone, linkScreen, watchBanner, crewSearch, crewLounge, muluCenter, wallet, writeScreen, feedComment };
