(function (angular) {
  'use strict';

  angular
    .module('angularMaterialFormBuilder')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];
  }
})(angular);
