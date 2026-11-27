# Harbor — 项目约定

个人站点（项目门面 + 博客），Astro 静态站。设计上下文与视觉规范见 `.impeccable.md`（Design Context 一节为准）。

## 工作方式

1. **先想后写**：动手前说清假设；存在多种理解时列出来问，不擅自选。
2. **能简则简**：不加没要求的功能；不预加「灵活性」。
3. **精准修改**：只动该动的；改动制造的孤儿 import/变量/样式要清掉。
4. **禁止自动提交**：等用户明确说「提交」再 `git commit`；说「推送」再 `git push`。
5. **占位内容纪律**：真实信息（姓名/联系方式/自我介绍）用户没给的，一律显式标注「占位」，禁止编造得像真的。

## 技术约定

- Astro + TypeScript（strict）；内容走 Content Collections（`src/content/`），schema 在 `src/content.config.ts`。
- 样式：纯 CSS + 自定义属性，主题令牌全部在 `src/styles/tokens.css`；颜色禁止写死，一律取变量。
- 主题：`data-theme` 挂 `documentElement`，内联脚本防闪烁；切换状态存 localStorage。
- 动效：只用 opacity/transform；入场 `.reveal` 交错淡入；必须支持 `prefers-reduced-motion`。
- **禁止玻璃拟态**（backdrop-filter、满屏模糊卡片）与黄色暖调——用户明确否决过；科技感的做法见 `.impeccable.md`。
