---
title: InkFlow 墨流工作台
tagline: 小说推文视频生产流水线，从 2 小时一条到 30 分钟一条
description: 登记新书 → AI 脚本 → 人工打磨钩子 → 分镜 → 生图 → TTS 配音 → FFmpeg 合成 → 发布包。发布环节永久人工，系统只出发布包。
status: V1 已投入使用
tech: [Spring Boot 3, Java 17, MyBatis-Plus, Vue 3, Element Plus, DeepSeek, FFmpeg]
github: https://github.com/leo-yuxiangchao/InkFlow
updated: '2026-11-26'
order: 2
---

## 解决什么

小说推文视频（给小说配画面和配音的引流短视频）纯手工做一条要两小时。InkFlow 把能自动的环节全部自动化：AI 出脚本和分镜、TTS 配音、FFmpeg 合成成片，人只留在两处——打磨开头钩子，和最后的发布。

## 几个定下来的决策

- 发布环节永久人工，这是平台风控红线，系统只产出「发布包」（标题、评论、检查清单）。
- 状态机驱动：草稿 → 脚本 → 分镜 → 生图 → 配音 → 合成 → 发布，每一步可回看重做。
- 生图支持三种模式：快捷模板组装、AI 对话生成提示词、纯手动；出图走火山方舟 Seedream，也可手动出图回传。
- 合成走异步队列，进度实时可见，失败可重试。

## 技术

Spring Boot 3.5 + Java 17 + MyBatis-Plus + Flyway；Vue 3 + Element Plus + ECharts。外部依赖 DeepSeek（脚本/分镜）、edge-tts（配音）、FFmpeg（合成）。
