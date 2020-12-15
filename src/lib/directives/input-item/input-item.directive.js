import { InputItemCtrl } from './input-item.controller'
import { default as InputItemTemplate } from './input-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class InputItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.templateUrl = InputItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = InputItemCtrl
    this.controllerAs = 'Input'
    this.bindToController = true
  }
}

export { InputItem }
