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

/***/ "./src/lib/directives/agreement-item/agreement-item.controller.js":
/*!************************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-item.controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementItemCtrl": () => /* binding */ AgreementItemCtrl
/* harmony export */ });
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



/***/ }),

/***/ "./src/lib/directives/agreement-item/agreement-item.directive.js":
/*!***********************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-item.directive.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementItem": () => /* binding */ AgreementItem
/* harmony export */ });
/* harmony import */ var _agreement_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreement-item.controller */ "./src/lib/directives/agreement-item/agreement-item.controller.js");
 // import { default as AgreementItemTemplate } from './agreement-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */

class AgreementItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'; // this.templateUrl= AgreementItemTemplate,

    this.scope = {
      item: '='
    };
    this.controller = _agreement_item_controller__WEBPACK_IMPORTED_MODULE_0__.AgreementItemCtrl;
    this.controllerAs = 'Agreement';
    this.bindToController = true;
  }

}

AgreementItem.$inject = [];


/***/ }),

/***/ "./src/lib/directives/agreement-item/agreement-view.controller.js":
/*!************************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-view.controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementViewCtrl": () => /* binding */ AgreementViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/agreement-item/agreement-view.directive.js":
/*!***********************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-view.directive.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementView": () => /* binding */ AgreementView
/* harmony export */ });
/* harmony import */ var _agreement_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreement-view.controller */ "./src/lib/directives/agreement-item/agreement-view.controller.js");
/* harmony import */ var _agreement_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agreement-view.tpl.html */ "./src/lib/directives/agreement-item/agreement-view.tpl.html");



class AgreementView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.templateUrl = _agreement_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.restrict = 'E';
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = _agreement_view_controller__WEBPACK_IMPORTED_MODULE_0__.AgreementViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-item.controller.js":
/*!**************************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-item.controller.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesItemCtrl": () => /* binding */ CheckboxesItemCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-item.directive.js":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-item.directive.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesItem": () => /* binding */ CheckboxesItem
/* harmony export */ });
/* harmony import */ var _checkboxes_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxes-item.tpl.html */ "./src/lib/directives/checkboxes-item/checkboxes-item.tpl.html");
/* harmony import */ var _checkboxes_item_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxes-item.controller */ "./src/lib/directives/checkboxes-item/checkboxes-item.controller.js");


/**
 * @implements {ng.IDirective}
 */

function CheckboxesItem() {
  const directive = {
    restrict: 'E',
    templateUrl: _checkboxes_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__.default,
    scope: {
      item: '='
    },
    controller: _checkboxes_item_controller__WEBPACK_IMPORTED_MODULE_1__.CheckboxesItemCtrl,
    controllerAs: 'Checkboxes',
    bindToController: true
  };
  return directive;
}



/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-view.controller.js":
/*!**************************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-view.controller.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesViewCtrl": () => /* binding */ CheckboxesViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-view.directive.js":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-view.directive.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesView": () => /* binding */ CheckboxesView
/* harmony export */ });
/* harmony import */ var _checkboxes_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxes-view.tpl.html */ "./src/lib/directives/checkboxes-item/checkboxes-view.tpl.html");
/* harmony import */ var _checkboxes_view_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxes-view.controller */ "./src/lib/directives/checkboxes-item/checkboxes-view.controller.js");


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
    this.templateUrl = _checkboxes_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__.default;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = _checkboxes_view_controller__WEBPACK_IMPORTED_MODULE_1__.CheckboxesViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/form-item/form-item.controller.js":
/*!**************************************************************!*\
  !*** ./src/lib/directives/form-item/form-item.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemCtrl": () => /* binding */ FormItemCtrl
/* harmony export */ });
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
      input: '<input-item item="FormItem.item"></input-item>',
      chooseFromList: '<bet-form-choose-from-list item="FormItem.item"></bet-form-choose-from-list>',
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


/***/ }),

/***/ "./src/lib/directives/form-item/form-item.directive.js":
/*!*************************************************************!*\
  !*** ./src/lib/directives/form-item/form-item.directive.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItem": () => /* binding */ FormItem
