import SelectTemplate from './select-item.tpl.html'
import { SelectItemCtrl } from './select-item.controller'

/**
 * @implements {ng.IDirective}
 */
class SelectItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = SelectTemplate
    this.scope = {
      item: '=',
    }
    this.controller = SelectItemCtrl
    this.controllerAs = 'Select'
    this.bindToController = true
  }
}

export { SelectItem }
