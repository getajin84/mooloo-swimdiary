// 전체 에피소드 집계 — episodes*.js를 모두 읽고, 번호로 업로드 위치 계산 (하루 3편, 피드 왼쪽부터 작은 번호)
const fs = require('fs');
const EPS = [];
for (const f of fs.readdirSync(__dirname).filter(f => /^episodes.*\.js$/.test(f)).sort()) EPS.push(...require('./' + f));
EPS.sort((a, b) => +a.ep - +b.ep);
EPS.forEach(e => { const i = +e.ep - 1; e.cover.day = Math.floor(i / 3) + 1; e.cover.col = i % 3; e.upload = i + 1; });
module.exports = EPS;
