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

  it('Utils extend', () => {
    const testApp = createTestAppWithUtils(() => new Utils())
    expect(testApp.Utils).toBeDefined()

    expect(testApp.Utils.extend({ a: 1 }, { b: 2 })).toStrictEqual({
      a: 1,
      b: 2,
    })
  })
})
