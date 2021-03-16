(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["angular-material-form-builder"] = factory();
	else
		root["angular-material-form-builder"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ index_module
});

;// CONCATENATED MODULE: ./src/lib/directives/upload-item/upload-item.tpl.html
/* harmony default export */ const upload_item_tpl = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Upload.item.options\"\n>\n  <md-switch\n    ng-model=\"Upload.item.config.multipleUpload\"\n    ng-true-value=\"true\"\n    ng-false-value=\"false\"\n  >\n    Multiple\n  </md-switch>\n\n  <md-input-container class=\"md-block\">\n    <span>File size: {{Upload.item.config.size}} Mb</span>\n    <input\n      type=\"number\"\n      id=\"size\"\n      name=\"size\"\n      min=\"1\"\n      max=\"10\"\n      step=\"0.5\"\n      aria-label=\"size\"\n      ng-model=\"Upload.item.config.size\"\n    />\n  </md-input-container>\n\n  <md-input-container class=\"md-block\">\n    <label>Size error message</label>\n    <textarea\n      ng-model=\"Upload.item.config.sizeErrMessage\"\n      md-maxlength=\"150\"\n      rows=\"2\"\n    ></textarea>\n  </md-input-container>\n\n  <md-switch\n    ng-model=\"Upload.item.config.showAccept\"\n    ng-true-value=\"true\"\n    ng-false-value=\"false\"\n  >\n    Show Types allowed\n  </md-switch>\n\n  <md-input-container class=\"md-block\" ng-if=\"Upload.item.config.showAccept\">\n    <label>Types allowed</label>\n    <textarea\n      ng-model=\"Upload.item.config.accept\"\n      md-maxlength=\"150\"\n      rows=\"2\"\n    ></textarea>\n  </md-input-container>\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/upload-item/upload-item.controller.js
class UploadItemCtrl {
  /**
   * @ngInject
   *
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element;
    this.item = Utils.extend(this.item || {}, {
      config: {},
      options: []
    });
  }

}

UploadItemCtrl.$inject = ["Utils", "$element"];

;// CONCATENATED MODULE: ./src/lib/directives/upload-item/upload-item.directive.js


/**
 * @implements {ng.IDirective}
 */

function UploadItem() {
  const directive = {
    restrict: 'E',
    template: upload_item_tpl,
    scope: {
      item: '='
    },
    controller: UploadItemCtrl,
    controllerAs: 'Upload',
    bindToController: true
  };
  return directive;
}


;// CONCATENATED MODULE: ./src/lib/directives/upload-item/upload-view.controller.js
class UploadViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor($scope, Utils, $element) {
    this.Scope = $scope;
    this.Element = $element;
    this.Utils = Utils;
    this.formItem = {};
  }

  init() {
    this.isMultiple = false;
    this.showAllowed = false;
    this.formItem = this.Utils.extend(this.formItem || {}, {
      config: {},
      options: []
    });

    if (this.isPreview()) {
      this._enableWatchers();
    }
  }

  _updateMultiple() {
    this.isMultiple = !!this.formItem.config.multipleUpload;
    const input = angular.element(this.Element[0].querySelector('input[type=file]'));

    if (input) {
      this.formItem.options = [];

      if (this.isMultiple) {
        input.attr('multiple', 'multiple');
      } else {
        input.removeAttr('multiple');
      }
    }
  }

  _updateAccept() {
    this.showAllowed = !!this.formItem.config.showAccept;
    const input = angular.element(this.Element[0].querySelector('input[type=file]'));

    if (input) {
      if (this.showAllowed) {
        input[0].setAttribute('accept', this.formItem.config.accept);
      } else {
        input[0].removeAttribute('accept');
        delete this.formItem.config.accept;
      }
    }
  }

  _enableWatchers() {
    this.Scope.$watch('UploadView.formItem.config.multipleUpload', newVal => {
      if (newVal !== undefined) {
        this._updateMultiple();
      }
    });
    this.Scope.$watch('UploadView.formItem.config.showAccept', newVal => {
      if (newVal !== undefined) {
        this._updateAccept();
      }
    });
    this.Scope.$watch('UploadView.formItem.config.accept', newVal => {
      if (newVal !== undefined) {
        this._updateAccept();
      }
    });
  }

  removeItem(index) {
    this.formItem.options.splice(index, 1);
  }

}

UploadViewCtrl.$inject = ["$scope", "Utils", "$element"];

;// CONCATENATED MODULE: ./src/lib/directives/upload-item/upload-view.tpl.html
/* harmony default export */ const upload_view_tpl = ("<div layout=\"row\" class=\"option-item\">\n  <md-input-container class=\"md-block\" style=\"margin: 0\">\n    <input type=\"file\" class=\"ng-hide\" aria-label=\"file\" />\n    <md-input-container flex class=\"md-block\">\n      <input\n        type=\"text\"\n        ng-model=\"fileName\"\n        class=\"ng-hide\"\n        disabled\n        aria-label=\"fileName\"\n      />\n    </md-input-container>\n  </md-input-container>\n\n  <md-button id=\"uploadButton\" class=\"md-fab md-mini\">\n    <md-icon class=\"material-icons\">attach_file</md-icon>\n  </md-button>\n</div>\n\n<div>\n  <label></label>\n  <div\n    style=\"display: grid; grid-template-columns: 8em auto; align-items: center\"\n    layout=\"row\"\n    ng-repeat=\"option in UploadView.formItem.options track by $index\"\n  >\n    <md-button ng-click=\"UploadView.removeItem($index)\" class=\"md-button\">\n      <md-icon class=\"material-icons\">close</md-icon>\n    </md-button>\n    <span>{{option.name}}</span>\n  </div>\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/upload-item/upload-view.directive.js



class UploadView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.template = upload_view_tpl;
    this.restrict = 'E';
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = UploadViewCtrl;
    this.controllerAs = 'UploadView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {UploadViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, element, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
    const button = element.find('button');
    const input = angular.element(element[0].querySelector('input[type=file]'));
    const label = element.find('label');
    label[0].style.display = 'none';
    button.bind('click', function () {
      label[0].style.display = 'none';
      input[0].click();
    });
    input.bind('change', function (e) {
      scope.$apply(function () {
        const files = e.target.files;

        if (files.length > 0) {
          for (let i = 0; i < files.length; i += 1) {
            if (files[i].size >= ctrl.formItem.config.size * 1048576) {
              label[0].style.display = 'block';
              label[0].textContent = ctrl.formItem.config.sizeErrMessage;
              return;
            }

            if (!ctrl.formItem.config.multipleUpload) ctrl.formItem.options = [];
            ctrl.formItem.options.push({
              name: files[i].name,
              size: files[i].size,
              type: files[i].type
            });
          }
        }
      });
    });
  }

}

