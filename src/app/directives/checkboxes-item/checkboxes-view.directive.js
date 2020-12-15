import { default as CheckboxesViewTemplate } from './checkboxes-view.tpl.html'
import { CheckboxesViewCtrl } from './checkboxes-view.controller'

/**
 * @implements {ng.IDirective}
 */
class CheckboxesView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout

    this.restrict = 'E'
    this.templateUrl = CheckboxesViewTemplate
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '=',
    }
    this.controller = CheckboxesViewCtrl
    this.controllerAs = 'CheckboxesView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {CheckboxesViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, element, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init()
    }, 50)
  }
}

export { CheckboxesView }
