import { AgreementItemCtrl } from './agreement-item.controller'
// import { default as AgreementItemTemplate } from './agreement-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class AgreementItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    // this.templateUrl= AgreementItemTemplate,
    this.scope = {
      item: '=',
    }
    this.controller = AgreementItemCtrl
    this.controllerAs = 'Agreement'
    this.bindToController = true
  }
}

export { AgreementItem }
