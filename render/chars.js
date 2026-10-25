// 물루의 수영일기 v2 — 파스텔 색연필 그림체 캐릭터 라이브러리
// 모든 캐릭터는 원점(0,0)=머리 중심, 기본 키 ≈ 260 (s=1)
const LINE = '#4E4458';
const P = {
  skin: '#FFE6D8', skinD: '#F6CDB8', blush: '#FFAFBD', line: LINE, white: '#FFFDF8',
  muluHair: '#6B5468', purple: '#B8A6F0', purpleD: '#9C86E6', mint: '#A8EFDD', mintD: '#7FDCC6',
  sky: '#A9DDF5', peach: '#FFC9A9', pink: '#FFC4D6', yellow: '#FFE79A', navy: '#8C97C9',
  lav: '#DCD6EA', jean: '#AFC8EB', coral: '#FFA99A', beige: '#EED9C0', teaHair: '#D9A88A',
  momHair: '#8A6E7E', dadHair: '#9C9AAB', coverall: '#9FB2CE', corgi: '#F5B47E', paper: '#FFF9F0'
};

// ── 공통 defs: 색연필 필터 + 해칭 패턴 + 종이결
const DEFS = `
<filter id="pencil" filterUnits="userSpaceOnUse" x="-4000" y="-4000" width="12000" height="12000">
  <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" result="w"/>
  <feDisplacementMap in="SourceGraphic" in2="w" scale="4.5" xChannelSelector="R" yChannelSelector="G" result="d"/>
  <feTurbulence type="fractalNoise" baseFrequency="0.55 1.6" numOctaves="2" seed="11" result="g"/>
  <feColorMatrix in="g" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  2.6 0 0 0 -0.75" result="ga"/>
  <feComposite in="d" in2="ga" operator="in" result="grain"/>
  <feComponentTransfer in="d" result="base"><feFuncA type="linear" slope="0.68"/></feComponentTransfer>
  <feFlood flood-color="#FFF9F0"/><feComposite in2="d" operator="in" result="under0"/>
  <feComponentTransfer in="under0" result="under"><feFuncA type="linear" slope="1.6"/></feComponentTransfer>
  <feMerge><feMergeNode in="under"/><feMergeNode in="base"/><feMergeNode in="grain"/></feMerge>
</filter>
<filter id="paper" x="0" y="0" width="100%" height="100%">
  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="2" result="n"/>
  <feColorMatrix in="n" type="matrix" values="0 0 0 0 0.85  0 0 0 0 0.78  0 0 0 0 0.7  0 0 0 0.16 0"/>
  <feComposite in2="SourceGraphic" operator="in"/>
</filter>
<pattern id="hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
  <path d="M0,2 H9" stroke="#fff" stroke-width="2.2" opacity=".45"/><path d="M0,6.5 H9" stroke="#000" stroke-width="1" opacity=".05"/>
</pattern>
<pattern id="wave" width="36" height="20" patternUnits="userSpaceOnUse">
  <path d="M0,10 q9,-8 18,0 t18,0" fill="none" stroke="#fff" stroke-width="3" opacity=".8"/>
</pattern>
<pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse">
  <path d="M11,5 q5,6 0,10 q-5,-4 0,-10z" fill="#9FD6F0" opacity=".9"/>
</pattern>
<linearGradient id="gradCap" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFC4D6"/><stop offset="1" stop-color="#B8A6F0"/></linearGradient>
<linearGradient id="mirror" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFB3C7"/><stop offset=".5" stop-color="#FFE79A"/><stop offset="1" stop-color="#9FE3F0"/></linearGradient>`;

// ── 기본 도형: 칠(색) + 해칭 + 외곽선
function attrs(a) { return Object.entries(a).map(([k, v]) => `${k}="${v}"`).join(' '); }
function sh(tag, a, fill, o = {}) {
  const { lw = 3.4, line = true, hatch = true } = o;
  let s = '';
  if (fill && fill !== 'none') s += `<${tag} ${attrs(a)} fill="${fill}"/>`;
  if (hatch && fill && fill !== 'none') s += `<${tag} ${attrs(a)} fill="url(#hatch)"/>`;
  if (line) s += `<${tag} ${attrs(a)} fill="none" stroke="${LINE}" stroke-width="${lw}" stroke-linejoin="round" stroke-linecap="round"/>`;
  return s;
}
const path = (d, fill, o) => sh('path', { d }, fill, o);
const ell = (cx, cy, rx, ry, fill, o) => sh('ellipse', { cx, cy, rx, ry }, fill, o);
const ln = (d, w = 3.2, c = LINE) => `<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
// 팔·다리처럼 굵은 선형 부위
function limb(d, col, w = 15) {
  return `<path d="${d}" fill="none" stroke="${LINE}" stroke-width="${w + 7}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
const hand = (x, y, col = P.skin) => ell(x, y, 10, 10, col, { lw: 3, hatch: false });

