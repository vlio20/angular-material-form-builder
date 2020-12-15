const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

/**
 * Webpack config factory
 * @returns {import('webpack').Configuration}
 */
async function webpackConfig() {
  const main = path.resolve(__dirname, 'src/lib/index.module.js')
  return {
    entry: {
      'angular-material-form-builder': main,
      'angular-material-form-builder.min': main,
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      library: 'angular-material-form-builder',
      libraryTarget: 'umd',
    },
    devtool: 'source-map',
    externals: {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      angular: 'angular',
      'angular-material': 'angular-material',
      'angular-messages': 'angular-messages',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          include: /\.min\.js$/,
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new CssMinimizerPlugin({ include: /\.min\.css$/ }),
      ],
    },
    module: {
      rules: [
        {
          test: /.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                url: false, // turn off URL resolution
              },
            },
            {
              loader: 'sass-loader',
              options: {
                // // Prefer `node-sass`
                // implementation: require('node-sass'),
                // Prefer `dart-sass`
                implementation: require('sass'),
                sassOptions: {
                  fiber: false,
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.tpl.html$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: (url, resourcePath, context) => {
                  // `resourcePath` is original absolute path to asset
                  // `context` is directory where stored asset (`rootContext`) or `context` option

                  // To get relative path you can use
                  const relativePath = path.relative(context, resourcePath)

                  // put all in dist/templates/<path>
                  return `${relativePath.replace(
                    path.join('src', 'lib'),
                    'templates'
                  )}/${url}`
                },
              },
            },
          ],
        },
      ],
    },
  }
}

module.exports = webpackConfig
