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
/* harmony export */   "AgreementItemCtrl": () => (/* binding */ AgreementItemCtrl)
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
/* harmony export */   "AgreementItem": () => (/* binding */ AgreementItem)
/* harmony export */ });
/* harmony import */ var _agreement_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreement-item.controller */ "./src/lib/directives/agreement-item/agreement-item.controller.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

 // import AgreementItemTemplate from './agreement-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */

var AgreementItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function AgreementItem() {
  _classCallCheck(this, AgreementItem);

  this.restrict = 'E';
  this.scope = {
    item: '='
  };
  this.controller = _agreement_item_controller__WEBPACK_IMPORTED_MODULE_0__.AgreementItemCtrl;
  this.controllerAs = 'Agreement';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/agreement-item/agreement-view.controller.js":
/*!************************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-view.controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementViewCtrl": () => (/* binding */ AgreementViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var AgreementViewCtrl = /*#__PURE__*/function () {
  AgreementViewCtrl.$inject = ["$scope", "Utils"];

  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function AgreementViewCtrl($scope, Utils) {
    _classCallCheck(this, AgreementViewCtrl);

    this.Scope = $scope;
    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(AgreementViewCtrl, [{
    key: "init",
    value: function init() {
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
  }, {
    key: "toggleSelectedOption",
    value: function toggleSelectedOption() {
      this.selectedOptions = this._getSelectedOptions();

      this._updateView();

      this._updateValidity();
    }
  }, {
    key: "_getSelectedOptions",
    value: function _getSelectedOptions() {
      return this.formItem.options.filter(function (option) {
        return option.selected;
      });
    }
  }, {
    key: "_updateView",
    value: function _updateView() {
      if (!this.formItem.config.maxSelections) {
        this.disableOptions = false;
      } else if (this.selectedOptions.length === this.formItem.config.maxSelections) {
        this.disableOptions = true;
      } else {
        this.disableOptions = false;
      }
    }
  }, {
    key: "_updateValidity",
    value: function _updateValidity() {
      if (this.formItem.config.required) {
        this.isValid = this.selectedOptions.length > 0;
      } else {
        this.isValid = true;
      }

      this.form.$setValidity('minSelections', this.isValid);
    }
  }, {
    key: "_enableWatchers",
    value: function _enableWatchers() {
      var _this = this;

      this.Scope.$watch('AgreementView.formItem.config.required', function (newVal) {
        if (newVal !== undefined) {
          _this._updateView();

          _this._updateValidity();
        }
      });
    }
  }]);

  return AgreementViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/agreement-item/agreement-view.directive.js":
/*!***********************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-view.directive.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementView": () => (/* binding */ AgreementView)
/* harmony export */ });
/* harmony import */ var _agreement_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreement-view.controller */ "./src/lib/directives/agreement-item/agreement-view.controller.js");
/* harmony import */ var _agreement_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agreement-view.tpl.html */ "./src/lib/directives/agreement-item/agreement-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var AgreementView = /*#__PURE__*/function () {
  AgreementView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function AgreementView($timeout) {
    _classCallCheck(this, AgreementView);

    this.$timeout = $timeout;
    this.template = _agreement_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
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


  _createClass(AgreementView, [{
    key: "link",
    value: function link(scope, element, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return AgreementView;
}();



/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-item.controller.js":
/*!**************************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-item.controller.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesItemCtrl": () => (/* binding */ CheckboxesItemCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CheckboxesItemCtrl = /*#__PURE__*/function () {
  CheckboxesItemCtrl.$inject = ["Utils", "$element"];

  /**
   * @ngInject
   *
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  function CheckboxesItemCtrl(Utils, $element) {
    _classCallCheck(this, CheckboxesItemCtrl);

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

  _createClass(CheckboxesItemCtrl, [{
    key: "deleteOption",
    value: function deleteOption(index) {
      this.item.options.splice(index, 1);
    }
  }, {
    key: "addOption",
    value: function addOption() {
      var _this = this;

      this.item.options.push({
        value: '',
        selected: false
      }); // Focus new element

      setTimeout(function () {
        var options = _this.Element.find('input');

        var addedOption = options[options.length - 1];
        addedOption.focus();
      }, 0);
    }
  }]);

  return CheckboxesItemCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-item.directive.js":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-item.directive.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesItem": () => (/* binding */ CheckboxesItem)
/* harmony export */ });
/* harmony import */ var _checkboxes_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxes-item.tpl.html */ "./src/lib/directives/checkboxes-item/checkboxes-item.tpl.html");
/* harmony import */ var _checkboxes_item_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxes-item.controller */ "./src/lib/directives/checkboxes-item/checkboxes-item.controller.js");


/**
 * @implements {ng.IDirective}
 */

function CheckboxesItem() {
  var directive = {
    restrict: 'E',
    template: _checkboxes_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__["default"],
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
/* harmony export */   "CheckboxesViewCtrl": () => (/* binding */ CheckboxesViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var CheckboxesViewCtrl = /*#__PURE__*/function () {
  CheckboxesViewCtrl.$inject = ["$scope", "Utils"];

  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function CheckboxesViewCtrl($scope, Utils) {
    _classCallCheck(this, CheckboxesViewCtrl);

    this.Scope = $scope;
    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(CheckboxesViewCtrl, [{
    key: "init",
    value: function init() {
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
  }, {
    key: "toggleSelectedOption",
    value: function toggleSelectedOption() {
      this.selectedOptions = this._getSelectedOptions();

      this._updateView();

      this._updateValidity();
    }
  }, {
    key: "_getSelectedOptions",
    value: function _getSelectedOptions() {
      return this.formItem.options.filter(function (option) {
        return option.selected;
      });
    }
  }, {
    key: "_updateView",
    value: function _updateView() {
      if (!this.formItem.config.maxSelections) {
        this.disableOptions = false;
      } else if (this.selectedOptions.length === this.formItem.config.maxSelections) {
        this.disableOptions = true;
      } else {
        this.disableOptions = false;
      }
    }
  }, {
    key: "_updateValidity",
    value: function _updateValidity() {
      if (this.formItem.config.required) {
        this.isValid = this.selectedOptions.length > 0;
      } else {
        this.isValid = true;
      }

      this.form.$setValidity('minSelections', this.isValid);
    }
  }, {
    key: "_enableWatchers",
    value: function _enableWatchers() {
      var _this = this;

      this.Scope.$watch('CheckboxesView.formItem.config.required', function (newVal) {
        if (newVal !== undefined) {
          _this._updateView();

          _this._updateValidity();
        }
      });
    }
  }]);

  return CheckboxesViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-view.directive.js":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-view.directive.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxesView": () => (/* binding */ CheckboxesView)
/* harmony export */ });
/* harmony import */ var _checkboxes_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxes-view.tpl.html */ "./src/lib/directives/checkboxes-item/checkboxes-view.tpl.html");
/* harmony import */ var _checkboxes_view_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkboxes-view.controller */ "./src/lib/directives/checkboxes-item/checkboxes-view.controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var CheckboxesView = /*#__PURE__*/function () {
  CheckboxesView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function CheckboxesView($timeout) {
    _classCallCheck(this, CheckboxesView);

    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = _checkboxes_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__["default"];
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


  _createClass(CheckboxesView, [{
    key: "link",
    value: function link(scope, element, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return CheckboxesView;
}();



/***/ }),

/***/ "./src/lib/directives/date-item/date-item.controller.js":
/*!**************************************************************!*\
  !*** ./src/lib/directives/date-item/date-item.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateItemCtrl": () => (/* binding */ DateItemCtrl)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateItemCtrl = /*#__PURE__*/_createClass(
/**
 * @ngInject
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {JQLite} $element
 */
["Utils", "$element", function DateItemCtrl(Utils, $element) {
  _classCallCheck(this, DateItemCtrl);

  this.Element = $element;
  this.item = Utils.extend(this.item || {}, {
    config: {
      type: 'date'
    }
  });
}]);



/***/ }),

/***/ "./src/lib/directives/date-item/date-item.directive.js":
/*!*************************************************************!*\
  !*** ./src/lib/directives/date-item/date-item.directive.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateItem": () => (/* binding */ DateItem)
/* harmony export */ });
/* harmony import */ var _date_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-item.controller */ "./src/lib/directives/date-item/date-item.controller.js");
/* harmony import */ var _date_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-item.tpl.html */ "./src/lib/directives/date-item/date-item.tpl.html");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var DateItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function DateItem() {
  _classCallCheck(this, DateItem);

  this.restrict = 'E';
  this.template = _date_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _date_item_controller__WEBPACK_IMPORTED_MODULE_0__.DateItemCtrl;
  this.controllerAs = 'Date';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/date-item/date-view.controller.js":
/*!**************************************************************!*\
  !*** ./src/lib/directives/date-item/date-view.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateViewCtrl": () => (/* binding */ DateViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DateViewCtrl = /*#__PURE__*/function () {
  DateViewCtrl.$inject = ["Utils"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function DateViewCtrl(Utils) {
    _classCallCheck(this, DateViewCtrl);

    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(DateViewCtrl, [{
    key: "init",
    value: function init() {
      this.Utils.extend(this.formItem, {
        config: {}
      });
    }
  }]);

  return DateViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/date-item/date-view.directive.js":
/*!*************************************************************!*\
  !*** ./src/lib/directives/date-item/date-view.directive.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateView": () => (/* binding */ DateView)
/* harmony export */ });
/* harmony import */ var _date_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date-view.controller */ "./src/lib/directives/date-item/date-view.controller.js");
/* harmony import */ var _date_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-view.tpl.html */ "./src/lib/directives/date-item/date-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var DateView = /*#__PURE__*/function () {
  DateView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function DateView($timeout) {
    _classCallCheck(this, DateView);

    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = _date_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.scope = {
      formItem: '=',
      form: '='
    };
    this.controller = _date_view_controller__WEBPACK_IMPORTED_MODULE_0__.DateViewCtrl;
    this.controllerAs = 'DateView';
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


  _createClass(DateView, [{
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return DateView;
}();



/***/ }),

/***/ "./src/lib/directives/form-item/form-item.controller.js":
/*!**************************************************************!*\
  !*** ./src/lib/directives/form-item/form-item.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemCtrl": () => (/* binding */ FormItemCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var DEFAULT_TITLE = {
  upload: 'Attachment',
  agreement: 'Agreement',
  input: 'Field',
  chooseFromList: 'Select',
  label: 'Label',
  multipleChoices: 'Choice',
  matrix: 'Matrix',
  checkboxes: 'Options',
  textarea: 'Text',
  date: 'Date'
};

var FormItemCtrl = /*#__PURE__*/function () {
  FormItemCtrl.$inject = ["$scope", "$attrs", "Utils"];

  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {ng.IAttributes} $attrs
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function FormItemCtrl($scope, $attrs, Utils) {
    _classCallCheck(this, FormItemCtrl);

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
      textarea: '<textarea-item item="FormItem.item"></textarea-item>',
      date: '<date-item item="FormItem.item"></date-item>'
    };
    this.item = {};
    this.scope = $scope;
  }

  _createClass(FormItemCtrl, [{
    key: "init",
    value: function init() {
      this.item = this.Utils.extend(this.item || {}, {
        type: this.Attrs.type,
        props: {
          title: DEFAULT_TITLE[this.Attrs.type],
          helpText: ''
        },
        config: {
          required: false
        }
      });
    }
  }, {
    key: "deleteClicked",
    value: function deleteClicked() {
      this.onDelete({
        item: this.item,
        index: this.index()
      });
    }
    /**
     *
     * @param {string} type
     */

  }, {
    key: "_getItemTemplate",
    value: function _getItemTemplate(type) {
      var prefix = '' + '<div class="form-item-container">' + '<div class="form-item-actions">' + '<md-button class="md-button" ng-if="FormItem.Attrs.onDelete" ng-click="FormItem.deleteClicked()"> ' + '<md-icon class="material-icons small">delete</md-icon>' + '</md-button>' + '<md-button class="md-button" ng-if="FormItem.Attrs.onUp" ng-click="FormItem.onUp({item: FormItem.item, index: FormItem.index()})"> ' + '<md-icon class="material-icons small">arrow_drop_up</md-icon>' + '</md-button>' + '<md-button class="md-button" ng-if="FormItem.Attrs.onDown" ng-click="FormItem.onDown({item: FormItem.item, index: FormItem.index()})"> ' + '<md-icon class="material-icons small">arrow_drop_down</md-icon>' + '</md-button>' + '</div>' + '<md-input-container>' + '<label>Field Title</label>' + '<input ng-model="FormItem.item.props.title"/>' + '</md-input-container>' + '<md-input-container>' + '<label>Help Text</label>' + '<input ng-model="FormItem.item.props.helpText" />' + '</md-input-container>';
      var suffix = '' + '<md-input-container>' + '<md-checkbox ng-model="FormItem.item.config.required">Required field</md-checkbox>' + '</md-input-container>' + '</div>';
      return prefix + this.templates[type] + suffix;
    }
  }]);

  return FormItemCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/form-item/form-item.directive.js":
/*!*************************************************************!*\
  !*** ./src/lib/directives/form-item/form-item.directive.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItem": () => (/* binding */ FormItem)
