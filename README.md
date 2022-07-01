# AuthingMove

<div>
  <img width="300" src="https://files.authing.co/authing-console/authing-logo-new-20210924.svg" />
</div>

<br />

<div>AuthingMove is a miniapp API converter, based on wechat miniprogram syntax, be converted into multi platform miniapps & frameworks & quickapp.</div>

<br />

<div>
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

## Platforms

|Name|Details
|-----|----|
|native miniapp|wx, ali, baidu, qq, tt, jd, ks
|framework|Taro, uni-app, Mpx
|other|quickapp

## Ecosystem

|Package|Version|Description
|-----|----|----|
|@authing/authingmove-api-proxy|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-api-proxy.svg)](https://www.npmjs.com/package/@authing/authingmove-api-proxy)|Transform runtime APIs based on wechat miniprogram syntax|
|@authing/authingmove-core|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-core.svg)](https://www.npmjs.com/package/@authing/authingmove-core)|Runtime core|
|@authing/authingmove-webpack-plugin|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-webpack-plugin.svg)](https://www.npmjs.com/package/@authing/authingmove-webpack-plugin)|Compiler core|
|@authing/authingmove-cli|[![npm version](https://badge.fury.io/js/@authing%2Fauthingmove-cli.svg)](https://www.npmjs.com/package/@authing/authingmove-cli)|AuthingMove CLI, create a project quickly|

## Quick start

```shell
# install CLI
npm install @authing/authingmove-cli -g

# init project
authingmove create project-name

# into project
cd project-name

# development
npm run dev

# production
npm run prod
```

## Example

Please refer to the usage of [authingmove-template](https://github.com/Authing/authingmove-template#usage)

## Questions

For questions and support please use the [official forum](https://forum.authing.cn/). The issue list of this repo is exclusively for bug reports and feature requests.

## Contribution

- Fork it
- Create your feature branch (git checkout -b my-new-feature)
- Commit your changes (git commit -am 'Add some feature')
- Push to the branch (git push -u origin my-new-feature)
- Create new Pull Request

## License

MIT

## Links

- [authingmove-template](https://github.com/Authing/authingmove-template)
- [eslint-plugin-authing-nestjs](https://github.com/authing/eslint-plugin-authing-nestjs/)
- [password-encryption](https://github.com/Authing/password-encryption)
