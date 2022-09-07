import { getEnvContext, handleSuccess } from '../../utils'

const envContext = getEnvContext()

export async function uploadFile (options = {}) {
  const _options = adaptOptions(options)

  handleSuccess(_options, res => {
    return adaptOptions(res, {
      tempFilePaths: 'tempFiles'
    })
  })

  return envContext.uploadFile(_options)
}
