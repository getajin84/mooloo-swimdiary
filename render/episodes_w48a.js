// 물루의 수영일기 EP.097~103 (2026-11 마지막 주 게시분, 컷 8장)
const L = require('./w48_lib');
const { P, LINE, sh, path, ell, ln, person, catchDog, PROPS, PW, PH, caption, sfx, sweat, sparkle, bg, pool, home, lockers, garage, swimmer,
  B, waterFront, tipPanel, swimHead, G, bedroom, poolDeck, winter, AP, AM, aT, appPhone, hands,
  PINK, appBg, bubbles, underwater, capSil, kick, towelS, dryer,
  speed, dryerRow, shallow, eyeRed, drops, jelly, frame, recordDetail, recordDone2, friendChal } = L;

const momP = (o) => PINK(person('mom', o));
const momHead = (x, y, s, o = {}) => PINK(swimHead('mom', x, y, s, o));
const line = (y) => G(ln(`M20,${y} H470`, 3, '#B9B6C6'));

module.exports = [
  // ════ EP.097 토끼 눈
  { ep: '097', title: '토끼 눈', teaser: '수경 없이 들어갔더니…',
    cover: { char: swimmer({ expr: 'worried', arms: 'face', gog: 'head' }) },
    titleArt: person('mulu', { x: 540, y: 790, s: 1.4, outfit: 'casual', arms: 'face', expr: 'cry' }) + eyeRed(540, 796, 1.4) + sfx(820, 720, '따끔!', { size: 70, rot: 10, color: '#E07A5F' }),
    panels: [
      lockers() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'swim', cap: true, gog: 'none', arms: 'fist', expr: 'determined' }) +
      caption('수경 깜빡한 날') + B(150, 70, '오늘은 맨눈으로 간다!', { tail: 'bl', size: 27 }),
      underwater() + swimHead('mulu', 245, 250, .8, { gog: 'none', expr: 'shock' }) + bubbles([[230, 340, 9], [255, 370, 7], [220, 400, 10]]) +
      sfx(360, 130, '따끔!', { size: 58, rot: 10, color: '#E07A5F' }),
      lockers() + person('mulu', { x: 245, y: 240, s: .86, outfit: 'casual', arms: 'face', expr: 'cry' }) + eyeRed(245, 245, .86) +
      B(130, 40, '눈이 토끼 눈…', { tail: 'bl', size: 30 }),
      home() + momP({ x: 150, y: 240, s: .78, outfit: 'apron', arms: 'hips', expr: 'angry' }) + person('mulu', { x: 360, y: 250, s: .74, outfit: 'hoodie', arms: 'face', expr: 'worried' }) + eyeRed(360, 254, .74) +
      B(20, 40, '수경은 어쩌고!', { tail: 'bl', size: 30 }),
      home() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'face', expr: 'sleepy' }) + bubbles([[150, 160, 10], [340, 150, 8], [320, 190, 6]]) +
      caption('맑은 물로 살살') + sfx(380, 110, '찰방찰방', { size: 38, rot: 8, color: '#5BB8E0' }),
      home() + person('mulu', { x: 170, y: 240, s: .8, outfit: 'hoodie', arms: 'up', expr: 'happy' }) + catchDog({ x: 380, y: 330, s: .6, pose: 'sit', expr: 'happy' }) +
      caption('다음 날 아침') + B(40, 70, '많이 가라앉았다!', { tail: 'bl', size: 28 }) + B(330, 180, '멍!', { tail: 'bc', size: 28 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'happy' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      B(100, 340, '이제 수경은 꼭!', { tail: 'none', size: 32 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + sparkle(110, 90, 12),
        '물루 TIP · 수영 후 눈이 따가울 때', '수영할 땐 수경을 꼭 쓰고, 끝나면\n맑은 물로 눈가를 살살 헹궈요.\n충혈·통증이 계속되면 안과 진료 받기.'),
    ] },

  // ════ EP.098 아빠의 기록 등록 (앱: 수영 기록 등록 · ✏️ 상세)
  { ep: '098', title: '아빠의 기록 등록', teaser: '전 국가대표, 다시 물에 들어가다',
    cover: { char: swimmer({ expr: 'sparkle', arms: 'fist', gog: 'eyes' }) },
    titleArt: person('dad', { x: 380, y: 790, s: 1.25, outfit: 'trunks', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 730, y: 800, s: 1.25, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }),
    panels: [
      garage() + frame(370, 200, 1) + person('dad', { x: 150, y: 250, s: .76, outfit: 'coverall', arms: 'hold', expr: 'flat', prop: PROPS.wrench(0, 116, .8, 10) }) +
      B(220, 290, '…물 냄새가\n그립군.', { tail: 'none', size: 26 }),
      garage() + person('dad', { x: 140, y: 250, s: .74, outfit: 'coverall', arms: 'hips', expr: 'flat' }) + person('mulu', { x: 350, y: 250, s: .76, outfit: 'casual', arms: 'point', expr: 'sparkle', flip: true }) +
      B(200, 110, '아빠, 내일 같이 가자!', { tail: 'br', size: 25 }) + B(20, 440, '…생각해 보지.', { tail: 'none', size: 25 }),
      pool(240) + swimHead('dad', 280, 222, .66, { gog: 'eyes', expr: 'determined' }) + waterFront(262) + speed(170, 190) +
      caption('다음 날 새벽') + sfx(330, 400, '쏴아—', { size: 52, rot: -6, color: '#5BB8E0' }),
      poolDeck(400) + person('mulu', { x: 140, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'shock' }) + person('dad', { x: 360, y: 220, s: .78, outfit: 'trunks', arms: 'hips', expr: 'flat' }) +
      B(10, 30, '아빠 아직 빨라!', { tail: 'bl', size: 26 }) + B(250, 30, '천천히 간 거다.', { tail: 'br', size: 24 }),
      appBg() + appPhone(145, 92, 1.0, recordDetail(), { plus: false, tabs: false }) + hands(245, 440, 1) +
      caption('✏️ 상세로 기록'),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, recordDone2(), { plus: false, tabs: false }) + hands(245, 440, 1) + sparkle(100, 150, 14) + sparkle(400, 120, 12) +
      caption('「기록 완료」') + sfx(400, 330, '12위!', { size: 44, rot: 10, color: AP }),
      poolDeck(400) + person('dad', { x: 150, y: 220, s: .78, outfit: 'trunks', arms: 'hips', expr: 'proud' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) +
      B(10, 30, '…12위라.\n나쁘지 않네.', { tail: 'bl', size: 25 }) + B(250, 440, '다음엔 10위 안!', { tail: 'none', size: 25 }),
      tipPanel(swimHead('dad', 170, 180, .5, { gog: 'eyes', expr: 'flat' }) + swimHead('mulu', 330, 180, .5, { expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 상세하게 기록하기', '물루 앱 「수영 기록 등록」 → ✏️ 상세\n레인 길이·왕복 수·시간을 넣으면 「기록 완료」에\n페이스와 「○○수영장 전체 N위」가 떠요.'),
    ] },

  // ════ EP.099 왼쪽은 처음이라
  { ep: '099', title: '왼쪽은 처음이라', teaser: '오른쪽으로만 숨 쉬던 물루의 도전',
    cover: { char: swimmer({ expr: 'worried', arms: 'spread', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 520, y: 790, s: 1.4, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'shock' }) + sfx(800, 720, '왼쪽?!', { size: 76, rot: 10 }),
    panels: [
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'happy' }) + waterFront(262) +
      caption('늘 오른쪽으로만 숨') + B(80, 340, '오른쪽은 자신 있지!', { tail: 'none', size: 30 }),
      poolDeck(400) + person('yoonseul', { x: 150, y: 220, s: .76, outfit: 'swimT', cap: true, capStyle: 'trend', gog: 'head', arms: 'point', expr: 'smile' }) + person('mulu', { x: 360, y: 230, s: .72, outfit: 'swim', cap: true, gog: 'head', arms: 'down', expr: 'worried' }) +
      B(20, 30, '왼쪽으로도 쉬어 봐~', { tail: 'bl', size: 26 }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'shock' }) + waterFront(262) + bubbles([[150, 220, 10], [180, 190, 7]]) +
      caption('첫 왼쪽 호흡') + sfx(330, 130, '꿀꺽!', { size: 58, rot: 10, color: '#E07A5F' }),
      poolDeck(400) + person('mulu', { x: 245, y: 220, s: .82, outfit: 'swim', cap: true, gog: 'head', arms: 'face', expr: 'cry' }) +
      B(130, 30, '물 마셨어…', { tail: 'bl', size: 30 }),
      poolDeck(400) + person('dad', { x: 245, y: 220, s: .8, outfit: 'trunks', arms: 'point', expr: 'flat' }) +
      caption('지나가던 아빠') + B(20, 66, '셋 젓고 한 번.\n고개는 살짝만.', { tail: 'bl', size: 26 }),
      pool(240) + kick(170, 250, .7) + swimHead('mulu', 260, 222, .62, { gog: 'eyes', expr: 'determined' }) + waterFront(262) +
      caption('킥판 잡고 연습') + sfx(245, 400, '하나, 둘, 셋— 후!', { size: 40, rot: -4, color: '#5BB8E0' }),
      pool(240) + swimHead('mulu', 245, 222, .66, { gog: 'eyes', expr: 'sparkle' }) + waterFront(262) + sparkle(110, 120, 12) + sparkle(390, 110, 12) +
      B(110, 340, '왼쪽도 된다!', { tail: 'none', size: 34 }),
      tipPanel(swimHead('mulu', 245, 168, .62, { gog: 'eyes', expr: 'happy' }) + waterFront(210, .85, 330) + bubbles([[150, 120, 8], [130, 100, 5]]),
        '물루 TIP · 양쪽 호흡', '세 번 젓고 한 번, 좌우 번갈아 숨 쉬어 봐요.\n처음엔 킥판 잡고 한 팔씩 연습하면 쉬워요.\n고개는 살짝만 돌려 한쪽 눈은 물속에.'),
    ] },

  // ════ EP.100 같이 하면 간다 (앱: 챌린지 · 친구 챌린지)
  { ep: '100', title: '같이 하면 간다', teaser: '영하의 아침, 혼자라면 못 나갔을 거야',
    cover: { char: swimmer({ expr: 'happy', arms: 'wave', gog: 'eyes' }) },
    titleArt: person('mulu', { x: 380, y: 790, s: 1.3, outfit: 'casual', arms: 'phone', expr: 'sparkle', prop: G(PROPS.phone(68, 30, 1.1)) }) + person('yoonseul', { x: 720, y: 790, s: 1.3, outfit: 'trend', arms: 'wave', expr: 'wink' }),
    panels: [
      winter() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'hoodie', arms: 'face', expr: 'worried' }) + sweat(330, 200) +
      caption('영하 3도 아침') + B(150, 60, '이불 밖은 위험해…', { tail: 'bl', size: 28 }),
      bedroom() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'hoodie', arms: 'phone', expr: 'worried', prop: PROPS.phone(68, 30, .9) }) +
      B(90, 40, '혼자면 자꾸 미루게 돼…', { tail: 'bl', size: 26 }),
      appBg() + appPhone(145, 92, 1.0, friendChal(false), { tab: '챌린지' }) + hands(245, 440, 1) +
      caption('「친구 초대하기」'),
      lockers() + person('yoonseul', { x: 245, y: 240, s: .84, outfit: 'trend', arms: 'phone', expr: 'sparkle', prop: PROPS.phone(68, 30, .9) }) +
      caption('윤슬') + B(120, 50, '초대 왔다! 콜~', { tail: 'bl', size: 30 }),
      appBg('#E3F7F3') + appPhone(145, 92, 1.0, friendChal(true), { tab: '챌린지' }) + hands(245, 440, 1) + sparkle(100, 150, 14) +
      caption('친구 챌린지 시작!') + sfx(400, 330, '함께!', { size: 46, rot: 10, color: '#0E9F93' }),
      winter() + person('yoonseul', { x: 140, y: 250, s: .74, outfit: 'trend', arms: 'wave', expr: 'wink' }) + person('mulu', { x: 360, y: 250, s: .76, outfit: 'hoodie', arms: 'fist', expr: 'determined' }) +
      B(10, 40, '약속했으니까!', { tail: 'bl', size: 26 }) + B(230, 120, '같이면 간다!', { tail: 'br', size: 26 }),
      pool(240) + swimHead('yoonseul', 150, 222, .58, { expr: 'wink' }) + swimHead('mulu', 340, 222, .58, { expr: 'sparkle' }) + waterFront(262) + sparkle(245, 110, 14) +
      caption('그 주 금요일') + B(90, 340, '이번 주 3번 성공!', { tail: 'none', size: 30 }),
      tipPanel(swimHead('yoonseul', 170, 180, .5, { expr: 'happy' }) + swimHead('mulu', 330, 180, .5, { expr: 'happy' }) + waterFront(220, .85, 330),
        '물루 TIP · 친구 챌린지', '물루 앱 챌린지 탭 → 친구 챌린지 「친구 초대하기」\n함께 하기로 한 약속이 꾸준함을 만들어요.\n추운 날일수록 같이 가요!'),
    ] },

  // ════ EP.101 드라이기 앞 줄
  { ep: '101', title: '드라이기 앞 줄', teaser: '수영보다 긴 기다림',
    cover: { char: swimmer({ expr: 'flat', arms: 'hips', gog: 'head' }) },
    titleArt: person('mulu', { x: 460, y: 790, s: 1.35, outfit: 'casual', arms: 'face', expr: 'worried' }) + dryer(800, 760, 1.6, -10),
    panels: [
      dryerRow() + person('yoonseul', { x: 120, y: 260, s: .66, outfit: 'trend', arms: 'down', expr: 'normal' }) + person('mulu', { x: 370, y: 260, s: .72, outfit: 'casual', arms: 'down', expr: 'shock' }) +
      caption('수영 끝, 드라이기 앞') + B(230, 70, '줄이 이렇게 길어?!', { tail: 'bl', size: 25 }),
      dryerRow() + person('yoonseul', { x: 245, y: 240, s: .84, outfit: 'trend', arms: 'phone', expr: 'smile' }) + dryer(330, 180, .9, -20) +
      sfx(120, 120, '위이잉—', { size: 46, rot: -8 }) + B(120, 420, '긴 머리는 20분이지~', { tail: 'none', size: 26 }),
      dryerRow() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'down', expr: 'sad' }) + sweat(330, 200) +
      B(110, 40, '내 차례 언제 와…', { tail: 'bl', size: 30 }),
      dryerRow() + momP({ x: 150, y: 250, s: .76, outfit: 'casual', arms: 'point', expr: 'smile' }) + person('mulu', { x: 360, y: 250, s: .72, outfit: 'casual', arms: 'down', expr: 'worried' }) +
      caption('마침 온 엄마') + B(20, 66, '수건으로 먼저\n꾹꾹 눌러~', { tail: 'bl', size: 26 }),
      dryerRow() + person('mulu', { x: 245, y: 250, s: .84, outfit: 'casual', arms: 'face', expr: 'determined' }) + towelS(250, 160, 1.1) +
      sfx(120, 120, '꾹! 꾹!', { size: 52, rot: -8, color: '#5BB8E0' }),
      dryerRow() + person('mulu', { x: 220, y: 240, s: .84, outfit: 'casual', arms: 'phone', expr: 'sparkle' }) + dryer(310, 170, .9, -20) + sparkle(100, 140, 14) +
      B(130, 400, '3분 만에 끝!', { tail: 'none', size: 32 }),
      dryerRow() + person('mulu', { x: 150, y: 250, s: .74, outfit: 'casual', arms: 'point', expr: 'happy' }) + person('yoonseul', { x: 360, y: 250, s: .72, outfit: 'trend', arms: 'wave', expr: 'wink' }) +
      B(10, 40, '다음 분 쓰세요~', { tail: 'bl', size: 26 }) + B(270, 140, '매너 만점!', { tail: 'br', size: 24 }),
      tipPanel(dryer(180, 200, 1, -20) + towelS(330, 210, 1),
        '물루 TIP · 드라이기 빨리 쓰기', '수건으로 머리를 꾹꾹 눌러 물기를 먼저 빼면\n드라이 시간이 확 줄어요.\n줄이 길면 대충 말리고 다음 사람에게 양보!'),
    ] },

  // ════ EP.102 캐치가 물고 간 수모
  { ep: '102', title: '캐치가 물고 간 수모', teaser: '현관 앞 추격전',
    cover: { char: swimmer({ expr: 'shock', arms: 'spread', gog: 'head' }) },
    titleArt: catchDog({ x: 720, y: 820, s: 1.2, pose: 'sit', expr: 'happy', prop: PROPS.cap(0, -40, 1.1, P.purple) }) + person('mulu', { x: 380, y: 790, s: 1.3, outfit: 'casual', arms: 'spread', expr: 'shock' }),
    panels: [
      home() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'casual', arms: 'search', expr: 'worried' }) +
      caption('수영 가는 날 아침') + B(130, 70, '수모 어디 뒀더라?', { tail: 'bl', size: 28 }),
      home() + catchDog({ x: 260, y: 330, s: .72, pose: 'run', expr: 'happy', prop: PROPS.cap(0, -40, 1.1, P.purple) }) +
      sfx(140, 130, '후다닥!', { size: 56, rot: -10 }),
      home() + person('mulu', { x: 245, y: 230, s: .84, outfit: 'casual', arms: 'spread', expr: 'shock' }) +
      B(90, 40, '캐치! 그거 내 수모야!', { tail: 'bl', size: 27 }),
      home() + catchDog({ x: 330, y: 340, s: .62, pose: 'sit', expr: 'happy', prop: PROPS.cap(0, -40, 1.1, P.purple) }) + person('mulu', { x: 130, y: 250, s: .72, outfit: 'casual', arms: 'face', expr: 'cry' }) +
      B(10, 40, '구멍 났으면 어떡해…', { tail: 'bl', size: 25 }) + B(330, 180, '멍?', { tail: 'bc', size: 28 }),
      home() + person('mulu', { x: 245, y: 240, s: .84, outfit: 'casual', arms: 'up', expr: 'sparkle' }) + capSil(245, 150, .9, P.purple) + sparkle(130, 120, 14) + sparkle(370, 110, 12) +
      B(110, 400, '휴, 멀쩡하다!', { tail: 'none', size: 32 }),
      home() + line(140) + capSil(200, 200, .9, P.purple) + capSil(320, 200, .9, P.mint) + person('mulu', { x: 400, y: 300, s: .6, outfit: 'hoodie', arms: 'point', expr: 'smile', flip: true }) +
      caption('수영 끝나고') + B(20, 420, '맑은 물에 헹구고, 그늘에 말리고~', { tail: 'none', size: 24 }),
      home() + person('mulu', { x: 160, y: 240, s: .8, outfit: 'hoodie', arms: 'point', expr: 'angry' }) + catchDog({ x: 380, y: 330, s: .6, pose: 'sit', expr: 'sad' }) +
      B(30, 40, '이건 장난감 아니야!', { tail: 'bl', size: 27 }) + B(330, 180, '멍…', { tail: 'bc', size: 28 }),
      tipPanel(capSil(170, 200, 1, P.purple) + catchDog({ x: 340, y: 230, s: .45, pose: 'sit', expr: 'happy' }),
        '물루 TIP · 실리콘 수모 관리', '쓰고 나면 맑은 물로 헹궈 그늘에 말려요.\n뜨거운 곳은 피하고, 손톱·이빨은 조심!\n보관은 완전히 마른 뒤 파우치에.'),
    ] },

  // ════ EP.103 엄마의 해파리 뜨기
  { ep: '103', title: '엄마의 해파리 뜨기', teaser: '물에 뜨는 게 제일 어려워',
    cover: { char: swimmer({ expr: 'happy', arms: 'spread', gog: 'eyes' }) },
    titleArt: momP({ x: 460, y: 790, s: 1.35, outfit: 'swim', cap: true, gog: 'head', arms: 'spread', expr: 'happy' }) + jelly(800, 780, 1.6),
    panels: [
      shallow() + momP({ x: 245, y: 190, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'hips', expr: 'worried' }) + waterFront(330, .7) +
      caption('엄마의 숙제') + B(120, 70, '뜨는 게 제일 어려워!', { tail: 'none', size: 27 }),
      shallow() + momHead(245, 300, .7, { expr: 'shock' }) + waterFront(330, .85) + bubbles([[170, 260, 10], [320, 250, 8], [300, 220, 6]]) +
      sfx(100, 150, '꼬르륵…', { size: 52, rot: -8, color: '#5BB8E0' }),
      shallow() + person('mulu', { x: 245, y: 190, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'point', expr: 'smile' }) + waterFront(330, .7) +
      B(110, 30, '힘 빼고, 숨 크게!', { tail: 'none', size: 30 }),
      shallow() + momP({ x: 245, y: 190, s: .8, outfit: 'swim', cap: true, gog: 'eyes', arms: 'fist', expr: 'determined' }) + waterFront(330, .7) +
      sfx(130, 120, '후읍—!', { size: 56, rot: -8 }),
      shallow() + G(ell(250, 300, 80, 34, '#FF9EB8', { lw: 3.4 })) + G(ell(160, 300, 34, 30, '#FF9EB8', { lw: 3.4 })) + G(ln('M180,276 Q250,262 320,276', 5, P.mint)) + waterFront(304, .7) + bubbles([[140, 380, 8], [350, 400, 6]]) +
      caption('무릎 안고 둥~') + jelly(410, 160, .8),
      shallow() + momP({ x: 245, y: 190, s: .8, outfit: 'swim', cap: true, gog: 'head', arms: 'up', expr: 'sparkle' }) + waterFront(330, .7) + sparkle(110, 120, 14) + sparkle(390, 110, 12) +
      sfx(110, 90, '떴다!', { size: 60, rot: -10, color: '#0E9F93' }),
      home() + momP({ x: 150, y: 250, s: .76, outfit: 'apron', arms: 'up', expr: 'proud' }) + person('dad', { x: 360, y: 250, s: .76, outfit: 'coverall', arms: 'hips', expr: 'flat' }) +
      B(10, 40, '나 해파리 됐어!', { tail: 'bl', size: 27 }) + B(290, 140, '…잘했네.', { tail: 'br', size: 25 }),
      tipPanel(jelly(170, 200, 1) + momHead(330, 190, .5, { expr: 'happy' }) + waterFront(230, .85, 330),
        '물루 TIP · 물에 뜨기 연습', '숨을 크게 들이마시고 온몸 힘을 빼요.\n무릎을 안고 둥글게 뜨는 해파리 뜨기부터!\n발 닿는 얕은 곳에서, 옆 사람과 함께.'),
    ] },
];
