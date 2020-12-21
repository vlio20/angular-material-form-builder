import { createTestApp } from 'angularjs-jest'
import angularMaterialFormBuilder from '../index.module'
import { MainController } from './main.controller'

describe('Main Controller test', () => {
  const createTestAppWithMainController = (MainController) =>
    createTestApp({
      modules: [angularMaterialFormBuilder],
      mocks: { MainController },
      access: ['MainController'],
    })

  it('MainController constructor', () => {
    const mc = new MainController()
    expect(mc).toBeDefined()
    expect(Array.isArray(mc.form.items)).toBe(true)
  })

  it('MainController methods', () => {
    /**
     * @type {{MainController:  import('./main.controller').MainController}}
     */
    const testApp = createTestAppWithMainController(() => new MainController())
    expect(testApp.MainController).toBeDefined()
    const mc = testApp.MainController

    // Add
    mc.addItem('checkbox')
    mc.addItem('select')
    mc.addItem('input')
    mc.addItem('label')
    expect(mc.form.items[0].type).toBe('checkbox')
    expect(mc.form.items[1].type).toBe('select')
    expect(mc.form.items[2].type).toBe('input')
    expect(mc.form.items[3].type).toBe('label')

    // Remove
    mc.delete(null, 1)
    expect(mc.form.items.length).toBe(3)
    expect(mc.form.items[0].type).toBe('checkbox')
    expect(mc.form.items[1].type).toBe('input')
    expect(mc.form.items[2].type).toBe('label')

    // Insert before - pops last out
    mc.up({ type: 'select' }, 2)
    expect(mc.form.items[0].type).toBe('checkbox')
    expect(mc.form.items[1].type).toBe('select')
    expect(mc.form.items[2].type).toBe('input')
    // Index 0 will do nothing
    mc.up({ type: 'radio' }, 0)
    expect(mc.form.items[0].type).toBe('checkbox')
    expect(mc.form.items[1].type).toBe('select')
    expect(mc.form.items[2].type).toBe('input')

    // Insert after - pops first out
    mc.down({ type: 'radio' }, 0)
    expect(mc.form.items[0].type).toBe('select')
    expect(mc.form.items[1].type).toBe('radio')
    expect(mc.form.items[2].type).toBe('input')
    // Last item will do nothing
    mc.down({ type: 'select' }, 2)
    expect(mc.form.items[0].type).toBe('select')
    expect(mc.form.items[1].type).toBe('radio')
    expect(mc.form.items[2].type).toBe('input')
  })
})