UploadView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/directives/agreement-item/agreement-item.controller.js
AgreementItemCtrl.$inject = ["Utils", "$element"];

/**
 * @ngInject
 *
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {JQLite} $element
 */
function AgreementItemCtrl(Utils, $element) {
  this.Element = $element;
  this.item = Utils.extend(this.item || {}, {
    config: {
      maxSelections: null
    },
    options: [{
      value: '',
      selected: false
    }]
  });
}


;// CONCATENATED MODULE: ./src/lib/directives/agreement-item/agreement-item.directive.js
 // import AgreementItemTemplate from './agreement-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */

class AgreementItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.scope = {
      item: '='
    };
    this.controller = AgreementItemCtrl;
    this.controllerAs = 'Agreement';
    this.bindToController = true;
  }

}

AgreementItem.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/agreement-item/agreement-view.controller.js
class AgreementViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($scope, Utils) {
    this.Scope = $scope;
    this.Utils = Utils;
    this.formItem = {};
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem || {}, {
      config: {},
      options: [{
        value: '',
        selected: false
      }]
    });
    this.selectedOptions = this._getSelectedOptions();
    this.disableOptions = false;
    this.isValid = true;

    this._updateView();

    this._updateValidity();

    if (this.isPreview()) {
      this._enableWatchers();
    }
  }

  toggleSelectedOption() {
    this.selectedOptions = this._getSelectedOptions();

    this._updateView();

    this._updateValidity();
  }

  _getSelectedOptions() {
    return this.formItem.options.filter(option => {
      return option.selected;
    });
  }

  _updateView() {
    if (!this.formItem.config.maxSelections) {
      this.disableOptions = false;
    } else if (this.selectedOptions.length === this.formItem.config.maxSelections) {
      this.disableOptions = true;
    } else {
      this.disableOptions = false;
    }
  }

  _updateValidity() {
    if (this.formItem.config.required) {
      this.isValid = this.selectedOptions.length > 0;
    } else {
      this.isValid = true;
    }

    this.form.$setValidity('minSelections', this.isValid);
  }

  _enableWatchers() {
    this.Scope.$watch('AgreementView.formItem.config.required', newVal => {
      if (newVal !== undefined) {
        this._updateView();

        this._updateValidity();
      }
    });
  }

}

