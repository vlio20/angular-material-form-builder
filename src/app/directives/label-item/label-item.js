(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('labelItem', LabelItem);

  function LabelItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/label-item/label-item.html',
      scope: {
        item: '='
      },
      controller: LabelItemCtrl,
      controllerAs: 'Label',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function LabelItemCtrl(Utils, $element) {
    this.Element = $element;

    // Utils.extend(this.item, {
    // });
  }

})(angular);
