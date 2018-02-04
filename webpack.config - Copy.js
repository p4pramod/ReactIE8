const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

var path = require('path'),
  webpack = require('webpack');


module.exports = {
  entry: {
    app: [
      './entry.js'],
      vendor: [
        'es5-shim',
        'babel-polyfill',
        'console-polyfill',
        'react',
        'react-dom'
      ]
  },
  output: 'bundle.js',
  debug: false,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ]
  }
  ,
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new UglifyJsPlugin({
      cache: true,
      uglifyOptions: {
        ie8: true,
        ecma: 5,

      },
      sourceMap: false
    })
  ]
};
