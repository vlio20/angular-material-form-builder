import { DateItemCtrl } from './date-item.controller'
import DateItemTemplate from './date-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class DateItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = DateItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = DateItemCtrl
    this.controllerAs = 'Date'
    this.bindToController = true
  }
}

export { DateItem }
