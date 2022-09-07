export * from './runtime-env'

export function generateFromMap () {
  const platforms = ['wx', 'ali', 'baidu', 'qq', 'tt', 'jd', 'ks', 'qa_webview', 'qa_ux', 'Mpx', 'Taro', 'uni']
  return platforms.reduce((map, platform) => {
    map[`__authing_move_src_mode_${platform}__`] = platform
    return map
  }, {})
}

export function makeMap (arr) {
  return arr.reduce((map, item) => {
    map[item] = true
    return map
  }, {})
}

export function warn (message) {
  console.warn && console.warn(`[AuthingMove/api-proxy warn in "${__authing_move_mode__}"]:\n ${message}`)
}

export function error (message) {
  console.error && console.error(`[AuthingMove/api-proxy error in "${__authing_move_mode__}"]:\n ${message}`)
}

export function noop () {}

export function adaptOptions (originalOptions, matchedOptions = {}, extraOptions = {}) {
  let options = {}

  Object.keys(originalOptions).forEach(key => {
    const _key = matchedOptions.hasOwnProperty(key) ? matchedOptions[key] : key
    if (_key) {
      options[_key] = originalOptions[key]
    }
  })

  options = Object.assign({}, options, extraOptions)

  return options
}

export function handleSuccess (originalOptions, wrappedSuccess = noop, context) {
  if (!originalOptions.success) {
    return
  }

  const _this = context || this
  const cachedSuccess = originalOptions.success

  originalOptions.success = res => cachedSuccess.call(_this, wrappedSuccess(res) || res)
}

export function transformTempFiles (tempFiles) {
  return tempFiles.map(file => {
    return {
      ...file,
      tempFilePath: file.path
    }
  })
}
