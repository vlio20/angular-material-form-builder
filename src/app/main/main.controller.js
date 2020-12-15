/**
 * @typedef {{type:string}} Item
 * @typedef {{items: Item[]}} FormConfig
 */

class MainController {
  /**
   * @ngInject
   */
  constructor() {
    /**
     * @type {FormConfig}
     */
    this.form = {
      items: [],
    }
  }

  /**
   * Add new Item
   * @param {string} type
   */
  addItem(type) {
    this.form.items.push({
      type,
    })
  }

  /**
   * Remove item at index
   * @param {Item} item
   * @param {number} index
   */
  delete(item, index) {
    this.form.items.splice(index, 1)
  }

  /**
   * Move up (bounded)
   * @param {Item} item
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
   * Move down (bounded)
   * @param {Item} item
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

export { MainController }
