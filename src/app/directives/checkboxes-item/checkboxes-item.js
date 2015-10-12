(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('checkboxesItem', CheckboxesItem);

  function CheckboxesItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/checkboxes-item/checkboxes-item.html',
      scope: {
        item: '='
      },
      controller: CheckboxesItemCtrl,
      controllerAs: 'CheckboxesItem',
      bindToController: true
    };

    return directive;
  }

  function CheckboxesItemCtrl() {
    this.item = angular.merge({
      config: {
        maxSelections: null
      },
      options: [{
        value: '',
        selected: false
      }]
    }, this.item);
  }

  CheckboxesItemCtrl.prototype.deleteOption = function ($index) {
    this.item.options.splice($index, 1);
  };

  CheckboxesItemCtrl.prototype.addOption = function () {
    this.item.options.push({
      value: '',
      selected: false
    });
  };

})(angular);