AgreementViewCtrl.$inject = ["$scope", "Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/agreement-item/agreement-view.tpl.html
/* harmony default export */ const agreement_view_tpl = ("<md-input-container>\n  <div\n    layout=\"{{AgreementView.formItem.config.direction == 'horizontal' ? 'row' : 'columb'}}\"\n  >\n    <md-checkbox\n      ng-model=\"AgreementView.formItem.options[0].selected\"\n      ng-change=\"AgreementView.toggleSelectedOption(option)\"\n      ng-disabled=\"AgreementView.disableOptions && !option.selected\"\n      aria-label=\"...\"\n      >{{AgreementView.formItem.options[0].value}}</md-checkbox\n    >\n  </div>\n\n  <div ng-messages=\"AgreementView.form.$error\">\n    <div ng-message=\"minSelections\">\n      Must select {{AgreementView.formItem.maxSelections || 1}} items\n    </div>\n  </div>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/agreement-item/agreement-view.directive.js



class AgreementView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.template = agreement_view_tpl;
    this.restrict = 'E';
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = AgreementViewCtrl;
    this.controllerAs = 'AgreementView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {AgreementViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, element, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

AgreementView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/main/main.controller.js
/**
 * @typedef {{type:string}} Item
 * @typedef {{items: Item[]}} FormConfig
 */
class MainController {
  /**
   * @ngInject
   */
  constructor() {
    /**
     * @type {FormConfig}
     */
    this.form = {
      items: []
    };
  }
  /**
   * Add new Item
   * @param {string} type
   */


  addItem(type) {
    this.form.items.push({
      type
    });
  }
  /**
   * Remove item at index
   * @param {Item} item
   * @param {number} index
   */


  delete(item, index) {
    this.form.items.splice(index, 1);
  }
  /**
   * insert before (bounded)
   * Pops out latest element (wanted?)
   * @param {Item} item
   * @param {number} index
   */


  up(item, index) {
    if (index !== 0) {
      const prevItem = this.form.items[index - 1];
      this.form.items[index] = prevItem;
      this.form.items[index - 1] = item;
    }
  }
  /**
   * insert after (bounded)
   * Pops out latest element (wanted?)
   * @param {Item} item
   * @param {number} index
   */


  down(item, index) {
    if (index !== this.form.items.length - 1) {
      const nextItem = this.form.items[index + 1];
      this.form.items[index] = nextItem;
      this.form.items[index + 1] = item;
    }
  }

}

MainController.$inject = [];

;// CONCATENATED MODULE: ./src/lib/utils/utils.service.js
class Utils {
  /**
   * Recursively extend object properties
   * @param {Object} dest
   * @param {Object} src
   * @returns {Object}
   */
  extend(dest, src) {
    return Object.keys(src).reduce((result, key) => {
      if (typeof result[key] === 'undefined') {
        result[key] = src[key];
      } else if (typeof src[key] === 'object') {
        result[key] = this.extend(result[key], src[key]);
      }

      return result;
    }, typeof dest === 'undefined' ? {} : dest);
  }

}


;// CONCATENATED MODULE: ./src/lib/directives/checkboxes-item/checkboxes-item.tpl.html
/* harmony default export */ const checkboxes_item_tpl = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Checkboxes.item.options\"\n>\n  <md-input-container class=\"md-block\">\n    <label>Max Selections</label>\n    <input type=\"number\" ng-model=\"Checkboxes.item.config.maxSelections\" />\n  </md-input-container>\n\n  <md-switch\n    ng-model=\"Checkboxes.item.config.direction\"\n    ng-true-value=\"'horizontal'\"\n    ng-false-value=\"'vertical'\"\n  >\n    Layout direction ({{Checkboxes.item.config.direction == 'horizontal' ?\n    'Horizontal' : 'Vertical'}})\n  </md-switch>\n\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"option in Checkboxes.item.options track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"md-block\">\n      <label>Option {{$index + 1}}</label>\n      <input ng-model=\"option.value\" />\n    </md-input-container>\n\n    <md-button class=\"md-button\" ng-click=\"Checkboxes.deleteOption($index)\">\n      <md-icon class=\"material-icons\">delete</md-icon>\n    </md-button>\n  </div>\n  <div layout=\"row\" layout-align=\"start\">\n    <md-button\n      class=\"md-primary add-option-button\"\n      ng-click=\"Checkboxes.addOption()\"\n    >\n      <md-icon class=\"material-icons\">add</md-icon>\n    </md-button>\n  </div>\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/checkboxes-item/checkboxes-item.controller.js
class CheckboxesItemCtrl {
  /**
   * @ngInject
   *
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element;
    this.item = Utils.extend(this.item || {}, {
      config: {
        maxSelections: null
      },
      options: [{
        value: '',
        selected: false
      }]
    });
  }

  deleteOption(index) {
    this.item.options.splice(index, 1);
  }

  addOption() {
    this.item.options.push({
      value: '',
      selected: false
    }); // Focus new element

    setTimeout(() => {
      const options = this.Element.find('input');
      const addedOption = options[options.length - 1];
      addedOption.focus();
    }, 0);
  }

}

CheckboxesItemCtrl.$inject = ["Utils", "$element"];

;// CONCATENATED MODULE: ./src/lib/directives/checkboxes-item/checkboxes-item.directive.js


/**
 * @implements {ng.IDirective}
 */

function CheckboxesItem() {
  const directive = {
    restrict: 'E',
    template: checkboxes_item_tpl,
    scope: {
      item: '='
    },
    controller: CheckboxesItemCtrl,
    controllerAs: 'Checkboxes',
    bindToController: true
  };
  return directive;
}


;// CONCATENATED MODULE: ./src/lib/directives/checkboxes-item/checkboxes-view.tpl.html
/* harmony default export */ const checkboxes_view_tpl = ("<md-input-container>\n  <div\n    layout=\"{{CheckboxesView.formItem.config.direction == 'horizontal' ? 'row' : 'column'}}\"\n  >\n    <md-checkbox\n      ng-repeat=\"option in CheckboxesView.formItem.options track by $index\"\n      ng-model=\"option.selected\"\n      ng-change=\"CheckboxesView.toggleSelectedOption(option)\"\n      ng-disabled=\"CheckboxesView.disableOptions && !option.selected\"\n      aria-label=\"...\"\n      >{{option.value}}</md-checkbox\n    >\n  </div>\n\n  <div ng-messages=\"CheckboxesView.form.$error\">\n    <div ng-message=\"minSelections\">\n      Must select {{CheckboxesView.formItem.maxSelections || 1}} items\n    </div>\n  </div>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/checkboxes-item/checkboxes-view.controller.js
class CheckboxesViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($scope, Utils) {
    this.Scope = $scope;
    this.Utils = Utils;
    this.formItem = {};
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem || {}, {
      config: {},
      options: []
    });
    this.selectedOptions = this._getSelectedOptions();
    this.disableOptions = false;
    this.isValid = true;

    this._updateView();

    this._updateValidity();

    if (this.isPreview()) {
      this._enableWatchers();
    }
  }

  toggleSelectedOption() {
    this.selectedOptions = this._getSelectedOptions();

    this._updateView();

    this._updateValidity();
  }

  _getSelectedOptions() {
    return this.formItem.options.filter(option => {
      return option.selected;
    });
  }

  _updateView() {
    if (!this.formItem.config.maxSelections) {
      this.disableOptions = false;
    } else if (this.selectedOptions.length === this.formItem.config.maxSelections) {
      this.disableOptions = true;
    } else {
      this.disableOptions = false;
    }
  }

  _updateValidity() {
    if (this.formItem.config.required) {
      this.isValid = this.selectedOptions.length > 0;
    } else {
      this.isValid = true;
    }

    this.form.$setValidity('minSelections', this.isValid);
  }

  _enableWatchers() {
    this.Scope.$watch('CheckboxesView.formItem.config.required', newVal => {
      if (newVal !== undefined) {
        this._updateView();

        this._updateValidity();
      }
    });
  }

}

CheckboxesViewCtrl.$inject = ["$scope", "Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/checkboxes-item/checkboxes-view.directive.js


/**
 * @implements {ng.IDirective}
 */

class CheckboxesView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = checkboxes_view_tpl;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = CheckboxesViewCtrl;
    this.controllerAs = 'CheckboxesView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {CheckboxesViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, element, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

CheckboxesView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/directives/form-item/form-item.tpl.html
/* harmony default export */ const form_item_tpl = ("<div class=\"form-item-container md-inline-form\">\n  <div class=\"form-item-actions\">\n    <md-button\n      class=\"md-button\"\n      ng-if=\"FormItem.Attrs.onDelete\"\n      ng-click=\"FormItem.deleteClicked()\"\n    >\n      <md-icon class=\"material-icons small\">delete</md-icon>\n    </md-button>\n    <md-button\n      class=\"md-button\"\n      ng-if=\"FormItem.Attrs.onUp\"\n      ng-click=\"FormItem.onUp({item: FormItem.item, index: FormItem.index()})\"\n    >\n      <md-icon class=\"material-icons small\">arrow_drop_up</md-icon>\n    </md-button>\n    <md-button\n      class=\"md-button\"\n      ng-if=\"FormItem.Attrs.onDown\"\n      ng-click=\"FormItem.onDown({item: FormItem.item, index: FormItem.index()})\"\n    >\n      <md-icon class=\"material-icons small\">arrow_drop_down</md-icon>\n    </md-button>\n  </div>\n\n  <md-input-container ng-if=\"FormItem.item.type != 'label'\" class=\"md-block\">\n    <label>Field Title</label>\n    <input ng-model=\"FormItem.item.props.title\" />\n  </md-input-container>\n\n  <md-input-container ng-if=\"FormItem.item.type != 'label'\" class=\"md-block\">\n    <label>Help Text</label>\n    <input ng-model=\"FormItem.item.props.helpText\" />\n  </md-input-container>\n\n  <md-input-container\n    ng-if=\"FormItem.item.type === 'agreement'\"\n    class=\"md-block\"\n  >\n    <label>Option Text</label>\n    <input ng-model=\"FormItem.item.options[0].value\" />\n  </md-input-container>\n\n  <div ng-switch=\"FormItem.item.type\">\n    <upload-item ng-switch-when=\"upload\" item=\"FormItem.item\"></upload-item>\n    <agreement-item\n      ng-switch-when=\"agreement\"\n      item=\"FormItem.item\"\n    ></agreement-item>\n    <label-item ng-switch-when=\"label\" item=\"FormItem.item\"></label-item>\n    <input-item ng-switch-when=\"input\" item=\"FormItem.item\"></input-item>\n    <radio-button-item\n      ng-switch-when=\"multipleChoices\"\n      item=\"FormItem.item\"\n    ></radio-button-item>\n    <matrix-item ng-switch-when=\"matrix\" item=\"FormItem.item\"></matrix-item>\n    <checkboxes-item\n      ng-switch-when=\"checkboxes\"\n      item=\"FormItem.item\"\n    ></checkboxes-item>\n    <textarea-item\n      ng-switch-when=\"textarea\"\n      item=\"FormItem.item\"\n    ></textarea-item>\n    <select-item\n      ng-switch-when=\"chooseFromList\"\n      item=\"FormItem.item\"\n    ></select-item>\n    <p ng-switch-default>UNKNOWN TYPE</p>\n  </div>\n\n  <md-input-container\n    ng-if=\"FormItem.item.type != 'label' && FormItem.item.type != 'upload'\"\n    class=\"md-block\"\n  >\n    <md-checkbox ng-model=\"FormItem.item.config.required\"\n      >Required field</md-checkbox\n    >\n  </md-input-container>\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/form-item/form-item.controller.js
class FormItemCtrl {
  /**
   * @ngInject
   * @param {ng.IAttributes} $attrs
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($attrs, Utils) {
    this.Attrs = $attrs;
    this.Utils = Utils;
    this.templates = {
      upload: '<upload-item item="FormItem.item"></upload-item>',
      agreement: '<agreement-item item="FormItem.item"></agreement-item>',
      input: '<input-item item="FormItem.item"></input-item>',
      chooseFromList: '<bet-form-choose-from-list item="FormItem.item"></bet-form-choose-from-list>',
      label: '<label-item item="FormItem.item"></label-item>',
      multipleChoices: '<radio-button-item item="FormItem.item"></radio-button-item>',
      matrix: '<matrix-item item="FormItem.item"></matrix-item>',
      checkboxes: '<checkboxes-item item="FormItem.item"></checkboxes-item>',
      textarea: '<textarea-item item="FormItem.item"></textarea-item>'
    };
    this.item = {};
  }

  init() {
    this.item = this.Utils.extend(this.item || {}, {
      type: this.Attrs.type,
      props: {
        title: '',
        helpText: ''
      },
      config: {
        required: false
      }
    });
  }

  deleteClicked() {
    this.onDelete({
      item: this.item,
      index: this.index()
    });
  }
  /**
   *
   * @param {string} type
   */


  _getItemTemplate(type) {
    const prefix = '' + '<div class="form-item-container">' + '<div class="form-item-actions">' + '<md-button class="md-button" ng-if="FormItem.Attrs.onDelete" ng-click="FormItem.deleteClicked()"> ' + '<md-icon class="material-icons small">delete</md-icon>' + '</md-button>' + '<md-button class="md-button" ng-if="FormItem.Attrs.onUp" ng-click="FormItem.onUp({item: FormItem.item, index: FormItem.index()})"> ' + '<md-icon class="material-icons small">arrow_drop_up</md-icon>' + '</md-button>' + '<md-button class="md-button" ng-if="FormItem.Attrs.onDown" ng-click="FormItem.onDown({item: FormItem.item, index: FormItem.index()})"> ' + '<md-icon class="material-icons small">arrow_drop_down</md-icon>' + '</md-button>' + '</div>' + '<md-input-container>' + '<label>Field Title</label>' + '<input ng-model="FormItem.item.props.title"/>' + '</md-input-container>' + '<md-input-container>' + '<label>Help Text</label>' + '<input ng-model="FormItem.item.props.helpText" />' + '</md-input-container>';
    const suffix = '' + '<md-input-container>' + '<md-checkbox ng-model="FormItem.item.config.required">Required field</md-checkbox>' + '</md-input-container>' + '</div>';
    return prefix + this.templates[type] + suffix;
  }

}

FormItemCtrl.$inject = ["$attrs", "Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/form-item/form-item.directive.js


/**
 * @implements {ng.IDirective}
 */

class FormItem {
  /**
   * @ngInject
   * @param {ng.ICompileService} $compile
   */
  constructor($compile) {
    this.$compile = $compile;
    this.restrict = 'E';
    this.scope = {
      item: '=',
      onDelete: '&',
      onUp: '&',
      onDown: '&',
      index: '&'
    };
    this.controller = FormItemCtrl;
    this.controllerAs = 'FormItem';
    this.bindToController = true;
    this.template = form_item_tpl;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {FormItemCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, element, attrs, ctrl) {
    const template = ctrl._getItemTemplate(attrs.type);

    const el = this.$compile(template)(scope); // element.append(el)
    // if done like above adds twice
    // element.append(this.$compile(template)(scope))

    ctrl.init();
    return el;
  }

}

FormItem.$inject = ["$compile"];

;// CONCATENATED MODULE: ./src/lib/directives/form-items-container/form-items-container.controller.js
class FormItemsContainerCtrl {
  /**
   * @ngInject
   */
  constructor() {
    /**
     * @type {import('../../main/main.controller').FormConfig}
     */
    this.form = {
      items: []
    };
  }
  /**
   *
   * @param {import('../../main/main.controller').Item} item
   * @param {number} index
   */


  delete(item, index) {
    this.form.items.splice(index, 1);
  }
  /**
   *
   * @param {import('../../main/main.controller').Item} item
   * @param {number} index
   */


  up(item, index) {
    if (index !== 0) {
      const prevItem = this.form.items[index - 1];
      this.form.items[index] = prevItem;
      this.form.items[index - 1] = item;
    }
  }
  /**
   *
   * @param {import('../../main/main.controller').Item} item
   * @param {number} index
   */


  down(item, index) {
    if (index !== this.form.items.length - 1) {
      const nextItem = this.form.items[index + 1];
      this.form.items[index] = nextItem;
      this.form.items[index + 1] = item;
    }
  }

}

FormItemsContainerCtrl.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/form-items-container/form-items-container.tpl.html
/* harmony default export */ const form_items_container_tpl = ("<div>\n  <form-item\n    ng-repeat=\"item in container.form.items track by $index\"\n    type=\"{{item.type}}\"\n    item=\"item\"\n    index=\"$index\"\n    on-delete=\"container.delete(item, index)\"\n    on-up=\"container.up(item, index)\"\n    on-down=\"container.down(item, index)\"\n  >\n  </form-item>\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/form-items-container/form-items-container.directive.js


/**
 * @implements {ng.IDirective}
 */

class FormItemsContainer {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.scope = {
      form: '='
    };
    this.template = form_items_container_tpl;
    this.controller = FormItemsContainerCtrl;
    this.controllerAs = 'container';
    this.bindToController = true;
  }

}

FormItemsContainer.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/form-view/form-view.controller.js
class FormViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScù} $scope
   */
  constructor($scope) {
    this.Scope = $scope;
  }

  init() {}

}

FormViewCtrl.$inject = ["$scope"];

;// CONCATENATED MODULE: ./src/lib/directives/form-view/form-view.tpl.html
/* harmony default export */ const form_view_tpl = ("<div class=\"md-inline-form\">\n  <div\n    class=\"formItem\"\n    ng-repeat=\"formItem in FormView.form.items track by $index\"\n    ng-switch=\"formItem.type\"\n    layout=\"column\"\n  >\n    <ng-form name=\"formItemForm\">\n      <div>\n        <div class=\"formItem-title\">{{formItem.props.title}}</div>\n        <div class=\"formItem-help-text\">{{formItem.props.helpText}}</div>\n\n        <upload-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"upload\"\n        ></upload-view>\n        <agreement-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"agreement\"\n        ></agreement-view>\n        <checkboxes-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"checkboxes\"\n        ></checkboxes-view>\n        <radio-button-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"multipleChoices\"\n        ></radio-button-view>\n        <input-view\n          form-item=\"formItem\"\n          form=\"formItemForm\"\n          ng-switch-when=\"input\"\n        ></input-view>\n        <textarea-view\n          form-item=\"formItem\"\n          form=\"formItemForm\"\n          ng-switch-when=\"textarea\"\n        ></textarea-view>\n        <matrix-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"matrix\"\n        ></matrix-view>\n        <select-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"chooseFromList\"\n        ></select-view>\n        <label-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"label\"\n        ></label-view>\n      </div>\n    </ng-form>\n  </div>\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/form-view/form-view.directive.js


/**
 * @implements {ng.IDirective}
 */

class FormView {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.template = form_view_tpl;
    this.scope = {
      form: '='
    };
    this.controller = FormViewCtrl;
    this.controllerAs = 'FormView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {FormViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, element, attrs, ctrl) {
    ctrl.init();
  }

}

FormView.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/input-item/input-item.controller.js
class InputItemCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element;
    this.item = Utils.extend(this.item || {}, {
      config: {
        type: 'text'
      }
    });
  }

}

InputItemCtrl.$inject = ["Utils", "$element"];

;// CONCATENATED MODULE: ./src/lib/directives/input-item/input-item.tpl.html
/* harmony default export */ const input_item_tpl = ("<md-input-container class=\"md-block\">\n  <label>Placeholder</label>\n  <input type=\"text\" ng-model=\"Input.item.config.placeholder\" />\n</md-input-container>\n<md-input-container class=\"md-block\">\n  <label>Type</label>\n  <md-select ng-model=\"Input.item.config.type\">\n    <md-option value=\"text\">Text</md-option>\n    <md-option value=\"number\">Number</md-option>\n    <md-option value=\"email\">Email</md-option>\n  </md-select>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/input-item/input-item.directive.js


/**
 * @implements {ng.IDirective}
 */

class InputItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.template = input_item_tpl;
    this.scope = {
      item: '='
    };
    this.controller = InputItemCtrl;
    this.controllerAs = 'Input';
    this.bindToController = true;
  }

}

InputItem.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/input-item/input-view.controller.js
class InputViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils;
    this.formItem = {};
  }

  init() {
    this.Utils.extend(this.formItem, {
      config: {}
    });
  }

}

