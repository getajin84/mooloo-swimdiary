// 렌더된 에피소드의 메타데이터(제목·소개·TIP)를 JSON으로 출력
const EPS = require('./all');
const strip = s => s.replace(/<[^>]+>/g, '').trim();
const out = EPS.map(e => {
  const p4 = e.panels[3];
  const texts = [...p4.matchAll(/<text[^>]*>([^<]*)<\/text>/g)].map(m => m[1]);
  const ti = texts.findIndex(t => /TIP|한마디/.test(t));
  const tipTitle = ti >= 0 ? texts[ti].replace(/^◆\s*/, '') : '';
  const tipBody = ti >= 0 ? texts.slice(ti + 1).filter(t => t.length > 6) : [];
  return { ep: e.ep, title: e.title.replace('\n', ' '), teaser: e.teaser, tipTitle, tipBody };
});
console.log(JSON.stringify(out, null, 1));
