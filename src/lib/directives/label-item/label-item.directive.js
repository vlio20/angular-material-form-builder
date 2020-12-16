import { LabelItemCtrl } from './label-item.controller'
import LabelItemTemplate from './label-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class LabelItem {
  constructor() {
    this.restrict = 'E'
    this.template = LabelItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = LabelItemCtrl
    this.controllerAs = 'Label'
    this.bindToController = true
  }
}

export { LabelItem }
