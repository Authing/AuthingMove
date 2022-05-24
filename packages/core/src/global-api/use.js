export function initUse (AuthingMove) {
  AuthingMove.use = function use (plugin, options = {}) {
    const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))

    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    const args = [options]

    args.unshift(this)

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args)
    }

    installedPlugins.push(plugin)

    return this
  }
}
