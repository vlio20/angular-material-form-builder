(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('formView', FormView);

  function FormView() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/form-view/form-view.html',
      scope: {
        form: '='
      },
      controller: FormViewCtrl,
      controllerAs: 'FormView',
      bindToController: true
    };

    return directive;
  }

  function FormViewCtrl() {
    //this.config.options = this.config.options || [{}];
  }

})(angular);