InputViewCtrl.$inject = ["Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/input-item/input-view.tpl.html
/* harmony default export */ const input_view_tpl = ("<md-input-container class=\"md-block\">\n  <input\n    ng-model=\"InputView.formItem.value\"\n    type=\"{{InputView.formItem.config.type}}\"\n    placeholder=\"{{InputView.formItem.config.placeholder}}\"\n    ng-required=\"InputView.formItem.config.required\"\n  />\n  <div ng-messages=\"InputView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/input-item/input-view.directive.js


/**
 * @implements {ng.IDirective}
 */

class InputView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = input_view_tpl;
    this.scope = {
      formItem: '=',
      form: '='
    };
    this.controller = InputViewCtrl;
    this.controllerAs = 'InputView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {FormItemCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

InputView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/directives/label-item/label-item.controller.js
class LabelItemCtrl {
  /**
   * @ngInject
   * @param {JQLite} $element
   */
  constructor($element) {
    this.Element = $element;
  }

}

LabelItemCtrl.$inject = ["$element"];

;// CONCATENATED MODULE: ./src/lib/directives/label-item/label-item.tpl.html
/* harmony default export */ const label_item_tpl = ("<md-input-container class=\"md-block\">\n  <label>Text</label>\n  <textarea ng-model=\"Label.item.value\" md-maxlength=\"150\" rows=\"5\"></textarea>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/label-item/label-item.directive.js


/**
 * @implements {ng.IDirective}
 */

class LabelItem {
  constructor() {
    this.restrict = 'E';
    this.template = label_item_tpl;
    this.scope = {
      item: '='
    };
    this.controller = LabelItemCtrl;
    this.controllerAs = 'Label';
    this.bindToController = true;
  }

}


;// CONCATENATED MODULE: ./src/lib/directives/label-item/label-view.controller.js
class LabelViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils;
  }

  init() {
    this.Utils.extend(this.formItem, {});
  }

}

LabelViewCtrl.$inject = ["Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/label-item/label-view.tpl.html
/* harmony default export */ const label_view_tpl = ("<md-input-container class=\"md-block\">\n  <md-content flex layout-padding layout=\"row\" layout-align=\"center center\">\n    <pre>\n      <span class=\"formItem-content\">{{LabelView.formItem.value}}</span>\n    </pre>\n  </md-content>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/label-item/label-view.directive.js


/**
 * @implements {ng.IDirective}
 */

class LabelView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = label_view_tpl;
    this.scope = {
      formItem: '=',
      form: '='
    };
    this.controller = LabelViewCtrl;
    this.controllerAs = 'LabelView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {LabelViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

LabelView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/directives/matrix-item/matrix-item.controller.js
class MatrixItemCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {ng.IDocumentService} $document
   */
  constructor(Utils, $document) {
    this.RowContainer = angular.element($document[0].querySelector('.rowContainer'));
    this.ColumnContainer = angular.element($document[0].querySelector('.columnContainer'));
    this.item = Utils.extend(this.item || {}, {
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
  /**
   *
   * @param {number} index
   */


  deleteRow(index) {
    this.item.config.rows.splice(index, 1);
  }

  addRow() {
    this.item.config.rows.push({
      value: ''
    });
    setTimeout(function () {
      const options = this.RowContainer.find('input');
      const addedOption = options[options.length - 1];
      addedOption.focus();
    }.bind(this), 0);
  }
  /**
   *
   * @param {number} index
   */


  deleteColumn(index) {
    this.item.config.columns.splice(index, 1);
  }

  addColumn() {
    this.item.config.columns.push({
      value: ''
    });
    setTimeout(() => {
      const options = this.ColumnContainer.find('input');
      const addedOption = options[options.length - 1];
      addedOption.focus();
    }, 0);
  }

}

MatrixItemCtrl.$inject = ["Utils", "$document"];

;// CONCATENATED MODULE: ./src/lib/directives/matrix-item/matrix-item.tpl.html
/* harmony default export */ const matrix_item_tpl = ("<div\n  class=\"sortable-container columnContainer\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Matrix.item.config.columns\"\n>\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"column in Matrix.item.config.columns track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"input-container\">\n      <label>Column {{$index + 1}}</label>\n      <input ng-model=\"column.value\" />\n    </md-input-container>\n\n    <md-button\n      class=\"md-button\"\n      md-no-ink\n      aria-label=\"delete column item\"\n      ng-click=\"Matrix.deleteColumn($index)\"\n    >\n      <md-icon class=\"material-icons\">delete</md-icon>\n      <md-tooltip md-autohide=\"true\">Delete</md-tooltip>\n    </md-button>\n  </div>\n  <div layout=\"row\" layout-align=\"start\">\n    <md-button\n      class=\"md-primary add-option-button\"\n      md-no-ink\n      aria-label=\"add option item\"\n      ng-click=\"Matrix.addColumn()\"\n      >Add Column</md-button\n    >\n  </div>\n</div>\n\n<div\n  class=\"sortable-container rowContainer\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Matrix.item.config.rows\"\n>\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"row in Matrix.item.config.rows track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder row item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"input-container\">\n      <label>Row {{$index + 1}}</label>\n      <input ng-model=\"row.value\" />\n    </md-input-container>\n\n    <md-button\n      class=\"md-button\"\n      md-no-ink\n      aria-label=\"delete row item\"\n      ng-click=\"Matrix.deleteRow($index)\"\n    >\n      <md-icon class=\"material-icons\">delete</md-icon>\n      <md-tooltip md-autohide=\"true\">Delete</md-tooltip>\n    </md-button>\n  </div>\n  <div layout=\"row\" layout-align=\"start\">\n    <md-button\n      class=\"md-primary add-option-button\"\n      md-no-ink\n      aria-label=\"add row item\"\n      ng-click=\"Matrix.addRow()\"\n      >Add row</md-button\n    >\n  </div>\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/matrix-item/matrix-item.directive.js


/**
 * @implements {ng.IDirective}
 */

class MatrixItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.template = matrix_item_tpl;
    this.scope = {
      item: '='
    };
    this.controller = MatrixItemCtrl;
    this.controllerAs = 'Matrix';
    this.bindToController = true;
  }

}

MatrixItem.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/matrix-item/matrix-view.tpl.html
/* harmony default export */ const matrix_view_tpl = ("<md-input-container class=\"matrix-container md-block\" layout=\"column\">\n  <div class=\"matrix\">\n    <div class=\"matrix-row\" flex layout=\"row\">\n      <span class=\"matrix-cell\" flex=\"20\"></span>\n      <span\n        class=\"matrix-cell matrix-cell-header\"\n        flex\n        ng-repeat=\"column in MatrixView.formItem.config.columns track by $index\"\n        >{{column.value}}</span\n      >\n    </div>\n    <div\n      class=\"matrix-row\"\n      ng-repeat=\"row in MatrixView.formItem.config.rows track by $index\"\n      layout=\"row\"\n    >\n      <span class=\"matrix-cell\" flex=\"20\" layout=\"column\" layout-align=\"center\"\n        >{{row.value}}</span\n      >\n      <md-radio-group\n        ng-model=\"row.selected\"\n        ng-change=\"MatrixView._updateValidity()\"\n        flex\n        layout=\"row\"\n      >\n        <span\n          class=\"matrix-cell radio-button-cell\"\n          flex\n          ng-repeat=\"column in MatrixView.formItem.config.columns track by $index\"\n        >\n          <md-radio-button\n            value=\"{{column.value}}\"\n            aria-label=\"...\"\n          ></md-radio-button>\n        </span>\n      </md-radio-group>\n    </div>\n  </div>\n\n  <div ng-messages=\"MatrixView.form.$error\">\n    <div ng-message=\"required\">This is required</div>\n  </div>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/matrix-item/matrix-view.controller.js
class MatrixViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($scope, Utils) {
    this.Scope = $scope;
    this.Utils = Utils;
    this.isValid = true;
    this.formItem = {};
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem, {
      config: {
        rows: [],
        columns: []
      }
    });

    this._updateValidity();

    if (this.isPreview()) {
      this._enableWatchers();
    }
  }

  _updateValidity() {
    let valid = true;

    if (this.formItem.config.required) {
      valid = !this.formItem.config.rows.some(row => typeof row['selected'] === 'undefined'); //   for (let i = 0; i < this.formItem.config.rows.length; i++) {
      //     if (typeof this.formItem.config.rows[i]['selected'] === 'undefined') {
      //       valid = false
      //       break
      //     }
      //   }
    }

    this.isValid = valid;
    this.form.$setValidity('required', this.isValid);
  }

  _enableWatchers() {
    this.Scope.$watchGroup(['MatrixView.formItem.config.required', 'MatrixView.formItem.config.rows.length'], newVal => {
      if (newVal !== undefined) {
        this._updateValidity();
      }
    });
  }

}

MatrixViewCtrl.$inject = ["$scope", "Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/matrix-item/matrix-view.directive.js


/**
 * @implements {ng.IDirective}
 */

class MatrixView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = matrix_view_tpl;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = MatrixViewCtrl;
    this.controllerAs = 'MatrixView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {MatrixViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

MatrixView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/directives/radio-button-item/radio-button-item.controller.js
class RadioButtonCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element;
    this.item = Utils.extend(this.item || {}, {
      config: {},
      options: [{
        value: ''
      }]
    });
  }

  deleteOption(index) {
    this.item.options.splice(index, 1);
  }

  addOption() {
    this.item.options.push({
      value: ''
    });
    setTimeout(() => {
      const options = this.Element.find('input');
      const addedOption = options[options.length - 1];
      addedOption.focus();
    }, 0);
  }

}

RadioButtonCtrl.$inject = ["Utils", "$element"];

;// CONCATENATED MODULE: ./src/lib/directives/radio-button-item/radio-button-item.tpl.html
/* harmony default export */ const radio_button_item_tpl = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"RadioButton.item.options\"\n>\n  <md-switch\n    ng-model=\"RadioButton.item.config.direction\"\n    ng-true-value=\"'horizontal'\"\n    ng-false-value=\"'vertical'\"\n  >\n    Layout direction ({{RadioButton.item.config.direction == 'horizontal' ?\n    'Horizontal' : 'Vertical'}})\n  </md-switch>\n\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"option in RadioButton.item.options track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"md-block\">\n      <label>Option {{$index + 1}}</label>\n      <input ng-model=\"option.value\" />\n    </md-input-container>\n\n    <md-button\n      class=\"md-button md-warn\"\n      ng-click=\"RadioButton.deleteOption($index)\"\n    >\n      <md-icon class=\"material-icons\">delete</md-icon>\n    </md-button>\n  </div>\n\n  <md-button class=\"md-raised md-accent\" ng-click=\"RadioButton.addOption()\"\n    >Add Option</md-button\n  >\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/radio-button-item/radio-button-item.directive.js


/**
 * @implements {ng.IDirective}
 */

class RadioButton {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.template = radio_button_item_tpl;
    this.scope = {
      item: '='
    };
    this.controller = RadioButtonCtrl;
    this.controllerAs = 'RadioButton';
    this.bindToController = true;
  }

}

RadioButton.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/radio-button-item/radio-button-view.controller.js
class RadioButtonViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils;
    this.formItem = {};
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem, {
      config: {},
      options: []
    });
  }

}

