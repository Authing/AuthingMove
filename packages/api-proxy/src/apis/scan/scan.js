import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function scanCode (options = {}) {
  return envContext.scanCode(options)
}
