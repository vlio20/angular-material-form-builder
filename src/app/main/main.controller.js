(function (angular) {
  'use strict';

  angular
    .module('angularMaterialFormBuilder')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    //vm.form = { "items": [ { "type": "checkboxes", "bla": 6, "props": { "title": "asdasd", "helpText": "adasdasd" }, "config": { "maxSelections": 1, "required": true }, "options": [ { "value": "13", "selected": false }, { "value": "222", "selected": false } ] } ] };
    vm.form = {
      items: []
    };
  }

  MainController.prototype.addItem = function (type) {
    this.form.items.push({
      type: type
    });
  };

})(angular);
