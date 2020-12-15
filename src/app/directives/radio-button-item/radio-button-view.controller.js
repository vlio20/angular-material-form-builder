class RadioButtonViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils
    this.formItem = {}
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem, {
      config: {},
      options: [],
    })
  }
}

export { RadioButtonViewCtrl }
