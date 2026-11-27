// 生成 OG 分享卡片图:scripts/og.html → public/og.png (1200x630)
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto('file:///E:/gitWork/study/harbor/scripts/og.html');
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'E:/gitWork/study/harbor/public/og.png' });
  await browser.close();
  console.log('saved public/og.png');
})().catch((e) => { console.error(e); process.exit(1); });
