import { UploadViewCtrl } from './upload-view.controller'
import UploadViewTemplate from './upload-view.tpl.html'

const MB = 1024 * 1024

class UploadView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout
    this.template = UploadViewTemplate
    this.restrict = 'E'
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '=',
    }
    this.controller = UploadViewCtrl
    this.controllerAs = 'UploadView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {UploadViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, element, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init()
    }, 50)

    const button = angular.element(element[0].querySelector('.upload-button'))
    const input = angular.element(element[0].querySelector('input[type=file]'))
    const label = angular.element(element[0].querySelector('label'))

    if (label.length) {
      label.css('display', 'none')
    }

    button.on('click', () => {
      label.css('display', 'none')
      typeof input.trigger === 'function'
        ? input.trigger('click')
        : input[0].click()
    })

    input.on('change', (e) => {
      scope.$apply(function () {
        /**
         * @type {File[]}
         */
        const files = Array.from(e.target.files)
        // Max allowed size in MB
        const maxSizeMB = ctrl.formItem.config.size * MB
        const exceedsSize = files.some((file) => file.size >= maxSizeMB)
        if (exceedsSize) {
          label.css('display', 'block')
          label.text(ctrl.formItem.config.sizeErrMessage)
          ctrl.formItem.options = []
        } else {
          ctrl.formItem.options = files.map((file) => {
            const { name, size, type } = file
            return { name, size, type, file }
          })
        }
      })
    })
  }
}

export { UploadView }
