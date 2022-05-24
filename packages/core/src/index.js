import AuthingMove from './instance'
import { initGlobalApi } from './global-api'

initGlobalApi(AuthingMove)

AuthingMove.version = __version__

export default AuthingMove
