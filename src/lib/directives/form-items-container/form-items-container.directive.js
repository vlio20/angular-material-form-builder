import { FormItemsContainerCtrl } from './form-items-container.controller'
import { default as FormItemsContainerTemplate } from './form-items-container.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class FormItemsContainer {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.scope = {
      form: '=',
    }
    this.templateUrl = FormItemsContainerTemplate
    this.controller = FormItemsContainerCtrl
    this.controllerAs = 'container'
    this.bindToController = true
  }
}

export { FormItemsContainer }