// ── 표정
function face(expr = 'normal', o = {}) {
  const { eyeY = 4, sep = 24, adult = false, view = 'front' } = o;
  const L = -sep, R = sep, Y = eyeY;
  const xs = view === 'side' ? [34] : [L, R];
  const brow = (dl, dr) => view === 'side' ? ln(`M${24},${Y - 16 + dr} L${42},${Y - 18 - dr}`, 3) : ln(`M${L - 10},${Y - 16 + dl} L${L + 8},${Y - 18 - dl}`, 3) + ln(`M${R + 10},${Y - 16 + dl} L${R - 8},${Y - 18 - dl}`, 3);
  let e = '', m = '';
  const dot = (x) => adult ? ell(x, Y, 4, 5, LINE, { line: false, hatch: false }) : `<ellipse cx="${x}" cy="${Y}" rx="6" ry="8" fill="${LINE}"/><circle cx="${x + 2.2}" cy="${Y - 3.2}" r="2.3" fill="#fff"/>`;
  switch (expr) {
    case 'happy': e = xs.map(x => ln(`M${x - 9},${Y + 3} Q${x},${Y - 8} ${x + 9},${Y + 3}`, 3.6)).join(''); m = 'open'; break;
    case 'smile': e = xs.map(dot).join(''); m = 'smile'; break;
    case 'shock': e = xs.map(x => ell(x, Y, 10, 11, '#fff', { lw: 3, hatch: false }) + `<circle cx="${x}" cy="${Y}" r="3.5" fill="${LINE}"/>`).join(''); m = 'o'; break;
    case 'sparkle': e = xs.map(x => `<ellipse cx="${x}" cy="${Y}" rx="8.5" ry="9.5" fill="${LINE}"/><circle cx="${x + 3}" cy="${Y - 3.5}" r="3.4" fill="#fff"/><circle cx="${x - 3}" cy="${Y + 3.5}" r="1.7" fill="#fff"/>`).join(''); m = 'open'; break;
    case 'sad': e = xs.map(x => ln(`M${x - 9},${Y} Q${x},${Y + 6} ${x + 9},${Y}`, 3.4)).join('') + brow(4, -4); m = 'wavy'; break;
    case 'cry': e = xs.map(x => ln(`M${x - 9},${Y} Q${x},${Y + 6} ${x + 9},${Y}`, 3.4) + path(`M${x - 4},${Y + 6} Q${x - 8},${Y + 26} ${x},${Y + 34} Q${x + 6},${Y + 22} ${x + 3},${Y + 6}Z`, P.sky, { lw: 2.4, hatch: false })).join(''); m = 'cry'; break;
    case 'determined': e = xs.map(x => `<ellipse cx="${x}" cy="${Y}" rx="6.5" ry="8.5" fill="${LINE}"/><path d="M${x + 1},${Y - 6} l3,-4 l2,4z" fill="#FFB36B"/>`).join('') + brow(-6, 6); m = 'grit'; break;
    case 'drunk': e = xs.map(x => ln(`M${x},${Y} m-7,0 a7,7 0 1,1 7,7 a4,4 0 1,1 -4,-4`, 2.8)).join(''); m = 'wavy'; break;
    case 'sleepy': e = xs.map(x => ln(`M${x - 9},${Y + 1} L${x + 9},${Y + 1}`, 3.4)).join(''); m = 'sleepy'; break;
    case 'flat': e = xs.map(x => ln(`M${x - 9},${Y} L${x + 9},${Y}`, 3.6)).join(''); m = 'flat'; break;
    case 'angry': e = xs.map(dot).join('') + brow(-7, 7); m = 'shout'; break;
    case 'worried': e = xs.map(dot).join('') + brow(5, -5); m = 'wavy'; break;
    case 'wink': e = (view === 'side' ? '' : ln(`M${L - 9},${Y + 2} Q${L},${Y - 7} ${L + 9},${Y + 2}`, 3.6)) + dot(view === 'side' ? 34 : R); m = 'smile'; break;
    case 'proud': e = xs.map(x => ln(`M${x - 9},${Y + 3} Q${x},${Y - 8} ${x + 9},${Y + 3}`, 3.6)).join('') + brow(-3, 3); m = 'smile'; break;
    default: e = xs.map(dot).join(''); m = 'smile0';
  }
  const mx = view === 'side' ? 44 : 0;
  const mouths = {
    open: path(`M${mx - 11},23 Q${mx},40 ${mx + 11},23 Z`, '#F28FA6', { lw: 3, hatch: false }),
    smile: ln(`M${mx - 9},24 Q${mx},33 ${mx + 9},24`, 3.2), smile0: ln(`M${mx - 6},25 Q${mx},30 ${mx + 6},25`, 3),
    o: ell(mx, 28, 6, 8, '#F28FA6', { lw: 3, hatch: false }), wavy: ln(`M${mx - 12},27 q4,-5 8,0 q4,5 8,0 q4,-5 8,0`, 3),
    flat: ln(`M${mx - 7},27 L${mx + 7},27`, 3), grit: path(`M${mx - 11},23 H${mx + 11} Q${mx + 10},33 ${mx},33 Q${mx - 10},33 ${mx - 11},23Z`, '#fff', { lw: 3, hatch: false }) + ln(`M${mx - 10},28 H${mx + 10}`, 2),
    cry: path(`M${mx - 12},30 Q${mx},18 ${mx + 12},30 Z`, '#F28FA6', { lw: 3, hatch: false }), sleepy: ell(mx, 27, 4, 3, '#F28FA6', { lw: 2.6, hatch: false }),
    shout: path(`M${mx - 14},20 Q${mx},16 ${mx + 14},20 Q${mx + 10},44 ${mx},44 Q${mx - 10},44 ${mx - 14},20Z`, '#F28FA6', { lw: 3, hatch: false })
  };
  return e + mouths[m];
}
const cheeks = (view = 'front', strong = false) => view === 'side'
  ? ell(30, 22, 10, 6, P.blush, { line: false, hatch: false })
  : ell(-40, 22, strong ? 13 : 10, strong ? 8 : 6, P.blush, { line: false, hatch: false }) + ell(40, 22, strong ? 13 : 10, strong ? 8 : 6, P.blush, { line: false, hatch: false });

