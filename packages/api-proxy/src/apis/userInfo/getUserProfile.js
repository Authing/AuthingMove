import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function getUserProfile (options = {}) {
  return envContext.getUserProfile(options)
}
