// 물루의 수영일기 EP.013~019
const S = require('./scenes');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, bubble, caption, sfx, sweat, sparkle, tipBox, bg, tiles, water, rope, pencil, pool, home, street, lockers, garage, headInWater, swimmer } = S;

// ── 로컬 소품·배경
const waterFront = (y) => `<path d="M0,${y} q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".85"/>`;
const poolDoor = (sign = '정기 휴관') => pencil(sh('rect', { x: 60, y: 60, width: 370, height: 380, rx: 10 }, '#E3E6F2', { lw: 3.4 }) + sh('rect', { x: 90, y: 90, width: 150, height: 350 }, 'rgba(200,235,250,.7)', { lw: 3 }) + sh('rect', { x: 250, y: 90, width: 150, height: 350 }, 'rgba(200,235,250,.7)', { lw: 3 }) +
  sh('rect', { x: 140, y: 150, width: 210, height: 120, rx: 8 }, '#FFFFFF', { lw: 3.2 })) + `<text x="245" y="200" font-family="Gaegu" font-weight="700" font-size="34" fill="#E07A5F" text-anchor="middle">${sign}</text><text x="245" y="244" font-family="Gaegu" font-weight="700" font-size="22" fill="${LINE}" text-anchor="middle">매월 첫째 월요일</text>`;
const calendar = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${pencil(sh('rect', { x: -60, y: -60, width: 120, height: 120, rx: 10 }, '#fff', { lw: 3 }) + sh('rect', { x: -60, y: -60, width: 120, height: 30, rx: 10 }, '#FFA99A', { lw: 3 }))}${[0, 1, 2].map(r => [0, 1, 2, 3].map(c => `<rect x="${-48 + c * 26}" y="${-20 + r * 26}" width="18" height="18" rx="3" fill="${r === 0 && c === 0 ? '#E07A5F' : '#E3E1EC'}"/>`).join('')).join('')}</g>`;
const key = (x, y, s = 1, r = 0) => `<g transform="translate(${x},${y}) scale(${s}) rotate(${r})"><g filter="url(#pencil)"><circle r="22" fill="none" stroke="${LINE}" stroke-width="13"/><circle r="22" fill="none" stroke="#FF9EB8" stroke-width="8"/>${sh('rect', { x: 14, y: -8, width: 26, height: 16, rx: 3 }, '#FFE79A', { lw: 2.6 })}</g><text x="27" y="5" font-family="Gaegu" font-weight="700" font-size="12" fill="${LINE}" text-anchor="middle">37</text></g>`;
const bubbles3 = (x, y) => pencil([[0, 0, 10], [14, -26, 8], [-6, -50, 6]].map(([dx, dy, r]) => ell(x + dx, y + dy, r, r, 'rgba(255,255,255,.75)', { lw: 2.2, hatch: false })).join(''));
const camera = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${pencil(sh('rect', { x: -26, y: -18, width: 52, height: 36, rx: 6 }, '#6E6680', { lw: 3 }) + ell(0, 0, 11, 11, '#BFE3F2', { lw: 2.6, hatch: false }))}</g>`;
const noCam = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})">${camera(0, 0, 1)}${pencil(ell(0, 0, 40, 40, 'none', { lw: 0 }))}<circle cx="0" cy="0" r="40" fill="none" stroke="#E07A5F" stroke-width="7"/><path d="M-28,-28 L28,28" stroke="#E07A5F" stroke-width="7"/></g>`;
const levelBoard = () => pencil(sh('rect', { x: 260, y: 70, width: 210, height: 200, rx: 12 }, '#FFFFFF', { lw: 3.2 })) +
  `<text x="365" y="108" font-family="Gaegu" font-weight="700" font-size="26" fill="${LINE}" text-anchor="middle">반 배정표</text>` + ['기초반', '초급반', '중급반', '상급반'].map((t, i) => `<text x="290" y="${148 + i * 32}" font-family="Gaegu" font-weight="700" font-size="22" fill="${i === 2 ? '#E07A5F' : '#8A8098'}">${t}  ${i === 2 ? '← ?' : ''}</text>`).join('');

