import transformApi from './transform'
import { error } from './utils'
import { promisify } from './promisify'

export default function install (AuthingMove, options = {}) {
  const {
    custom = {} // custom transform rules
  } = options
  const from = __authing_move_src_mode__ || 'wx'
  const to = __authing_move_mode__ || 'wx'

  const transformedApis = transformApi({
    from,
    to,
    custom
  })

  // reserve some expansion space
  const apis = Object.assign({}, transformedApis, promisify(transformedApis))

  Object.keys(apis).forEach(api => {
    try {
      if (typeof apis[api] !== 'function') {
        AuthingMove[api] = apis[api]
        return
      }

      AuthingMove[api] = (...args) => apis[api].apply(AuthingMove, args)
    } catch (e) {
      error(`Call ${AuthingMove}.${api} error:` + JSON.stringify(e))
    }
  })
}
