/**
 * @ngInject
 *
 * @param {import('../../utils/utils.service').Utils} Utils
 * @param {JQLite} $element
 */
function AgreementItemCtrl(Utils, $element) {
  this.Element = $element
  this.item = Utils.extend(this.item || {}, {
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

export { AgreementItemCtrl }
