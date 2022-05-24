import barcode from '@system.barcode'

export function scanCode (options = {}) {
  const { success, fail, complete } = options
  const _options = {
    success,
    fail,
    complete
  }

  return barcode.scan(_options)
}