/* harmony export */ });
/* harmony import */ var _form_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-item.tpl.html */ "./src/lib/directives/form-item/form-item.tpl.html");
/* harmony import */ var _form_item_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-item.controller */ "./src/lib/directives/form-item/form-item.controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var FormItem = /*#__PURE__*/function () {
  FormItem.$inject = ["$compile"];

  /**
   * @ngInject
   * @param {ng.ICompileService} $compile
   */
  function FormItem($compile) {
    _classCallCheck(this, FormItem);

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
    this.template = _form_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
  /**
   * @see https://docs.angularjs.org/api/ng/service/$compile#-link-
   * @param {ng.IScope} scope - scope
   * @param {JQLite} element - element
   * @param {ng.IAttributes} attrs - attributes
   * @param {FormItemCtrl} ctrl - this instance controller
   * @param {ng.ITranscludeFunction} transcludeFn - transclude function ($transclude)
   */


  _createClass(FormItem, [{
    key: "link",
    value: function link(scope, element, attrs, ctrl) {
      var template = ctrl._getItemTemplate(attrs.type);

      var el = this.$compile(template)(scope); // element.append(el)
      // if done like above adds twice
      // element.append(this.$compile(template)(scope))

      ctrl.init();
      return el;
    }
  }]);

  return FormItem;
}();



/***/ }),

/***/ "./src/lib/directives/form-items-container/form-items-container.controller.js":
/*!************************************************************************************!*\
  !*** ./src/lib/directives/form-items-container/form-items-container.controller.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemsContainerCtrl": () => (/* binding */ FormItemsContainerCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormItemsContainerCtrl = /*#__PURE__*/function () {
  /**
   * @ngInject
   */
  function FormItemsContainerCtrl() {
    _classCallCheck(this, FormItemsContainerCtrl);

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


  _createClass(FormItemsContainerCtrl, [{
    key: "delete",
    value: function _delete(item, index) {
      this.form.items.splice(index, 1);
    }
    /**
     *
     * @param {import('../../main/main.controller').Item} item
     * @param {number} index
     */

  }, {
    key: "up",
    value: function up(item, index) {
      if (index !== 0) {
        var prevItem = this.form.items[index - 1];
        this.form.items[index] = prevItem;
        this.form.items[index - 1] = item;
      }
    }
    /**
     *
     * @param {import('../../main/main.controller').Item} item
     * @param {number} index
     */

  }, {
    key: "down",
    value: function down(item, index) {
      if (index !== this.form.items.length - 1) {
        var nextItem = this.form.items[index + 1];
        this.form.items[index] = nextItem;
        this.form.items[index + 1] = item;
      }
    }
  }]);

  return FormItemsContainerCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/form-items-container/form-items-container.directive.js":
/*!***********************************************************************************!*\
  !*** ./src/lib/directives/form-items-container/form-items-container.directive.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormItemsContainer": () => (/* binding */ FormItemsContainer)
/* harmony export */ });
/* harmony import */ var _form_items_container_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-items-container.controller */ "./src/lib/directives/form-items-container/form-items-container.controller.js");
/* harmony import */ var _form_items_container_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-items-container.tpl.html */ "./src/lib/directives/form-items-container/form-items-container.tpl.html");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var FormItemsContainer = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function FormItemsContainer() {
  _classCallCheck(this, FormItemsContainer);

  this.restrict = 'E';
  this.scope = {
    form: '='
  };
  this.template = _form_items_container_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.controller = _form_items_container_controller__WEBPACK_IMPORTED_MODULE_0__.FormItemsContainerCtrl;
  this.controllerAs = 'container';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/form-view/form-view.controller.js":
/*!**************************************************************!*\
  !*** ./src/lib/directives/form-view/form-view.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormViewCtrl": () => (/* binding */ FormViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormViewCtrl = /*#__PURE__*/function () {
  FormViewCtrl.$inject = ["$scope"];

  /**
   * @ngInject
   * @param {ng.IScù} $scope
   */
  function FormViewCtrl($scope) {
    _classCallCheck(this, FormViewCtrl);

    this.Scope = $scope;
  }

  _createClass(FormViewCtrl, [{
    key: "init",
    value: function init() {}
  }]);

  return FormViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/form-view/form-view.directive.js":
/*!*************************************************************!*\
  !*** ./src/lib/directives/form-view/form-view.directive.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormView": () => (/* binding */ FormView)
/* harmony export */ });
/* harmony import */ var _form_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-view.controller */ "./src/lib/directives/form-view/form-view.controller.js");
/* harmony import */ var _form_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-view.tpl.html */ "./src/lib/directives/form-view/form-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var FormView = /*#__PURE__*/function () {
  /**
   * @ngInject
   */
  function FormView() {
    _classCallCheck(this, FormView);

    this.restrict = 'E';
    this.template = _form_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
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


  _createClass(FormView, [{
    key: "link",
    value: function link(scope, element, attrs, ctrl) {
      ctrl.init();
    }
  }]);

  return FormView;
}();



/***/ }),

