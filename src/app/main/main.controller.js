(function() {
  'use strict';

  angular
    .module('angularMaterialFormBuilder')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1444323825140;
    vm.showToastr = showToastr;
  }
})();
