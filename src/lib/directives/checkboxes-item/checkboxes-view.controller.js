class CheckboxesViewCtrl {
  /**
   * @ngInject
   * @param {ng.IScope} $scope
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($scope, Utils) {
    this.Scope = $scope
    this.Utils = Utils
    this.formItem = {}
  }

  init() {
    this.formItem = this.Utils.extend(this.formItem || {}, {
      config: {},
      options: [],
    })

    this.selectedOptions = this._getSelectedOptions()
    this.disableOptions = false

    this.isValid = true
    this._updateView()
    this._updateValidity()
    if (this.isPreview()) {
      this._enableWatchers()
    }
  }

  toggleSelectedOption() {
    this.selectedOptions = this._getSelectedOptions()
    this._updateView()
    this._updateValidity()
  }

  _getSelectedOptions() {
    return this.formItem.options.filter((option) => {
      return option.selected
    })
  }

  _updateView() {
    if (!this.formItem.config.maxSelections) {
      this.disableOptions = false
    } else if (
      this.selectedOptions.length === this.formItem.config.maxSelections
    ) {
      this.disableOptions = true
    } else {
      this.disableOptions = false
    }
  }

  _updateValidity() {
    if (this.formItem.config.required) {
      this.isValid = this.selectedOptions.length > 0
    } else {
      this.isValid = true
    }

    this.form.$setValidity('minSelections', this.isValid)
  }

  _enableWatchers() {
    this.Scope.$watch('CheckboxesView.formItem.config.required', (newVal) => {
      if (newVal !== undefined) {
        this._updateView()
        this._updateValidity()
      }
    })
  }
}

export { CheckboxesViewCtrl }
