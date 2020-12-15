import { default as FormItemTemplate } from './form-item.tpl.html'
import { FormItemCtrl } from './form-item.controller'

/**
 * @implements {ng.IDirective}
 */
class FormItem {
  /**
   * @ngInject
   * @param {ng.ICompileService} $compile
   */
  constructor($compile) {
    this.$compile = $compile
    this.restrict = 'E'
    this.scope = {
      item: '=',
      onDelete: '&',
      onUp: '&',
      onDown: '&',
      index: '&',
    }
    this.controller = FormItemCtrl
    this.controllerAs = 'FormItem'
    this.bindToController = true
    this.templateUrl = FormItemTemplate
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
    const template = ctrl._getItemTemplate(attrs.type)
    // const el = this.$compile(template)(scope)
    // element.append(el)
    // if done like above adds twice
    element.replaceWith(this.$compile(template)(scope))
    ctrl.init()
    return element
  }
}
export { FormItem }