/* harmony export */ });
/* harmony import */ var _form_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-item.tpl.html */ "./src/lib/directives/form-item/form-item.tpl.html");
/* harmony import */ var _form_item_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-item.controller */ "./src/lib/directives/form-item/form-item.controller.js");


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
    this.controller = _form_item_controller__WEBPACK_IMPORTED_MODULE_1__.FormItemCtrl;
    this.controllerAs = 'FormItem';
    this.bindToController = true;
    this.templateUrl = _form_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__.default;
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


/***/ }),

/***/ "./src/lib/directives/form-items-container/form-items-container.controller.js":
/*!************************************************************************************!*\
  !*** ./src/lib/directives/form-items-container/form-items-container.controller.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemsContainerCtrl": () => /* binding */ FormItemsContainerCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/form-items-container/form-items-container.directive.js":
/*!***********************************************************************************!*\
  !*** ./src/lib/directives/form-items-container/form-items-container.directive.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemsContainer": () => /* binding */ FormItemsContainer
/* harmony export */ });
/* harmony import */ var _form_items_container_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-items-container.controller */ "./src/lib/directives/form-items-container/form-items-container.controller.js");
/* harmony import */ var _form_items_container_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-items-container.tpl.html */ "./src/lib/directives/form-items-container/form-items-container.tpl.html");


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
    this.templateUrl = _form_items_container_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.controller = _form_items_container_controller__WEBPACK_IMPORTED_MODULE_0__.FormItemsContainerCtrl;
    this.controllerAs = 'container';
    this.bindToController = true;
  }

}

FormItemsContainer.$inject = [];


/***/ }),

/***/ "./src/lib/directives/form-view/form-view.controller.js":
/*!**************************************************************!*\
  !*** ./src/lib/directives/form-view/form-view.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormViewCtrl": () => /* binding */ FormViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/form-view/form-view.directive.js":
/*!*************************************************************!*\
  !*** ./src/lib/directives/form-view/form-view.directive.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormView": () => /* binding */ FormView
/* harmony export */ });
/* harmony import */ var _form_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-view.controller */ "./src/lib/directives/form-view/form-view.controller.js");
/* harmony import */ var _form_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-view.tpl.html */ "./src/lib/directives/form-view/form-view.tpl.html");


/**
 * @implements {ng.IDirective}
 */

class FormView {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = _form_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      form: '='
    };
    this.controller = _form_view_controller__WEBPACK_IMPORTED_MODULE_0__.FormViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/input-item/input-item.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/input-item/input-item.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputItemCtrl": () => /* binding */ InputItemCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/input-item/input-item.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/input-item/input-item.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputItem": () => /* binding */ InputItem
/* harmony export */ });
/* harmony import */ var _input_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-item.controller */ "./src/lib/directives/input-item/input-item.controller.js");
/* harmony import */ var _input_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-item.tpl.html */ "./src/lib/directives/input-item/input-item.tpl.html");


/**
 * @implements {ng.IDirective}
 */

class InputItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = _input_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      item: '='
    };
    this.controller = _input_item_controller__WEBPACK_IMPORTED_MODULE_0__.InputItemCtrl;
    this.controllerAs = 'Input';
    this.bindToController = true;
  }

}

InputItem.$inject = [];


/***/ }),

/***/ "./src/lib/directives/input-item/input-view.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/input-item/input-view.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputViewCtrl": () => /* binding */ InputViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/input-item/input-view.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/input-item/input-view.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputView": () => /* binding */ InputView
/* harmony export */ });
/* harmony import */ var _input_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-view.controller */ "./src/lib/directives/input-item/input-view.controller.js");
/* harmony import */ var _input_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-view.tpl.html */ "./src/lib/directives/input-item/input-view.tpl.html");


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
    this.templateUrl = _input_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      formItem: '=',
      form: '='
    };
    this.controller = _input_view_controller__WEBPACK_IMPORTED_MODULE_0__.InputViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/label-item/label-item.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/label-item/label-item.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelItemCtrl": () => /* binding */ LabelItemCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/label-item/label-item.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/label-item/label-item.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelItem": () => /* binding */ LabelItem
