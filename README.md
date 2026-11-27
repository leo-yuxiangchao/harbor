# Harbor

个人站点：**项目门面 + 博客**。名字取「港湾」——所有项目停泊的地方，访客在这里上岸。

当前阶段：原型已建成（首页/项目/文章/关于全套 + 明暗双主题 + 移动端），**未部署**。

## 技术栈

- Astro 5 + TypeScript（strict），内容走 Content Collections
- 纯 CSS + 自定义属性令牌，无 UI 框架、运行时 JS 只有主题切换和入场动画两段
- 无后端：构建时把 Markdown 渲染成静态 HTML，内容是 Git 里的文件

## 设计

视觉规范以 `.impeccable.md` 的 Design Context 为唯一权威；工作约定见 `CLAUDE.md`。

方向是「清新科技」：冷白底 + 蓝青点缀，科技感来自仪表盘式信息呈现（状态面板、等宽字体 microcopy、点阵网格），不做玻璃拟态、不用黄色暖调（均用户拍板否决）。暗色为深海军蓝夜版。落选的方向稿留档在 `style-drafts/`。

## 目录

```
src/pages/          六个页面（index / projects / blog / about）
src/components/     Header / Footer / ProjectCard
src/layouts/        Base（主题防闪烁内联脚本 + 入场 IntersectionObserver）
src/styles/         tokens.css（明暗令牌）/ global.css（基础 + 组件类）
src/content/        projects/*.md（项目）+ blog/*.md（文章）
src/content.config.ts  内容集合 schema（增字段先改这里）
style-drafts/       换风格时的 HTML 概念稿存档
scripts/screenshot.cjs  全站截图脚本
shots/              截图产物
```

## 本地开发

```bash
npm install
npm run dev        # http://127.0.0.1:4321
npm run build      # 产物 dist/
npm run preview    # 本地预览构建产物
```

注意：强杀 dev 进程可能在 `.astro/` 留下锁文件，导致下次启动假死（无输出、不监听端口）。删掉残留进程后删 `.astro/` 缓存目录再启动即可。

## 内容工作流

**加项目**：`src/content/projects/` 加一个 `.md`，frontmatter 按 schema：

```yaml
title: 项目名
tagline: 一句话定位
description: 列表页用的短描述
status: 开发中 | V1 已投入使用   # 含「已投入使用」显示 LIVE 绿灯，否则 DEV 黄灯
tech: [主要技术, ...]
github: https://github.com/...
updated: '2026-11-26'            # 卡片上的 updated 日期
order: 1                          # 排序,也是首页描边水印的数字来源
```

正文三段式：解决什么 / 关键决策 / 技术。事实必须能与 GitHub 仓库对应。

**加文章**：`src/content/blog/` 加 `.md`，frontmatter 四个字段：

```yaml
---
title: 文章标题                 # 必填,列表/卡片/浏览器标签页都显示它
date: 2026-11-27               # 必填,列表按它倒序
summary: 一句话摘要            # 必填,列表和分享卡片用
category: 踩坑记               # 可选,填了才有分类筛选和标签
---

正文 Markdown……
```

写完 `git push` 即发布（配 GitHub Actions 后自动构建部署）。分类不用预先注册：`.md` 里写一个新的 `category` 值，列表页的筛选 chips、标签总览页、归档页会自动多出这一类——**没有分类管理后台，frontmatter 就是分类的单一事实来源**。

删除/改名分类 = 把对应文章的 `category` 字段改掉或删掉即可，所有页面自动跟随。

正文支持全套 Markdown：标题、列表、表格、代码块（` ```java ` 带语法高亮）、引用、图片、分割线。

**改站名/自我介绍等卡片文案后**：跑 `NODE_PATH='E:\gitWork\study\learning-studio\lumen\node_modules' node scripts/gen-og.cjs` 重新生成 `public/og.png`（OG 分享卡片图），否则分享出去的还是旧图。

**评论（giscus）**：已启用——评论数据存在仓库 Discussions 的 Announcements 分类，访客需 GitHub 登录后评论，零后端。配置在 `src/components/Comments.astro`。

## 截图

借 learning-studio/lumen 的 Playwright 跑（不装依赖）：

```bash
NODE_PATH='E:\gitWork\study\learning-studio\lumen\node_modules' node scripts/screenshot.cjs
```

产物在 `shots/`。跑之前确认 dev server 在 4321 已起。

## 部署

计划 GitHub Pages + GitHub Actions 自动构建，未配置。配好后把 `astro.config.mjs` 的 `site` 占位域名改成真实域名。

## 占位待替换

- 首页 hero 的名字「Leo」与自我介绍、关于页自我介绍
- 邮箱等联系方式（Footer 与关于页有标注）
- `astro.config.mjs` 的 `site`
- `src/content/blog/` 两篇占位文章的正文
