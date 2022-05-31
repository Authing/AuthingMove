# @authing/authingmove-api-proxy

## Usage
```
// import AuthingMove runtime packages
import AuthingMove from '@authing/authingmove-core'
import apiProxy from '@authing/authingmove-api-proxy'

AuthingMove.use(apiProxy)

// your codes, use wechat miniprogram syntax
// support ts type
// all methods return 'Promise'
wx.request({}).then(res => {})
wx.setStorage({}).catch(res => {})
// ..............
```