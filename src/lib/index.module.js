import './index.scss'
import { UploadItem } from './directives/upload-item/upload-item.directive'
import { UploadView } from './directives/upload-item/upload-view.directive'
import { AgreementItem } from './directives/agreement-item/agreement-item.directive'
import { AgreementView } from './directives/agreement-item/agreement-view.directive'
import { MainController } from './main/main.controller'
import { Utils } from './utils/utils.service'
import { CheckboxesItem } from './directives/checkboxes-item/checkboxes-item.directive'
import { CheckboxesView } from './directives/checkboxes-item/checkboxes-view.directive'
import { FormItem } from './directives/form-item/form-item.directive'
import { FormItemsContainer } from './directives/form-items-container/form-items-container.directive'
import { FormView } from './directives/form-view/form-view.directive'
import { InputItem } from './directives/input-item/input-item.directive'
import { InputView } from './directives/input-item/input-view.directive'
import { LabelItem } from './directives/label-item/label-item.directive'
import { LabelView } from './directives/label-item/label-view.directive'
import { MatrixItem } from './directives/matrix-item/matrix-item.directive'
import { MatrixView } from './directives/matrix-item/matrix-view.directive'
import { RadioButtonItem } from './directives/radio-button-item/radio-button-item.directive'
import { RadioButtonView } from './directives/radio-button-item/radio-button-view.directive'
import { SelectView } from './directives/select-item/select-view.directive'
import { SelectItem } from './directives/select-item/select-item.directive'
import { DateView } from './directives/date-item/date-view.directive'
import { DateItem } from './directives/date-item/date-item.directive'
import { TextareaItem } from './directives/textarea-item/textarea-item.directive'
import { TextareaView } from './directives/textarea-item/textarea-view.directive'

export default angular
  .module('angularMaterialFormBuilder', [
    'ngMaterial',
    'angular-sortable-view',
    'ngMessages',
  ])
  .service('Utils', Utils)
  .controller('MainController', MainController)
  .directive('uploadItem', UploadItem)
  .directive('uploadView', UploadView)
  .directive('agreementItem', AgreementItem)
  .directive('agreementView', AgreementView)
  .directive('checkboxesItem', CheckboxesItem)
  .directive('checkboxesView', CheckboxesView)
  .directive('formItem', FormItem)
  .directive('formItemsContainer', FormItemsContainer)
  .directive('formView', FormView)
  .directive('inputItem', InputItem)
  .directive('inputView', InputView)
  .directive('labelItem', LabelItem)
  .directive('labelView', LabelView)
  .directive('matrixItem', MatrixItem)
  .directive('matrixView', MatrixView)
  .directive('radioButtonItem', RadioButtonItem)
  .directive('radioButtonView', RadioButtonView)
  .directive('selectItem', SelectItem)
  .directive('selectView', SelectView)
  .directive('dateItem', DateItem)
  .directive('dateView', DateView)
  .directive('textareaItem', TextareaItem)
  .directive('textareaView', TextareaView)
