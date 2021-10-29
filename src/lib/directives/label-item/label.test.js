// import angularMaterialFormBuilder from '../../index.module'
import { createTestApp } from 'angularjs-jest'
import 'angular-animate'
import 'angular-sortable-view/src/angular-sortable-view'
import 'angular-aria'
import 'angular-messages'
import 'angular-material'
import '../../index.module'

const formItem = {
  type: 'label',
  props: { title: '', helpText: '' },
  config: { required: false },
  value: 'Test Label',
}

describe('Label test', () => {
  const createTestAppWithLabel = () =>
    createTestApp({
      modules: ['angularMaterialFormBuilder'],
      mocks: {},
      access: [],
    })

  it('should render label', () => {
    const testApp = createTestAppWithLabel(() => {})
    testApp.$scope.formItem = formItem

    const element = testApp.render(
      `<label-view form-item="formItem"></label-view>`
    )
    // const element = testApp.render(`<label-item item="formItem"></label-item>`)

    // await testApp.eventually(() =>
    expect(element.html()).toContain('Test Label')
    // )

    // expect(element.html()).toContain('Test Label')
  })
})
