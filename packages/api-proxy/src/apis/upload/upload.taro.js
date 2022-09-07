import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export async function uploadFile (options = {}) {
  return envContext.uploadFile(options)
}
