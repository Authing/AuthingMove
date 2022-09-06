import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export async function login (options = {}) {
  const [, res] = await envContext.login(options)
  return res
}
