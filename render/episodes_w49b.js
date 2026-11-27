// 물루의 수영일기 EP.125~131 (2026-12 첫 주 게시분, 컷 8장)
const L = require('./w49_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, street, garage, swimmer,
  B, waterFront, tipPanel, swimHead, G, bedroom, poolDeck, winter, restaurant, AP, AM, appPhone, hands, bowl,
  PINK, appBg, bubbles, kick, sign, entrance, glassPool, speed,
  bigBag, pouch, miniBottles, bigBottles, steam, deepEnd,
  poolSheet, swimfood2, checkin2, firstVisit, lounge2 } = L;

const momP = (o) => PINK(person('mom', o));
const momHead = (x, y, s, o = {}) => PINK(swimHead('mom', x, y, s, o));
const arrow = (x1, y1, x2, y2) => G(ln(`M${x1},${y1} L${x2},${y2}`, 5, P.purpleD)) + G(path(`M${x2},${y2} l-16,-6 l6,16z`, P.purpleD, { lw: 2 }));
const deep = (y = 182) => deepEnd() + waterFront(y + 40, .85);
const circles = (x, y) => G(ln(`M${x - 60},${y} a30,14 0 1 0 60,0 a30,14 0 1 0 -60,0 M${x},${y} a30,14 0 1 0 60,0 a30,14 0 1 0 -60,0`, 3.4, '#fff'));

