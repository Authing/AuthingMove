import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function request (options = {}) {
  return envContext.request(options)
}
