import _debug from 'debug'
import { NAME } from './constants'

_debug.enable('*:loader')
export default {
  plugin: _debug(`${NAME}:plugin`),
  loader: _debug(`${NAME}:loader`),
}
