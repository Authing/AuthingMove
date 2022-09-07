import { getEnvContext } from '../../utils'

const envContext = getEnvContext()

export async function getUserProfile (options = {}) {
  const [, res] = await envContext.getUserProfile(options)
  return res
}