/***/ "./src/lib/directives/input-item/input-item.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/input-item/input-item.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputItemCtrl": () => (/* binding */ InputItemCtrl)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InputItemCtrl = /*#__PURE__*/_createClass(
/**
 * @ngInject
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {JQLite} $element
 */
["Utils", "$element", function InputItemCtrl(Utils, $element) {
  _classCallCheck(this, InputItemCtrl);

  this.Element = $element;
  this.item = Utils.extend(this.item || {}, {
    config: {
      type: 'text'
    }
  });
}]);



/***/ }),

/***/ "./src/lib/directives/input-item/input-item.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/input-item/input-item.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputItem": () => (/* binding */ InputItem)
/* harmony export */ });
/* harmony import */ var _input_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-item.controller */ "./src/lib/directives/input-item/input-item.controller.js");
/* harmony import */ var _input_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-item.tpl.html */ "./src/lib/directives/input-item/input-item.tpl.html");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var InputItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function InputItem() {
  _classCallCheck(this, InputItem);

  this.restrict = 'E';
  this.template = _input_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _input_item_controller__WEBPACK_IMPORTED_MODULE_0__.InputItemCtrl;
  this.controllerAs = 'Input';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/input-item/input-view.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/input-item/input-view.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputViewCtrl": () => (/* binding */ InputViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var InputViewCtrl = /*#__PURE__*/function () {
  InputViewCtrl.$inject = ["Utils"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function InputViewCtrl(Utils) {
    _classCallCheck(this, InputViewCtrl);

    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(InputViewCtrl, [{
    key: "init",
    value: function init() {
      this.Utils.extend(this.formItem, {
        config: {}
      });
    }
  }]);

  return InputViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/input-item/input-view.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/input-item/input-view.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputView": () => (/* binding */ InputView)
/* harmony export */ });
/* harmony import */ var _input_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-view.controller */ "./src/lib/directives/input-item/input-view.controller.js");
/* harmony import */ var _input_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-view.tpl.html */ "./src/lib/directives/input-item/input-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var InputView = /*#__PURE__*/function () {
  InputView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function InputView($timeout) {
    _classCallCheck(this, InputView);

    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = _input_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
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


  _createClass(InputView, [{
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return InputView;
}();



/***/ }),

/***/ "./src/lib/directives/label-item/label-item.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/label-item/label-item.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelItemCtrl": () => (/* binding */ LabelItemCtrl)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LabelItemCtrl = /*#__PURE__*/_createClass(
/**
 * @ngInject
 * @param {JQLite} $element
 */
["$element", function LabelItemCtrl($element) {
  _classCallCheck(this, LabelItemCtrl);

  this.Element = $element;
}]);



/***/ }),

