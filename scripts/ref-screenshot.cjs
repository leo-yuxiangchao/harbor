// 抓 Halo 主题市场实况(经代理)
const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ proxy: { server: 'http://192.168.1.44:30789' } });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await page.goto('https://www.halo.run/store/apps?type=THEME', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await page.waitForTimeout(8000);
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'E:/gitWork/study/harbor/shots/ref/halo-theme-store.png' });
  console.log('saved halo-theme-store');
  await browser.close();
})().catch((e) => { console.error(e.message); process.exit(1); });
