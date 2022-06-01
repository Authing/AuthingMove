import fetch from '@system.fetch'
import { adaptOptions } from '../../utils'

export function request (options = {}) {
  const _options = adaptOptions(options, {
    dataType: 'responseType'
  }, {
    responseType: options.dataType || 'json'
  })
  return fetch.fetch(_options)
}
