const rawLoader = require('./raw-loader')

module.exports = {
  process(src, filename, config, options) {
    return rawLoader(src)
  },
}
