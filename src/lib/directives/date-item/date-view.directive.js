import { DateViewCtrl } from './date-view.controller'
import DateViewTemplate from './date-view.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class DateView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout
    this.restrict = 'E'
    this.template = DateViewTemplate
    this.scope = {
      formItem: '=',
      form: '=',
    }
    this.controller = DateViewCtrl
    this.controllerAs = 'DateView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {FormItemCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init()
    }, 50)
  }
}

export { DateView }
