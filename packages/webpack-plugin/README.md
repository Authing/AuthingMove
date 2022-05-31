# @authing/authingmove-webpack-plugin

A webpack plugin for AuthingMove compile

## Usage

``` javascript
// webpack.config.js
const AuthingMoveWebpackPlugin = require('@authing/authingmove-webpack-plugin')

module.exports = {
  plugins: [
    new AuthingMoveWebpackPlugin({
      srcMode: __authing_move_src_mode__, // always should be 'wx'
      mode: __authing_move_mode__ // 'wx', 'ali', 'baidu', 'qq', 'tt', 'jd', 'ks', 'qa_webview', 'qa_ux', 'Mpx', 'Taro', 'uni'
    })
  ]
}
```