RadioButtonViewCtrl.$inject = ["Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/radio-button-item/radio-button-view.tpl.html
/* harmony default export */ const radio_button_view_tpl = ("<md-input-container class=\"md-block\">\n  <md-radio-group\n    name=\"formItemInput\"\n    ng-required=\"RadioButtonView.formItem.config.required\"\n    ng-model=\"RadioButtonView.formItem.value\"\n    layout=\"{{RadioButtonView.formItem.config.direction == 'horizontal' ? 'row' : 'column'}}\"\n    required\n  >\n    <md-radio-button\n      ng-repeat=\"option in RadioButtonView.formItem.options track by $index\"\n      value=\"{{option.value}}\"\n      aria-label=\"...\"\n    >\n      {{option.value}}\n    </md-radio-button>\n  </md-radio-group>\n\n  <div ng-messages=\"RadioButtonView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/radio-button-item/radio-button-view.directive.js



class RadioButtonView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = radio_button_view_tpl;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = RadioButtonViewCtrl;
    this.controllerAs = 'RadioButtonView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {RadioButtonViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

RadioButtonView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/directives/select-item/select-view.tpl.html
/* harmony default export */ const select_view_tpl = ("<md-input-container class=\"md-block\">\n  <md-select\n    name=\"formItemInput\"\n    ng-required=\"SelectView.formItem.config.required\"\n    ng-model=\"SelectView.formItem.value\"\n  >\n    <md-option\n      ng-repeat=\"option in SelectView.formItem.options track by $index\"\n      ng-value=\"option.value\"\n      >{{ option.value }}</md-option\n    >\n  </md-select>\n  <div ng-messages=\"SelectView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/select-item/select-view.controller.js
class SelectViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils;
    this.formItem = {};
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem, {
      config: {},
      options: []
    });
  }

}

