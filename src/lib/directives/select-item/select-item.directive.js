import SelectTemplate from './select-item.tpl.html'
import { SelectCtrl } from './select-item.controller'

/**
 * @implements {ng.IDirective}
 */
class Select {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = SelectTemplate
    this.scope = {
      item: '=',
    }
    this.controller = SelectCtrl
    this.controllerAs = 'Select'
    this.bindToController = true
  }
}

export { Select }
