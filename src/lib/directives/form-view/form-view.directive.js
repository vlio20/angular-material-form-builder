import { FormViewCtrl } from './form-view.controller'
import FormViewTemplate from './form-view.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class FormView {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = FormViewTemplate
    this.scope = {
      form: '=',
    }
    this.controller = FormViewCtrl
    this.controllerAs = 'FormView'
    this.bindToController = true
  }

  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {FormViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */
  link(scope, element, attrs, ctrl) {
    ctrl.init()
  }
}

export { FormView }