/* harmony export */ });
/* harmony import */ var _label_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-item.controller */ "./src/lib/directives/label-item/label-item.controller.js");
/* harmony import */ var _label_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-item.tpl.html */ "./src/lib/directives/label-item/label-item.tpl.html");


/**
 * @implements {ng.IDirective}
 */

class LabelItem {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = _label_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      item: '='
    };
    this.controller = _label_item_controller__WEBPACK_IMPORTED_MODULE_0__.LabelItemCtrl;
    this.controllerAs = 'Label';
    this.bindToController = true;
  }

}



/***/ }),

/***/ "./src/lib/directives/label-item/label-view.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/label-item/label-view.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelViewCtrl": () => /* binding */ LabelViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/label-item/label-view.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/label-item/label-view.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelView": () => /* binding */ LabelView
/* harmony export */ });
/* harmony import */ var _label_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-view.controller */ "./src/lib/directives/label-item/label-view.controller.js");
/* harmony import */ var _label_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-view.tpl.html */ "./src/lib/directives/label-item/label-view.tpl.html");


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
    this.templateUrl = _label_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      formItem: '=',
      form: '='
    };
    this.controller = _label_view_controller__WEBPACK_IMPORTED_MODULE_0__.LabelViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-item.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-item.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixItemCtrl": () => /* binding */ MatrixItemCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-item.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-item.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixItem": () => /* binding */ MatrixItem
/* harmony export */ });
/* harmony import */ var _matrix_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix-item.controller */ "./src/lib/directives/matrix-item/matrix-item.controller.js");
/* harmony import */ var _matrix_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix-item.tpl.html */ "./src/lib/directives/matrix-item/matrix-item.tpl.html");


/**
 * @implements {ng.IDirective}
 */

class MatrixItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = _matrix_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      item: '='
    };
    this.controller = _matrix_item_controller__WEBPACK_IMPORTED_MODULE_0__.MatrixItemCtrl;
    this.controllerAs = 'Matrix';
    this.bindToController = true;
  }

}

MatrixItem.$inject = [];


/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-view.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-view.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixViewCtrl": () => /* binding */ MatrixViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-view.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-view.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixView": () => /* binding */ MatrixView
/* harmony export */ });
/* harmony import */ var _matrix_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix-view.tpl.html */ "./src/lib/directives/matrix-item/matrix-view.tpl.html");
/* harmony import */ var _matrix_view_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix-view.controller */ "./src/lib/directives/matrix-item/matrix-view.controller.js");


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
    this.templateUrl = _matrix_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__.default;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = _matrix_view_controller__WEBPACK_IMPORTED_MODULE_1__.MatrixViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-item.controller.js":
/*!******************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-item.controller.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonCtrl": () => /* binding */ RadioButtonCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-item.directive.js":
/*!*****************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-item.directive.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButton": () => /* binding */ RadioButton
/* harmony export */ });
/* harmony import */ var _radio_button_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button-item.controller */ "./src/lib/directives/radio-button-item/radio-button-item.controller.js");
/* harmony import */ var _radio_button_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-button-item.tpl.html */ "./src/lib/directives/radio-button-item/radio-button-item.tpl.html");


/**
 * @implements {ng.IDirective}
 */

class RadioButton {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = _radio_button_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      item: '='
    };
    this.controller = _radio_button_item_controller__WEBPACK_IMPORTED_MODULE_0__.RadioButtonCtrl;
    this.controllerAs = 'RadioButton';
    this.bindToController = true;
  }

}

RadioButton.$inject = [];


/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-view.controller.js":
/*!******************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-view.controller.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonViewCtrl": () => /* binding */ RadioButtonViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-view.directive.js":
/*!*****************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-view.directive.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonView": () => /* binding */ RadioButtonView
/* harmony export */ });
/* harmony import */ var _radio_button_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button-view.controller */ "./src/lib/directives/radio-button-item/radio-button-view.controller.js");
/* harmony import */ var _radio_button_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-button-view.tpl.html */ "./src/lib/directives/radio-button-item/radio-button-view.tpl.html");



