class LabelViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {ng.ISCEService} $sce
   */
  constructor(Utils, $sce) {
    this.Utils = Utils
    this.$sce = $sce
  }

  init() {
    this.Utils.extend(this.formItem, {})
  }

  get sanitizedTitle() {
    return this.$sce.trustAsHtml(this.formItem.value)
  }
}

export { LabelViewCtrl }