/***/ "./src/lib/directives/label-item/label-item.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/label-item/label-item.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelItem": () => (/* binding */ LabelItem)
/* harmony export */ });
/* harmony import */ var _label_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-item.controller */ "./src/lib/directives/label-item/label-item.controller.js");
/* harmony import */ var _label_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-item.tpl.html */ "./src/lib/directives/label-item/label-item.tpl.html");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var LabelItem = /*#__PURE__*/_createClass(function LabelItem() {
  _classCallCheck(this, LabelItem);

  this.restrict = 'E';
  this.template = _label_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _label_item_controller__WEBPACK_IMPORTED_MODULE_0__.LabelItemCtrl;
  this.controllerAs = 'Label';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/label-item/label-view.controller.js":
/*!****************************************************************!*\
  !*** ./src/lib/directives/label-item/label-view.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelViewCtrl": () => (/* binding */ LabelViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var LabelViewCtrl = /*#__PURE__*/function () {
  LabelViewCtrl.$inject = ["Utils", "$sce"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {ng.ISCEService} $sce
   */
  function LabelViewCtrl(Utils, $sce) {
    _classCallCheck(this, LabelViewCtrl);

    this.Utils = Utils;
    this.$sce = $sce;
  }

  _createClass(LabelViewCtrl, [{
    key: "init",
    value: function init() {
      this.Utils.extend(this.formItem, {});
    }
  }, {
    key: "sanitizedTitle",
    get: function get() {
      return this.$sce.trustAsHtml(this.formItem.value);
    }
  }]);

  return LabelViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/label-item/label-view.directive.js":
/*!***************************************************************!*\
  !*** ./src/lib/directives/label-item/label-view.directive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelView": () => (/* binding */ LabelView)
/* harmony export */ });
/* harmony import */ var _label_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-view.controller */ "./src/lib/directives/label-item/label-view.controller.js");
/* harmony import */ var _label_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-view.tpl.html */ "./src/lib/directives/label-item/label-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var LabelView = /*#__PURE__*/function () {
  LabelView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function LabelView($timeout) {
    _classCallCheck(this, LabelView);

    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = _label_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
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


  _createClass(LabelView, [{
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return LabelView;
}();



/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-item.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-item.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixItemCtrl": () => (/* binding */ MatrixItemCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MatrixItemCtrl = /*#__PURE__*/function () {
  MatrixItemCtrl.$inject = ["Utils", "$document"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {ng.IDocumentService} $document
   */
  function MatrixItemCtrl(Utils, $document) {
    _classCallCheck(this, MatrixItemCtrl);

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


  _createClass(MatrixItemCtrl, [{
    key: "deleteRow",
    value: function deleteRow(index) {
      this.item.config.rows.splice(index, 1);
    }
  }, {
    key: "addRow",
    value: function addRow() {
      this.item.config.rows.push({
        value: ''
      });
      setTimeout(function () {
        var options = this.RowContainer.find('input');
        var addedOption = options[options.length - 1];
        addedOption.focus();
      }.bind(this), 0);
    }
    /**
     *
     * @param {number} index
     */

  }, {
    key: "deleteColumn",
    value: function deleteColumn(index) {
      this.item.config.columns.splice(index, 1);
    }
  }, {
    key: "addColumn",
    value: function addColumn() {
      var _this = this;

      this.item.config.columns.push({
        value: ''
      });
      setTimeout(function () {
        var options = _this.ColumnContainer.find('input');

        var addedOption = options[options.length - 1];
        addedOption.focus();
      }, 0);
    }
  }]);

  return MatrixItemCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-item.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-item.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixItem": () => (/* binding */ MatrixItem)
/* harmony export */ });
/* harmony import */ var _matrix_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix-item.controller */ "./src/lib/directives/matrix-item/matrix-item.controller.js");
/* harmony import */ var _matrix_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix-item.tpl.html */ "./src/lib/directives/matrix-item/matrix-item.tpl.html");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var MatrixItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function MatrixItem() {
  _classCallCheck(this, MatrixItem);

  this.restrict = 'E';
  this.template = _matrix_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _matrix_item_controller__WEBPACK_IMPORTED_MODULE_0__.MatrixItemCtrl;
  this.controllerAs = 'Matrix';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-view.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-view.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixViewCtrl": () => (/* binding */ MatrixViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var MatrixViewCtrl = /*#__PURE__*/function () {
  MatrixViewCtrl.$inject = ["$scope", "Utils"];

  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function MatrixViewCtrl($scope, Utils) {
    _classCallCheck(this, MatrixViewCtrl);

    this.Scope = $scope;
    this.Utils = Utils;
    this.isValid = true;
    this.formItem = {};
  }

  _createClass(MatrixViewCtrl, [{
    key: "init",
    value: function init() {
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
  }, {
    key: "_updateValidity",
    value: function _updateValidity() {
      var valid = true;

      if (this.formItem.config.required) {
        valid = !this.formItem.config.rows.some(function (row) {
          return typeof row['selected'] === 'undefined';
        }); //   for (let i = 0; i < this.formItem.config.rows.length; i++) {
        //     if (typeof this.formItem.config.rows[i]['selected'] === 'undefined') {
        //       valid = false
        //       break
        //     }
        //   }
      }

      this.isValid = valid;
      this.form.$setValidity('required', this.isValid);
    }
  }, {
    key: "_enableWatchers",
    value: function _enableWatchers() {
      var _this = this;

      this.Scope.$watchGroup(['MatrixView.formItem.config.required', 'MatrixView.formItem.config.rows.length'], function (newVal) {
        if (newVal !== undefined) {
          _this._updateValidity();
        }
      });
    }
  }]);

  return MatrixViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-view.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-view.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatrixView": () => (/* binding */ MatrixView)
/* harmony export */ });
/* harmony import */ var _matrix_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix-view.tpl.html */ "./src/lib/directives/matrix-item/matrix-view.tpl.html");
/* harmony import */ var _matrix_view_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix-view.controller */ "./src/lib/directives/matrix-item/matrix-view.controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var MatrixView = /*#__PURE__*/function () {
  MatrixView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function MatrixView($timeout) {
    _classCallCheck(this, MatrixView);

    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = _matrix_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__["default"];
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


  _createClass(MatrixView, [{
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return MatrixView;
}();



/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-item.controller.js":
/*!******************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-item.controller.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonItemCtrl": () => (/* binding */ RadioButtonItemCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var RadioButtonItemCtrl = /*#__PURE__*/function () {
  RadioButtonItemCtrl.$inject = ["Utils", "$element"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  function RadioButtonItemCtrl(Utils, $element) {
    _classCallCheck(this, RadioButtonItemCtrl);

    this.Element = $element;
    this.item = Utils.extend(this.item || {}, {
      config: {},
      options: [{
        value: ''
      }]
    });
  }

  _createClass(RadioButtonItemCtrl, [{
    key: "deleteOption",
    value: function deleteOption(index) {
      this.item.options.splice(index, 1);
    }
  }, {
    key: "addOption",
    value: function addOption() {
      var _this = this;

      this.item.options.push({
        value: ''
      });
      setTimeout(function () {
        var options = _this.Element.find('input');

        var addedOption = options[options.length - 1];
        addedOption.focus();
      }, 0);
    }
  }]);

  return RadioButtonItemCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-item.directive.js":
/*!*****************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-item.directive.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonItem": () => (/* binding */ RadioButtonItem)
/* harmony export */ });
/* harmony import */ var _radio_button_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button-item.controller */ "./src/lib/directives/radio-button-item/radio-button-item.controller.js");
/* harmony import */ var _radio_button_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-button-item.tpl.html */ "./src/lib/directives/radio-button-item/radio-button-item.tpl.html");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var RadioButtonItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function RadioButtonItem() {
  _classCallCheck(this, RadioButtonItem);

  this.restrict = 'E';
  this.template = _radio_button_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _radio_button_item_controller__WEBPACK_IMPORTED_MODULE_0__.RadioButtonItemCtrl;
  this.controllerAs = 'RadioButton';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-view.controller.js":
/*!******************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-view.controller.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonViewCtrl": () => (/* binding */ RadioButtonViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var RadioButtonViewCtrl = /*#__PURE__*/function () {
  RadioButtonViewCtrl.$inject = ["Utils"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function RadioButtonViewCtrl(Utils) {
    _classCallCheck(this, RadioButtonViewCtrl);

    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(RadioButtonViewCtrl, [{
    key: "init",
    value: function init() {
      this.formItem = this.Utils.extend(this.formItem, {
        config: {},
        options: []
      });
    }
  }]);

  return RadioButtonViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-view.directive.js":
/*!*****************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-view.directive.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioButtonView": () => (/* binding */ RadioButtonView)
/* harmony export */ });
/* harmony import */ var _radio_button_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-button-view.controller */ "./src/lib/directives/radio-button-item/radio-button-view.controller.js");
/* harmony import */ var _radio_button_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./radio-button-view.tpl.html */ "./src/lib/directives/radio-button-item/radio-button-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var RadioButtonView = /*#__PURE__*/function () {
  RadioButtonView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function RadioButtonView($timeout) {
    _classCallCheck(this, RadioButtonView);

    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = _radio_button_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
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


  _createClass(RadioButtonView, [{
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return RadioButtonView;
}();



/***/ }),

/***/ "./src/lib/directives/select-item/select-item.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/select-item/select-item.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectItemCtrl": () => (/* binding */ SelectItemCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SelectItemCtrl = /*#__PURE__*/function () {
  SelectItemCtrl.$inject = ["Utils", "$element"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  function SelectItemCtrl(Utils, $element) {
    _classCallCheck(this, SelectItemCtrl);

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


  _createClass(SelectItemCtrl, [{
    key: "deleteOption",
    value: function deleteOption(index) {
      this.item.options.splice(index, 1);
    }
  }, {
    key: "addOption",
    value: function addOption() {
      var _this = this;

      this.item.options.push({
        value: ''
      });
      setTimeout(function () {
        var options = _this.Element.find('input');

        var addedOption = options[options.length - 1];
        addedOption.focus();
      }, 0);
    }
  }]);

  return SelectItemCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/select-item/select-item.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/select-item/select-item.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectItem": () => (/* binding */ SelectItem)
/* harmony export */ });
/* harmony import */ var _select_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-item.tpl.html */ "./src/lib/directives/select-item/select-item.tpl.html");
/* harmony import */ var _select_item_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-item.controller */ "./src/lib/directives/select-item/select-item.controller.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var SelectItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function SelectItem() {
  _classCallCheck(this, SelectItem);

  this.restrict = 'E';
  this.template = _select_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _select_item_controller__WEBPACK_IMPORTED_MODULE_1__.SelectItemCtrl;
  this.controllerAs = 'Select';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/select-item/select-view.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/select-item/select-view.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectViewCtrl": () => (/* binding */ SelectViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SelectViewCtrl = /*#__PURE__*/function () {
  SelectViewCtrl.$inject = ["Utils"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function SelectViewCtrl(Utils) {
    _classCallCheck(this, SelectViewCtrl);

    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(SelectViewCtrl, [{
    key: "init",
    value: function init() {
      this.formItem = this.Utils.extend(this.formItem, {
        config: {},
        options: []
      });
    }
  }]);

  return SelectViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/select-item/select-view.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/select-item/select-view.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectView": () => (/* binding */ SelectView)
/* harmony export */ });
/* harmony import */ var _select_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-view.tpl.html */ "./src/lib/directives/select-item/select-view.tpl.html");
/* harmony import */ var _select_view_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-view.controller */ "./src/lib/directives/select-item/select-view.controller.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var SelectView = /*#__PURE__*/function () {
  SelectView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function SelectView($timeout) {
    _classCallCheck(this, SelectView);

    this.$timeout = $timeout;
    this.restrict = 'E';
    this.template = _select_view_tpl_html__WEBPACK_IMPORTED_MODULE_0__["default"];
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


  _createClass(SelectView, [{
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return SelectView;
}();



/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-item.controller.js":
/*!**********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-item.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaItemCtrl": () => (/* binding */ TextareaItemCtrl)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextareaItemCtrl = /*#__PURE__*/_createClass(
/**
 * @ngInject
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {JQLite} $element
 */
["Utils", "$element", function TextareaItemCtrl(Utils, $element) {
  _classCallCheck(this, TextareaItemCtrl);

  this.Element = $element;
  this.item = Utils.extend(this.item || {}, {
    config: {}
  });
}]);



/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-item.directive.js":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-item.directive.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaItem": () => (/* binding */ TextareaItem)
/* harmony export */ });
/* harmony import */ var _textarea_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea-item.controller */ "./src/lib/directives/textarea-item/textarea-item.controller.js");
/* harmony import */ var _textarea_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea-item.tpl.html */ "./src/lib/directives/textarea-item/textarea-item.tpl.html");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var TextareaItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function TextareaItem() {
  _classCallCheck(this, TextareaItem);

  this.restrict = 'E';
  this.template = _textarea_item_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _textarea_item_controller__WEBPACK_IMPORTED_MODULE_0__.TextareaItemCtrl;
  this.controllerAs = 'Textarea';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-view.controller.js":
/*!**********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-view.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaViewCtrl": () => (/* binding */ TextareaViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TextareaViewCtrl = /*#__PURE__*/function () {
  TextareaViewCtrl.$inject = ["Utils"];

  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  function TextareaViewCtrl(Utils) {
    _classCallCheck(this, TextareaViewCtrl);

    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(TextareaViewCtrl, [{
    key: "init",
    value: function init() {
      this.formItem = this.Utils.extend(this.formItem, {
        config: {}
      });
    }
  }]);

  return TextareaViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-view.directive.js":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-view.directive.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaView": () => (/* binding */ TextareaView)
/* harmony export */ });
/* harmony import */ var _textarea_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textarea-view.controller */ "./src/lib/directives/textarea-item/textarea-view.controller.js");
/* harmony import */ var _textarea_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea-view.tpl.html */ "./src/lib/directives/textarea-item/textarea-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



/**
 * @implements {ng.IDirective}
 */

var TextareaView = /*#__PURE__*/function () {
  TextareaView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function TextareaView($timeout) {
    _classCallCheck(this, TextareaView);

    this.$timeout = $timeout;
    this.scope = {
      formItem: '=',
      form: '='
    };
    this.restrict = 'E';
    this.template = _textarea_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
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


  _createClass(TextareaView, [{
    key: "link",
    value: function link(scope, elem, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
    }
  }]);

  return TextareaView;
}();



/***/ }),

/***/ "./src/lib/directives/upload-item/upload-item.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/upload-item/upload-item.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadItemCtrl": () => (/* binding */ UploadItemCtrl)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UploadItemCtrl = /*#__PURE__*/_createClass(
/**
 * @ngInject
 *
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {JQLite} $element
 */
["Utils", "$element", function UploadItemCtrl(Utils, $element) {
  _classCallCheck(this, UploadItemCtrl);

  this.Element = $element;
  this.item = Utils.extend(this.item || {}, {
    config: {},
    options: []
  });
}]);



/***/ }),

/***/ "./src/lib/directives/upload-item/upload-item.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/upload-item/upload-item.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadItem": () => (/* binding */ UploadItem)
/* harmony export */ });
/* harmony import */ var _upload_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-item.tpl.html */ "./src/lib/directives/upload-item/upload-item.tpl.html");
/* harmony import */ var _upload_item_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-item.controller */ "./src/lib/directives/upload-item/upload-item.controller.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * @implements {ng.IDirective}
 */

var UploadItem = /*#__PURE__*/_createClass(
/**
 * @ngInject
 */
function UploadItem() {
  _classCallCheck(this, UploadItem);

  this.restrict = 'E';
  this.template = _upload_item_tpl_html__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.scope = {
    item: '='
  };
  this.controller = _upload_item_controller__WEBPACK_IMPORTED_MODULE_1__.UploadItemCtrl;
  this.controllerAs = 'Upload';
  this.bindToController = true;
});



