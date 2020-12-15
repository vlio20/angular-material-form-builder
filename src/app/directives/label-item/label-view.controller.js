class LabelViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils
  }

  init() {
    this.Utils.extend(this.formItem, {})
  }
}

export { LabelViewCtrl }
