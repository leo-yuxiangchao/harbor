import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages 自定义域名
  site: 'https://harbor.xcyu.work',
  server: { host: '127.0.0.1', port: 4321 },
  // 关掉 dev 工具栏,原型演示/截图不被遮挡
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
