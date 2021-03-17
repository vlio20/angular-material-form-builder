import { RadioButtonItemCtrl } from './radio-button-item.controller'
import RadioButtonTemplate from './radio-button-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */

class RadioButtonItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = RadioButtonTemplate
    this.scope = {
      item: '=',
    }
    this.controller = RadioButtonItemCtrl
    this.controllerAs = 'RadioButton'
    this.bindToController = true
  }
}

export { RadioButtonItem }
