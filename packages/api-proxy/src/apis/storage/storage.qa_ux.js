import storage from '@system.storage'
import { adaptOptions } from '../../utils'

export function setStorage (options = {}) {
  const _options = adaptOptions(options, {
    data: 'value'
  })
  return storage.set(_options)
}

export function getStorage (options = {}) {
  return storage.get(options)
}

export function removeStorage (options = {}) {
  return storage.delete(options)
}

export function clearStorage (options = {}) {
  return storage.clear(options)
}
