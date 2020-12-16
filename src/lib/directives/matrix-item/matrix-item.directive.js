import { MatrixItemCtrl } from './matrix-item.controller'
import MatrixItemTemplate from './matrix-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class MatrixItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = MatrixItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = MatrixItemCtrl
    this.controllerAs = 'Matrix'
    this.bindToController = true
  }
}
export { MatrixItem }