// ── 캐릭터 정의
const CAST = {
  mulu: { hair: 'bob', hairCol: P.muluHair, build: 1, adult: false },
  yoonseul: { hair: 'pony', hairCol: P.teaHair, build: 0.95, adult: false },
  mom: { hair: 'perm', hairCol: P.momHair, build: 1.05, adult: true },
  dad: { hair: 'buzz', hairCol: P.dadHair, build: 1.28, adult: true },
  guard: { hair: 'buzz', hairCol: '#5E4E62', build: 1.12, adult: false },
  pro: { hair: 'buzz', hairCol: '#5E4E62', build: 1.15, adult: true }
};

// ── 앞머리/뒷머리
function hairBack(c, view) {
  const h = c.hairCol;
  if (view === 'side') return path('M-62,-8 Q-62,-70 4,-70 Q40,-68 52,-40 Q20,-34 8,-10 L6,30 Q-30,58 -58,44 Q-70,20 -62,-8Z', h);
  if (c.hair === 'bob') return path('M-70,-6 Q-74,-72 0,-75 Q74,-72 70,-6 L73,40 Q64,54 48,42 L-48,42 Q-64,54 -73,40 Z', h);
  if (c.hair === 'pony') return path('M30,-58 Q90,-110 112,-50 Q124,10 96,52 Q118,6 92,-30 Q76,-56 40,-36Z', h) + path('M-66,-6 Q-70,-70 0,-72 Q70,-70 66,-6 L64,24 L-64,24Z', h) + ell(34, -54, 14, 10, P.pink, { lw: 3 });
  return '';
}
function hairFront(c, view) {
  const h = c.hairCol;
  if (view === 'side') return path('M-30,-64 Q20,-80 56,-44 Q58,-20 50,-6 Q40,-26 22,-24 Q10,-18 4,-34 Q-10,-20 -30,-30Z', h) + ahoge(c, 2);
  if (c.hair === 'bob') return path('M-65,2 Q-67,-64 0,-66 Q67,-64 65,2 Q53,-26 34,-24 Q20,-14 6,-28 Q-8,-14 -26,-26 Q-46,-26 -65,2 Z', h) + ahoge(c, 0);
  if (c.hair === 'pony') return path('M-64,8 Q-68,-66 4,-68 Q66,-64 64,0 Q40,-36 -6,-30 Q-30,-28 -46,-8 Q-56,10 -64,8Z', h) + path('M-40,-46 Q-20,-58 6,-54', 'none', { lw: 2.4 }) +
    // 머리 위 선글라스
    path('M-52,-48 Q0,-62 52,-48', 'none', { lw: 4 }) + ell(-22, -52, 17, 11, '#6E6680', { lw: 3, hatch: false }) + ell(22, -52, 17, 11, '#6E6680', { lw: 3, hatch: false }) + ln('M-28,-56 l8,-3 M16,-56 l8,-3', 2.4, '#fff');
  if (c.hair === 'perm') {
    let s = ''; const pts = [[-58, -14], [-62, -40], [-46, -62], [-20, -74], [8, -76], [34, -68], [54, -50], [62, -24], [-34, -54], [20, -54], [-6, -60]];
    pts.forEach(([x, y]) => s += ell(x, y, 20, 18, h, { lw: 3 }));
    return s + ell(0, -52, 40, 18, h, { line: false, hatch: false });
  }
  if (c.hair === 'buzz') return path('M-64,-6 Q-66,-66 0,-68 Q66,-66 64,-6 Q60,-34 40,-38 Q0,-44 -40,-38 Q-60,-34 -64,-6Z', h) + ln('M-30,-52 l4,4 M-8,-56 l3,4 M16,-55 l3,4 M38,-48 l3,4', 2.2);
  return '';
}
function ahoge(c, dx) { return c.hair === 'bob' ? path(`M${dx + 4},-66 Q${dx - 8},-92 ${dx + 10},-104 Q${dx + 26},-88 ${dx + 10},-68`, c.hairCol, { lw: 3 }) : ''; }

