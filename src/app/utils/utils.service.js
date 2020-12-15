class Utils {
  /**
   *
   * @param {Object} dest
   * @param {Object} src
   */
  extend(dest, src) {
    return Object.keys(src).reduce(
      (result, key) => {
        if (!result.hasOwnProperty(key)) {
          result[key] = src[key]
        } else if (typeof src[key] === 'object') {
          result = this.extend(result[key], src[key])
        }
        return result
      },
      typeof dest === 'undefined' ? {} : dest
    )
  }
}

export { Utils }
