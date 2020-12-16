import { LabelViewCtrl } from './label-view.controller'
import LabelViewTemplate from './label-view.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class LabelView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout
    this.restrict = 'E'
    this.template = LabelViewTemplate
    this.scope = {
      formItem: '=',
      form: '=',
    }
    this.controller = LabelViewCtrl
    this.controllerAs = 'LabelView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {LabelViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init()
    }, 50)
  }
}

export { LabelView }
