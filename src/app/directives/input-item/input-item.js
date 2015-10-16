(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('inputItem', InputItem);

  function InputItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/input-item/input-item.html',
      scope: {
        item: '='
      },
      controller: InputItem,
      controllerAs: 'Input',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function InputItemCtrl(Utils, $element) {
    this.Element = $element;

    Utils.extend(this.item, {
      config: {
        type: 'text'
      }
    });
  }

})(angular);
