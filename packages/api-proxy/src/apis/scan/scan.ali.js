import { error, adaptOptions, handleSuccess } from '../../utils'

export function scanCode (options = {}) {
  const _options = adaptOptions(options, {
    onlyFromCamera: 'hideAlbum',
    scanType: 'type'
  })

  const typeMap = {
    barCode: 'bar',
    qrCode: 'qr'
  }

  if (_options.type) {
    const _type = typeMap[_options.type]
    if (_type) {
      _options.type = _type
    } else {
      error('支付宝小程序只能扫描【条形码】和【二维码】，请将 type 设置为 barCode 或 qrCode !!!')
      _options.type = 'qr'
    }
  }

  handleSuccess(_options, res => {
    return adaptOptions(res, {
      code: 'result'
    })
  })

  return my.scan(_options)
}