/***/ }),

/***/ "./src/lib/directives/upload-item/upload-view.controller.js":
/*!******************************************************************!*\
  !*** ./src/lib/directives/upload-item/upload-view.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadViewCtrl": () => (/* binding */ UploadViewCtrl)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UploadViewCtrl = /*#__PURE__*/function () {
  UploadViewCtrl.$inject = ["$scope", "Utils", "$element"];

  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  function UploadViewCtrl($scope, Utils, $element) {
    _classCallCheck(this, UploadViewCtrl);

    this.Scope = $scope;
    this.Element = $element;
    this.Utils = Utils;
    this.formItem = {};
  }

  _createClass(UploadViewCtrl, [{
    key: "init",
    value: function init() {
      this.isMultiple = false;
      this.showAllowed = false;
      this.formItem = this.Utils.extend(this.formItem || {}, {
        config: {
          size: 10,
          uploadFileButtonLabel: 'Add files'
        },
        options: []
      });

      if (this.isPreview()) {
        this._enableWatchers();
      }
    }
  }, {
    key: "_updateMultiple",
    value: function _updateMultiple() {
      this.isMultiple = !!this.formItem.config.multipleUpload;
      var input = angular.element(this.Element[0].querySelector('input[type=file]'));

      if (input) {
        this.formItem.options = [];

        if (this.isMultiple) {
          input.attr('multiple', 'multiple');
        } else {
          input.removeAttr('multiple');
        }
      }
    }
  }, {
    key: "_updateAccept",
    value: function _updateAccept() {
      this.showAllowed = !!this.formItem.config.showAccept;
      var input = angular.element(this.Element[0].querySelector('input[type=file]'));

      if (input) {
        if (this.showAllowed) {
          input[0].setAttribute('accept', this.formItem.config.accept);
        } else {
          input[0].removeAttribute('accept');
          delete this.formItem.config.accept;
        }
      }
    }
  }, {
    key: "_enableWatchers",
    value: function _enableWatchers() {
      var _this = this;

      this.Scope.$watch('UploadView.formItem.config.multipleUpload', function (newVal) {
        if (newVal !== undefined) {
          _this._updateMultiple();
        }
      });
      this.Scope.$watch('UploadView.formItem.config.showAccept', function (newVal) {
        if (newVal !== undefined) {
          _this._updateAccept();
        }
      });
      this.Scope.$watch('UploadView.formItem.config.accept', function (newVal) {
        if (newVal !== undefined) {
          _this._updateAccept();
        }
      });
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      this.formItem.options.splice(index, 1);
    }
  }]);

  return UploadViewCtrl;
}();



/***/ }),

/***/ "./src/lib/directives/upload-item/upload-view.directive.js":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/upload-item/upload-view.directive.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadView": () => (/* binding */ UploadView)
/* harmony export */ });
/* harmony import */ var _upload_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-view.controller */ "./src/lib/directives/upload-item/upload-view.controller.js");
/* harmony import */ var _upload_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-view.tpl.html */ "./src/lib/directives/upload-item/upload-view.tpl.html");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var MB = 1024 * 1024;

var UploadView = /*#__PURE__*/function () {
  UploadView.$inject = ["$timeout"];

  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  function UploadView($timeout) {
    _classCallCheck(this, UploadView);

    this.$timeout = $timeout;
    this.template = _upload_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.restrict = 'E';
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '='
    };
    this.controller = _upload_view_controller__WEBPACK_IMPORTED_MODULE_0__.UploadViewCtrl;
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


  _createClass(UploadView, [{
    key: "link",
    value: function link(scope, element, attrs, ctrl) {
      //this timeout is placed here in order to make sure that the creator directive of this view is finished its work
      this.$timeout(function () {
        ctrl.init();
      }, 50);
      var button = angular.element(element[0].querySelector('.upload-button'));
      var input = angular.element(element[0].querySelector('input[type=file]'));
      var label = angular.element(element[0].querySelector('label'));

      if (label.length) {
        label.css('display', 'none');
      }

      button.on('click', function () {
        label.css('display', 'none');
        typeof input.trigger === 'function' ? input.trigger('click') : input[0].click();
      });
      input.on('change', function (e) {
        scope.$apply(function () {
          /**
           * @type {File[]}
           */
          var files = Array.from(e.target.files); // Max allowed size in MB

          var maxSizeMB = ctrl.formItem.config.size * MB;
          var exceedsSize = files.some(function (file) {
            return file.size >= maxSizeMB;
          });

          if (exceedsSize) {
            label.css('display', 'block');
            label.text(ctrl.formItem.config.sizeErrMessage);
            ctrl.formItem.options = [];
          } else {
            ctrl.formItem.options = files.map(function (file) {
              var name = file.name,
                  size = file.size,
                  type = file.type;
              return {
                name: name,
                size: size,
                type: type,
                file: file
              };
            });
          }
        });
      });
    }
  }]);

  return UploadView;
}();



/***/ }),

/***/ "./src/lib/main/main.controller.js":
/*!*****************************************!*\
  !*** ./src/lib/main/main.controller.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainController": () => (/* binding */ MainController)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * @typedef {{type:string}} Item
 * @typedef {{items: Item[]}} FormConfig
 */
var MainController = /*#__PURE__*/function () {
  /**
   * @ngInject
   */
  function MainController() {
    _classCallCheck(this, MainController);

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


  _createClass(MainController, [{
    key: "addItem",
    value: function addItem(type) {
      this.form.items.push({
        type: type
      });
    }
    /**
     * Remove item at index
     * @param {Item} item
     * @param {number} index
     */

  }, {
    key: "delete",
    value: function _delete(item, index) {
      this.form.items.splice(index, 1);
    }
    /**
     * insert before (bounded)
     * Pops out latest element (wanted?)
     * @param {Item} item
     * @param {number} index
     */

  }, {
    key: "up",
    value: function up(item, index) {
      if (index !== 0) {
        var prevItem = this.form.items[index - 1];
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

  }, {
    key: "down",
    value: function down(item, index) {
      if (index !== this.form.items.length - 1) {
        var nextItem = this.form.items[index + 1];
        this.form.items[index] = nextItem;
        this.form.items[index + 1] = item;
      }
    }
  }]);

  return MainController;
}();



/***/ }),

/***/ "./src/lib/utils/utils.service.js":
/*!****************************************!*\
  !*** ./src/lib/utils/utils.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => (/* binding */ Utils)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: "extend",
    value:
    /**
     * Recursively extend object properties
     * @param {Object} dest
     * @param {Object} src
     * @returns {Object}
     */
    function extend(dest, src) {
      var _this = this;

      return Object.keys(src).reduce(function (result, key) {
        if (typeof result[key] === 'undefined') {
          result[key] = src[key];
        } else if (_typeof(src[key]) === 'object') {
          result[key] = _this.extend(result[key], src[key]);
        }

        return result;
      }, typeof dest === 'undefined' ? {} : dest);
    }
  }]);

  return Utils;
}();



/***/ }),

