import UploadItemTemplate from './upload-item.tpl.html'
import { UploadItemCtrl } from './upload-item.controller'

/**
 * @implements {ng.IDirective}
 */
function UploadItem() {
  const directive = {
    restrict: 'E',
    template: UploadItemTemplate,
    scope: {
      item: '=',
    },
    controller: UploadItemCtrl,
    controllerAs: 'Upload',
    bindToController: true,
  }

  return directive
}

export { UploadItem }
