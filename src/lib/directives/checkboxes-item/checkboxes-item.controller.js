class CheckboxesItemCtrl {
  /**
   * @ngInject
   *
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
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

  deleteOption(index) {
    this.item.options.splice(index, 1)
  }

  addedOption() {
    this.item.options.push({
      value: '',
      selected: false,
    })
    // Focus new element
    setTimeout(() => {
      const options = this.Element.find('input')
      const addedOption = options[options.length - 1]
      addedOption.focus()
    }, 0)
  }
}

export { CheckboxesItemCtrl }
