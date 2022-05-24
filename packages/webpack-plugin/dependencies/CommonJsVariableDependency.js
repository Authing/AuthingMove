const ModuleDependency = require('webpack/lib/dependencies/ModuleDependency')
const makeSerializable = require('webpack/lib/util/makeSerializable')
const InitFragment = require('webpack/lib/InitFragment')

class CommonJsVariableDependency extends ModuleDependency {
  constructor (request, name = '') {
    super(request)
    this.name = name
  }

  serialize (context) {
    const { write } = context
    write(this.name)
    super.serialize(context)
  }

  deserialize (context) {
    const { read } = context
    this.name = read()
    super.deserialize(context)
  }

  updateHash (hash, context) {
    hash.update(this.request)
    hash.update(this.name)
    super.updateHash(hash, context)
  }

  get type () {
    return 'AuthingMove cjs variable'
  }

  get category () {
    return 'commonjs'
  }
}

CommonJsVariableDependency.Template = class CommonJsVariableDependencyTemplate extends ModuleDependency.Template {
  apply (
    dep,
    source,
    {
      runtimeTemplate,
      moduleGraph,
      chunkGraph,
      runtimeRequirements,
      initFragments
    }
  ) {
    const importedModule = moduleGraph.getModule(dep)
    const requireExpr = runtimeTemplate.moduleExports({
      module: importedModule,
      chunkGraph,
      request: dep.request,
      weak: dep.weak,
      runtimeRequirements
    })

    let expr = '/* AuthongMove cjs variable */ '
    if (dep.name) expr += 'var ' + dep.name + ' = '
    expr += requireExpr + '.default' + ';\n'

    initFragments.push(
      new InitFragment(
        expr,
        InitFragment.STAGE_CONSTANTS,
        1,
        dep.request
      )
    )
  }
}

makeSerializable(
  CommonJsVariableDependency,
  './webpack-plugin/dependencies/CommonJsVariableDependency'
)

module.exports = CommonJsVariableDependency