/***/ "./src/lib/index.scss":
/*!****************************!*\
  !*** ./src/lib/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/lib/directives/agreement-item/agreement-view.tpl.html":
/*!*******************************************************************!*\
  !*** ./src/lib/directives/agreement-item/agreement-view.tpl.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container>\n  <div\n    layout=\"{{AgreementView.formItem.config.direction == 'horizontal' ? 'row' : 'columb'}}\"\n  >\n    <md-checkbox\n      ng-model=\"AgreementView.formItem.options[0].selected\"\n      ng-change=\"AgreementView.toggleSelectedOption(option)\"\n      ng-disabled=\"AgreementView.disableOptions && !option.selected\"\n      aria-label=\"...\"\n      >{{AgreementView.formItem.options[0].value}}</md-checkbox\n    >\n  </div>\n\n  <div ng-messages=\"AgreementView.form.$error\">\n    <div ng-message=\"minSelections\">\n      Must select {{AgreementView.formItem.maxSelections || 1}} items\n    </div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-item.tpl.html":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-item.tpl.html ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Checkboxes.item.options\"\n>\n  <md-input-container class=\"md-block\">\n    <label>Max Selections</label>\n    <input type=\"number\" ng-model=\"Checkboxes.item.config.maxSelections\" />\n  </md-input-container>\n\n  <md-switch\n    ng-model=\"Checkboxes.item.config.direction\"\n    ng-true-value=\"'horizontal'\"\n    ng-false-value=\"'vertical'\"\n  >\n    Layout direction ({{Checkboxes.item.config.direction == 'horizontal' ?\n    'Horizontal' : 'Vertical'}})\n  </md-switch>\n\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"option in Checkboxes.item.options track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"md-block\">\n      <label>Option {{$index + 1}}</label>\n      <input ng-model=\"option.value\" />\n    </md-input-container>\n\n    <md-button class=\"md-button\" ng-click=\"Checkboxes.deleteOption($index)\">\n      <md-icon class=\"material-icons\">delete</md-icon>\n    </md-button>\n  </div>\n  <div layout=\"row\" layout-align=\"start\">\n    <md-button\n      class=\"md-primary add-option-button\"\n      ng-click=\"Checkboxes.addOption()\"\n    >\n      <md-icon class=\"material-icons\">add</md-icon>\n    </md-button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/checkboxes-item/checkboxes-view.tpl.html":
/*!*********************************************************************!*\
  !*** ./src/lib/directives/checkboxes-item/checkboxes-view.tpl.html ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container>\n  <div\n    layout=\"{{CheckboxesView.formItem.config.direction == 'horizontal' ? 'row' : 'column'}}\"\n  >\n    <md-checkbox\n      ng-repeat=\"option in CheckboxesView.formItem.options track by $index\"\n      ng-model=\"option.selected\"\n      ng-change=\"CheckboxesView.toggleSelectedOption(option)\"\n      ng-disabled=\"CheckboxesView.disableOptions && !option.selected\"\n      aria-label=\"...\"\n      >{{option.value}}</md-checkbox\n    >\n  </div>\n\n  <div ng-messages=\"CheckboxesView.form.$error\">\n    <div ng-message=\"minSelections\">\n      Must select {{CheckboxesView.formItem.maxSelections || 1}} items\n    </div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/date-item/date-item.tpl.html":
/*!*********************************************************!*\
  !*** ./src/lib/directives/date-item/date-item.tpl.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <label>Type</label>\n  <md-select ng-model=\"Date.item.config.type\">\n    <md-option value=\"date\">Date</md-option>\n    <md-option value=\"time\">Time</md-option>\n    <md-option value=\"datetime-local\">DateTime</md-option>\n  </md-select>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/date-item/date-view.tpl.html":
/*!*********************************************************!*\
  !*** ./src/lib/directives/date-item/date-view.tpl.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <input\n    ng-model=\"DateView.formItem.value\"\n    type=\"{{DateView.formItem.config.type}}\"\n    ng-required=\"DateView.formItem.config.required\"\n  />\n  <div ng-messages=\"DateView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/form-item/form-item.tpl.html":
/*!*********************************************************!*\
  !*** ./src/lib/directives/form-item/form-item.tpl.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"form-item-container md-inline-form\">\n  <div class=\"form-item-actions\">\n    <md-button\n      class=\"md-button\"\n      ng-if=\"FormItem.Attrs.onDelete\"\n      ng-click=\"FormItem.deleteClicked()\"\n    >\n      <md-icon class=\"material-icons small\">delete</md-icon>\n    </md-button>\n    <md-button\n      class=\"md-button\"\n      ng-if=\"FormItem.Attrs.onUp\"\n      ng-click=\"FormItem.onUp({item: FormItem.item, index: FormItem.index()})\"\n    >\n      <md-icon class=\"material-icons small\">arrow_drop_up</md-icon>\n    </md-button>\n    <md-button\n      class=\"md-button\"\n      ng-if=\"FormItem.Attrs.onDown\"\n      ng-click=\"FormItem.onDown({item: FormItem.item, index: FormItem.index()})\"\n    >\n      <md-icon class=\"material-icons small\">arrow_drop_down</md-icon>\n    </md-button>\n  </div>\n\n  <md-input-container ng-if=\"FormItem.item.type != 'label'\" class=\"md-block\">\n    <label>Field Title</label>\n    <input ng-model=\"FormItem.item.props.title\" />\n  </md-input-container>\n\n  <md-input-container ng-if=\"FormItem.item.type != 'label'\" class=\"md-block\">\n    <label>Help Text</label>\n    <input ng-model=\"FormItem.item.props.helpText\" />\n  </md-input-container>\n\n  <md-input-container\n    ng-if=\"FormItem.item.type === 'agreement'\"\n    class=\"md-block\"\n  >\n    <label>Option Text</label>\n    <input ng-model=\"FormItem.item.options[0].value\" />\n  </md-input-container>\n\n  <div ng-switch=\"FormItem.item.type\">\n    <upload-item ng-switch-when=\"upload\" item=\"FormItem.item\"></upload-item>\n    <agreement-item\n      ng-switch-when=\"agreement\"\n      item=\"FormItem.item\"\n    ></agreement-item>\n    <label-item ng-switch-when=\"label\" item=\"FormItem.item\"></label-item>\n    <input-item ng-switch-when=\"input\" item=\"FormItem.item\"></input-item>\n    <radio-button-item\n      ng-switch-when=\"multipleChoices\"\n      item=\"FormItem.item\"\n    ></radio-button-item>\n    <matrix-item ng-switch-when=\"matrix\" item=\"FormItem.item\"></matrix-item>\n    <checkboxes-item\n      ng-switch-when=\"checkboxes\"\n      item=\"FormItem.item\"\n    ></checkboxes-item>\n    <textarea-item\n      ng-switch-when=\"textarea\"\n      item=\"FormItem.item\"\n    ></textarea-item>\n    <date-item ng-switch-when=\"date\" item=\"FormItem.item\"></date-item>\n    <select-item\n      ng-switch-when=\"chooseFromList\"\n      item=\"FormItem.item\"\n    ></select-item>\n    <p ng-switch-default>UNKNOWN TYPE</p>\n  </div>\n\n  <md-input-container\n    ng-if=\"FormItem.item.type != 'label' && FormItem.item.type != 'upload'\"\n    class=\"md-block\"\n  >\n    <md-checkbox ng-model=\"FormItem.item.config.required\"\n      >Required field</md-checkbox\n    >\n  </md-input-container>\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/form-items-container/form-items-container.tpl.html":
/*!*******************************************************************************!*\
  !*** ./src/lib/directives/form-items-container/form-items-container.tpl.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <form-item\n    ng-repeat=\"item in container.form.items track by $index\"\n    type=\"{{item.type}}\"\n    item=\"item\"\n    index=\"$index\"\n    on-delete=\"container.delete(item, index)\"\n    on-up=\"container.up(item, index)\"\n    on-down=\"container.down(item, index)\"\n  >\n  </form-item>\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/form-view/form-view.tpl.html":
/*!*********************************************************!*\
  !*** ./src/lib/directives/form-view/form-view.tpl.html ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"md-inline-form\">\n  <div\n    class=\"formItem\"\n    ng-repeat=\"formItem in FormView.form.items track by $index\"\n    ng-switch=\"formItem.type\"\n    layout=\"column\"\n  >\n    <ng-form name=\"formItemForm\">\n      <div>\n        <div class=\"formItem-title\" ng-show=\"formItem.type !== 'label'\">\n          {{formItem.props.title}}\n        </div>\n        <div class=\"formItem-help-text\">{{formItem.props.helpText}}</div>\n\n        <upload-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"upload\"\n        ></upload-view>\n        <agreement-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"agreement\"\n        ></agreement-view>\n        <checkboxes-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"checkboxes\"\n        ></checkboxes-view>\n        <radio-button-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"multipleChoices\"\n        ></radio-button-view>\n        <input-view\n          form-item=\"formItem\"\n          form=\"formItemForm\"\n          ng-switch-when=\"input\"\n        ></input-view>\n        <textarea-view\n          form-item=\"formItem\"\n          form=\"formItemForm\"\n          ng-switch-when=\"textarea\"\n        ></textarea-view>\n        <date-view\n          form-item=\"formItem\"\n          form=\"formItemForm\"\n          ng-switch-when=\"date\"\n        ></date-view>\n        <matrix-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"matrix\"\n        ></matrix-view>\n        <select-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"chooseFromList\"\n        ></select-view>\n        <label-view\n          form-item=\"formItem\"\n          is-preview=\"true\"\n          form=\"formItemForm\"\n          ng-switch-when=\"label\"\n        ></label-view>\n      </div>\n    </ng-form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/input-item/input-item.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/input-item/input-item.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <label>Placeholder</label>\n  <input type=\"text\" ng-model=\"Input.item.config.placeholder\" />\n</md-input-container>\n<md-input-container class=\"md-block\">\n  <label>Type</label>\n  <md-select ng-model=\"Input.item.config.type\">\n    <md-option value=\"text\">Text</md-option>\n    <md-option value=\"number\">Number</md-option>\n    <md-option value=\"email\">Email</md-option>\n  </md-select>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/input-item/input-view.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/input-item/input-view.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <input\n    ng-model=\"InputView.formItem.value\"\n    type=\"{{InputView.formItem.config.type}}\"\n    placeholder=\"{{InputView.formItem.config.placeholder}}\"\n    ng-required=\"InputView.formItem.config.required\"\n  />\n  <div ng-messages=\"InputView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/label-item/label-item.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/label-item/label-item.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <label>Text</label>\n  <textarea ng-model=\"Label.item.value\"></textarea>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/label-item/label-view.tpl.html":
/*!***********************************************************!*\
  !*** ./src/lib/directives/label-item/label-view.tpl.html ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <md-content\n    flex\n    layout-padding\n    layout=\"row\"\n    layout-align=\"center center\"\n    ng-bind-html=\"LabelView.sanitizedTitle\"\n  >\n  </md-content>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-item.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-item.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"sortable-container columnContainer\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Matrix.item.config.columns\"\n>\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"column in Matrix.item.config.columns track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"input-container\">\n      <label>Column {{$index + 1}}</label>\n      <input ng-model=\"column.value\" />\n    </md-input-container>\n\n    <md-button\n      class=\"md-button\"\n      md-no-ink\n      aria-label=\"delete column item\"\n      ng-click=\"Matrix.deleteColumn($index)\"\n    >\n      <md-icon class=\"material-icons\">delete</md-icon>\n      <md-tooltip md-autohide=\"true\">Delete</md-tooltip>\n    </md-button>\n  </div>\n  <div layout=\"row\" layout-align=\"start\">\n    <md-button\n      class=\"md-primary add-option-button\"\n      md-no-ink\n      aria-label=\"add option item\"\n      ng-click=\"Matrix.addColumn()\"\n      >Add Column</md-button\n    >\n  </div>\n</div>\n\n<div\n  class=\"sortable-container rowContainer\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Matrix.item.config.rows\"\n>\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"row in Matrix.item.config.rows track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder row item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"input-container\">\n      <label>Row {{$index + 1}}</label>\n      <input ng-model=\"row.value\" />\n    </md-input-container>\n\n    <md-button\n      class=\"md-button\"\n      md-no-ink\n      aria-label=\"delete row item\"\n      ng-click=\"Matrix.deleteRow($index)\"\n    >\n      <md-icon class=\"material-icons\">delete</md-icon>\n      <md-tooltip md-autohide=\"true\">Delete</md-tooltip>\n    </md-button>\n  </div>\n  <div layout=\"row\" layout-align=\"start\">\n    <md-button\n      class=\"md-primary add-option-button\"\n      md-no-ink\n      aria-label=\"add row item\"\n      ng-click=\"Matrix.addRow()\"\n      >Add row</md-button\n    >\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/matrix-item/matrix-view.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/matrix-item/matrix-view.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"matrix-container md-block\" layout=\"column\">\n  <div class=\"matrix\">\n    <div class=\"matrix-row\" flex layout=\"row\">\n      <span class=\"matrix-cell\" flex=\"20\"></span>\n      <span\n        class=\"matrix-cell matrix-cell-header\"\n        flex\n        ng-repeat=\"column in MatrixView.formItem.config.columns track by $index\"\n        >{{column.value}}</span\n      >\n    </div>\n    <div\n      class=\"matrix-row\"\n      ng-repeat=\"row in MatrixView.formItem.config.rows track by $index\"\n      layout=\"row\"\n    >\n      <span class=\"matrix-cell\" flex=\"20\" layout=\"column\" layout-align=\"center\"\n        >{{row.value}}</span\n      >\n      <md-radio-group\n        ng-model=\"row.selected\"\n        ng-change=\"MatrixView._updateValidity()\"\n        flex\n        layout=\"row\"\n      >\n        <span\n          class=\"matrix-cell radio-button-cell\"\n          flex\n          ng-repeat=\"column in MatrixView.formItem.config.columns track by $index\"\n        >\n          <md-radio-button\n            value=\"{{column.value}}\"\n            aria-label=\"...\"\n          ></md-radio-button>\n        </span>\n      </md-radio-group>\n    </div>\n  </div>\n\n  <div ng-messages=\"MatrixView.form.$error\">\n    <div ng-message=\"required\">This is required</div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-item.tpl.html":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-item.tpl.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"RadioButton.item.options\"\n>\n  <md-switch\n    ng-model=\"RadioButton.item.config.direction\"\n    ng-true-value=\"'horizontal'\"\n    ng-false-value=\"'vertical'\"\n  >\n    Layout direction ({{RadioButton.item.config.direction == 'horizontal' ?\n    'Horizontal' : 'Vertical'}})\n  </md-switch>\n\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"option in RadioButton.item.options track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"md-block\">\n      <label>Option {{$index + 1}}</label>\n      <input ng-model=\"option.value\" />\n    </md-input-container>\n\n    <md-button\n      class=\"md-button md-warn\"\n      ng-click=\"RadioButton.deleteOption($index)\"\n    >\n      <md-icon class=\"material-icons\">delete</md-icon>\n    </md-button>\n  </div>\n\n  <md-button class=\"md-raised md-accent\" ng-click=\"RadioButton.addOption()\"\n    >Add Option</md-button\n  >\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/radio-button-item/radio-button-view.tpl.html":
/*!*************************************************************************!*\
  !*** ./src/lib/directives/radio-button-item/radio-button-view.tpl.html ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <md-radio-group\n    name=\"formItemInput\"\n    ng-required=\"RadioButtonView.formItem.config.required\"\n    ng-model=\"RadioButtonView.formItem.value\"\n    layout=\"{{RadioButtonView.formItem.config.direction == 'horizontal' ? 'row' : 'column'}}\"\n    required\n  >\n    <md-radio-button\n      ng-repeat=\"option in RadioButtonView.formItem.options track by $index\"\n      value=\"{{option.value}}\"\n      aria-label=\"...\"\n    >\n      {{option.value}}\n    </md-radio-button>\n  </md-radio-group>\n\n  <div ng-messages=\"RadioButtonView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/select-item/select-item.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/select-item/select-item.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Select.item.options\"\n>\n  <div\n    class=\"option-item\"\n    layout=\"row\"\n    ng-repeat=\"option in Select.item.options track by $index\"\n    sv-element\n  >\n    <md-button\n      class=\"md-button handle\"\n      md-no-ink\n      aria-label=\"reorder option item\"\n      sv-handle\n    >\n      <md-icon class=\"material-icons\">reorder</md-icon>\n    </md-button>\n\n    <md-input-container class=\"md-block\">\n      <label>Option {{$index + 1}}</label>\n      <input ng-model=\"option.value\" />\n    </md-input-container>\n\n    <md-button class=\"md-button md-warn\" ng-click=\"Select.deleteOption($index)\">\n      <md-icon class=\"material-icons\">delete</md-icon>\n    </md-button>\n  </div>\n\n  <md-button class=\"md-raised md-accent\" ng-click=\"Select.addOption()\"\n    >Add Option</md-button\n  >\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/select-item/select-view.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/select-item/select-view.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <md-select\n    name=\"formItemInput\"\n    ng-required=\"SelectView.formItem.config.required\"\n    ng-model=\"SelectView.formItem.value\"\n  >\n    <md-option\n      ng-repeat=\"option in SelectView.formItem.options track by $index\"\n      ng-value=\"option.value\"\n      >{{ option.value }}</md-option\n    >\n  </md-select>\n  <div ng-messages=\"SelectView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-item.tpl.html":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-item.tpl.html ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <label>Placeholder</label>\n  <input type=\"text\" ng-model=\"Textarea.item.config.placeholder\" />\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/textarea-item/textarea-view.tpl.html":
/*!*****************************************************************!*\
  !*** ./src/lib/directives/textarea-item/textarea-view.tpl.html ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<md-input-container class=\"md-block\">\n  <textarea\n    ng-model=\"TextareaView.formItem.value\"\n    placeholder=\"{{TextareaView.formItem.config.placeholder}}\"\n    ng-required=\"TextareaView.formItem.config.required\"\n  ></textarea>\n  <div ng-messages=\"TextareaView.form.$error\">\n    <div ng-message=\"required\">This field is required</div>\n  </div>\n</md-input-container>\n");

/***/ }),