// ── 수영모·물안경
function swimCap(view, style = 'mulu') {
  const fill = style === 'trend' ? 'url(#gradCap)' : P.purple;
  if (view === 'side') return path('M-62,0 Q-66,-74 2,-76 Q54,-72 60,-20 Q30,-24 8,-18 Q-30,-14 -62,0Z', fill) + ln('M-46,-48 Q0,-70 44,-44', 6, style === 'trend' ? '#fff' : P.mint);
  if (view === 'back') return path('M-66,8 Q-72,-78 0,-80 Q72,-78 66,8 Q40,30 0,30 Q-40,30 -66,8Z', fill) + ln('M-52,-50 Q0,-74 52,-50', 6, P.mint);
  return path('M-65,4 Q-71,-78 0,-80 Q71,-78 65,4 Q55,-15 0,-17 Q-55,-15 -65,4 Z', fill) +
    (style === 'trend' ? ln('M-40,-30 l10,-8 M-20,-40 l10,-8', 4, '#fff') : ln('M-50,-50 Q0,-74 50,-50', 6, P.mint) + `<text x="0" y="-28" font-family="Gaegu" font-weight="700" font-size="22" fill="#fff" text-anchor="middle">mooloo</text>`);
}
function goggles(view, place = 'eyes', style = 'mulu') {
  const lens = style === 'trend' ? 'url(#mirror)' : 'rgba(190,235,255,.55)';
  const strap = style === 'trend' ? '#FF9EB8' : P.purpleD;
  if (view === 'side') return place === 'eyes' ? ln('M-60,2 L18,2', 6, strap) + ell(36, 4, 12, 13, lens, { lw: 4, hatch: false }) : ln('M-60,-36 L30,-44', 6, strap) + ell(36, -46, 11, 9, lens, { lw: 3.6, hatch: false });
  if (view === 'back') return ln('M-62,-4 Q0,6 62,-4', 6, strap);
  const y = place === 'eyes' ? 3 : -44, rx = place === 'eyes' ? 19 : 15, ry = place === 'eyes' ? 15 : 11;
  return ln(`M-64,${y} L-42,${y} M42,${y} L64,${y}`, 6, strap) + ell(-24, y, rx, ry, lens, { lw: 5, hatch: false }) + ell(24, y, rx, ry, lens, { lw: 5, hatch: false }) + ln(`M-6,${y - 1} Q0,${y - 6} 6,${y - 1}`, 4) +
    (style === 'trend' ? '' : ln(`M-33,${y - 5} l6,-5 M15,${y - 5} l6,-5`, 2.6, '#fff'));
}

