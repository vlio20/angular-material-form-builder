/**
 * @ngInject
 *
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {ng.IScope} $scope
 * @param {JQLite} $element
 */
function UploadItemCtrl($scope, Utils, $element) {
  this.Scope = $scope
  this.Element = $element
  this.item = Utils.extend(this.item || {}, {
    config: {},
    options: [],
  })
}

export { UploadItemCtrl }
