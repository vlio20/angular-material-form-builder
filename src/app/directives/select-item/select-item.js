(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('selectItem', Select);

  function Select() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/select-item/select-item.html',
      scope: {
        item: '='
      },
      controller: SelectCtrl,
      controllerAs: 'Select',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function SelectCtrl(Utils, $element) {
    this.Element = $element;
    Utils.extend(this.item, {
      config: {},
      options: [{
        value: ''
      }]
    });
  }

  SelectCtrl.prototype.deleteOption = function (index) {
    this.item.options.splice(index, 1);
  };

  SelectCtrl.prototype.addOption = function () {
    this.item.options.push({
      value: ''
    });

    setTimeout(function() {
      var options = this.Element.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

})(angular);
