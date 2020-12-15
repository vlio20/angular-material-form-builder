class FormItemsContainerCtrl {
  /**
   * @ngInject
   */
  constructor() {
    /**
     * @type {import('../../main/main.controller').FormConfig}
     */
    this.form = {
      items: [],
    }
  }

  /**
   *
   * @param {import('../../main/main.controller').Item} item
   * @param {number} index
   */
  delete(item, index) {
    this.form.items.splice(index, 1)
  }

  /**
   *
   * @param {import('../../main/main.controller').Item} item
   * @param {number} index
   */
  up(item, index) {
    if (index !== 0) {
      const prevItem = this.form.items[index - 1]
      this.form.items[index] = prevItem
      this.form.items[index - 1] = item
    }
  }

  /**
   *
   * @param {import('../../main/main.controller').Item} item
   * @param {number} index
   */
  down(item, index) {
    if (index !== this.form.items.length - 1) {
      const nextItem = this.form.items[index + 1]
      this.form.items[index] = nextItem
      this.form.items[index + 1] = item
    }
  }
}

export { FormItemsContainerCtrl }