/***/ "./src/lib/directives/upload-item/upload-item.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/upload-item/upload-item.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div\n  class=\"sortable-container\"\n  layout=\"column\"\n  sv-root\n  sv-part=\"Upload.item.options\"\n>\n  <md-input-container class=\"md-block\">\n    <label>Upload Button label</label>\n    <input ng-model=\"Upload.item.config.uploadFileButtonLabel\" />\n  </md-input-container>\n\n  <md-switch\n    ng-model=\"Upload.item.config.multipleUpload\"\n    ng-true-value=\"true\"\n    ng-false-value=\"false\"\n  >\n    Multiple\n  </md-switch>\n\n  <md-input-container class=\"md-block\">\n    <span>Max File size: {{Upload.item.config.size}} Mb</span>\n    <input\n      type=\"number\"\n      id=\"size\"\n      name=\"size\"\n      min=\"0.1\"\n      max=\"999\"\n      step=\"0.1\"\n      aria-label=\"size\"\n      ng-model=\"Upload.item.config.size\"\n    />\n  </md-input-container>\n\n  <md-input-container class=\"md-block\">\n    <label>Max file size error message</label>\n    <textarea\n      ng-model=\"Upload.item.config.sizeErrMessage\"\n      md-maxlength=\"150\"\n      rows=\"2\"\n    ></textarea>\n  </md-input-container>\n\n  <md-switch\n    ng-model=\"Upload.item.config.showAccept\"\n    ng-true-value=\"true\"\n    ng-false-value=\"false\"\n  >\n    Configure allowed file types\n  </md-switch>\n\n  <md-input-container class=\"md-block\" ng-if=\"Upload.item.config.showAccept\">\n    <label>Allowed Types</label>\n    <textarea\n      ng-model=\"Upload.item.config.accept\"\n      md-maxlength=\"150\"\n      rows=\"2\"\n    ></textarea>\n  </md-input-container>\n</div>\n");

/***/ }),

