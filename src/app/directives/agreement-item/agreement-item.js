(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('agreementItem', AgreementItem);

  function AgreementItem() {
    var directive = {
      restrict: 'E',
      // templateUrl: 'app/directives/agreement-item/agreement-item.html',
      scope: {
        item: '='
      },
      controller: AgreementItemCtrl,
      controllerAs: 'Agreement',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function AgreementItemCtrl(Utils, $element) {
    this.Element = $element;

    Utils.extend(this.item || {}, {
      config: {
        maxSelections: null
      },
      options: [{
        value: '',
        selected: false
      }]
    });
  }

})(angular);