class RadioButtonView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout;
    this.restrict = 'E';
    this.templateUrl = _radio_button_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = _radio_button_view_controller__WEBPACK_IMPORTED_MODULE_0__.RadioButtonViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/select-item/select-item.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/select-item/select-item.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectCtrl": () => /* binding */ SelectCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/select-item/select-item.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/select-item/select-item.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => /* binding */ Select
/* harmony export */ });
/* harmony import */ var _select_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-item.tpl.html */ "./src/lib/directives/select-item/select-item.tpl.html");
/* harmony import */ var _select_item_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-item.controller */ "./src/lib/directives/select-item/select-item.controller.js");


/**
 * @implements {ng.IDirective}
 */

class Select {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = _select_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__.default;
    this.scope = {
      item: '='
    };
    this.controller = _select_item_controller__WEBPACK_IMPORTED_MODULE_1__.SelectCtrl;
    this.controllerAs = 'Select';
    this.bindToController = true;
  }

}

Select.$inject = [];


/***/ }),

/***/ "./src/lib/directives/select-item/select-view.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/select-item/select-view.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectViewCtrl": () => /* binding */ SelectViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/select-item/select-view.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/select-item/select-view.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectView": () => /* binding */ SelectView
/* harmony export */ });
/* harmony import */ var _select_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-view.tpl.html */ "./src/lib/directives/select-item/select-view.tpl.html");
/* harmony import */ var _select_view_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-view.controller */ "./src/lib/directives/select-item/select-view.controller.js");


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
    this.templateUrl = _select_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__.default;
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = _select_view_controller__WEBPACK_IMPORTED_MODULE_1__.SelectViewCtrl;
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


/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-item.controller.js":
/*!**********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-item.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaItemCtrl": () => /* binding */ TextareaItemCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-item.directive.js":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-item.directive.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaItem": () => /* binding */ TextareaItem
/* harmony export */ });
/* harmony import */ var _textarea_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea-item.controller */ "./src/lib/directives/textarea-item/textarea-item.controller.js");
/* harmony import */ var _textarea_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea-item.tpl.html */ "./src/lib/directives/textarea-item/textarea-item.tpl.html");


/**
 * @implements {ng.IDirective}
 */

class TextareaItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E';
    this.templateUrl = _textarea_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.scope = {
      item: '='
    };
    this.controller = _textarea_item_controller__WEBPACK_IMPORTED_MODULE_0__.TextareaItemCtrl;
    this.controllerAs = 'Textarea';
    this.bindToController = true;
  }

}

TextareaItem.$inject = [];


/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-view.controller.js":
/*!**********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-view.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaViewCtrl": () => /* binding */ TextareaViewCtrl
/* harmony export */ });
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


/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-view.directive.js":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-view.directive.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaView": () => /* binding */ TextareaView
/* harmony export */ });
/* harmony import */ var _textarea_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea-view.controller */ "./src/lib/directives/textarea-item/textarea-view.controller.js");
/* harmony import */ var _textarea_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea-view.tpl.html */ "./src/lib/directives/textarea-item/textarea-view.tpl.html");


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
    this.templateUrl = _textarea_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default;
    this.controller = _textarea_view_controller__WEBPACK_IMPORTED_MODULE_0__.TextareaViewCtrl;
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


/***/ }),

