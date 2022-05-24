import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function setStorage (options = {}) {
  options.encrypt = false
  return envContext.setStorage(options)
}

export function getStorage (options = {}) {
  options.encrypt = false
  return envContext.getStorage(options)
}
