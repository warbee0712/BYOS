/**
 *  WEBPACK BASE CONFIGURATION
 */

import path from 'path'

module.exports = (options) => ({
  context: path.join(__dirname, 'src'),
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
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: [
      '',
      '.js'
    ]
  },
  stats: false,
  progress: true
})
