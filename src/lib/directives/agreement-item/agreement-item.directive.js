import { AgreementItemCtrl } from './agreement-item.controller'
// import AgreementItemTemplate from './agreement-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class AgreementItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.scope = {
      item: '=',
    }
    this.controller = AgreementItemCtrl
    this.controllerAs = 'Agreement'
    this.bindToController = true
  }
}

export { AgreementItem }
