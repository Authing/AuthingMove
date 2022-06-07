# @authing/authingmove-core

exported `AuthingMove`:

``` typescript
interface PluginObj {
  install: (...args: unknown[]) => void
}

export default class AuthingMove {
  static use (plugin: PluginObj | Function, options?: Record<string, unknown>): void
  static request(config: WxRequestConfig): Promise<WxResponseData>
  static setStorage(options: SetStorageOptions): Promise<SetStorageCallbackData>
  static getStorage(options: GetStorageOptions): Promise<GetStorageSuccessData>
  static removeStorage(options: RemoveStorageOptions): Promise<RemoveStorageSuccessData>
  static scanCode(options: ScanCodeOptions): Promise<ScanCodeSuccessData>
  static login(options: LoginOptions): Promise<LoginSuccessData>
  // ......
}

```

## Usage

Please refer to the usage of [authingmove-template](https://github.com/Authing/authingmove-template#usage)