const EPS = [
  // ════ EP.013 정기 휴관일
  { ep: '013', title: '오늘은 쉬는 날', teaser: '가방 메고 왔는데… 문이 잠겼다',
    cover: { char: swimmer({ arms: 'spread', expr: 'sad', gog: 'head' }) },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'casual', arms: 'down', expr: 'cry', prop: `<g filter="url(#pencil)">${PROPS.swimBag(-70, 120, .5)}</g>` }) + calendar(760, 860, 1.4),
    panels: [
      street('#FFF3E2') + person('mulu', { x: 240, y: 250, s: .9, outfit: 'casual', arms: 'wave', expr: 'happy', prop: `<g filter="url(#pencil)">${PROPS.swimBag(-70, 120, .5)}</g>` }) + sparkle(390, 200, 14) +
      caption('월요일 AM 6:10') + bubble(150, 66, 320, 76, '한 주의 시작은 수영으로!', { tail: 'bl', size: 28 }),
      bg('#F4F1FB') + poolDoor() + caption('수영장 입구'),
      bg('#F4F1FB') + poolDoor() + person('mulu', { x: 245, y: 290, s: .86, outfit: 'casual', arms: 'down', expr: 'cry', prop: `<g filter="url(#pencil)">${PROPS.swimBag(-70, 120, .5)}</g>` }) + sfx(90, 490, '털썩', { size: 40, rot: -8, color: '#8A8098' }) +
      bubble(260, 440, 210, 70, '정기 휴관…?', { tail: 'none', size: 32 }),
      bg('#FFF6E6') + calendar(360, 150, 1.1) + person('mulu', { x: 150, y: 170, s: .72, outfit: 'casual', arms: 'point', expr: 'determined' }) +
      tipBox(338, '물루 TIP · 휴관일 미리 확인', '공공 수영장은 보통 월 1~2회 정기 휴관이 있어요.\n명절·수질 청소 기간에도 쉬니 출발 전 확인!\n물루 앱 수영장 탭에서 휴관 일정을 볼 수 있어요.'),
    ] },

  // ════ EP.014 귀에 물
  { ep: '014', title: '귀에 물이\n들어갔다', teaser: '먹먹… 한쪽 세상이 조용해졌다',
    cover: { char: swimmer({ arms: 'face', expr: 'worried', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }),
    panels: [
      pool(240) + headInWater('mulu', { x: 245, y: 214, s: .8, cap: true, gog: 'eyes', expr: 'happy' }) + waterFront(268) + sfx(120, 140, '풍덩!', { size: 44, rot: -10, color: '#5BB8E0' }) + caption('입수 다이빙 연습'),
      lockers() + person('mulu', { x: 240, y: 250, s: .9, outfit: 'swim', arms: 'face', expr: 'shock' }) + sweat(320, 160) +
      bubble(150, 60, 320, 76, '어? 한쪽 귀가 먹먹해…', { tail: 'bl', size: 28 }) + sfx(100, 380, '웅웅~', { size: 34, rot: -6, color: '#8A8098' }),
      lockers() + `<g transform="rotate(-14 240 300)">${person('mulu', { x: 240, y: 250, s: .9, outfit: 'swim', arms: 'up', expr: 'flat' })}</g>` + sfx(110, 420, '콩콩콩', { size: 42, rot: -10, color: '#E07A5F' }) + pencil(ln('M170,470 q10,10 20,0 M300,470 q10,10 20,0', 3)) +
      caption('고개 기울이고 제자리 콩콩') + bubble(300, 80, 170, 70, '…빠졌다!', { tail: 'bl', size: 32 }),
      bg('#EAF6FB') + person('mulu', { x: 245, y: 170, s: .74, outfit: 'casual', arms: 'wave', expr: 'happy' }) + sparkle(110, 90, 12) + sparkle(380, 100, 14) +
      tipBox(338, '물루 TIP · 귀에 물 들어갔을 때', '물 들어간 쪽으로 고개를 기울이고 제자리에서 콩콩.\n면봉을 깊이 넣거나 세게 후비는 건 금지!\n며칠 지나도 먹먹하거나 아프면 진료 받기.'),
    ] },

  // ════ EP.015 음-파
  { ep: '015', title: '음— 파!', teaser: '자유형 25m, 숨이 모자란 이유',
    cover: { char: { ...swimmer({ arms: 'up', expr: 'determined' }), ripples: [[540, 710, 300, 84], [700, 330, 34, 12], [720, 280, 22, 8]] } },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.45, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'determined' }),
    panels: [
      pool(240) + headInWater('mulu', { x: 245, y: 214, s: .8, cap: true, gog: 'eyes', expr: 'shock' }) + waterFront(268) + sweat(320, 140) +
      caption('자유형 25m 도전') + bubble(140, 60, 300, 76, '헉… 헉… 숨 차!', { tail: 'bc', size: 32 }),
      pool(260) + person('pro', { x: 150, y: 210, s: .72, outfit: 'trunks', cap: true, gog: 'head', arms: 'hold', expr: 'smile' }).replace(/#B8A6F0/g, '#6E6680') + headInWater('mulu', { x: 360, y: 234, s: .7, cap: true, gog: 'head', expr: 'worried' }) + waterFront(286) +
      caption('옆 레인 고수님') + bubble(20, 66, 280, 92, '물속에서 숨을\n다 뱉어야 해요', { tail: 'bl', size: 28 }),
      pool(200) + headInWater('mulu', { x: 160, y: 250, s: .7, cap: true, gog: 'eyes', expr: 'flat' }) + `<path d="M0,280 q31,-12 62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 t62,0 V${PH} H0Z" fill="${P.sky}" opacity=".95"/>` + bubbles3(220, 280) +
      headInWater('mulu', { x: 370, y: 190, s: .7, cap: true, gog: 'eyes', expr: 'happy' }) +
      sfx(160, 400, '음—', { size: 48, rot: 0, color: '#5BB8E0' }) + sfx(380, 110, '파!', { size: 52, rot: 0, color: '#E07A5F' }),
      pool(200) + headInWater('mulu', { x: 245, y: 180, s: .7, cap: true, gog: 'head', expr: 'sparkle' }) + waterFront(224) +
      tipBox(320, '물루 TIP · 자유형 호흡', '얼굴이 물속에 있을 땐 코로 “음—” 천천히 내쉬고,\n고개를 옆으로 돌렸을 때 입으로 “파!” 들이쉬기.\n숨을 참으면 금방 지쳐요. 내쉬는 게 먼저!'),
    ] },

  // ════ EP.016 사물함 열쇠
  { ep: '016', title: '열쇠 어디 갔지', teaser: '샤워실에서 벌어진 대소동',
    cover: { char: { svg: person('mulu', { x: 540, y: 470, s: 2.0, outfit: 'swim', cap: true, gog: 'eyes', arms: 'up', expr: 'proud' }) + key(690, 470, 1.6, 20), waistY: 710, ripples: [[540, 710, 300, 84]] } },
    titleArt: person('mulu', { x: 470, y: 790, s: 1.4, outfit: 'swim', arms: 'search', expr: 'shock' }) + key(760, 900, 1.8, -10),
    panels: [
      tiles('#EAF3F8', '#D3E3EC', 40) + `<g filter="url(#pencil)">${PROPS.shower(140, 120, 1.5)}</g>` + person('mulu', { x: 250, y: 260, s: .9, outfit: 'swim', arms: 'search', expr: 'shock' }) + sweat(330, 170) +
      caption('수영 끝, 샤워실') + bubble(200, 60, 270, 76, '열쇠… 어디 갔지?!', { tail: 'bl', size: 30 }),
      lockers() + person('mulu', { x: 150, y: 250, s: .82, outfit: 'swim', arms: 'search', expr: 'cry' }) + person('yoonseul', { x: 360, y: 250, s: .8, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'hips', expr: 'shock' }) +
      bubble(250, 60, 220, 76, '사물함 몇 번인데?', { tail: 'br', size: 28 }) + bubble(16, 70, 200, 70, '…기억 안 나', { tail: 'bl', size: 28 }),
      pool(220) + headInWater('mulu', { x: 160, y: 200, s: .7, cap: true, gog: 'head', expr: 'sparkle' }) + waterFront(246) + key(350, 380, 1.4, 20) + sparkle(350, 330, 14) +
      caption('레인 바닥에서 반짝') + bubble(240, 70, 230, 70, '찾았다!!', { tail: 'bl', size: 34 }),
      lockers() + person('mulu', { x: 245, y: 170, s: .74, outfit: 'swim', arms: 'up', expr: 'happy' }) + key(330, 170, .9, 0) +
      tipBox(338, '물루 TIP · 사물함 열쇠 지키기', '열쇠 밴드는 손목이나 발목에 단단히 감고 입수.\n사물함 번호는 들어가기 전에 한 번 외워 두기!\n잃어버리면 바로 안내 데스크에 알려요.'),
    ] },

  // ════ EP.017 염소 머릿결
  { ep: '017', title: '내 머릿결\n어디 갔어', teaser: '수영 3년, 빗자루가 된 머리카락',
    cover: { char: swimmer({ cap: false, gog: 'head', arms: 'face', expr: 'sad' }) },
    titleArt: person('mulu', { x: 420, y: 800, s: 1.35, outfit: 'casual', arms: 'face', expr: 'sad' }) + person('yoonseul', { x: 720, y: 790, s: 1.3, outfit: 'trend', arms: 'point', expr: 'proud' }),
    panels: [
      lockers() + person('mulu', { x: 240, y: 250, s: .9, outfit: 'casual', arms: 'face', expr: 'cry' }) + pencil(ln('M170,180 l-20,-20 M180,170 l-10,-26 M310,172 l20,-22 M300,166 l12,-26', 4, P.muluHair)) +
      caption('드라이 후 거울 앞') + bubble(150, 60, 320, 76, '머리가 빗자루 같아…', { tail: 'bl', size: 29 }),
      lockers() + person('yoonseul', { x: 150, y: 250, s: .86, outfit: 'trend', arms: 'point', expr: 'shock' }) + person('mulu', { x: 360, y: 260, s: .82, outfit: 'casual', arms: 'down', expr: 'worried' }) +
      bubble(20, 60, 300, 92, '설마 그냥 수모만\n쓰고 들어가?', { tail: 'bl', size: 29 }),
      tiles('#EAF3F8', '#D3E3EC', 40) + `<g filter="url(#pencil)">${PROPS.shower(160, 120, 1.5)}</g>` + person('mulu', { x: 250, y: 270, s: .9, outfit: 'swim', arms: 'up', expr: 'happy' }) +
      sfx(410, 210, '촤아', { size: 40, rot: 8, color: '#5BB8E0' }) + caption('입수 전 맹물로 촉촉하게') + bubble(16, 420, 330, 92, '물 먹은 머리는\n염소를 덜 먹는대!', { tail: 'none', size: 28 }),
      bg('#FFF4F6') + person('mulu', { x: 150, y: 180, s: .72, outfit: 'casual', arms: 'wave', expr: 'sparkle' }) + person('yoonseul', { x: 350, y: 180, s: .72, outfit: 'trend', arms: 'hips', expr: 'proud' }) +
      tipBox(338, '물루 TIP · 염소에서 머릿결 지키기', '입수 전 맹물로 머리를 충분히 적시고 수모 쓰기.\n수영 후엔 바로 샴푸 + 컨디셔너로 염소 씻어내기.\n드라이는 너무 뜨겁지 않게, 끝까지 말리기!'),
    ] },

  // ════ EP.018 레벨 테스트
  { ep: '018', title: '반 배정의 날', teaser: '중급반 갈 수 있을까?',
    cover: { char: swimmer({ arms: 'fist', expr: 'determined', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 420, y: 800, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) + person('dad', { x: 730, y: 790, s: 1.25, outfit: 'coverall', arms: 'down', expr: 'flat' }),
    panels: [
      tiles(P.paper, '#F1DECF', 46) + levelBoard() + person('mulu', { x: 140, y: 250, s: .86, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'worried' }) + sweat(220, 150) +
      caption('새 학기 레벨 테스트'),
      garage() + person('mulu', { x: 330, y: 250, s: .78, outfit: 'casual', arms: 'face', expr: 'worried', flip: true }) + person('dad', { x: 130, y: 240, s: .82, outfit: 'coverall', arms: 'hold', expr: 'flat' }) +
      caption('전날 밤 · 태랑모터스', 16, 480) + bubble(230, 120, 240, 92, '떨어지면\n어떡하지…', { tail: 'bl', size: 29 }),
      garage() + person('dad', { x: 150, y: 240, s: .84, outfit: 'coverall', arms: 'down', expr: 'flat', prop: PROPS.wrench(76, 140, .8, 10) }) + person('mulu', { x: 370, y: 250, s: .74, outfit: 'casual', arms: 'down', expr: 'shock' }) +
      bubble(20, 110, 280, 92, '…반은 실력 확인일 뿐.\n물은 안 도망간다.', { tail: 'br', size: 25 }) + sfx(410, 140, '!', { size: 54, rot: 0, color: '#E07A5F' }),
      pool(220) + headInWater('mulu', { x: 245, y: 196, s: .74, cap: true, gog: 'head', expr: 'proud' }) + waterFront(244) + sparkle(120, 100, 14) + sparkle(380, 90, 12) +
      tipBox(320, '물루 TIP · 반 배정이 걱정될 때', '레벨 테스트는 나에게 맞는 반을 찾는 과정이에요.\n기초반부터 차근차근 시작해도 전혀 늦지 않아요.\n편하게 평소 실력대로 보여 주면 충분!'),
    ] },

  // ════ EP.019 윤슬의 촬영 매너
  { ep: '019', title: '찍기 전에\n잠깐!', teaser: '윤슬의 수영장 촬영 매너',
    cover: { char: { svg: person('yoonseul', { x: 540, y: 460, s: 1.9, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'smile', prop: PROPS.phone(68, 30, .9), propBack: `<g filter="url(#pencil)">${PROPS.tubeBack(118, P.mint)}</g>` }) + `<g transform="translate(540,460) scale(1.9)"><g filter="url(#pencil)">${PROPS.tubeFront(118, P.mint)}</g></g>`, waistY: 700, ripples: [[540, 700, 300, 84]] } },
    titleArt: person('yoonseul', { x: 430, y: 790, s: 1.35, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) + noCam(760, 860, 1.4),
    panels: [
      lockers() + person('yoonseul', { x: 240, y: 250, s: .9, outfit: 'swimT', arms: 'phone', expr: 'wink', prop: PROPS.phone(68, 30, .9) }) + sparkle(380, 180, 14) +
      caption('탈의실 거울 앞') + bubble(140, 60, 330, 76, '오늘의 수영룩 인증샷~', { tail: 'bl', size: 29 }),
      lockers() + person('mulu', { x: 150, y: 250, s: .86, outfit: 'swim', arms: 'point', expr: 'shock' }) + person('yoonseul', { x: 360, y: 260, s: .8, outfit: 'swimT', arms: 'phone', expr: 'shock', prop: PROPS.phone(68, 30, .9) }) +
      sfx(240, 130, '잠깐!!', { size: 46, rot: -6, color: '#E07A5F' }) + bubble(16, 400, 300, 80, '여긴 촬영 금지 구역이야!', { tail: 'none', size: 27 }),
      bg('#F4F1FB') + pencil(sh('rect', { x: 120, y: 90, width: 250, height: 170, rx: 14 }, '#FFFFFF', { lw: 3.4 })) + noCam(245, 160, 1) +
      `<text x="245" y="240" font-family="Gaegu" font-weight="700" font-size="24" fill="${LINE}" text-anchor="middle">탈의실·샤워실 촬영 금지</text>` +
      person('yoonseul', { x: 245, y: 360, s: .62, outfit: 'swimT', arms: 'face', expr: 'sad', body: true }) + caption('입구에 붙은 안내문'),
      pool(220) + headInWater('yoonseul', { x: 150, y: 196, s: .66, cap: true, capStyle: 'trend', gog: 'head', expr: 'proud' }) + headInWater('mulu', { x: 340, y: 200, s: .64, cap: true, gog: 'head', expr: 'happy' }) + waterFront(240) +
      tipBox(320, '물루 TIP · 수영장 촬영 매너', '탈의실·샤워실 촬영은 절대 금지!\n레인 촬영은 수영장 규정을 먼저 확인하고,\n다른 사람이 찍히지 않게, 찍히면 꼭 동의 받기.'),
    ] },
];
module.exports = EPS;
