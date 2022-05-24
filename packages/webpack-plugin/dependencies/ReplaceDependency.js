const NullDependency = require('webpack/lib/dependencies/NullDependency')

class ReplaceDependency extends NullDependency {
  constructor (replacement, range) {
    super()
    this.replacement = replacement
    this.range = range
  }

  get type () {
    return 'AuthingMove replace'
  }

  updateHash (hash) {
    super.updateHash(hash)
    hash.update(this.replacement)
  }
}

ReplaceDependency.Template = class ReplaceDependencyTemplate {
  apply (dependency, source) {
    source.replace(
      dependency.range[0],
      dependency.range[1] - 1,
      '/* AuthingMove replacement */' + dependency.replacement
    )
  }
}

module.exports = ReplaceDependency
