(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('radioButtonView', RadioButtonView);

  /*@ngInject*/
  function RadioButtonView($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/radio-button-item/radio-button-view.html',
      scope: {
        formItem: '=',
        isPreview: '&',
        form: '='
      },
      controller: RadioButtonViewCtrl,
      controllerAs: 'RadioButtonView',
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
  function RadioButtonViewCtrl(Utils) {
    this.Utils = Utils;
  }

  RadioButtonViewCtrl.prototype.init = function () {

    this.Utils.extend(this.formItem, {
      config: {},
      options: []
    });
  };


})(angular);
