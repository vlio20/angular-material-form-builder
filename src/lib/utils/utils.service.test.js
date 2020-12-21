import { createTestApp } from 'angularjs-jest'
import angularMaterialFormBuilder from '../index.module'
import { Utils } from './utils.service'

describe('Utils Service test', () => {
  const createTestAppWithUtils = (Utils) =>
    createTestApp({
      modules: [angularMaterialFormBuilder],
      mocks: { Utils },
      access: ['Utils'],
    })

  it('Utils constructor', () => {
    const u = new Utils()
    expect(u).toBeDefined()
  })

  it('Utils extend', () => {
    /**
     * @type {{Utils:  import('./utils.service').Utils}}
     */
    const testApp = createTestAppWithUtils(() => new Utils())
    expect(testApp.Utils).toBeDefined()

    expect(testApp.Utils.extend(undefined, { a: 1 })).toStrictEqual({ a: 1 })

    expect(testApp.Utils.extend({ a: { b: 2 } }, { a: 1 })).toStrictEqual({
      a: { b: 2 },
    })

    expect(
      testApp.Utils.extend(
        { config: { value: 1 } },
        {
          config: {
            maxSelections: null,
          },
          options: [
            {
              value: '',
              selected: false,
            },
          ],
        }
      )
    ).toStrictEqual({
      config: {
        value: 1,
        maxSelections: null,
      },
      options: [
        {
          value: '',
          selected: false,
        },
      ],
    })
  })
})
