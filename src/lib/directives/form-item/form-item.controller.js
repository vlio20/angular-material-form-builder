class FormItemCtrl {
  /**
   * @ngInject
   * @param {ng.IAttributes} $attrs
   * @param {import('../../utils/utils.service').Utils} Utils
   */
  constructor($attrs, Utils) {
    this.Attrs = $attrs
    this.Utils = Utils
    this.templates = {
      input: '<input-item item="FormItem.item"></input-item>',
      chooseFromList:
        '<bet-form-choose-from-list item="FormItem.item"></bet-form-choose-from-list>',
      multipleChoices:
        '<radio-button-item item="FormItem.item"></radio-button-item>',
      matrix: '<matrix-item item="FormItem.item"></matrix-item>',
      checkboxes: '<checkboxes-item item="FormItem.item"></checkboxes-item>',
      textarea: '<textarea-item item="FormItem.item"></textarea-item>',
    }
    this.item = {}
  }

  init() {
    this.item = this.Utils.extend(this.item || {}, {
      type: this.Attrs.type,
      props: {
        title: '',
        helpText: '',
      },
      config: {
        required: false,
      },
    })
  }

  deleteClicked() {
    this.onDelete({ item: this.item, index: this.index() })
  }

  /**
   *
   * @param {string} type
   */
  _getItemTemplate(type) {
    const prefix =
      '' +
      '<div class="form-item-container">' +
      '<div class="form-item-actions">' +
      '<md-button class="md-button" ng-if="FormItem.Attrs.onDelete" ng-click="FormItem.deleteClicked()"> ' +
      '<md-icon class="material-icons small">delete</md-icon>' +
      '</md-button>' +
      '<md-button class="md-button" ng-if="FormItem.Attrs.onUp" ng-click="FormItem.onUp({item: FormItem.item, index: FormItem.index()})"> ' +
      '<md-icon class="material-icons small">arrow_drop_up</md-icon>' +
      '</md-button>' +
      '<md-button class="md-button" ng-if="FormItem.Attrs.onDown" ng-click="FormItem.onDown({item: FormItem.item, index: FormItem.index()})"> ' +
      '<md-icon class="material-icons small">arrow_drop_down</md-icon>' +
      '</md-button>' +
      '</div>' +
      '<md-input-container>' +
      '<label>Field Title</label>' +
      '<input ng-model="FormItem.item.props.title"/>' +
      '</md-input-container>' +
      '<md-input-container>' +
      '<label>Help Text</label>' +
      '<input ng-model="FormItem.item.props.helpText" />' +
      '</md-input-container>'

    const suffix =
      '' +
      '<md-input-container>' +
      '<md-checkbox ng-model="FormItem.item.config.required">Required field</md-checkbox>' +
      '</md-input-container>' +
      '</div>'

    return prefix + this.templates[type] + suffix
  }
}

export { FormItemCtrl }
