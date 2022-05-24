import { adaptOptions, handleSuccess } from '../../utils'

export function login (options = {}) {
  const _options = adaptOptions(options)

  handleSuccess(_options, res => {
    return adaptOptions(res, {
      authCode: 'code'
    })
  })

  return my.getAuthCode(_options)
}
