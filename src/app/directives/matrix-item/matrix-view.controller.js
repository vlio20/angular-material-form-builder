class MatrixViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($scope, Utils) {
    this.Scope = $scope
    this.Utils = Utils
    this.isValid = true
    this.formItem = {}
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem, {
      config: {
        rows: [],
        columns: [],
      },
    })

    this._updateValidity()
    if (this.isPreview()) {
      this._enableWatchers()
    }
  }

  _updateValidity() {
    let valid = true
    if (this.formItem.config.required) {
      valid = !this.formItem.config.rows.some(
        (row) => typeof row['selected'] === 'undefined'
      )
      //   for (let i = 0; i < this.formItem.config.rows.length; i++) {
      //     if (typeof this.formItem.config.rows[i]['selected'] === 'undefined') {
      //       valid = false
      //       break
      //     }
      //   }
    }

    this.isValid = valid
    this.form.$setValidity('required', this.isValid)
  }

  _enableWatchers() {
    this.Scope.$watchGroup(
      [
        'MatrixView.formItem.config.required',
        'MatrixView.formItem.config.rows.length',
      ],
      (newVal) => {
        if (newVal !== undefined) {
          this._updateValidity()
        }
      }
    )
  }
}
export { MatrixViewCtrl }
