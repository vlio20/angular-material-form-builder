(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('checkboxesView', CheckboxesView);

  /*@ngInject*/
  function CheckboxesView() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/checkboxes-item/checkboxes-view.html',
      scope: {
        formItem: '=',
        isValid: '=',
        isPreview: '&',
        form: '='
      },
      controller: CheckboxesViewCtrl,
      controllerAs: 'CheckboxesView',
      bindToController: true,
      link: linker
    };

    function linker(scope, elem, attrs, ctrl) {
      ctrl.init();
    }

    return directive;
  }

  /*@ngInject*/
  function CheckboxesViewCtrl($scope) {
    this.Scope = $scope;
    this.formItem = angular.extend({
      config: {},
      options: []
    }, this.formItem);

    this.selectedOptions = this._getSelectedOptions();
    this.disableOptions = false;
  }

  CheckboxesViewCtrl.prototype.init = function () {
    this.isValid = true;
    this._updateView();
    this._updateValidity();
    if(this.isPreview()) {
     this._enableWatchers();
    }
  };

  CheckboxesViewCtrl.prototype.toggleSelectedOption = function (option) {
    this.selectedOptions = this._getSelectedOptions();
    this._updateView();
    this._updateValidity();
  };

  CheckboxesViewCtrl.prototype._getSelectedOptions = function () {
    return this.formItem.options.filter(function (option) {
      return option.selected;
    });
  };

  CheckboxesViewCtrl.prototype._updateView = function () {
    if (!this.formItem.config.maxSelections) {
      this.disableOptions = false;
    } else if (this.selectedOptions.length === this.formItem.config.maxSelections) {
      this.disableOptions = true;
    } else {
      this.disableOptions = false;
    }
  };

  CheckboxesViewCtrl.prototype._updateValidity = function () {
    if(this.formItem.config.required) {
      this.isValid = this.selectedOptions.length > 0;
    } else {
      this.isValid = true;
    }

    this.form.$setValidity('minSelections', this.isValid);
  };

  CheckboxesViewCtrl.prototype._enableWatchers = function () {
    this.Scope.$watch('CheckboxesView.formItem.config.required', function(newVal) {
      if(newVal !== undefined) {
        this._updateView();
        this._updateValidity();
      }
    }.bind(this))
  };

})(angular);
