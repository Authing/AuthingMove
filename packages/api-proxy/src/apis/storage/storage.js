import { getEnvContext, adaptOptions } from '../../utils'

const envContext = getEnvContext()

export function setStorage (options = {}) {
  const _options = adaptOptions(options, {}, {
    encrypt: false
  })
  return envContext.setStorage(_options)
}

export function getStorage (options = {}) {
  const _options = adaptOptions(options, {}, {
    encrypt: false
  })
  return envContext.getStorage(_options)
}

export function removeStorage (options = {}) {
  return envContext.removeStorage(options)
}

export function clearStorage (options = {}) {
  return envContext.clearStorage(options)
}