// ── 의상(정면)
function outfitFront(c, outfit, arms) {
  const b = c.build, W = 44 * b;
  const sk = P.skin;
  const torsoD = (w, top = 64, bot = 150) => `M${-w},${top} Q${-w - 6},${(top + bot) / 2 + 10} ${-w + 6},${bot} L${w - 6},${bot} Q${w + 6},${(top + bot) / 2 + 10} ${w},${top} Q0,${top - 12} ${-w},${top} Z`;
  let legs = '', torso = '', armCol = sk, shoe = P.white, legCol = sk;
  switch (outfit) {
    case 'casual': legCol = P.jean; armCol = P.lav; torso = path(torsoD(W), P.lav) + ln(`M-14,60 Q0,70 14,60`, 3) + `<rect x="${-W + 4}" y="66" width="${2 * W - 8}" height="70" fill="url(#dots)"/>` + ln(`M${-W + 6},142 H${W - 6}`, 2.4); break;
    case 'office': legCol = P.navy; armCol = P.beige; torso = path(torsoD(W), P.white) + path(`M${-W},64 Q${-W - 6},110 ${-W + 6},150 L-12,150 L-12,70 Z`, P.beige) + path(`M${W},64 Q${W + 6},110 ${W - 6},150 L12,150 L12,70 Z`, P.beige) + path('M-10,60 L0,78 L10,60', P.pink, { lw: 2.6 }); break;
    case 'swim': torso = path(torsoD(W, 64, 146), P.purple) + ln(`M${-W + 2},92 Q0,104 ${W - 2},92`, 6, P.mint) + ln('M-26,58 L-22,70 M26,58 L22,70', 3); shoe = sk; break;
    case 'hoodie': legCol = P.lav; armCol = P.mint; torso = path(torsoD(W + 2), P.mint) + path('M-24,112 H24 L20,134 H-20Z', 'none', { lw: 2.6 }) + ln('M-8,64 L-10,90 M8,64 L10,90', 2.6); break;
    case 'trend': legCol = P.mint; armCol = sk; torso = path(`M${-W + 2},64 Q${-W - 4},86 ${-W + 4},100 L${W - 4},100 Q${W + 4},86 ${W - 2},64 Q0,52 ${-W + 2},64Z`, P.pink) + path(`M${-W + 4},100 L${-W + 6},126 L${W - 6},126 L${W - 4},100Z`, sk, { hatch: false }) + ln('M-6,112 q6,4 12,0', 2) ; shoe = P.yellow; break;
    case 'swimT': torso = path(torsoD(W, 64, 146), P.coral) + `<path d="${torsoD(W, 64, 146)}" fill="url(#wave)"/>` + path(`M-18,72 Q0,64 18,72 Q14,90 0,92 Q-14,90 -18,72Z`, sk, { hatch: false }); shoe = sk; break;
    case 'apron': legCol = P.peach; armCol = P.peach; torso = path(torsoD(W), P.peach) + path(`M${-W + 12},84 L${W - 12},84 L${W - 6},178 L${-W + 6},178Z`, P.yellow) + path('M-18,128 H18 V150 H-18Z', 'none', { lw: 2.6 }) + ln(`M${-W + 12},84 L-20,62 M${W - 12},84 L20,62`, 2.6); break;
    case 'guard': legCol = P.navy; armCol = P.skin; torso = path(torsoD(W), '#FF9C8A') + `<text x="0" y="112" font-family="Gaegu" font-weight="700" font-size="20" fill="#fff" text-anchor="middle">안전요원</text>`; break;
    case 'trunks': torso = path(torsoD(W, 64, 146), P.skin) + path(`M${-W + 6},118 L${W - 6},118 L${W - 4},150 L${-W + 4},150Z`, P.navy) + ln('M-14,92 q14,8 28,0', 2.2); shoe = sk; break;
    case 'coverall': legCol = P.coverall; armCol = P.coverall; torso = path(torsoD(W, 62, 152), P.coverall) + ln('M0,58 V152', 2.6) + path(`M${-W + 14},84 h34 v20 h-34z`, P.white, { lw: 2.4, hatch: false }) + `<text x="${-W + 31}" y="99" font-family="Gaegu" font-weight="700" font-size="15" fill="${LINE}" text-anchor="middle">태랑</text>` + `<ellipse cx="22" cy="128" rx="9" ry="5" fill="#7D7A8C" opacity=".55"/>` + path(`M${-W - 2},62 Q0,90 ${W + 2},62 Q${W - 6},48 0,56 Q${-W + 6},48 ${-W - 2},62Z`, P.mint); break;
  }
  // 다리
  if (outfit === 'apron') legs = limb('M-20,176 L-20,196', sk, 14) + limb('M20,176 L20,196', sk, 14);
  else if (outfit === 'trend') legs = path('M-40,124 L-46,194 L-6,194 L-4,124Z', legCol) + path('M40,124 L46,194 L6,194 L4,124Z', legCol);
  else if (['swim', 'swimT', 'trunks'].includes(outfit)) legs = limb('M-20,144 L-22,188', sk, 20) + limb('M20,144 L22,188', sk, 20);
  else legs = path(`M${-34 * b},144 h${28 * b} v48 h${-28 * b}z`, legCol) + path(`M${6 * b},144 h${28 * b} v48 h${-28 * b}z`, legCol);
  const feet = ell(-22 * b, 196, 18 * b, 9, shoe, { lw: 3 }) + ell(22 * b, 196, 18 * b, 9, shoe, { lw: 3 });
  // 팔 포즈
  const sx = W - 6;
  const AR = {
    down: [`M${-sx},76 Q${-sx - 14},108 ${-sx - 10},136`, [-sx - 10, 140], `M${sx},76 Q${sx + 14},108 ${sx + 10},136`, [sx + 10, 140]],
    up: [`M${-sx},76 Q${-sx - 30},50 ${-sx - 36},12`, [-sx - 36, 8], `M${sx},76 Q${sx + 30},50 ${sx + 36},12`, [sx + 36, 8]],
    wave: [`M${-sx},76 Q${-sx - 14},108 ${-sx - 10},136`, [-sx - 10, 140], `M${sx},76 Q${sx + 30},50 ${sx + 34},10`, [sx + 34, 6]],
    hips: [`M${-sx},76 Q${-sx - 30},100 ${-sx + 4},118`, [-sx + 6, 118], `M${sx},76 Q${sx + 30},100 ${sx - 4},118`, [sx - 6, 118]],
    hold: [`M${-sx},78 Q${-sx + 2},110 -10,116`, [-8, 116], `M${sx},78 Q${sx - 2},110 10,116`, [10, 116]],
    phone: [`M${-sx},76 Q${-sx - 14},108 ${-sx - 10},136`, [-sx - 10, 140], `M${sx},76 Q${sx + 36},60 ${sx + 24},30`, [sx + 22, 26]],
    point: [`M${-sx},76 Q${-sx - 14},108 ${-sx - 10},136`, [-sx - 10, 140], `M${sx},76 Q${sx + 22},66 ${sx + 52},56`, [sx + 56, 54]],
    face: [`M${-sx},76 Q${-sx - 14},108 ${-sx - 10},136`, [-sx - 10, 140], `M${sx},78 Q${sx + 20},50 ${sx - 8},16`, [sx - 12, 12]],
    fist: [`M${-sx},76 Q${-sx - 30},96 ${-sx - 20},60`, [-sx - 20, 56], `M${sx},76 Q${sx + 30},96 ${sx + 20},60`, [sx + 20, 56]],
    search: [`M${-sx},80 Q${-sx + 8},120 -6,150`, [-4, 152], `M${sx},80 Q${sx + 10},118 30,150`, [28, 152]],
    forward: [`M${-sx},76 Q${-sx - 10},40 -22,-6`, [-20, -10], `M${sx},76 Q${sx + 10},40 22,-6`, [20, -10]],
    spread: [`M${-sx},76 Q${-sx - 40},80 ${-sx - 70},70`, [-sx - 74, 68], `M${sx},76 Q${sx + 40},80 ${sx + 70},70`, [sx + 74, 68]],
    rub: [`M${-sx},76 Q${-sx - 14},108 ${-sx - 10},136`, [-sx - 10, 140], `M${sx},80 Q${sx + 22},40 30,4`, [26, 2]],
  }[arms] || null;
  const shortSleeve = ['swim', 'swimT', 'trend', 'guard', 'trunks'].includes(outfit);
  const coverRoll = outfit === 'coverall';
  let armsS = '';
  if (AR) {
    const [la, lh, ra, rh] = AR;
    const ac = shortSleeve ? sk : armCol;
    armsS = limb(la, ac, 15 * Math.min(b, 1.15)) + hand(...lh) + limb(ra, ac, 15 * Math.min(b, 1.15)) + hand(...rh);
    if (coverRoll) armsS = limb(la, sk, 17) + hand(...lh) + limb(ra, sk, 17) + hand(...rh);
  }
  const sleeves = coverRoll ? ell(-sx - 2, 80, 16, 14, P.coverall, { lw: 3 }) + ell(sx + 2, 80, 16, 14, P.coverall, { lw: 3 }) : '';
  return { under: legs + feet, torso, arms: armsS + sleeves };
}

