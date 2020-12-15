import { default as SelectViewTemplate } from './select-view.tpl.html'
import { SelectViewCtrl } from './select-view.controller'

/**
 * @implements {ng.IDirective}
 */
class SelectView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout

    this.restrict = 'E'
    this.templateUrl = SelectViewTemplate
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '=',
    }
    this.controller = SelectViewCtrl
    this.controllerAs = 'SelectView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {SelectViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init()
    }, 50)
  }
}

export { SelectView }