module.exports = [
  // ════ EP.125 구석에서 쉬어요
  { ep: '125', title: '구석에서 쉬어요', teaser: '벽 한가운데서 쉬었더니…',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 520, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'smile' }) + arrow(640, 720, 820, 640),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'head', expr: 'happy' }) + waterFront(262) +
      caption('25m 끝, 잠깐 휴식') + B(110, 340, '후~ 여기서 쉬자~', { tail: 'none', size: 30 }),
      pool(240) + swimHead('mulu', 300, 222, .6, { gog: 'head', expr: 'shock' }) + swimHead('yoonseul', 120, 300, .5, { gog: 'eyes', expr: 'shock' }) + waterFront(262) + speed(90, 300) +
      sfx(330, 120, '앗, 턴 자리!', { size: 44, rot: 8, color: '#E07A5F' }),
      pool(240) + swimHead('mulu', 300, 222, .6, { gog: 'head', expr: 'worried' }) + swimHead('yoonseul', 180, 230, .58, { gog: 'head', expr: 'worried' }) + waterFront(262) + sweat(360, 170) +
      sfx(245, 120, '어이쿠!', { size: 52, rot: -6 }),
      poolDeck(400) + person('yoonseul', { x: 245, y: 220, s: .82, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) +
      B(60, 40, '쉴 땐 구석으로~', { tail: 'bl', size: 30 }),
      pool(240) + swimHead('mulu', 420, 222, .58, { gog: 'head', expr: 'happy' }) + swimHead('yoonseul', 200, 240, .54, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      caption('레인 구석에 착!') + sfx(200, 420, '슝— 턴!', { size: 48, rot: -6, color: '#5BB8E0' }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      caption('옆 레인의 아빠') + B(40, 60, '벽 가운데는\n턴하는 자리다.', { tail: 'bl', size: 28 }),
      pool(240) + swimHead('mulu', 330, 222, .58, { gog: 'head', expr: 'happy' }) + swimHead('yoonseul', 430, 222, .54, { gog: 'head', expr: 'wink' }) + waterFront(262) + sparkle(110, 120, 12) +
      B(60, 340, '구석이 명당이네~', { tail: 'none', size: 32 }),
      tipPanel(swimHead('mulu', 380, 180, .55, { gog: 'head', expr: 'happy' }) + waterFront(220, .85, 330) + arrow(160, 120, 300, 160),
        '물루 TIP · 벽에서 쉴 때', '벽 한가운데는 턴하는 사람의 자리예요.\n쉴 땐 레인 구석으로 붙고,\n다시 출발할 땐 뒤에 오는 사람부터 확인!'),
    ] },

  // ════ EP.126 아빠랑 국밥 (앱: 스윔푸드)
  { ep: '126', title: '아빠랑 국밥', teaser: '처음 간 수영장, 뭐 먹지?',
    cover: { char: swimmer({ expr: 'happy', arms: 'hips', gog: 'head' }) },
    titleArt: person('dad', { x: 380, y: 790, s: 1.25, outfit: 'casual', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 720, y: 800, s: 1.25, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + bowl(560, 1010, 1.4),
    panels: [
      entrance('해오름 수영장') + person('dad', { x: 150, y: 250, s: .72, outfit: 'casual', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 350, y: 255, s: .7, outfit: 'casual', arms: 'up', expr: 'sparkle' }) +
      caption('아빠와 원정 수영'),
      pool(240) + swimHead('dad', 170, 222, .6, { gog: 'eyes', expr: 'determined' }) + swimHead('mulu', 340, 222, .58, { gog: 'eyes', expr: 'happy' }) + waterFront(262) +
      caption('한 시간 뒤') + sfx(245, 420, '쏴아— 첨벙!', { size: 46, rot: -4, color: '#5BB8E0' }),
      entrance('해오름 수영장') + person('dad', { x: 150, y: 250, s: .72, outfit: 'casual', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 350, y: 255, s: .7, outfit: 'casual', arms: 'face', expr: 'worried' }) +
      B(10, 14, '…배고프군.', { tail: 'bl', size: 26 }) + B(250, 14, '여기 맛집\n하나도 몰라!', { tail: 'br', size: 25 }),
      appBg() + appPhone(145, 92, 1.0, poolSheet('해오름 수영장', '50m · 처음 와 본 곳'), { tab: '탐색' }) + hands(245, 440, 1) +
      caption('「상세 보기」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, swimfood2('해오름 수영장'), { tab: '탐색', plus: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('커뮤니티 → 🍜 스윔푸드') + sfx(410, 330, '국밥!', { size: 46, rot: 10, color: '#0E9F93' }),
      restaurant() + person('dad', { x: 140, y: 210, s: .7, outfit: 'casual', arms: 'hold', expr: 'happy' }) + person('mulu', { x: 350, y: 215, s: .68, outfit: 'casual', arms: 'hold', expr: 'sparkle' }) +
      bowl(140, 400, 1) + bowl(350, 400, 1) + steam(110, 360) + steam(320, 360) + sfx(245, 120, '후루룩!', { size: 50, rot: -6 }),
      restaurant() + person('dad', { x: 140, y: 210, s: .7, outfit: 'casual', arms: 'hips', expr: 'proud' }) + person('mulu', { x: 350, y: 215, s: .68, outfit: 'casual', arms: 'up', expr: 'happy' }) + bowl(245, 420, .9) +
      B(10, 30, '…여기 단골 하자.', { tail: 'bl', size: 25 }) + B(260, 110, '스윔푸드 최고!', { tail: 'br', size: 24 }),
      tipPanel(bowl(170, 210, 1.3) + steam(140, 160) + swimHead('dad', 340, 200, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(240, .85, 330),
        '물루 TIP · 처음 간 동네 맛집', '물루 앱 수영장 「상세 보기」 → 커뮤니티\n→ 「🍜 스윔푸드」에서 근처 맛집을 봐요.\n좋은 곳은 「스윔푸드 등록하기」로 공유!'),
    ] },

  // ════ EP.127 옆 동네 원정 (앱: 체크인·도장깨기)
  { ep: '127', title: '옆 동네 원정', teaser: '윤슬 따라 처음 가 본 수영장',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'wave', gog: 'eyes' }) },
    titleArt: person('yoonseul', { x: 380, y: 790, s: 1.25, outfit: 'trend', arms: 'point', expr: 'wink' }) + person('mulu', { x: 720, y: 800, s: 1.25, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }),
    panels: [
      street() + person('yoonseul', { x: 140, y: 250, s: .74, outfit: 'trend', arms: 'point', expr: 'wink' }) + person('mulu', { x: 360, y: 255, s: .72, outfit: 'casual', arms: 'down', expr: 'smile' }) +
      caption('토요일 오전') + B(10, 70, '옆 동네 수영장\n가 볼래?', { tail: 'bl', size: 26 }),
      entrance('별빛 수영장') + person('yoonseul', { x: 150, y: 255, s: .7, outfit: 'trend', arms: 'wave', expr: 'smile' }) + person('mulu', { x: 350, y: 255, s: .7, outfit: 'casual', arms: 'up', expr: 'sparkle' }) +
      sfx(245, 90, '우와~ 처음이다!', { size: 40, rot: -4 }),
      appBg() + appPhone(145, 92, 1.0, checkin2('별빛 수영장'), { tab: '탐색', plus: false }) + hands(245, 440, 1) +
      caption('근처 배너 「인증하기」'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, firstVisit(), { plus: false, tabs: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('「첫 방문!」') + sfx(245, 505, '도장 쾅!', { size: 44, rot: -4, color: AP }),
      glassPool() + swimHead('yoonseul', 150, 232, .58, { expr: 'wink' }) + swimHead('mulu', 340, 232, .58, { gog: 'eyes', expr: 'sparkle' }) + waterFront(272) +
      caption('처음 와 본 수영장') + B(110, 360, '천장이 높다~!', { tail: 'none', size: 30 }),
      lockers() + person('yoonseul', { x: 150, y: 250, s: .74, outfit: 'trend', arms: 'phone', expr: 'smile', prop: PROPS.phone(68, 30, .9) }) + person('mulu', { x: 360, y: 250, s: .72, outfit: 'casual', arms: 'fist', expr: 'determined' }) +
      B(10, 40, '다음엔 저 동네!', { tail: 'bl', size: 26 }) + B(270, 130, '콜!', { tail: 'br', size: 30 }),
      home() + person('mulu', { x: 200, y: 240, s: .82, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 390, y: 340, s: .55, pose: 'sit', expr: 'happy' }) +
      B(60, 40, '도장 모으는 재미!', { tail: 'bl', size: 30 }) + B(340, 190, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(swimHead('yoonseul', 170, 180, .5, { expr: 'happy' }) + swimHead('mulu', 330, 180, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 새 수영장 도장', '물루 앱 수영장 근처 배너 → 「인증하기」\nGPS와 입장권·기록 사진으로 인증하면\n「첫 방문!」 도장 보상을 받아요.'),
    ] },

  // ════ EP.128 엄마의 짐 가방
  { ep: '128', title: '엄마의 짐 가방', teaser: '샴푸만 큰 통으로 세 개',
    cover: { char: swimmer({ expr: 'worried', arms: 'hold', gog: 'head' }) },
    titleArt: momP({ x: 420, y: 790, s: 1.35, outfit: 'casual', arms: 'hold', expr: 'worried' }) + bigBag(780, 900, 1.4),
    panels: [
      home() + momP({ x: 220, y: 230, s: .82, outfit: 'casual', arms: 'hold', expr: 'worried' }) + bigBag(230, 390, .9) + sweat(300, 190) +
      caption('수영 가는 엄마') + sfx(400, 140, '끙…', { size: 50, rot: 8 }),
      home() + bigBottles(245, 320, 1.4) +
      caption('가방 속을 보니') + sfx(245, 120, '큰 통만 셋?!', { size: 52, rot: -6 }),
      home() + momP({ x: 245, y: 240, s: .84, outfit: 'casual', arms: 'face', expr: 'cry' }) +
      B(100, 40, '어깨가 빠지겠어…', { tail: 'bl', size: 29 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'smile' }) + pouch(380, 330, 1.1) +
      B(20, 40, '작은 통에\n덜어 가요!', { tail: 'bl', size: 29 }),
      home() + miniBottles(160, 320, 1.3) + pouch(370, 340, 1) + sparkle(260, 140, 14) +
      caption('조금씩 덜어서') + sfx(260, 220, '쪼르르~', { size: 44, rot: -6, color: '#5BB8E0' }),
      street() + momP({ x: 245, y: 240, s: .84, outfit: 'casual', arms: 'up', expr: 'happy' }) + pouch(380, 400, .7) +
      B(70, 40, '가방이 가볍다~!', { tail: 'bl', size: 30 }),
      lockers() + momP({ x: 150, y: 250, s: .76, outfit: 'casual', arms: 'hips', expr: 'proud' }) + person('yoonseul', { x: 360, y: 250, s: .72, outfit: 'trend', arms: 'point', expr: 'sparkle', flip: true }) +
      B(230, 30, '어머님 파우치\n예뻐요~', { tail: 'br', size: 24 }) + B(10, 440, '물루가 챙겨 줬지!', { tail: 'none', size: 25 }),
      tipPanel(miniBottles(150, 220, 1.1) + pouch(350, 230, 1.1),
        '물루 TIP · 수영 가방 가볍게', '샴푸·바디워시는 작은 통에 조금씩 덜어\n방수 파우치 하나에 모아요.\n자주 쓰는 건 맨 위에 두면 찾기 쉬워요.'),
    ] },

  // ════ EP.129 캐치업
  { ep: '129', title: '캐치업', teaser: '아빠의 드릴 시간… 그런데 캐치가?',
    cover: { char: swimmer({ expr: 'determined', arms: 'up', gog: 'eyes' }) },
    titleArt: person('dad', { x: 400, y: 790, s: 1.3, outfit: 'coverall', arms: 'point', expr: 'flat' }) + catchDog({ x: 760, y: 900, s: .9, pose: 'sit', expr: 'happy' }),
    panels: [
      garage() + person('dad', { x: 150, y: 250, s: .76, outfit: 'coverall', arms: 'point', expr: 'flat' }) + person('mulu', { x: 360, y: 255, s: .72, outfit: 'casual', arms: 'down', expr: 'normal' }) +
      B(20, 130, '오늘은 캐치업\n드릴이다.', { tail: 'bl', size: 26 }),
      garage() + catchDog({ x: 250, y: 340, s: .75, pose: 'run', expr: 'happy' }) + person('mulu', { x: 400, y: 250, s: .62, outfit: 'casual', arms: 'spread', expr: 'shock' }) +
      sfx(130, 160, '멍!!', { size: 60, rot: -10 }) + B(240, 120, '캐치 말고!', { tail: 'br', size: 26 }),
      garage() + person('dad', { x: 200, y: 250, s: .82, outfit: 'coverall', arms: 'point', expr: 'flat' }) +
      B(30, 130, '한 팔이 앞에서\n기다렸다가 젓기.', { tail: 'bl', size: 26 }),
      pool(240) + kick(170, 250, .7) + swimHead('mulu', 260, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      caption('킥판 잡고 한 팔씩') + sfx(245, 420, '쭉… 만나고… 젓고!', { size: 38, rot: -4, color: '#5BB8E0' }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + speed(150, 190) +
      B(80, 340, '팔이 길어진 느낌!', { tail: 'none', size: 32 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'hips', expr: 'proud' }) +
      B(60, 40, '…그게 캐치업이다.', { tail: 'bl', size: 29 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 380, y: 330, s: .6, pose: 'sit', expr: 'proud' }) +
      B(20, 40, '캐치도 캐치업!', { tail: 'bl', size: 29 }) + B(330, 180, '멍!', { tail: 'bc', size: 28 }),
      tipPanel(kick(150, 200, .8) + swimHead('mulu', 330, 190, .5, { gog: 'eyes', expr: 'happy' }) + waterFront(230, .85, 330),
        '물루 TIP · 캐치업 드릴', '한 팔을 앞에 쭉 뻗어 두고, 다른 팔이\n앞으로 와서 만나면 그때 젓기 시작!\n킥판을 잡고 하면 더 쉬워요.'),
    ] },

  // ════ EP.130 발이 안 닿아
  { ep: '130', title: '발이 안 닿아', teaser: '1.8m 앞에서 얼어붙은 물루',
    cover: { char: swimmer({ expr: 'shock', arms: 'face', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 460, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) + sfx(800, 760, '1.8m?!', { size: 80, rot: 10, color: '#E07A5F' }),
    panels: [
      poolDeck(400) + sign(400, 300, '1.8m', '#FFFFFF', 100) + person('mulu', { x: 200, y: 220, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) +
      caption('처음 와 본 깊은 레인') + B(200, 60, '발이 안 닿는대…', { tail: 'bl', size: 28 }),
      deep() + swimHead('mulu', 245, 182, .66, { gog: 'eyes', expr: 'worried' }) + bubbles([[170, 300, 9], [330, 320, 7]]) + sweat(320, 150) +
      sfx(140, 90, '벽 꼭!', { size: 48, rot: -8, color: '#5BB8E0' }),
      poolDeck(400) + person('guard', { x: 245, y: 220, s: .82, outfit: 'guard', arms: 'point', expr: 'smile' }) +
      caption('안전요원 선생님') + B(40, 60, '벽 옆에서\n제자리 뜨기부터!', { tail: 'bl', size: 27 }),
      deep() + swimHead('mulu', 245, 182, .66, { gog: 'eyes', expr: 'determined' }) + circles(245, 400) +
      caption('팔은 살랑, 다리는 휘휘') + sfx(245, 480, '천천히~', { size: 40, rot: -4, color: '#fff' }),
      deep() + swimHead('mulu', 245, 182, .66, { gog: 'eyes', expr: 'sparkle' }) + sparkle(110, 110, 14) + sparkle(390, 100, 12) +
      sfx(245, 100, '떠 있다!', { size: 56, rot: -6, color: '#0E9F93' }),
      poolDeck(400) + person('guard', { x: 140, y: 220, s: .76, outfit: 'guard', arms: 'hips', expr: 'smile' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'fist', expr: 'determined' }) +
      B(10, 30, '조금씩\n늘려 봐요.', { tail: 'bl', size: 26 }) + B(270, 120, '네!', { tail: 'br', size: 30 }),
      deep() + swimHead('yoonseul', 160, 182, .58, { expr: 'wink' }) + swimHead('mulu', 340, 182, .58, { gog: 'eyes', expr: 'happy' }) +
      B(90, 360, '깊은 물도 친구!', { tail: 'none', size: 32 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + sign(400, 60, '1.8m', '#FFFFFF', 100),
        '물루 TIP · 깊은 물이 처음일 때', '들어가기 전 수심 표시부터 확인해요.\n벽 가까이에서 제자리 뜨기를 연습하고,\n처음엔 안전요원·강사님이 있을 때만!'),
    ] },

  // ════ EP.131 크루가 꽁꽁 (앱: 크루 · 라운지 공지/일정 · 활동 온도)
  { ep: '131', title: '크루가 꽁꽁', teaser: '추워지니 활동 온도도 뚝',
    cover: { char: swimmer({ expr: 'happy', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.35, outfit: 'hoodie', arms: 'phone', expr: 'worried', prop: G(PROPS.phone(68, 30, 1.1)) }) + sfx(820, 700, '12°C…', { size: 70, rot: 10, color: '#5B7FD6' }),
    panels: [
      winter() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'hoodie', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) +
      caption('12월 첫 주') + B(140, 70, '요즘 크루가 조용해…', { tail: 'bl', size: 27 }),
      appBg('#E6EEF9') + appPhone(145, 92, 1.0, lounge2(12, false), { tab: '크루' }) + hands(245, 440, 1) +
      caption('「우리 크루 활동 온도」') + sfx(420, 330, '꽁꽁', { size: 44, rot: 10, color: '#5B7FD6' }),
      bedroom() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'fist', expr: 'determined' }) +
      B(110, 40, '내가 불을 지핀다!', { tail: 'bl', size: 30 }),
      appBg() + appPhone(145, 92, 1.0, lounge2(12, true), { tab: '크루' }) + hands(245, 440, 1) +
      caption('📌 공지 · 📅 일정 올리기'),
      pool(240) + swimHead('yoonseul', 110, 222, .52, { expr: 'wink' }) + swimHead('mulu', 245, 222, .52, { gog: 'eyes', expr: 'sparkle' }) + momHead(380, 222, .52, { expr: 'happy' }) + waterFront(262) +
      caption('수요일 저녁') + sfx(245, 420, '다 모였다!', { size: 48, rot: -4, color: '#5BB8E0' }),
      appBg('#FFF0EC') + appPhone(145, 92, 1.0, lounge2(36, true), { tab: '크루' }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('온도가 올랐다!') + sfx(420, 330, '36°C!', { size: 44, rot: 10, color: '#E07A5F' }),
      winter() + person('yoonseul', { x: 110, y: 260, s: .64, outfit: 'trend', arms: 'wave', expr: 'wink' }) + person('mulu', { x: 245, y: 255, s: .68, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + momP({ x: 380, y: 260, s: .64, outfit: 'casual', arms: 'up', expr: 'happy' }) +
      B(100, 40, '추울수록 같이!', { tail: 'none', size: 32 }),
      tipPanel(swimHead('mulu', 170, 180, .5, { gog: 'eyes', expr: 'happy' }) + momHead(330, 180, .5, { expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 크루 온도 올리기', '물루 앱 크루 탭 → 「크루」 → 라운지\n📌 공지와 📅 일정을 올려 같이 수영하면\n「우리 크루 활동 온도」가 올라가요.'),
    ] },
];
