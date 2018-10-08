/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const {BUILD_DIR} = require('../../lib/constants')
// Remove this line once the following warning goes away (it was meant for webpack loader authors not users):
// 'DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic,
// see https://github.com/webpack/loader-utils/issues/56 parseQuery() will be replaced with getOptions()
// in the next major version of loader-utils.'
process.noDeprecation = true

const workingPath = process.cwd();

module.exports = (options) => ({
  // entry: ['babel-polyfill', ...options.entry],
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(workingPath, BUILD_DIR),
    publicPath: '/'
  }, options.output), // Merge with env dependent settings
  optimization: options.optimization,

  module: {
    rules: options.module.rules.concat([
      {
        test: /\.(js|jsx)$/, // Transform all .js files required somewhere with Babel
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery
        }
      },
      {
        // Preprocess 3rd party .css files located in node_modules
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        loader: 'url-loader?limit=8024&name=assets/fonts/[name].[ext]',
        options: {
          publicPath: '/'
        }
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ])
  },
  mode: options.mode || 'development',
  plugins: options.plugins.concat([
      // create css bundle
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.NamedModulesPlugin()
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '.js',
      '.jsx',
      '.react.js',
      '.scss'
    ],
    mainFields: [
      'browser',
      'jsnext:main',
      'main'
    ]
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
  stats: options.stats
})