<div align=center>
  <img width="250" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<br />

<div align=center>
  <a href="https://forum.authing.cn/" target="_blank">
    <img src="https://img.shields.io/badge/chat-forum-blue" />
  </a>
  <a href="https://github.com/Authing/AuthingMove" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-success" />
  </a>
  <a href="javascript:;" target="_blank">
    <img src="https://img.shields.io/badge/node-%3E=12-green.svg" />
  </a>
</div>

<br />

简体中文 | [English](https://github.com/Authing/AuthingMove/blob/master/README.md)

<div>AuthingMove 是一款小程序 API 转换器，基于微信小程序 API 语法写一份代码，可同时被编译转换适配其他小程序平台 & 小程序框架 & 快应用</div>

## 多平台适配

|名称|详细
|-----|----|
|原生小程序|wx, ali, baidu, qq, tt, jd, ks
|小程序框架|Taro, uni-app, Mpx
|其他平台|quickapp

## 生态系统

|包名|版本|描述
|-----|----|----|
|@authing/authingmove-api-proxy|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-api-proxy.svg)](https://www.npmjs.com/package/@authing/authingmove-api-proxy)|基于微信小程序语法转换 API |
|@authing/authingmove-core|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-core.svg)](https://www.npmjs.com/package/@authing/authingmove-core)|运行时核心包|
|@authing/authingmove-webpack-plugin|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-webpack-plugin.svg)](https://www.npmjs.com/package/@authing/authingmove-webpack-plugin)|编译核心包|
|@authing/authingmove-cli|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-cli.svg)](https://www.npmjs.com/package/@authing/authingmove-cli)|AuthingMove CLI, 快速创建项目|

## 快速开始

```shell
# 安装脚手架
npm install @authing/authingmove-cli -g

# 初始化项目
authingmove create project-name

# 打开项目
cd project-name

# 开发模式
npm run dev

# 构建生产环境产物
npm run prod
```

## 示例

参考 [authingmove-template](https://github.com/Authing/authingmove-template#usage)

## 问题反馈

如果需要在线技术支持，可访问[官方论坛](https://forum.authing.cn/). 此仓库的 issue 仅用于上报 Bug 和提交新功能特性。

## 开源共建

- Fork 此仓库
- 创建自己的 git 分支 (git checkout -b my-new-feature)
- 提交你的修改 (git commit -am 'Add some feature')
- 将修改内容推送到远程分支 (git push -u origin my-new-feature)
- 创建一个 Pull Request

## 开源许可

[MIT](https://github.com/Authing/AuthingMove/blob/master/LICENSE)

Copyright (c) 2022 Authing

## 友情链接

- [authingmove-template](https://github.com/Authing/authingmove-template)
- [eslint-plugin-authing-nestjs](https://github.com/authing/eslint-plugin-authing-nestjs/)
- [password-encryption](https://github.com/Authing/password-encryption)
- [authing-js-sdk](https://github.com/Authing/authing-js-sdk)
