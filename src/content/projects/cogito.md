---
title: Cogito 我思
tagline: AI 生成、随你演化的专属题库——先答后看的主动回忆式刷题
description: 主动回忆式刷题产品：AI 按你的意向画像生成专属题库，作答后随反馈演化（加深/场景/更难/更易/自由五通道），带掌握度追踪与复习队列。
status: MVP 已建成
tech: [Go, Gin, GORM, MySQL 8, Vue 3, TypeScript, Pinia, DeepSeek]
github: https://github.com/leo-yuxiangchao/cogito
url: https://cogito.xcyu.work
updated: '2026-11-28'
order: 0
---

## 解决什么

普通刷题产品的题是固定的，刷完就结束了。Cogito 反过来：题库是起点不是终点——AI 先按你的学习意向（考研、求职、考证……）生成一份专属题库，之后每轮作答的反馈都会让题库演化：想深挖就加深、想要场景题就变场景、觉得难了就降难。刷题从「消耗题库」变成「养题库」。

## 怎么刷

- **先答后看**：答案只在 reveal 时下发，逼你先主动回忆——这是认知科学里效果最好的记忆方式，产品红线是「不看答案没法自评」。
- **作答闭环**：自评 → reveal → 掌握度更新 → 作答记录 → 用户题目状态 → 复习队列，全链路落地。
- **五通道演化**：deepen / scenario / harder / easier / free，每轮反馈驱动 `evolve_state` 合并，题库跟着你走。
- **广场**：官方题库池 + 基于画像的推荐，可以领取副本到自己名下（幂等领取，副本冻结不被原库更新干扰）。

## 技术

Go 1.23 + Gin + GORM + MySQL 8（8 张表，启动自动迁移，golang-migrate 嵌入）；AI 生成走进程内异步 worker + LLM 客户端，无 key 时回落 Mock（Asynq 留作后续可替换实现）。前端 Vue 3 + TypeScript + Pinia，明暗双主题。E2E 两套脚本覆盖主链路与广场链路，20 项检查全 PASS。
