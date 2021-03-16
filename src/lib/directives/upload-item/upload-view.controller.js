class UploadViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($scope, Utils) {
    this.Scope = $scope
    this.Utils = Utils
    this.formItem = {}
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem || {}, {
      config: {},
      options: [],
    })
  }
}

export { UploadViewCtrl }
