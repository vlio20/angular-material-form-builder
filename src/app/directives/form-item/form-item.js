(function (angular) {
  'use strict';

  angular.module('angularMaterialFormBuilder')
    .directive('formItem', FormItem);

  /** @ngInject */
  function FormItem($compile) {
    var directive = {
      restrict: 'E',
      //link: linker,
      scope: {
        item: '=',
        onDelete: '&',
        onUp: '&',
        onDown: '&',
        index: '&'
      },
      controller: FormItemCtrl,
      controllerAs: 'FormItem',
      bindToController: true,
      templateUrl: 'app/directives/form-item/form-item.html'
    };

    function linker(scope, elem, attrs, ctrl) {
      var template = ctrl._getItemTemplate(attrs.type);
      var el = $compile(template)(scope);
      elem.append(el);

      ctrl.init();
    }

    return directive;
  }

  /*@ngInject*/
  function FormItemCtrl($attrs, Utils) {
    this.Attrs = $attrs;
    this.Utils = Utils;
    this.templates = {
      input: '<input-item item="FormItem.item"></input-item>',
      chooseFromList: '<bet-form-choose-from-list item="FormItem.item"></bet-form-choose-from-list>',
      multipleChoices: '<radio-button-item item="FormItem.item"></radio-button-item>',
      matrix: '<matrix-item item="FormItem.item"></matrix-item>',
      checkboxes: '<checkboxes-item item="FormItem.item"></checkboxes-item>',
      textarea: '<textarea-item item="FormItem.item"></textarea-item>'
    };
  }

  FormItemCtrl.prototype.init = function () {
    this.Utils.extend(this.item, {
      type: this.Attrs.type,
      props: {
        title: '',
        helpText: ''
      },
      config: {
        required: false
      }
    });
  };

  FormItemCtrl.prototype.deleteClicked = function() {
    this.onDelete({item: this.item, index: this.index()});
  };

  FormItemCtrl.prototype._getItemTemplate = function (type) {
    var prefix = '' +
      '<div class="form-item-container">' +
        '<div class="form-item-actions">' +
          '<md-button class="md-button" ng-if="FormItem.Attrs.onDelete" ng-click="FormItem.deleteClicked()"> ' +
            '<i class="material-icons small">delete</i>' +
          '</md-button>' +
          '<md-button class="md-button" ng-if="FormItem.Attrs.onUp" ng-click="FormItem.onUp({item: FormItem.item, index: FormItem.index()})"> ' +
            '<i class="material-icons small">arrow_drop_up</i>' +
          '</md-button>' +
          '<md-button class="md-button" ng-if="FormItem.Attrs.onDown" ng-click="FormItem.onDown({item: FormItem.item, index: FormItem.index()})"> ' +
            '<i class="material-icons small">arrow_drop_down</i>' +
          '</md-button>' +
        '</div>' +
        '<md-input-container>' +
          '<label>Field Title</label>' +
          '<input ng-model="FormItem.item.props.title"/>' +
        '</md-input-container>' +
        '<md-input-container>' +
          '<label>Help Text</label>' +
          '<input ng-model="FormItem.item.props.helpText" />' +
        '</md-input-container>';

    var suffix = '' +
      '<md-input-container>' +
        '<md-checkbox ng-model="FormItem.item.config.required">Required field</md-checkbox>' +
      '</md-input-container>' +
    '</div>';

    return prefix + this.templates[type] + suffix;
  };

})(angular);
