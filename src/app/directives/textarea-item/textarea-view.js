(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('textareaView', TextareaView);

  /*@ngInject*/
  function TextareaView($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/textarea-item/textarea-view.html',
      scope: {
        formItem: '=',
        form: '='
      },
      controller: TextareaViewCtrl,
      controllerAs: 'TextareaView',
      bindToController: true,
      link: linker
    };

    function linker(scope, elem, attrs, ctrl) {

      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      $timeout(function() {
        ctrl.init();
      }, 50);
    }

    return directive;
  }

  /*@ngInject*/
  function TextareaViewCtrl(Utils) {
    this.Utils = Utils;
  }

  TextareaViewCtrl.prototype.init = function () {

    this.Utils.extend(this.formItem, {
      config: {}
    });
  };


})(angular);