/***/ "./src/lib/index.module.js":
/*!*********************************!*\
  !*** ./src/lib/index.module.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/lib/index.scss");
/* harmony import */ var _directives_agreement_item_agreement_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/agreement-item/agreement-item.directive */ "./src/lib/directives/agreement-item/agreement-item.directive.js");
/* harmony import */ var _directives_agreement_item_agreement_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/agreement-item/agreement-view.directive */ "./src/lib/directives/agreement-item/agreement-view.directive.js");
/* harmony import */ var _main_main_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.controller */ "./src/lib/main/main.controller.js");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/utils.service */ "./src/lib/utils/utils.service.js");
/* harmony import */ var _directives_checkboxes_item_checkboxes_item_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/checkboxes-item/checkboxes-item.directive */ "./src/lib/directives/checkboxes-item/checkboxes-item.directive.js");
/* harmony import */ var _directives_checkboxes_item_checkboxes_view_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/checkboxes-item/checkboxes-view.directive */ "./src/lib/directives/checkboxes-item/checkboxes-view.directive.js");
/* harmony import */ var _directives_form_item_form_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/form-item/form-item.directive */ "./src/lib/directives/form-item/form-item.directive.js");
/* harmony import */ var _directives_form_items_container_form_items_container_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/form-items-container/form-items-container.directive */ "./src/lib/directives/form-items-container/form-items-container.directive.js");
/* harmony import */ var _directives_form_view_form_view_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/form-view/form-view.directive */ "./src/lib/directives/form-view/form-view.directive.js");
/* harmony import */ var _directives_input_item_input_item_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/input-item/input-item.directive */ "./src/lib/directives/input-item/input-item.directive.js");
/* harmony import */ var _directives_input_item_input_view_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/input-item/input-view.directive */ "./src/lib/directives/input-item/input-view.directive.js");
/* harmony import */ var _directives_label_item_label_item_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/label-item/label-item.directive */ "./src/lib/directives/label-item/label-item.directive.js");
/* harmony import */ var _directives_label_item_label_view_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/label-item/label-view.directive */ "./src/lib/directives/label-item/label-view.directive.js");
/* harmony import */ var _directives_matrix_item_matrix_item_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/matrix-item/matrix-item.directive */ "./src/lib/directives/matrix-item/matrix-item.directive.js");
/* harmony import */ var _directives_matrix_item_matrix_view_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/matrix-item/matrix-view.directive */ "./src/lib/directives/matrix-item/matrix-view.directive.js");
/* harmony import */ var _directives_radio_button_item_radio_button_item_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/radio-button-item/radio-button-item.directive */ "./src/lib/directives/radio-button-item/radio-button-item.directive.js");
/* harmony import */ var _directives_radio_button_item_radio_button_view_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/radio-button-item/radio-button-view.directive */ "./src/lib/directives/radio-button-item/radio-button-view.directive.js");
/* harmony import */ var _directives_select_item_select_view_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/select-item/select-view.directive */ "./src/lib/directives/select-item/select-view.directive.js");
/* harmony import */ var _directives_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/select-item/select-item.directive */ "./src/lib/directives/select-item/select-item.directive.js");
/* harmony import */ var _directives_textarea_item_textarea_item_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/textarea-item/textarea-item.directive */ "./src/lib/directives/textarea-item/textarea-item.directive.js");
/* harmony import */ var _directives_textarea_item_textarea_view_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/textarea-item/textarea-view.directive */ "./src/lib/directives/textarea-item/textarea-view.directive.js");






















angular.module('angularMaterialFormBuilder', ['ngMaterial', 'angular-sortable-view', 'ngMessages']).service('Utils', _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils).controller('MainController', _main_main_controller__WEBPACK_IMPORTED_MODULE_3__.MainController).directive('agreementItem', _directives_agreement_item_agreement_item_directive__WEBPACK_IMPORTED_MODULE_1__.AgreementItem).directive('agreementView', _directives_agreement_item_agreement_view_directive__WEBPACK_IMPORTED_MODULE_2__.AgreementView).directive('checkboxesItem', _directives_checkboxes_item_checkboxes_item_directive__WEBPACK_IMPORTED_MODULE_5__.CheckboxesItem).directive('checkboxesView', _directives_checkboxes_item_checkboxes_view_directive__WEBPACK_IMPORTED_MODULE_6__.CheckboxesView).directive('formItem', _directives_form_item_form_item_directive__WEBPACK_IMPORTED_MODULE_7__.FormItem).directive('formItemsContainer', _directives_form_items_container_form_items_container_directive__WEBPACK_IMPORTED_MODULE_8__.FormItemsContainer).directive('formView', _directives_form_view_form_view_directive__WEBPACK_IMPORTED_MODULE_9__.FormView).directive('inputItem', _directives_input_item_input_item_directive__WEBPACK_IMPORTED_MODULE_10__.InputItem).directive('inputView', _directives_input_item_input_view_directive__WEBPACK_IMPORTED_MODULE_11__.InputView).directive('labelItem', _directives_label_item_label_item_directive__WEBPACK_IMPORTED_MODULE_12__.LabelItem).directive('labelView', _directives_label_item_label_view_directive__WEBPACK_IMPORTED_MODULE_13__.LabelView).directive('matrixItem', _directives_matrix_item_matrix_item_directive__WEBPACK_IMPORTED_MODULE_14__.MatrixItem).directive('matrixView', _directives_matrix_item_matrix_view_directive__WEBPACK_IMPORTED_MODULE_15__.MatrixView).directive('radioButtonItem', _directives_radio_button_item_radio_button_item_directive__WEBPACK_IMPORTED_MODULE_16__.RadioButton).directive('radioButtonView', _directives_radio_button_item_radio_button_view_directive__WEBPACK_IMPORTED_MODULE_17__.RadioButtonView).directive('selectItem', _directives_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_19__.Select).directive('selectView', _directives_select_item_select_view_directive__WEBPACK_IMPORTED_MODULE_18__.SelectView).directive('textareaItem', _directives_textarea_item_textarea_item_directive__WEBPACK_IMPORTED_MODULE_20__.TextareaItem).directive('textareaView', _directives_textarea_item_textarea_view_directive__WEBPACK_IMPORTED_MODULE_21__.TextareaView);

