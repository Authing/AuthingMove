export function getEnvContext () {
  const noopEnv = {}

  switch (__authing_move_mode__) {
  case 'wx':
  case 'Mpx':
    return wx
  case 'ali':
    return my
  case 'baidu':
    return swan
  case 'qq':
    return qq
  case 'tt':
    return tt
  case 'jd':
    return jd
  case 'ks':
    return ks
  case 'qa_webview':
    return qa
  case 'qa_ux':
    return noopEnv
  case 'Taro':
    return Taro
  case 'uni':
    return uni
  }
}
