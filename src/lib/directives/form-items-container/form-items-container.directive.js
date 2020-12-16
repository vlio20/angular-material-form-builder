import { FormItemsContainerCtrl } from './form-items-container.controller'
import FormItemsContainerTemplate from './form-items-container.tpl.html'

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
    this.template = FormItemsContainerTemplate
    this.controller = FormItemsContainerCtrl
    this.controllerAs = 'container'
    this.bindToController = true
  }
}

export { FormItemsContainer }
