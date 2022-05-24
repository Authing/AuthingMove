import { adaptOptions, handleSuccess } from '../../utils'

export function request (options = {}) {
  const _options = adaptOptions(options, {
    header: 'headers'
  })

  handleSuccess(_options, res => {
    return adaptOptions(res, {
      Headers: 'header',
      status: 'statusCode'
    })
  })

  // version > 1.11.0
  if (my.canIUse('request')) {
    return my.request(_options)
  }

  // will be archived, support dingding miniprogram
  return my.httpRequest(_options)
}
