import { AgreementItemCtrl } from './agreement-item.controller'
// import { default as AgreementItemTemplate } from './agreement-item.tpl.html'

/**
 * @ngInject
 */
function AgreementItem() {
  const directive = {
    restrict: 'E',
    // templateUrl: AgreementItemTemplate,
    scope: {
      item: '=',
    },
    controller: AgreementItemCtrl,
    controllerAs: 'Agreement',
    bindToController: true,
  }

  return directive
}

export { AgreementItem }
