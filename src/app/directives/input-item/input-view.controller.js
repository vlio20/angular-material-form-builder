class InputViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils
    this.formItem = {}
  }

  init() {
    this.Utils.extend(this.formItem, {
      config: {},
    })
  }
}

export { InputViewCtrl }
