import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function checkSession (options = {}) {
  return envContext.checkSession(options)
}
