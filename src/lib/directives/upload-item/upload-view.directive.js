import { UploadViewCtrl } from './upload-view.controller'
import UploadViewTemplate from './upload-view.tpl.html'

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

    const button = element.find('button')
    const input = angular.element(element[0].querySelector('input[type=file]'))

    const label = element.find('label')
    label[0].style.display = 'none'
    button.bind('click', function () {
      label[0].style.display = 'none'
      input[0].click()
    })

    input.bind('change', function (e) {
      scope.$apply(function () {
        const files = e.target.files

        if (files.length > 0) {
          for (let i = 0; i < files.length; i += 1) {
            if (files[i].size > 10485760) {
              label[0].style.display = 'block'
              return
            }

            ctrl.formItem.options.push({
              name: files[i].name,
              size: files[i].size,
              type: files[i].type,
            })
          }
        }
      })
    })
  }
}

export { UploadView }
