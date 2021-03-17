class UploadItemCtrl {
  /**
   * @ngInject
   *
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element
    this.item = Utils.extend(this.item || {}, {
      config: {
        size: 10,
      },
      options: [],
    })
  }
}

export { UploadItemCtrl }
