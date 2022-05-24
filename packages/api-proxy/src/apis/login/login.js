import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function login (options = {}) {
  return envContext.login(options)
}
