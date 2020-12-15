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

/***/ "./src/app/directives/agreement-item/agreement-view.tpl.html":
/*!*******************************************************************!*\
  !*** ./src/app/directives/agreement-item/agreement-view.tpl.html ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "templates/directives/agreement-item/agreement-view.tpl.html/agreement-view.tpl.html");

/***/ }),

/***/ "./src/app/index.scss":
/*!****************************!*\
  !*** ./src/app/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/directives/agreement-item/agreement-item.controller.js":
/*!************************************************************************!*\
  !*** ./src/app/directives/agreement-item/agreement-item.controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementItemCtrl": () => /* binding */ AgreementItemCtrl
/* harmony export */ });
/**
 * @ngInject
 *
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {JQLite} $element
 */
function AgreementItemCtrl(Utils, $element) {
  this.Element = $element

  Utils.extend(this.item || {}, {
    config: {
      maxSelections: null,
    },
    options: [
      {
        value: '',
        selected: false,
      },
    ],
  })
}




/***/ }),

/***/ "./src/app/directives/agreement-item/agreement-item.directive.js":
/*!***********************************************************************!*\
  !*** ./src/app/directives/agreement-item/agreement-item.directive.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementItem": () => /* binding */ AgreementItem
/* harmony export */ });
/* harmony import */ var _agreement_item_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreement-item.controller */ "./src/app/directives/agreement-item/agreement-item.controller.js");

// import { default as AgreementItemTemplate } from './agreement-item.tpl.html'

/**
 * @ngInject
 */
function AgreementItem() {
  const directive = {
    restrict: 'E',
    // templateUrl: AgreementItemTemplate,
    scope: {
      item: '=',
    },
    controller: _agreement_item_controller__WEBPACK_IMPORTED_MODULE_0__.AgreementItemCtrl,
    controllerAs: 'Agreement',
    bindToController: true,
  }

  return directive
}




/***/ }),

/***/ "./src/app/directives/agreement-item/agreement-view.controller.js":
/*!************************************************************************!*\
  !*** ./src/app/directives/agreement-item/agreement-view.controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementViewCtrl": () => /* binding */ AgreementViewCtrl
/* harmony export */ });
class AgreementViewCtrl {
  /**
   *
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($scope, Utils) {
    this.Scope = $scope
    this.Utils = Utils
  }

  init() {
    this.Utils.extend(this.formItem, {
      config: {},
      options: [
        {
          value: '',
          selected: false,
        },
      ],
    })

    this.selectedOptions = this._getSelectedOptions()
    this.disableOptions = false

    this.isValid = true
    this._updateView()
    this._updateValidity()
    if (this.isPreview()) {
      this._enableWatchers()
    }
  }

  toggleSelectedOption() {
    this.selectedOptions = this._getSelectedOptions()
    this._updateView()
    this._updateValidity()
  }

  _getSelectedOptions() {
    return this.formItem.options.filter(function (option) {
      return option.selected
    })
  }

  _updateView() {
    if (!this.formItem.config.maxSelections) {
      this.disableOptions = false
    } else if (
      this.selectedOptions.length === this.formItem.config.maxSelections
    ) {
      this.disableOptions = true
    } else {
      this.disableOptions = false
    }
  }

  _updateValidity() {
    if (this.formItem.config.required) {
      this.isValid = this.selectedOptions.length > 0
    } else {
      this.isValid = true
    }

    this.form.$setValidity('minSelections', this.isValid)
  }

  _enableWatchers() {
    this.Scope.$watch('AgreementView.formItem.config.required', (newVal) => {
      if (newVal !== undefined) {
        this._updateView()
        this._updateValidity()
      }
    })
  }
}




/***/ }),

/***/ "./src/app/directives/agreement-item/agreement-view.directive.js":
/*!***********************************************************************!*\
  !*** ./src/app/directives/agreement-item/agreement-view.directive.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgreementView": () => /* binding */ AgreementView