/***/ }),

/***/ "./src/lib/main/main.controller.js":
/*!*****************************************!*\
  !*** ./src/lib/main/main.controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainController": () => /* binding */ MainController
/* harmony export */ });
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
   * Move up (bounded)
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
   * Move down (bounded)
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


/***/ }),

/***/ "./src/lib/utils/utils.service.js":
/*!****************************************!*\
  !*** ./src/lib/utils/utils.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => /* binding */ Utils
/* harmony export */ });
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



/***/ }),

/***/ "./src/lib/directives/agreement-item/agreement-view.tpl.html":
/*!*******************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-view.tpl.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/agreement-item/agreement-view.tpl.html/agreement-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-item.tpl.html":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-item.tpl.html ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/checkboxes-item/checkboxes-item.tpl.html/checkboxes-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-view.tpl.html":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-view.tpl.html ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/checkboxes-item/checkboxes-view.tpl.html/checkboxes-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/form-item/form-item.tpl.html":
/*!*********************************************************!*\
  !*** ./src/lib/directives/form-item/form-item.tpl.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/form-item/form-item.tpl.html/form-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/form-items-container/form-items-container.tpl.html":
/*!*******************************************************************************!*\
  !*** ./src/lib/directives/form-items-container/form-items-container.tpl.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/form-items-container/form-items-container.tpl.html/form-items-container.tpl.html");

/***/ }),

/***/ "./src/lib/directives/form-view/form-view.tpl.html":
/*!*********************************************************!*\
  !*** ./src/lib/directives/form-view/form-view.tpl.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/form-view/form-view.tpl.html/form-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/input-item/input-item.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/input-item/input-item.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/input-item/input-item.tpl.html/input-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/input-item/input-view.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/input-item/input-view.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/input-item/input-view.tpl.html/input-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/label-item/label-item.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/label-item/label-item.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/label-item/label-item.tpl.html/label-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/label-item/label-view.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/label-item/label-view.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/label-item/label-view.tpl.html/label-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-item.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-item.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/matrix-item/matrix-item.tpl.html/matrix-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-view.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-view.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/matrix-item/matrix-view.tpl.html/matrix-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-item.tpl.html":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-item.tpl.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/radio-button-item/radio-button-item.tpl.html/radio-button-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-view.tpl.html":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-view.tpl.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/radio-button-item/radio-button-view.tpl.html/radio-button-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/select-item/select-item.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/select-item/select-item.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/select-item/select-item.tpl.html/select-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/select-item/select-view.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/select-item/select-view.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/select-item/select-view.tpl.html/select-view.tpl.html");

/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-item.tpl.html":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-item.tpl.html ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/textarea-item/textarea-item.tpl.html/textarea-item.tpl.html");

/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-view.tpl.html":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-view.tpl.html ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/textarea-item/textarea-view.tpl.html/textarea-view.tpl.html");

/***/ }),

/***/ "./src/lib/index.scss":
/*!****************************!*\
  !*** ./src/lib/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/lib/index.module.js");
/******/ })()
;
});
//# sourceMappingURL=angular-material-form-builder.js.map