import { getEnvContext, adaptOptions, handleSuccess, transformTempFiles } from '../../utils'

const envContext = getEnvContext()

export function chooseImage (options = {}) {
  const _options = adaptOptions(options)

  handleSuccess(_options, res => {
    return adaptOptions(res, {}, {
      tempFiles: transformTempFiles(res.tempFiles)
    })
  })

  return envContext.chooseImage(_options)
}
