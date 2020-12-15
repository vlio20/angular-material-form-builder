class RadioButtonCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {JQLite} $element
   */
  constructor(Utils, $element) {
    this.Element = $element
    this.item = Utils.extend(this.item || {}, {
      config: {},
      options: [
        {
          value: '',
        },
      ],
    })
  }

  deleteOption(index) {
    this.item.options.splice(index, 1)
  }

  addOption() {
    this.item.options.push({
      value: '',
    })

    setTimeout(() => {
      const options = this.Element.find('input')
      const addedOption = options[options.length - 1]
      addedOption.focus()
    }, 0)
  }
}

export { RadioButtonCtrl }
