const path = require('path')
const { addInfix } = require('../utils')

module.exports = class AddModePlugin {
  constructor (source, mode, target) {
    this.source = source
    this.mode = mode
    this.target = target
  }

  apply (resolver) {
    const target = resolver.ensureHook(this.target)
    const mode = this.mode

    resolver.getHook(this.source).tapAsync('AddModePlugin', (request, resolveContext, callback) => {
      if (request.mode) {
        return callback()
      }

      const obj = {
        mode
      }
      const resourcePath = request.path
      const extname = path.extname(resourcePath)

      obj.path = addInfix(resourcePath, mode, extname)

      resolver.doResolve(
        target,
        Object.assign({}, request, obj),
        `add mode: ${mode}`,
        resolveContext,
        callback
      )
    })
  }
}
