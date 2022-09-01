import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function chooseImage (options = {}) {
  return envContext.chooseMedia(options)
}
