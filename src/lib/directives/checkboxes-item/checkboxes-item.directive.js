import CheckboxesItemTemplate from './checkboxes-item.tpl.html'
import { CheckboxesItemCtrl } from './checkboxes-item.controller'

/**
 * @implements {ng.IDirective}
 */
function CheckboxesItem() {
  const directive = {
    restrict: 'E',
    template: CheckboxesItemTemplate,
    scope: {
      item: '=',
    },
    controller: CheckboxesItemCtrl,
    controllerAs: 'Checkboxes',
    bindToController: true,
  }

  return directive
}

export { CheckboxesItem }
