---
title: Aurum
tagline: 家庭共享记账，统计可按个人 / 家庭两种口径切换
description: 以家庭为单位的记账应用：成员各自记账，统计一键切换个人 / 家庭两种口径。Go 后端 + uni-app 前端，轻奢纸感账簿视觉。
status: 已投入使用
tech: [Go, Gin, GORM, MySQL 8, uni-app, Vue 3, TypeScript]
github: https://github.com/leo-yuxiangchao/aurum
url: https://aurum.xcyu.work
updated: '2026-11-26'
order: 1
---

## 解决什么

市面上的记账应用大多以「个人」为单位。家庭场景里，账是大家一起花的，统计却想看两种口径：我花了多少、我们家一共花了多少。Aurum 以家庭为单位记账，统计时传不传成员 ID 就是个人 / 家庭两种视角。

## 几个定下来的决策

- 家庭内账目全透明，不做私密账。
- 流水的修改、删除仅限录入人本人，且一律软删。
- 成员退出后历史流水保留；一人只属一个家庭。
- 管理台与记账前台强制分离，管理员看数据全只读且金额脱敏。

## 技术

Go 1.22 + Gin + GORM + MySQL 8，迁移随应用启动自动执行。前端 uni-app + Vue 3 + TypeScript，H5 优先，跨端能力保留给以后的小程序。视觉是「轻奢纸感账簿」：象牙纸面、暖墨、鎏金点缀，颜色全部走 CSS 变量，换肤是纯前端的事。
