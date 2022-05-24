import wxaccount from '@service.wxaccount'
import { error } from '../../utils'

export function login (options = {}) {
  const type = wxaccount.getType()

  if (type !== 'APP') {
    return error('wxaccount not available!')
  }

  return wxaccount.authorize(options)
}
