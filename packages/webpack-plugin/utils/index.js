const path = require('path')

exports.addInfix = function addInfix (resourcePath, infix, extname) {
  extname = extname || path.extname(resourcePath)
  return resourcePath.substring(0, resourcePath.length - extname.length) + '.' + infix + extname
}
