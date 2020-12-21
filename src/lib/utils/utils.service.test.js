import { createTestApp } from 'angularjs-jest'
import angularMaterialFormBuilder from '../index.module'
import { Utils } from './utils.service'

describe('fucking test', () => {
  const createTestAppWithUtils = (Utils) =>
    createTestApp({
      modules: [angularMaterialFormBuilder],
      mocks: { Utils },
      access: ['Utils'],
    })

  it('Utils constructor', () => {
    const u = new Utils(1, 2)
    expect(u).toBeDefined()
  })

  it('Utils extend', () => {
    const testApp = createTestAppWithUtils(() => new Utils())
    expect(testApp.Utils).toBeDefined()

    expect(testApp.Utils.extend({ a: 1 }, { b: 2 })).toStrictEqual({
      a: 1,
      b: 2,
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
