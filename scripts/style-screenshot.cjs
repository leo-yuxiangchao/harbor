// 四个风格稿截图(file:// 直开,无需服务器)
const { chromium } = require('playwright');

const OUT = 'E:/gitWork/study/harbor/shots/styles';
const FILES = ['editorial', 'swiss', 'ink', 'brutal'];

(async () => {
  const browser = await chromium.launch();
  for (const name of FILES) {
    const page = await browser.newPage({ viewport: { width: 1440, height: 950 }, deviceScaleFactor: 2 });
    await page.goto(`file:///E:/gitWork/study/harbor/style-drafts/${name}.html`);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: true });
    await page.close();
    console.log('saved', name);
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
