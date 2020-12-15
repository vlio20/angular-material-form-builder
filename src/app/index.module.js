import './index.scss'
import { AgreementItem } from './directives/agreement-item/agreement-item.directive'
import { AgreementView } from './directives/agreement-item/agreement-view.directive'
import { MainController } from './main/main.controller'
import { Utils } from './utils/utils.service'

angular
  .module('angularMaterialFormBuilder', [
    'ngMaterial',
    'angular-sortable-view',
    'ngMessages',
  ])
  .service('Utils', Utils)
  .controller('MainController', MainController)
  .directive('agreementItem', AgreementItem)
  .directive('agreementView', AgreementView)
