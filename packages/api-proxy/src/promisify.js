import { generateFromMap, getEnvContext, noop } from './utils'

const envContext = getEnvContext()

export function promisify (apis) {
  const fromMap = generateFromMap()

  return Object.keys(apis).reduce((map, key) => {
    if (typeof apis[key] !== 'function') {
      return map
    }

    map[key] = function (...args) {
      if (promisifyFilter(key)) {
        return apis[key].apply(apis, args)
      }

      if (!args[0] || fromMap[args[0]]) {
        args.unshift({
          success: noop,
          fail: noop
        })
      }

      const options = args[0]
      let returned

      const promise = new Promise((resolve, reject) => {
        const originalSuccess = options.success
        const originalFail = options.fail

        options.success = function success (res) {
          originalSuccess && originalSuccess.call(this, res)
          resolve(res)
        }

        options.fail = function fail (res) {
          originalFail && originalFail.call(this, res)
          reject(res)
        }

        returned = apis[key].apply(envContext, args)
      })

      promise.__returned = returned
      return promise
    }

    return map
  }, {})
}

function promisifyFilter (key) {
  return /^get\w*Manager$/.test(key) ||
    /^create\w*Context$/.test(key) ||
    /^(on|off)/.test(key) ||
    /\w+Sync$/.test(key)
}
