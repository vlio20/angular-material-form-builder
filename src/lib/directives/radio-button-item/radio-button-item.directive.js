import { RadioButtonCtrl } from './radio-button-item.controller'
import { default as RadioButtonTemplate } from './radio-button-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */

class RadioButton {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.templateUrl = RadioButtonTemplate
    this.scope = {
      item: '=',
    }
    this.controller = RadioButtonCtrl
    this.controllerAs = 'RadioButton'
    this.bindToController = true
  }
}

export { RadioButton }
