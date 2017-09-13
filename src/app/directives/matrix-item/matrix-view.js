(function (angular) {
    'use strict';

    angular.module('angularMaterialFormBuilder')
      .directive('matrixView', MatrixView);

    /*@ngInject*/
    function MatrixView($timeout) {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/directives/matrix-item/matrix-view.html',
        scope: {
          formItem: '=',
          isPreview: '&',
          form: '='
        },
        controller: MatrixViewCtrl,
        controllerAs: 'MatrixView',
        bindToController: true,
        link: linker
      };

      function linker(scope, elem, attrs, ctrl) {

        //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
        $timeout(function () {
          ctrl.init();
        }, 50);
      }

      return directive;
    }

    /*@ngInject*/
    function MatrixViewCtrl($scope, Utils) {
      this.Scope = $scope;
      this.Utils = Utils;
      this.isValid = true;
    }

    MatrixViewCtrl.prototype.init = function () {
      this.Utils.extend(this.formItem, {
        config: {
          rows: [],
          columns: []
        }
      });

      this._updateValidity();
      if (this.isPreview()) {
        this._enableWatchers();
      }
    };

    MatrixViewCtrl.prototype._updateValidity = function () {
      var valid = true;
      if (this.formItem.config.required) {
        for (var i = 0; i < this.formItem.config.rows.length; i++) {
          if (!this.formItem.config.rows[i].hasOwnProperty('selected')) {
            valid = false;
            break;
          }
        }
      }

      this.isValid = valid;
      this.form.$setValidity('required', this.isValid);
    };

    MatrixViewCtrl.prototype._enableWatchers = function () {
      this.Scope.$watchGroup(['MatrixView.formItem.config.required',
                         'MatrixView.formItem.config.rows.length'], function (newVal) {
        if (newVal !== undefined) {
          this._updateValidity();
        }
      }.bind(this));
    };

  })
(angular);
