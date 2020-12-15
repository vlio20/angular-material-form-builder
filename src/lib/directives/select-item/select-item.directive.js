import { default as SelectTemplate } from './select-item.tpl.html'
import { SelectCtrl } from './select-item.controller'

/**
 * @implements {ng.IDirective}
 */
class Select {
  constructor() {
    this.restrict = 'E'
    this.templateUrl = SelectTemplate
    this.scope = {
      item: '=',
    }
    this.controller = SelectCtrl
    this.controllerAs = 'Select'
    this.bindToController = true
  }
}

export { Select }
