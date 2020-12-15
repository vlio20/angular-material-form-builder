import { MatrixItemCtrl } from './matrix-item.controller'
import { default as MatrixItemTemplate } from './matrix-item.tpl.html'

/**
 * @implements {ng.IDirective}
 */
class MatrixItem {
  constructor() {
    this.restrict = 'E'
    this.templateUrl = MatrixItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = MatrixItemCtrl
    this.controllerAs = 'Matrix'
    this.bindToController = true
  }
}
export { MatrixItem }
