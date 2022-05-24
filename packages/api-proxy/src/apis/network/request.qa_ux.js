import fetch from '@system.fetch'
import { adaptOptions } from '../../utils'

export function request (options = {}) {
  const _options = adaptOptions(options, {
    dataType: 'responseType'
  })
  return fetch.fetch(_options)
}
