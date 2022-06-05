import { error, getEnvContext, generateFromMap } from './utils'
import * as transformedApi from './apis'

const fromMap = generateFromMap()

function joinName (from = '', to = '') {
  const _from = `__authing_move_src_mode_${from}__`
  return `${fromMap[_from]}_${to}`
}

export default function transformApi (options) {
  const envContext = getEnvContext()
  const needProxy = Object.create(null)

  Object.keys(transformedApi).forEach(key => {
    needProxy[key] = envContext[key] || transformedApi[key]
  })

  const apis = Object.create(null)

  Object.keys(needProxy).forEach(api => {
    if (typeof needProxy[api] !== 'function') {
      apis[api] = needProxy[api]
      return
    }

    apis[api] = (...args) => {
      let from = options.from
      const to = options.to

      if (args.length) {
        from = args.pop()

        if (typeof from !== 'string' || !fromMap[from]) {
          args.push(from)
          from = options.from
        }
      }

      const fromTo = joinName(from, to)

      if (options.custom[fromTo] && options.custom[fromTo][api]) {
        return options.custom[fromTo][api].apply(this, args)
      }

      if (transformedApi[api]) {
        return transformedApi[api].apply(this, args)
      }

      if (envContext[api]) {
        return envContext[api].apply(this, args)
      }

      error(`"${api}" method does not exist in the current context`)
    }
  })

  return apis
}
