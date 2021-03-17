import UploadItemTemplate from './upload-item.tpl.html'
import { UploadItemCtrl } from './upload-item.controller'

/**
 * @implements {ng.IDirective}
 */
class UploadItem {
  /**
   * @ngInject
   */
  constructor() {
    this.restrict = 'E'
    this.template = UploadItemTemplate
    this.scope = {
      item: '=',
    }
    this.controller = UploadItemCtrl
    this.controllerAs = 'Upload'
    this.bindToController = true
  }
}

export { UploadItem }
