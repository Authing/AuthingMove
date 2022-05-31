# @authing/authingmove-core

exported `AuthingMove`:

``` typescript
interface PluginObj {
  install: (...args: unknown[]) => void
}

export default class AuthingMove {
  static use (plugin: PluginObj | Function, options?: Record<string, unknown>): void
}

```
