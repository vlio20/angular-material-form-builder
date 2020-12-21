/**
 * Global setup
 * @see https://jestjs.io/docs/en/configuration#globalsetup-string
 *
 * Configuration and setup from angularjs-jest
 * @see https://github.com/dzikowski/angularjs-jest/tree/master/example
 *
 * @see https://github.com/jest-community/vscode-jest/issues/492
 * @type {import('@jest/types/build/Config').ProjectConfig}
 */
const config = {
  testEnvironment: 'jsdom',
  collectCoverage: false,
  coverageDirectory: '/coverage',
  collectCoverageFrom: [
    'src/lib/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  // For css imports
  moduleFileExtensions: ['js', 'html'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.(css|less|scss)$': 'babel-jest',
    '^.+\\.html?$': 'html-loader-jest',
  },
  modulePathIgnorePatterns: ['<rootDir>/dist'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': '<rootDir>/test/rawLoader.js',
  },
}
module.exports = config
