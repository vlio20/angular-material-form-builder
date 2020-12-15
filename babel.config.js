console.log('Using babel configuration')
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 1 years', 'not ie 11'],
        },
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  plugins: [['angularjs-annotate', { explicitOnly: false }]],
}