SelectViewCtrl.$inject = ["Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/select-item/select-view.directive.js


/**
 * @implements {ng.IDirective}
 */

class SelectView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = select_view_tpl;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = SelectViewCtrl;
    this.controllerAs = 'SelectView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {SelectViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

SelectView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/directives/select-item/select-item.tpl.html
/* harmony default export */ const select_item_tpl = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Select.item.options\"\n>\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"option in Select.item.options track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"md-block\">\n      <label>Option {{$index + 1}}</label>\n      <input ng-model=\"option.value\" />\n    </md-input-container>\n\n    <md-button class=\"md-button md-warn\" ng-click=\"Select.deleteOption($index)\">\n      <md-icon class=\"material-icons\">delete</md-icon>\n    </md-button>\n  </div>\n\n  <md-button class=\"md-raised md-accent\" ng-click=\"Select.addOption()\"\n    >Add Option</md-button\n  >\n</div>\n");
;// CONCATENATED MODULE: ./src/lib/directives/select-item/select-item.controller.js
class SelectCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element;
    this.item = Utils.extend(this.item || {}, {
      config: {},
      options: [{
        value: ''
      }]
    });
  }
  /**
   *
   * @param {number} index
   */


  deleteOption(index) {
    this.item.options.splice(index, 1);
  }

  addOption() {
    this.item.options.push({
      value: ''
    });
    setTimeout(() => {
      const options = this.Element.find('input');
      const addedOption = options[options.length - 1];
      addedOption.focus();
    }, 0);
  }

}

