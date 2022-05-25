const ReplaceDependency = require('./dependencies/ReplaceDependency')
const CommonJsVariableDependency = require('./dependencies/CommonJsVariableDependency')
const NullFactory = require('webpack/lib/NullFactory')
const AddModePlugin = require('./resolvers/AddModePlugin')

module.exports = class AuthingMoveWebpackPlugin {
  constructor (options) {
    options.srcMode = options.srcMode || 'wx'
    options.mode = options.mode || 'wx'
    this.options = options
  }

  apply (compiler) {
    enhanceResolver.call(this, compiler)
    configExternal.call(this, compiler)
    tapThisCompilation.call(this, compiler)
    tapEmit.call(this, compiler)
  }
}

function tapThisCompilation (compiler) {
  compiler.hooks.thisCompilation.tap('AuthingMoveWebpackPlugin', (compilation, { normalModuleFactory }) => {
    if (!compilation.__AuthingMove) {
      compilation.__AuthingMove = {
        options: this.options
      }
    }

    replaceGlobalWx(compilation, normalModuleFactory)
  })
}

function tapEmit (compiler) {
  compiler.hooks.emit.tap('AuthingMoveWebpackPlugin', compilation => {
    replaceWebpackVariables(compilation)
    injectFrameworkDependency(compilation)
  })
}

function enhanceResolver (compiler) {
  const addModePlugin = new AddModePlugin('before-file', this.options.mode, 'file')
  if (Array.isArray(compiler.options.resolve.plugins)) {
    compiler.options.resolve.plugins.push(addModePlugin)
  } else {
    compiler.options.resolve.plugins = [addModePlugin]
  }
}

function configExternal (compiler) {
  const _this = this

  compiler.options.externals = [
    function ({ request }, callback) {
      if (/^(@system|@service)\./img.test(request) && _this.options.mode === 'qa_ux') {
        return callback(null, 'commonjs ' + request)
      }
      callback()
    }
  ]
}

function replaceGlobalWx (compilation, normalModuleFactory) {
  compilation.dependencyFactories.set(ReplaceDependency, new NullFactory())
  compilation.dependencyTemplates.set(ReplaceDependency, new ReplaceDependency.Template())

  compilation.dependencyFactories.set(CommonJsVariableDependency, normalModuleFactory)
  compilation.dependencyTemplates.set(CommonJsVariableDependency, new CommonJsVariableDependency.Template())

  normalModuleFactory.hooks.parser.for('javascript/auto').tap('AuthingMoveWebpackPlugin', parser => {
    parser.hooks.expression.for('wx').tap('AuthingMoveWebpackPlugin', expression => {
      let _expression
      const module = parser.state.module

      if (expression.type === 'Identifier') {
        _expression = expression
      }

      if (!_expression) {
        return
      }

      if (/runtime-env/.test(parser.state.module.resource)) {
        return
      }

      // Only wechat as base is supported, so folowing codes is fixed
      const name = 'AuthingMove'

      // Original platform be wrapped into 'AuthingMove';
      // uni-app have their own global variables, and need not to 'import';
      // taro need to 'import' by inject.
      const replaceContent = 'AuthingMove'
      const dep = new ReplaceDependency(replaceContent, _expression.range)
      parser.state.current.addPresentationalDependency(dep)

      let needInject = true

      // eslint-disable-next-line no-unused-vars
      for (const dep of module.dependencies) {
        if (dep instanceof CommonJsVariableDependency && dep.name === name) {
          needInject = false
          break
        }
      }
      if (needInject) {
        const dep = new CommonJsVariableDependency('@authing/authingmove-core', name)
        module.addDependency(dep)
      }
    })
  })
}

function replaceWebpackVariables (compilation) {
  Object.keys(compilation.assets).forEach(key => {
    const content = compilation.assets[key]
      .source()
      .replace(/__webpack_require__/g, '__authing_webpack_require__')
      .replace(/__webpack_exports__/g, '__authing_webpack_exports__')

    compilation.assets[key] = {
      size: () => content.length,
      source: () => content
    }
  })
}

function injectFrameworkDependency (compilation) {
  const frameworkMap = {
    Taro: 'import Taro from "@tarojs/taro";'
  }

  Object.keys(compilation.assets).forEach(key => {
    const content = compilation.assets[key].source()
    const importStatement = frameworkMap[compilation.__AuthingMove.options.mode]

    if (importStatement) {
      const newContent = importStatement + '\n\n' + content
      compilation.assets[key] = {
        size: () => newContent.length,
        source: () => newContent
      }
    }
  })
}
