import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Pages 项目页地址;若换自定义域名改这里即可
  site: 'https://leo-yuxiangchao.github.io/harbor',
  server: { host: '127.0.0.1', port: 4321 },
  // 关掉 dev 工具栏,原型演示/截图不被遮挡
  devToolbar: { enabled: false },
  integrations: [sitemap()],
});
