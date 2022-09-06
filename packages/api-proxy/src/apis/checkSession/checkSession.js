import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export function checkSession () {
  return envContext.checkSession()
}