/* harmony export */ });
/* harmony import */ var _agreement_view_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agreement-view.controller */ "./src/app/directives/agreement-item/agreement-view.controller.js");
/* harmony import */ var _agreement_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agreement-view.tpl.html */ "./src/app/directives/agreement-item/agreement-view.tpl.html");



class AgreementView {
  /**
   * @ngInject
   * @param {ng.ITimeoutService} $timeout
   */
  constructor($timeout) {
    this.$timeout = $timeout

    this.templateUrl = _agreement_view_tpl_html__WEBPACK_IMPORTED_MODULE_1__.default
    this.restrict = 'E'
    this.scope = {
      formItem: '=',
      isPreview: '&',
      form: '=',
    }
    this.controller = _agreement_view_controller__WEBPACK_IMPORTED_MODULE_0__.AgreementViewCtrl
    this.controllerAs = 'AgreementView'
    this.bindToController = true
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
      ctrl.init()
    }, 50)
  }
}




/***/ }),

/***/ "./src/app/index.module.js":
/*!*********************************!*\
  !*** ./src/app/index.module.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "./src/app/index.scss");
/* harmony import */ var _directives_agreement_item_agreement_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/agreement-item/agreement-item.directive */ "./src/app/directives/agreement-item/agreement-item.directive.js");
/* harmony import */ var _directives_agreement_item_agreement_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/agreement-item/agreement-view.directive */ "./src/app/directives/agreement-item/agreement-view.directive.js");
/* harmony import */ var _main_main_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.controller */ "./src/app/main/main.controller.js");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/utils.service */ "./src/app/utils/utils.service.js");






angular
  .module('angularMaterialFormBuilder', [
    'ngMaterial',
    'angular-sortable-view',
    'ngMessages',
  ])
  .service('Utils', _utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.Utils)
  .controller('MainController', _main_main_controller__WEBPACK_IMPORTED_MODULE_3__.MainController)
  .directive('agreementItem', _directives_agreement_item_agreement_item_directive__WEBPACK_IMPORTED_MODULE_1__.AgreementItem)
  .directive('agreementView', _directives_agreement_item_agreement_view_directive__WEBPACK_IMPORTED_MODULE_2__.AgreementView)


/***/ }),

/***/ "./src/app/main/main.controller.js":
/*!*****************************************!*\
  !*** ./src/app/main/main.controller.js ***!
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
      items: [],
    }
  }

  /**
   * Add new Item
   * @param {string} type
   */
  addItem(type) {
    this.form.items.push({
      type,
    })
  }

  /**
   * Remove item at index
   * @param {Item} item
   * @param {number} index
   */
  delete(item, index) {
    this.form.items.splice(index, 1)
  }

  /**
   * Move up (bounded)
   * @param {Item} item
   * @param {number} index
   */
  up(item, index) {
    if (index !== 0) {
      const prevItem = this.form.items[index - 1]
      this.form.items[index] = prevItem
      this.form.items[index - 1] = item
    }
  }

  /**
   * Move down (bounded)
   * @param {Item} item
   * @param {number} index
   */
  down(item, index) {
    if (index !== this.form.items.length - 1) {
      const nextItem = this.form.items[index + 1]
      this.form.items[index] = nextItem
      this.form.items[index + 1] = item
    }
  }
}




/***/ }),

/***/ "./src/app/utils/utils.service.js":
/*!****************************************!*\
  !*** ./src/app/utils/utils.service.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Utils": () => /* binding */ Utils
/* harmony export */ });
class Utils {
  /**
   *
   * @param {Object} dest
   * @param {Object} src
   */
  extend(dest, src) {
    return Object.keys(src).reduce(
      (result, key) => {
        if (!result.hasOwnProperty(key)) {
          result[key] = src[key]
        } else if (typeof src[key] === 'object') {
          result = this.extend(result[key], src[key])
        }
        return result
      },
      typeof dest === 'undefined' ? {} : dest
    )
  }
}




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
/******/ 	return __webpack_require__("./src/app/index.module.js");
/******/ })()
;
});
//# sourceMappingURL=angular-material-form-builder.js.map