/***/ "./src/lib/directives/upload-item/upload-view.tpl.html":
/*!*************************************************************!*\
  !*** ./src/lib/directives/upload-item/upload-view.tpl.html ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div layout=\"row\" class=\"option-item upload-item\">\n  <md-input-container class=\"md-block\" style=\"margin: 0\">\n    <input type=\"file\" class=\"ng-hide\" aria-label=\"file\" />\n    <md-input-container flex class=\"md-block\">\n      <input\n        type=\"text\"\n        ng-model=\"fileName\"\n        class=\"ng-hide\"\n        disabled\n        aria-label=\"fileName\"\n      />\n    </md-input-container>\n  </md-input-container>\n\n  <md-button class=\"md-raised md-accent upload-button\"\n    ><md-icon class=\"material-icons\">attach_file</md-icon\n    ><span\n      >{{UploadView.formItem.config.uploadFileButtonLabel}}</span\n    ></md-button\n  >\n</div>\n\n<div>\n  <label></label>\n  <div\n    style=\"display: grid; grid-template-columns: 8em auto; align-items: center\"\n    layout=\"row\"\n    ng-repeat=\"option in UploadView.formItem.options track by $index\"\n  >\n    <md-button ng-click=\"UploadView.removeItem($index)\" class=\"md-icon-button\">\n      <md-icon class=\"material-icons\">close</md-icon>\n    </md-button>\n    <span>{{option.name}}</span>\n  </div>\n</div>\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/lib/index.module.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/lib/index.scss");
/* harmony import */ var _directives_upload_item_upload_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/upload-item/upload-item.directive */ "./src/lib/directives/upload-item/upload-item.directive.js");
/* harmony import */ var _directives_upload_item_upload_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/upload-item/upload-view.directive */ "./src/lib/directives/upload-item/upload-view.directive.js");
/* harmony import */ var _directives_agreement_item_agreement_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/agreement-item/agreement-item.directive */ "./src/lib/directives/agreement-item/agreement-item.directive.js");
/* harmony import */ var _directives_agreement_item_agreement_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/agreement-item/agreement-view.directive */ "./src/lib/directives/agreement-item/agreement-view.directive.js");
/* harmony import */ var _main_main_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.controller */ "./src/lib/main/main.controller.js");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/utils.service */ "./src/lib/utils/utils.service.js");
/* harmony import */ var _directives_checkboxes_item_checkboxes_item_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/checkboxes-item/checkboxes-item.directive */ "./src/lib/directives/checkboxes-item/checkboxes-item.directive.js");
/* harmony import */ var _directives_checkboxes_item_checkboxes_view_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/checkboxes-item/checkboxes-view.directive */ "./src/lib/directives/checkboxes-item/checkboxes-view.directive.js");
/* harmony import */ var _directives_form_item_form_item_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/form-item/form-item.directive */ "./src/lib/directives/form-item/form-item.directive.js");
/* harmony import */ var _directives_form_items_container_form_items_container_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/form-items-container/form-items-container.directive */ "./src/lib/directives/form-items-container/form-items-container.directive.js");
/* harmony import */ var _directives_form_view_form_view_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/form-view/form-view.directive */ "./src/lib/directives/form-view/form-view.directive.js");
/* harmony import */ var _directives_input_item_input_item_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/input-item/input-item.directive */ "./src/lib/directives/input-item/input-item.directive.js");
/* harmony import */ var _directives_input_item_input_view_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/input-item/input-view.directive */ "./src/lib/directives/input-item/input-view.directive.js");
/* harmony import */ var _directives_label_item_label_item_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/label-item/label-item.directive */ "./src/lib/directives/label-item/label-item.directive.js");
/* harmony import */ var _directives_label_item_label_view_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/label-item/label-view.directive */ "./src/lib/directives/label-item/label-view.directive.js");
/* harmony import */ var _directives_matrix_item_matrix_item_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/matrix-item/matrix-item.directive */ "./src/lib/directives/matrix-item/matrix-item.directive.js");
/* harmony import */ var _directives_matrix_item_matrix_view_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/matrix-item/matrix-view.directive */ "./src/lib/directives/matrix-item/matrix-view.directive.js");
/* harmony import */ var _directives_radio_button_item_radio_button_item_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./directives/radio-button-item/radio-button-item.directive */ "./src/lib/directives/radio-button-item/radio-button-item.directive.js");
/* harmony import */ var _directives_radio_button_item_radio_button_view_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/radio-button-item/radio-button-view.directive */ "./src/lib/directives/radio-button-item/radio-button-view.directive.js");
/* harmony import */ var _directives_select_item_select_view_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/select-item/select-view.directive */ "./src/lib/directives/select-item/select-view.directive.js");
/* harmony import */ var _directives_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/select-item/select-item.directive */ "./src/lib/directives/select-item/select-item.directive.js");
/* harmony import */ var _directives_date_item_date_view_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directives/date-item/date-view.directive */ "./src/lib/directives/date-item/date-view.directive.js");
/* harmony import */ var _directives_date_item_date_item_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./directives/date-item/date-item.directive */ "./src/lib/directives/date-item/date-item.directive.js");
/* harmony import */ var _directives_textarea_item_textarea_item_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/textarea-item/textarea-item.directive */ "./src/lib/directives/textarea-item/textarea-item.directive.js");
/* harmony import */ var _directives_textarea_item_textarea_view_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/textarea-item/textarea-view.directive */ "./src/lib/directives/textarea-item/textarea-view.directive.js");


























/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (angular.module('angularMaterialFormBuilder', ['ngMaterial', 'angular-sortable-view', 'ngMessages']).service('Utils', _utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.Utils).controller('MainController', function () {
  return new _main_main_controller__WEBPACK_IMPORTED_MODULE_5__.MainController();
}).directive('uploadItem', function () {
  return new _directives_upload_item_upload_item_directive__WEBPACK_IMPORTED_MODULE_1__.UploadItem();
}).directive('uploadView', function () {
  return new _directives_upload_item_upload_view_directive__WEBPACK_IMPORTED_MODULE_2__.UploadView();
}).directive('agreementItem', function () {
  return new _directives_agreement_item_agreement_item_directive__WEBPACK_IMPORTED_MODULE_3__.AgreementItem();
}).directive('agreementView', function () {
  return new _directives_agreement_item_agreement_view_directive__WEBPACK_IMPORTED_MODULE_4__.AgreementView();
}).directive('checkboxesItem', function () {
  return new _directives_checkboxes_item_checkboxes_item_directive__WEBPACK_IMPORTED_MODULE_7__.CheckboxesItem();
}).directive('checkboxesView', function () {
  return new _directives_checkboxes_item_checkboxes_view_directive__WEBPACK_IMPORTED_MODULE_8__.CheckboxesView();
}).directive('formItem', function () {
  return new _directives_form_item_form_item_directive__WEBPACK_IMPORTED_MODULE_9__.FormItem();
}).directive('formItemsContainer', function () {
  return new _directives_form_items_container_form_items_container_directive__WEBPACK_IMPORTED_MODULE_10__.FormItemsContainer();
}).directive('formView', function () {
  return new _directives_form_view_form_view_directive__WEBPACK_IMPORTED_MODULE_11__.FormView();
}).directive('inputItem', function () {
  return new _directives_input_item_input_item_directive__WEBPACK_IMPORTED_MODULE_12__.InputItem();
}).directive('inputView', function () {
  return new _directives_input_item_input_view_directive__WEBPACK_IMPORTED_MODULE_13__.InputView();
}).directive('labelItem', function () {
  return new _directives_label_item_label_item_directive__WEBPACK_IMPORTED_MODULE_14__.LabelItem();
}).directive('labelView', function () {
  return new _directives_label_item_label_view_directive__WEBPACK_IMPORTED_MODULE_15__.LabelView();
}).directive('matrixItem', function () {
  return new _directives_matrix_item_matrix_item_directive__WEBPACK_IMPORTED_MODULE_16__.MatrixItem();
}).directive('matrixView', function () {
  return new _directives_matrix_item_matrix_view_directive__WEBPACK_IMPORTED_MODULE_17__.MatrixView();
}).directive('radioButtonItem', function () {
  return new _directives_radio_button_item_radio_button_item_directive__WEBPACK_IMPORTED_MODULE_18__.RadioButtonItem();
}).directive('radioButtonView', function () {
  return new _directives_radio_button_item_radio_button_view_directive__WEBPACK_IMPORTED_MODULE_19__.RadioButtonView();
}).directive('selectItem', function () {
  return new _directives_select_item_select_item_directive__WEBPACK_IMPORTED_MODULE_21__.SelectItem();
}).directive('selectView', function () {
  return new _directives_select_item_select_view_directive__WEBPACK_IMPORTED_MODULE_20__.SelectView();
}).directive('dateItem', function () {
  return new _directives_date_item_date_item_directive__WEBPACK_IMPORTED_MODULE_23__.DateItem();
}).directive('dateView', function () {
  return new _directives_date_item_date_view_directive__WEBPACK_IMPORTED_MODULE_22__.DateView();
}).directive('textareaItem', function () {
  return new _directives_textarea_item_textarea_item_directive__WEBPACK_IMPORTED_MODULE_24__.TextareaItem();
}).directive('textareaView', function () {
  return new _directives_textarea_item_textarea_view_directive__WEBPACK_IMPORTED_MODULE_25__.TextareaView();
}));
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=angular-material-form-builder.js.map