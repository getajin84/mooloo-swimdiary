const fs = require('fs');
const { chromium } = require('playwright');
const EPS = require('./all');
const C = require('./carousel');
const only = process.argv[2] ? process.argv[2].split(',') : null;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1350 } });
  for (const e of EPS) {
    if (only && !only.includes(e.ep)) continue;
    const name = `EP${e.ep}_${e.title.replace('\n', ' ')}`;
    const dir = `${__dirname}/out/${String(e.upload).padStart(2, '0')}_${name}`;
    fs.mkdirSync(dir, { recursive: true });
    const slides = [['1_표지', C.cover(e)], ['2_제목', C.titleSlide(e)], ...[0, 1, 2, 3].map(i => [`${i + 3}_컷${i + 1}`, C.panelSlide(e, i)])];
    for (const [n, html] of slides) {
      const tmp = require('os').tmpdir() + '/_s_' + process.pid + '.html'; fs.writeFileSync(tmp, html);
      await p.goto('file://' + tmp); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(250);
      await p.screenshot({ path: `${dir}/${n}.png` });
    }
    console.log('ok', name);
  }
  await b.close();
})();
