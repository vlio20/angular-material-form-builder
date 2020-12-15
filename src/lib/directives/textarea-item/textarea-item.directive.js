import { TextareaItemCtrl } from './textarea-item.controller'
import { default as TextareaItemTemplate } from './textarea-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class TextareaItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.templateUrl = TextareaItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = TextareaItemCtrl
    this.controllerAs = 'Textarea'
    this.bindToController = true
  }
}

export { TextareaItem }
