(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('labelView', LabelView);

  /*@ngInject*/
  function LabelView($timeout) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/label-item/label-view.html',
      scope: {
        formItem: '=',
        form: '='
      },
      controller: LabelViewCtrl,
      controllerAs: 'LabelView',
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
  function LabelViewCtrl(Utils) {
    this.Utils = Utils;
  }

  LabelViewCtrl.prototype.init = function () {
    this.Utils.extend(this.formItem, {});
  };


})(angular);
