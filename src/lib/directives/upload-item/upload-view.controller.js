class UploadViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor($scope, Utils, $element) {
    this.Scope = $scope
    this.Element = $element
    this.Utils = Utils
    this.formItem = {}
  }
  init() {
    this.isMultiple = false
    this.showAllowed = false
    this.formItem = this.Utils.extend(this.formItem || {}, {
      config: {},
      options: [],
    })
    if (this.isPreview()) {
      this._enableWatchers()
    }
  }
  _updateMultiple() {
    this.isMultiple = !!this.formItem.config.multipleUpload
    const input = angular.element(
      this.Element[0].querySelector('input[type=file]')
    )
    if (input) {
      if (this.isMultiple) {
        input.attr('multiple', 'multiple')
      } else {
        input.removeAttr('multiple')
      }
    }
  }

  _updateAccept() {
    this.showAllowed = !!this.formItem.config.showAccept
    const input = angular.element(
      this.Element[0].querySelector('input[type=file]')
    )
    if (input) {
      if (this.showAllowed) {
        input.attr('accept', this.formItem.config.accept)
      } else {
        input.removeAttr('accept')
      }
    }
  }

  _enableWatchers() {
    this.Scope.$watch('UploadView.formItem.config.multipleUpload', (newVal) => {
      if (newVal !== undefined) {
        this._updateMultiple()
      }
    })

    this.Scope.$watch('UploadView.formItem.config.showAccept', (newVal) => {
      if (newVal !== undefined) {
        this._updateAccept()
      }
    })
  }

  removeItem(index) {
    this.formItem.options.splice(index, 1)
  }
}
export { UploadViewCtrl }
