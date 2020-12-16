import { TextareaItemCtrl } from './textarea-item.controller'
import TextareaItemTemplate from './textarea-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class TextareaItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = TextareaItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = TextareaItemCtrl
    this.controllerAs = 'Textarea'
    this.bindToController = true
  }
}

export { TextareaItem }
