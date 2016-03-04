(function (angular) {
  'use strict';

  angular
    .module('angularMaterialFormBuilder')
    .controller('MainController', MainController);

  var vm;

  var json = {
    "items": [
        {
        "type": "textarea",
        "props": {
            "title": "",
            "helpText": ""
        },
        "config": {
            "required": false,
            "placeholder": "From Json"
        },
        "value": ""
        }
    ]
    };

  /** @ngInject */
  function MainController() {
    vm = this;
    vm.form = {
      items: json
    };
  }

  MainController.prototype.addItem = function (type) {
    this.form.items.push({
      type: type
    });
  };

  MainController.prototype.delete = function(item, index) {
    vm.form.items.splice(index, 1);
  };

  MainController.prototype.up = function(item, index) {
    if(index !== 0) {
      var prevItem = vm.form.items[index - 1];
      vm.form.items[index] = prevItem;
      vm.form.items[index - 1] = item;
    }
  };

  MainController.prototype.down = function(item, index) {
    if(index !== vm.form.items.length - 1) {
      var nextItem = vm.form.items[index + 1];
      vm.form.items[index] = nextItem;
      vm.form.items[index + 1] = item;
    }
  };

})(angular);
