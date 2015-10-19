(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('matrixItem', matrixItem);

  function matrixItem() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/directives/matrix-item/matrix-item.html',
      scope: {
        item: '='
      },
      controller: MatrixItemCtrl,
      controllerAs: 'Matrix',
      bindToController: true
    };

    return directive;
  }

  /*@ngInject*/
  function MatrixItemCtrl(Utils, $document) {
    this.RowContainer = angular.element($document[0].querySelector('.rowContainer'));
    this.ColumnContainer = angular.element($document[0].querySelector('.columnContainer'));

    Utils.extend(this.item, {
      config: {
        rows: [{
          value: ''
        }],
        columns: [{
          value: ''
        }]
      }
    });
  }

  MatrixItemCtrl.prototype.deleteRow = function(index) {
    this.item.config.rows.splice(index, 1);
  };

  MatrixItemCtrl.prototype.addRow = function() {
    this.item.config.rows.push({
      value: ''
    });

    setTimeout(function() {
      var options = this.RowContainer.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

  MatrixItemCtrl.prototype.deleteColumn = function(index) {
    this.item.config.columns.splice(index, 1);
  };

  MatrixItemCtrl.prototype.addColumn = function() {
    this.item.config.columns.push({
      value: ''
    });

    setTimeout(function() {
      var options = this.ColumnContainer.find('input');
      var addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  };

})(angular);
