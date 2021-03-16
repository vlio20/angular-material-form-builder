const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path')

// Dev Server variables
const DEV_SERVER_HOST = process.env.DEV_HOST || '127.0.0.1'
const DEV_SERVER_PORT = process.env.DEV_PORT || 8080

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
    devServer: {
      open: true,
      host: DEV_SERVER_HOST,
      port: DEV_SERVER_PORT,
      historyApiFallback: true,
      writeToDisk: true,
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
          use: ['babel-loader', 'eslint-loader'],
        },
        {
          test: /\.tpl.html$/i,
          loader: 'raw-loader',
        },
      ],
    },
  }
}

module.exports = webpackConfig
