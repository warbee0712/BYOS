/**
 *  WEBPACK BASE CONFIGURATION
 */

const path = require('path')
const webpack = require('webpack')

module.exports = (options) => ({
  entry: options.entry,
  output: Object.assign({ // Compile into js/build.js
    path: path.resolve(process.cwd(), 'build'),
    publicPath: '/'
  }, options.output),
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/',
        query: options.babelQuery
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: options.plugins.concat([
    // new webpack.ProvidePlugin({
    //   // make fetch available
    //   fetch: 'exports?self.fetch!whatwg-fetch',
    // }),

    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '',
      '.js'
    ]
  },  
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: false,
  progress: true
})
