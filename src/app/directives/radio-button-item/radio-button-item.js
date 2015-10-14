(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('radioButtonItem', RadioButton);

  function RadioButton() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/radio-button-item/radio-button-item.html',
      scope: {
        item: '='
      },
      controller: RadioButtonCtrl,
      controllerAs: 'RadioButton',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function RadioButtonCtrl(Utils) {
    Utils.extend(this.item, {
      config: {},
      options: [{
        value: ''
      }]
    });
  }

  RadioButtonCtrl.prototype.deleteOption = function (index) {
    this.item.options.splice(index, 1);
  };

  RadioButtonCtrl.prototype.addOption = function () {
    this.item.options.push({
      value: ''
    });
  };

})(angular);
