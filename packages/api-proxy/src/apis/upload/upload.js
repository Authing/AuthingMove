import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function uploadFile (options = {}) {
  return envContext.uploadFile(options)
}
