import { RadioButtonViewCtrl } from './radio-button-view.controller'
import { default as RadioButtonViewTemplate } from './radio-button-view.tpl.html'

class RadioButtonView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout
    this.restrict = 'E'
    this.templateUrl = RadioButtonViewTemplate
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '=',
    }
    this.controller = RadioButtonViewCtrl
    this.controllerAs = 'RadioButtonView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {RadioButtonViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init()
    }, 50)
  }
}

export { RadioButtonView }
