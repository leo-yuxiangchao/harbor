---
title: Learning Studio
tagline: AI 驱动的个人学习系统
description: AI 三阶段建课、对话式学习、结构化评价与认知状态追踪、间隔复习。Java 21 + Spring Boot 后端，Vue 3 前端，TDD + Playwright E2E 护航。
status: 已投入使用
tech: [Java 21, Spring Boot 3, MyBatis-Plus, MySQL 8, Vue 3, Element Plus, Pinia]
github: https://github.com/leo-yuxiangchao/learning-studio
updated: '2026-11-24'
order: 3
---

## 解决什么

自学最大的问题是「不知道自己是不是真的学会了」。Learning Studio 让 AI 先帮你把一门课建出来（三阶段：大纲 → 蓝图 → 正式课程），再用对话式学习和结构化评价持续追踪你的认知状态——哪个知识点稳了、哪个有误区、哪个该复习了。

## 几个定下来的决策

- 认知水平只升不降：评价并发时用乐观锁，回退性的旧评价不会把认知打回去。
- AI 输出必须过严格校验，缺字段、超范围直接失败，不做静默兜底。
- 学习进度单一口径，任何页面不得重复实现判定逻辑。
- 全程 TDD：生产代码必须先有观察过失败的测试；E2E 用独立 mock 服务器，不碰真实后端。

## 技术

Java 21 + Spring Boot 3.5 + MyBatis-Plus + Flyway + MySQL 8；Vue 3 + TypeScript + Element Plus + Pinia。AI 调用走可替换的 Provider 抽象，未配置 key 时回落 Mock。