SelectCtrl.$inject = ["Utils", "$element"];

;// CONCATENATED MODULE: ./src/lib/directives/select-item/select-item.directive.js


/**
 * @implements {ng.IDirective}
 */

class Select {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.template = select_item_tpl;
    this.scope = {
      item: '='
    };
    this.controller = SelectCtrl;
    this.controllerAs = 'Select';
    this.bindToController = true;
  }

}

Select.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/textarea-item/textarea-item.controller.js
class TextareaItemCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element;
    this.item = Utils.extend(this.item || {}, {
      config: {}
    });
  }

}

TextareaItemCtrl.$inject = ["Utils", "$element"];

;// CONCATENATED MODULE: ./src/lib/directives/textarea-item/textarea-item.tpl.html
/* harmony default export */ const textarea_item_tpl = ("<md-input-container class=\"md-block\">\n  <label>Placeholder</label>\n  <input type=\"text\" ng-model=\"Textarea.item.config.placeholder\" />\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/textarea-item/textarea-item.directive.js


/**
 * @implements {ng.IDirective}
 */

class TextareaItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.template = textarea_item_tpl;
    this.scope = {
      item: '='
    };
    this.controller = TextareaItemCtrl;
    this.controllerAs = 'Textarea';
    this.bindToController = true;
  }

}

