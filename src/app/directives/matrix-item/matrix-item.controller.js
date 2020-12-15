class MatrixItemCtrl {
  /**
   * @ngInject
   * @param {import('../../utils/utils.service').Utils} Utils
   * @param {ng.IDocumentService} $document
   */
  constructor(Utils, $document) {
    this.RowContainer = angular.element(
      $document[0].querySelector('.rowContainer')
    )
    this.ColumnContainer = angular.element(
      $document[0].querySelector('.columnContainer')
    )

    this.item = Utils.extend(this.item || {}, {
      config: {
        rows: [
          {
            value: '',
          },
        ],
        columns: [
          {
            value: '',
          },
        ],
      },
    })
  }

  /**
   *
   * @param {number} index
   */
  deleteRow(index) {
    this.item.config.rows.splice(index, 1)
  }

  addRow() {
    this.item.config.rows.push({
      value: '',
    })

    setTimeout(
      function () {
        const options = this.RowContainer.find('input')
        const addedOption = options[options.length - 1]
        addedOption.focus()
      }.bind(this),
      0
    )
  }

  /**
   *
   * @param {number} index
   */
  deleteColumn(index) {
    this.item.config.columns.splice(index, 1)
  }

  addColumn() {
    this.item.config.columns.push({
      value: '',
    })

    setTimeout(() => {
      const options = this.ColumnContainer.find('input')
      const addedOption = options[options.length - 1]
      addedOption.focus()
    }, 0)
  }
}

export { MatrixItemCtrl }
