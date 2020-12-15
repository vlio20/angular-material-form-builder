class Utils {
  /**
   * Recursively extend object properties
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object}
   */
  extend(dest, src) {
    return Object.keys(src).reduce(
      (result, key) => {
        if (typeof result[key] === 'undefined') {
          result[key] = src[key]
        } else if (typeof src[key] === 'object') {
          result[key] = this.extend(result[key], src[key])
        }
        return result
      },
      typeof dest === 'undefined' ? {} : dest
    )
  }
}

export { Utils }
