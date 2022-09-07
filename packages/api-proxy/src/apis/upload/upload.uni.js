import { getEnvContext, handleSuccess, adaptOptions, transformTempFiles } from '../../utils'

const envContext = getEnvContext()

export async function uploadFile (options = {}) {
  const _options = adaptOptions(options)

  handleSuccess(_options, res => {
    return adaptOptions(res, {}, {
      tempFiles: transformTempFiles(res.tempFiles)
    })
  })

  return envContext.uploadFile(_options)
}
