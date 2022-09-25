export default class AuthingMove {
  static use (plugin: PluginObj | Install, options?: IObject): void

  static request(config: WxRequestConfig): Promise<WxResponseData>
  static setStorage(options: SetStorageOptions): Promise<SetStorageCallbackData>
  static getStorage(options: GetStorageOptions): Promise<GetStorageCallbackData>
  static removeStorage(options: RemoveStorageOptions): Promise<RemoveStorageSuccessData | RemoveStorageFailData>
  static scanCode(options: ScanCodeOptions): Promise<ScanCodeSuccessData | ScanCodeFailData>
  static login(options?: LoginOptions): Promise<LoginCallbackData>
  static chooseImage(options: ChooseImageOptions): Promise<ChooseImageCallbackData>
  static uploadFile (options: UploadFileOptions): Promise<UploadFileCallbackData>
  static getUserProfile(options: GerUserProfileOptions): Promise<GetUserProfileCallbackData>
  static checkSession(options?: CheckSessionOptions): Promise<CheckSessionCallbackData>
}

export interface CheckSessionOptions {
  success?: (res: CheckSessionCallbackData) => void
  fail?: (res: CheckSessionCallbackData) => void
  complete?: (res: CheckSessionCallbackData) => void
}
export interface CheckSessionCallbackData {
  errMsg: 'checkSession:ok' | 'errMsg: "checkSession:fail'
}

export type WxMiniprogramLang = 'en' | 'zh_CN' | 'zh_TW'

export interface GerUserProfileOptions {
  desc: string
  lang?: WxMiniprogramLang
  success?: (res: GetUserProfileCallbackData) => void
  fail?: (res: GetUserProfileCallbackData) => void
  complete?: (res: GetUserProfileCallbackData) => void
}

export interface WxMiniprogramUserInfo {
  nickName: string
  avatarUrl: string
  gender: 0 | 1 | 2
  country: string
  province: string
  city: string
  language: WxMiniprogramLang
}

export interface GetUserProfileCallbackData {
  userInfo: WxMiniprogramUserInfo
  rawData: string
  signature: string
  encryptedData: string
  iv: string
  cloudID: string
}

export interface Install {
  (...args: unknown[]): void
}

export interface PluginObj {
  install: Install
}

type IObject = Record<string, any>

export type WxMethod =
  | 'OPTIONS'
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'TRACE'
  | 'CONNECT'

export type WxDataType = 'json' | string

export type WxResponseType = 'text' | 'arraybuffer'

export interface WxResponseDataProfile {
  redirectStart: number
  redirectEnd: number
  fetchStart: number
  domainLookupStart: number
  domainLookupEnd: number
  connectStart: number
  connectEnd: number
  SSLconnectionStart: number
  SSLconnectionEnd: number
  requestStart: number
  requestEnd: number
  responseStart: number
  responseEnd: number
  rtt: number
  estimate_nettype:
    | unknown
    | 'offline'
    | 'slow 2g'
    | '2g'
    | '3g'
    | '4g'
    | 'last/0'
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
  httpRttEstimate: number
  transportRttEstimate: number
  downstreamThroughputKbpsEstimate: number
  throughputKbps: number
  peerIP: string
  port: number
  socketReused: boolean
  sendBytesCount: number
  receivedBytedCount: number
  protocol: 'http1.1' | 'h2' | 'quic' | unknown
}

export interface WxResponseData {
  data: {
    statusCode: number
    message: string
    data: any
  }
  statusCode: number
  header: IObject
  cookies: string[]
  profile: WxResponseDataProfile
}

export interface WxResponseError {
  errMsg: string
}

export interface WxRequestConfig {
  url: string
  data?: IObject
  header?: IObject
  timeout?: number
  method?: WxMethod
  dataType?: WxDataType
  responseType?: WxResponseType
  enableHttp2?: boolean
  enableQuic?: boolean
  enableCache?: boolean
  enableHttpDNS?: boolean
  httpDNSServiceId?: string
  enableChunked?: boolean
  forceCellularNetwork?: boolean
  success?: (res: WxResponseData) => void
  fail?: (error: WxResponseError) => void
  complete?: (res: WxResponseData | WxResponseError) => void
}

export interface SetStorageCallbackData {
  errMsg: string
}

export interface SetStorageOptions {
  key: string
  data: unknown
  encrypt?: boolean
  success?: (res: SetStorageCallbackData) => void
  fail?: (res: SetStorageCallbackData) => void
  complete?: (res: SetStorageCallbackData) => void
}

export interface GetStorageCallbackData {
  errMsg: 'getStorage:ok' | 'getStorage:fail data not found',
  data?: any
}

export interface GetStorageOptions {
  key: string
  encrypt?: boolean
  success?: (res: GetStorageCallbackData) => void
  fail?: (res: GetStorageCallbackData) => void
  complete?: (res: GetStorageCallbackData) => void
}

export interface RemoveStorageSuccessData {
  errMsg: "removeStorage:ok"
}

export interface RemoveStorageFailData {
  errMsg: "removeStorage:fail"
}

export interface RemoveStorageOptions {
  key: string,
  success?: (res: RemoveStorageSuccessData) => void
  fail?: (res: RemoveStorageFailData) => void
  complete?: (res: RemoveStorageSuccessData | RemoveStorageFailData) => void
}

export interface ScanCodeSuccessData {
  result: string
  scanType: string
  charSet: string
  path: string
  rawData: string
}

export interface ScanCodeFailData {
  errMsg: 'scanCode:fail'
}

export interface ScanCodeOptions {
  onlyFromCamera?: boolean
  scanType?: Array<'barCode' | 'qrCode'>
  success?: (res: ScanCodeSuccessData) => void
  fail?: (res: ScanCodeFailData) => void
  complete?: (res: ScanCodeSuccessData | ScanCodeFailData) => void
}

export interface LoginCallbackData {
  code: string
}

export interface LoginOptions {
  timeout?: number
  success?: (res: LoginCallbackData) => void 
  fail?: (res: LoginCallbackData) => void 
  complete?: (res: LoginCallbackData) => void 
}

export type MediaSourceTypeItem = 'album' | 'camera'

export type SizeTypeItem = 'original' | 'compressed'

export interface ImageItem {
  fileType: 'image'
  size: number
  tempFilePath: string
}

export interface ChooseImageCallbackData {
  errMsg: 'chooseMedia:ok'
  type: 'image',
  tempFiles: ImageItem[]
}

export interface ChooseImageOptions {
  count?: number
  sourceType?: MediaSourceTypeItem[]
  maxDuration?: number
  sizeType?: SizeTypeItem[]
  success?: (res: ChooseImageSuccessData) => void
  fail?: (res: ChooseImageFailData) => void
  complete?: (res: ChooseImageSuccessData | ChooseImageFailData) => void
}

export interface UploadFileOptions {
  url: string
  filePath: string
  name: string
  header?: IObject
  formData?: IObject
  timeout?: number
  success?: (res: UploadFileCallbackData) => void
  fail?: (res: UploadFileCallbackData) => void
  complete?: (res: UploadFileCallbackData) => void
}

export interface UploadFileCallbackData {
  statusCode: number
  errMsg: 'uploadFile:ok' | 'uploadFile:fail'
  data: string
  header: IObject
}
