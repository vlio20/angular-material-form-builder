(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('textareaItem', textareaItem);

  function textareaItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/textarea-item/textarea-item.html',
      scope: {
        item: '='
      },
      controller: TextareaItemCtrl,
      controllerAs: 'Textarea',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function TextareaItemCtrl(Utils, $element) {
    this.Element = $element;

    Utils.extend(this.item, {
      config: {}
    });
  }

})(angular);