TextareaItem.$inject = [];

;// CONCATENATED MODULE: ./src/lib/directives/textarea-item/textarea-view.controller.js
class TextareaViewCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor(Utils) {
    this.Utils = Utils;
    this.formItem = {};
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem, {
      config: {}
    });
  }

}

TextareaViewCtrl.$inject = ["Utils"];

;// CONCATENATED MODULE: ./src/lib/directives/textarea-item/textarea-view.tpl.html
/* harmony default export */ const textarea_view_tpl = ("<md-input-container class=\"md-block\">\n  <textarea\n    ng-model=\"TextareaView.formItem.value\"\n    placeholder=\"{{TextareaView.formItem.config.placeholder}}\"\n    ng-required=\"TextareaView.formItem.config.required\"\n  ></textarea>\n  <div ng-messages=\"TextareaView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");
;// CONCATENATED MODULE: ./src/lib/directives/textarea-item/textarea-view.directive.js


/**
 * @implements {ng.IDirective}
 */

class TextareaView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.scope = {
      formItem: '=',
      form: '='
    };
    this.restrict = 'E';
    this.template = textarea_view_tpl;
    this.controller = TextareaViewCtrl;
    this.controllerAs = 'TextareaView';
    this.bindToController = true;
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {TextareaViewCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  link(scope, elem, attrs, ctrl) {
    //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
    this.$timeout(function () {
      ctrl.init();
    }, 50);
  }

}

TextareaView.$inject = ["$timeout"];

;// CONCATENATED MODULE: ./src/lib/index.module.js
























/* harmony default export */ const index_module = (angular.module('angularMaterialFormBuilder', ['ngMaterial', 'angular-sortable-view', 'ngMessages']).service('Utils', Utils).controller('MainController', MainController).directive('uploadItem', UploadItem).directive('uploadView', UploadView).directive('agreementItem', AgreementItem).directive('agreementView', AgreementView).directive('checkboxesItem', CheckboxesItem).directive('checkboxesView', CheckboxesView).directive('formItem', FormItem).directive('formItemsContainer', FormItemsContainer).directive('formView', FormView).directive('inputItem', InputItem).directive('inputView', InputView).directive('labelItem', LabelItem).directive('labelView', LabelView).directive('matrixItem', MatrixItem).directive('matrixView', MatrixView).directive('radioButtonItem', RadioButton).directive('radioButtonView', RadioButtonView).directive('selectItem', Select).directive('selectView', SelectView).directive('textareaItem', TextareaItem).directive('textareaView', TextareaView));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(999);
/******/ })()
;
});
//# sourceMappingURL=angular-material-form-builder.js.map