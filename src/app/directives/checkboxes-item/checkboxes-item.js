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
      controllerAs: 'Checkboxes',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function CheckboxesItemCtrl(Utils, $element) {
    this.Element = $element;

    Utils.extend(this.item, {
      config: {
        maxSelections: null
      },
      options: [{
        value: '',
        selected: false
      }]
    });
  }

  CheckboxesItemCtrl.prototype.deleteOption = function (index) {
    this.item.options.splice(index, 1);
  };

  CheckboxesItemCtrl.prototype.addOption = function () {
    this.item.options.push({
      value: '',
      selected: false
    });

    setTimeout(function() {
      var options = this.Element.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

})(angular);
