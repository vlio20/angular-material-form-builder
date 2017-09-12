(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('selectView', SelectView);

  /*@ngInject*/
  function SelectView($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/select-item/select-view.html',
      scope: {
        formItem: '=',
        isPreview: '&',
        form: '='
      },
      controller: SelectViewCtrl,
      controllerAs: 'SelectView',
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
  function SelectViewCtrl(Utils) {
    this.Utils = Utils;
  }

  SelectViewCtrl.prototype.init = function () {

    this.Utils.extend(this.formItem, {
      config: {},
      options: []
    });
  };


})(angular);