// ── 사람 (정면/측면/뒷면)
function person(who, o = {}) {
  const c = CAST[who];
  const { x = 0, y = 0, s = 1, view = 'front', outfit = 'casual', arms = 'down', expr = 'normal', cap = false, gog = 'none', capStyle = 'mulu', flip = false, body = true, prop = '', propBack = '', blushStrong = false } = o;
  let g = '';
  if (view === 'front') {
    const f = body ? outfitFront(c, outfit, arms) : null;
    if (!cap) g += hairBack(c, view);
    g += propBack;
    if (f) g += f.under + f.torso;
    // 목
    // 얼굴
    const rx = who === 'dad' ? 66 : 62, ry = who === 'dad' ? 60 : 58;
    g += ell(0, 4, rx, ry, P.skin);
    if (who === 'mom' || who === 'dad') g += ell(-rx + 2, 8, 9, 12, P.skin, { hatch: false }) + ell(rx - 2, 8, 9, 12, P.skin, { hatch: false });
    if (cap) g += (gog === 'head' ? swimCap(view, capStyle).replace(/<text[^>]*>[^<]*<\/text>/, '') : swimCap(view, capStyle)); else g += hairFront(c, view);
    if (gog === 'eyes') { g += face(expr, { adult: c.adult }) + goggles(view, 'eyes', capStyle); }
    else { g += face(expr, { adult: c.adult }); if (gog === 'head') g += goggles(view, 'head', capStyle); }
    g += cheeks(view, blushStrong || expr === 'drunk');
    if (who === 'dad') g += ln('M-34,-14 l18,-3 M34,-14 l-18,-3', 6) + path('M-20,18 Q-10,10 0,16 Q10,10 20,18 Q10,24 0,20 Q-10,24 -20,18Z', P.dadHair, { lw: 2.6 });
    if (who === 'mom') g += ln('M-36,10 q-6,4 -4,10 M36,10 q6,4 4,10', 2) ;
    if (who === 'yoonseul') g += ln('M-34,-6 l-6,-4 M-30,-8 l-2,-6 M34,-6 l6,-4 M30,-8 l2,-6', 2.4) + `<circle cx="28" cy="30" r="2.2" fill="${LINE}"/>`;
    if (f) g += f.arms;
    g += prop;
  } else if (view === 'side') {
    // 오른쪽을 보는 측면 (flip으로 왼쪽)
    if (body) {
      const legC = outfit === 'swim' ? P.skin : P.jean, top = outfit === 'swim' ? P.purple : P.lav, armC = outfit === 'swim' ? P.skin : P.lav;
      g += (outfit === 'swim' ? limb('M-6,146 L-12,190', P.skin, 20) + limb('M8,146 L10,190', P.skin, 20) : path('M-22,142 h24 v50 h-24z', legC) + path('M-2,142 h24 v50 h-24z', legC));
      g += ell(-8, 196, 20, 9, outfit === 'swim' ? P.skin : P.white, { lw: 3 }) + ell(14, 196, 20, 9, outfit === 'swim' ? P.skin : P.white, { lw: 3 });
      g += path('M-30,64 Q-38,110 -28,150 L30,150 Q36,110 26,64 Q0,54 -30,64Z', top);
      if (outfit === 'swim') g += ln('M-30,96 Q0,104 28,94', 6, P.mint); else g += `<rect x="-24" y="70" width="46" height="66" fill="url(#dots)"/>`;
      g += limb('M0,78 Q14,108 8,134', armC, 15) + hand(8, 138);
    }
    if (!cap) g += hairBack(c, 'side');
    g += path('M-58,4 Q-60,-58 0,-60 Q56,-58 62,-4 Q66,8 60,12 Q62,34 46,48 Q20,64 -20,58 Q-56,48 -58,4Z', P.skin);
    
    if (cap) g += swimCap('side'); else g += hairFront(c, 'side');
    g += face(expr, { view: 'side' });
    if (gog !== 'none') g += goggles('side', gog);
    g += cheeks('side');
  } else if (view === 'back') {
    if (body) {
      const f = outfitFront(c, outfit, 'down');
      g += f.under + f.torso.replace(/<rect[^>]*url\(#dots\)[^>]*>/, '').replace(/<path d="M-14,60[^>]*>/, '');
      if (outfit === 'swim') g += ln('M-30,66 L28,118 M30,66 L-28,118', 5, P.mint);
      g += f.arms;
    }
    g += ell(0, 4, 62, 58, P.skin);
    if (cap) g += swimCap('back'); else g += path('M-70,-6 Q-74,-72 0,-75 Q74,-72 70,-6 L73,40 Q64,54 48,46 Q0,58 -48,46 Q-64,54 -73,40 Z', c.hairCol) + ln('M-30,-50 Q-36,0 -26,40 M0,-60 V44 M30,-50 Q36,0 26,40', 2.2, '#57425A') + ahoge(c, 0);
    if (gog !== 'none') g += goggles('back');
  }
  return `<g transform="translate(${x},${y}) scale(${flip ? -s : s},${s})"><g filter="url(#pencil)">${g}</g></g>`;
}

// ── 캐치 (웰시코기)
function catchDog(o = {}) {
  const { x = 0, y = 0, s = 1, pose = 'sit', flip = false, gog = false, expr = 'happy', prop = '' } = o;
  const O = P.corgi, W = P.white;
  let g = '';
  const eyes = expr === 'happy' ? ln('M-20,-4 q6,-7 12,0 M8,-4 q6,-7 12,0', 3.4) : expr === 'proud' ? ln('M-20,-4 q6,-7 12,0 M8,-4 q6,-7 12,0', 3.4) : `<circle cx="-14" cy="-4" r="5.5" fill="${LINE}"/><circle cx="14" cy="-4" r="5.5" fill="${LINE}"/><circle cx="-12" cy="-6" r="1.8" fill="#fff"/><circle cx="16" cy="-6" r="1.8" fill="#fff"/>`;
  const head = path('M-44,-30 L-50,-86 L-14,-50Z', O) + path('M-40,-38 L-44,-74 L-20,-50Z', P.pink, { line: false }) +
    path('M44,-30 L50,-86 L14,-50Z', O) + path('M40,-38 L44,-74 L20,-50Z', P.pink, { line: false }) +
    ell(0, -10, 50, 44, O) + path('M-8,-50 Q0,-30 0,-14 Q-34,10 -30,22 Q0,40 30,22 Q34,10 0,-14 Q0,-30 8,-50Z', W, { line: false }) +
    eyes + ell(0, 10, 8, 6, LINE, { line: false, hatch: false }) +
    (gog ? '' : ln('M-12,20 Q-6,26 0,18 Q6,26 12,20', 3)) + ell(-30, 10, 8, 5, P.blush, { line: false, hatch: false }) + ell(30, 10, 8, 5, P.blush, { line: false, hatch: false }) +
    (gog ? ln('M-58,24 L58,24', 5, P.purpleD) + ell(-34, 24, 14, 11, 'rgba(190,235,255,.6)', { lw: 4, hatch: false }) + ell(34, 24, 14, 11, 'rgba(190,235,255,.6)', { lw: 4, hatch: false }) + ell(0, 26, 10, 8, P.skin, { hatch: false }) : '');
  const bandana = path('M-38,26 Q0,44 38,26 L28,40 Q0,74 -28,40Z', P.mint) + `<circle cx="0" cy="46" r="3" fill="#fff"/>`;
  if (pose === 'sit') {
    g += ell(0, 82, 52, 48, O) + path('M-22,50 Q0,40 22,50 Q30,90 0,118 Q-30,90 -22,50Z', W, { line: false }) +
      ell(-22, 128, 15, 10, W, { lw: 3 }) + ell(22, 128, 15, 10, W, { lw: 3 }) + ell(-50, 116, 18, 12, O, { lw: 3 }) + ell(50, 116, 18, 12, O, { lw: 3 });
    g += `<g transform="translate(0,0)">${head}</g>` + bandana;
  } else if (pose === 'run') {
    // 측면 달리기 (오른쪽 방향)
    g += limb('M-60,60 L-80,92', O, 16) + limb('M-40,64 L-38,96', O, 16) + limb('M40,64 L60,92', O, 16) + limb('M56,60 L36,96', O, 16);
    g += ell(-6, 44, 82, 38, O) + path('M-40,70 Q0,86 60,66 Q40,50 0,58Z', W, { line: false }) + ell(-86, 36, 18, 16, '#FFF4E8', { lw: 3 });
    g += `<g transform="translate(78,-6) scale(.8)">${head}${bandana}</g>`;
  }
  g += prop;
  return `<g transform="translate(${x},${y}) scale(${flip ? -s : s},${s})"><g filter="url(#pencil)">${g}</g></g>`;
}

// ── 소품
const PROPS = {
  swimBag: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-30,-10 Q0,-60 30,-10', 'none', { lw: 6 })}${path('M-48,-12 h96 v74 q0,10 -10,10 h-76 q-10,0 -10,-10z', P.purple)}${ln('M-48,14 H48', 6, P.mint)}</g>`,
  phone: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s}) rotate(-10)">${path('M-14,-24 h28 a5,5 0 0 1 5,5 v38 a5,5 0 0 1 -5,5 h-28 a5,5 0 0 1 -5,-5 v-38 a5,5 0 0 1 5,-5z', '#FFB3C7', { lw: 3 })}${path('M-10,-18 h20 v32 h-20z', P.sky, { lw: 2, hatch: false })}</g>`,
  wrench: (x, y, s = 1, r = 30) => `<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-4,-40 h8 v62 h-8z', '#C9C6D6', { lw: 3 })}${path('M-14,-56 a14,14 0 1 0 28,0 l-6,0 l0,8 l-16,0 l0,-8z', '#C9C6D6', { lw: 3 })}</g>`,
  ladle: (x, y, s = 1, r = -30) => `<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-3,-50 h6 v50 h-6z', P.beige, { lw: 3 })}${path('M-16,0 a16,14 0 0 0 32,0z', '#C9C6D6', { lw: 3 })}</g>`,
  thermos: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-12,-34 h24 v62 q0,6 -6,6 h-12 q-6,0 -6,-6z', P.mint, { lw: 3 })}${path('M-14,-42 h28 v10 h-28z', P.pink, { lw: 3 })}</g>`,
  medal: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-10,-40 L0,-8 L10,-40', 'none', { lw: 6 })}${ell(0, 4, 16, 16, P.yellow, { lw: 3 })}<text x="0" y="10" font-family="Gaegu" font-weight="700" font-size="16" fill="${LINE}" text-anchor="middle">1</text></g>`,
  goggles: (x, y, s = 1, r = 0) => `<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${ln('M-40,0 Q0,22 40,0', 5, P.purpleD)}${ell(-14, 0, 13, 10, 'rgba(190,235,255,.7)', { lw: 4, hatch: false })}${ell(14, 0, 13, 10, 'rgba(190,235,255,.7)', { lw: 4, hatch: false })}</g>`,
  cap: (x, y, s = 1, col = P.purple) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-30,0 Q-32,-56 0,-58 Q32,-56 30,0 Q0,8 -30,0Z', col, { lw: 3 })}</g>`,
  car: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-120,10 Q-118,-20 -80,-24 L-50,-58 Q0,-66 46,-58 L80,-24 Q118,-20 120,10 Q120,26 104,26 L-104,26 Q-120,26 -120,10Z', P.mint)}${path('M-40,-50 L-62,-24 L-6,-24 L-6,-54Z', P.sky, { lw: 3 })}${path('M6,-54 L6,-24 L64,-24 L40,-50Z', P.sky, { lw: 3 })}${ell(-70, 28, 22, 22, '#6E6680', { lw: 3 })}${ell(70, 28, 22, 22, '#6E6680', { lw: 3 })}${ell(-70, 28, 9, 9, '#C9C6D6', { lw: 2.6, hatch: false })}${ell(70, 28, 9, 9, '#C9C6D6', { lw: 2.6, hatch: false })}${ell(112, -2, 8, 8, P.yellow, { lw: 2.6, hatch: false })}</g>`,
  kickboard: (x, y, s = 1, r = 0, col = '#FFD27A') => `<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-46,-30 h92 q10,0 10,10 v58 q0,12 -12,12 h-88 q-12,0 -12,-12 v-58 q0,-10 10,-10z', col, { lw: 3.2 })}${ln('M-30,-14 h60', 3, '#fff')}</g>`,
  tubeBack: (y = 118, col = '#FF9EB8') => ell(0, y, 96, 40, col, { lw: 3.4 }) + ell(0, y - 4, 56, 20, '#7FC9DE', { lw: 3, hatch: false }),
  tubeFront: (y = 118, col = '#FF9EB8') => path(`M-96,${y} Q-96,${y + 40} 0,${y + 40} Q96,${y + 40} 96,${y} Q60,${y + 18} 0,${y + 18} Q-60,${y + 18} -96,${y}Z`, col, { lw: 3.4 }) + ln(`M-60,${y + 26} q12,8 24,10 M30,${y + 34} q14,-2 26,-8`, 6, '#fff'),
  alarm: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${ell(-22, -30, 12, 10, P.yellow, { lw: 3 })}${ell(22, -30, 12, 10, P.yellow, { lw: 3 })}${ell(0, 0, 32, 32, '#FFA99A', { lw: 3.4 })}${ell(0, 0, 22, 22, '#fff', { lw: 2.6, hatch: false })}${ln('M0,0 V-14 M0,0 L10,6', 3)}</g>`,
  shower: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${ln('M0,-80 V-20 Q0,0 20,0', 6, '#B9B6C6')}${path('M10,-8 h40 l10,22 h-60z', '#D9D6E6', { lw: 3 })}${[...Array(6)].map((_, i) => ln(`M${-2 + i * 12},22 l-6,${40 + (i % 2) * 18}`, 3, '#8FD3F0')).join('')}</g>`,
  banana: (x, y, s = 1, r = 0) => `<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-30,-10 Q0,30 34,-14 Q38,-20 32,-22 Q2,10 -26,-18 Q-32,-16 -30,-10Z', P.yellow, { lw: 3 })}</g>`,
  patch: (x, y, s = 1, r = 0) => `<g transform="translate(${x},${y}) scale(${s}) rotate(${r})">${path('M-22,-14 h44 v28 h-44z', '#FFF3E0', { lw: 2.6, hatch: false })}${ln('M-14,-6 h28 M-14,4 h28', 1.6, '#E7CFAE')}</g>`,
  stopwatch: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-5,-32 h10 v8 h-10z', '#C9C6D6', { lw: 2.6 })}${ell(0, 0, 24, 24, '#C9C6D6', { lw: 3 })}${ell(0, 0, 17, 17, '#fff', { lw: 2.2, hatch: false })}${ln('M0,0 L7,-9', 2.6)}</g>`,
  cup: (x, y, s = 1, col = P.pink) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-16,-24 h32 l-4,48 h-24z', col, { lw: 3 })}${path('M-18,-30 h36 v7 h-36z', '#fff', { lw: 2.6, hatch: false })}${ln('M4,-30 L12,-50', 3.4)}</g>`,
  bottle: (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${path('M-10,-30 h20 v8 q12,6 12,20 v34 h-44 v-34 q0,-14 12,-20z', P.mint, { lw: 3 })}${path('M-14,6 h28 v14 h-28z', P.white, { lw: 2, hatch: false })}</g>`,
};

function paperBg(w, h, col = P.paper) { return `<rect width="${w}" height="${h}" fill="${col}"/><rect width="${w}" height="${h}" fill="${col}" filter="url(#paper)"/>`; }
// 손그림 느낌 테두리 박스
function roughRect(x, y, w, h, fill = 'none', lw = 3.4, r = 18) {
  return `<g filter="url(#pencil)">${sh('rect', { x, y, width: w, height: h, rx: r }, fill, { lw })}</g>`;
}

module.exports = { CAST, P, LINE, DEFS, sh, path, ell, ln, limb, person, catchDog, PROPS, paperBg, roughRect, face, cheeks };
