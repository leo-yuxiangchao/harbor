// Harbor 原型截图脚本:借 learning-studio/lumen 的 playwright 运行
// 用法: NODE_PATH=E:\gitWork\study\learning-studio\lumen\node_modules node scripts/screenshot.cjs
const { chromium } = require('playwright');

const BASE = 'http://127.0.0.1:4321';
const OUT = 'E:/gitWork/study/harbor/shots';

const SHOTS = [
  ['/', '01-home-light', 'light', { width: 1440, height: 900 }, true],
  ['/', '02-home-dark', 'dark', { width: 1440, height: 900 }, true],
  ['/projects/', '03-projects-light', 'light', { width: 1440, height: 900 }, false],
  ['/projects/inkflow/', '04-detail-dark', 'dark', { width: 1440, height: 900 }, false],
  ['/blog/', '05-blog-light', 'light', { width: 1440, height: 900 }, false],
  ['/blog/hello-harbor/', '06-post-dark', 'dark', { width: 1440, height: 900 }, false],
  ['/', '07-home-mobile', 'light', { width: 390, height: 844 }, true],
  ['/about/', '08-about-dark', 'dark', { width: 1440, height: 900 }, false],
];

(async () => {
  const browser = await chromium.launch();
  for (const [path, name, scheme, viewport, fullPage] of SHOTS) {
    const ctx = await browser.newContext({ viewport, colorScheme: scheme, deviceScaleFactor: 2 });
    const page = await ctx.newPage();
    await page.goto(BASE + path, { waitUntil: 'networkidle' });
    // 滚到底触发所有入场动画,再回顶部
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(700);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/${name}.png`, fullPage });
    await ctx.close();
    console.log('saved', name);
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
