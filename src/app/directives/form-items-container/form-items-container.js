(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('formItemsContainer', FormItemsContainer);

  /** @ngInject */
  function FormItemsContainer() {
    var directive = {
      restrict: 'E',
      scope: {
        form: '='
      },
      controller: FormItemsContainerCtrl,
      controllerAs: 'container',
      bindToController: true,
      templateUrl: 'app/directives/form-items-container/form-items-container.html'
    };

    return directive;
  }

  var vm;

  /*@ngInject*/
  function FormItemsContainerCtrl() {
    vm = this;
  }

  FormItemsContainerCtrl.prototype.delete = function(item, index) {
    vm.form.items.splice(index, 1);
  };

  FormItemsContainerCtrl.prototype.up = function(item, index) {
    if(index !== 0) {
      var prevItem = vm.form.items[index - 1];
      vm.form.items[index] = prevItem;
      vm.form.items[index - 1] = item;
    }
  };

  FormItemsContainerCtrl.prototype.down = function(item, index) {
    if(index !== vm.form.items.length - 1) {
      var nextItem = vm.form.items[index + 1];
      vm.form.items[index] = nextItem;
      vm.form.items[index + 1] = item;
    }
  };

})(angular);
