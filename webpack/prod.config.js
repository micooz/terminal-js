var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: path.resolve(__dirname, '../src/entry.js'),
  output: {
    filename: path.resolve(__dirname, '../dist/terminal.min.js')
  },
  module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'
    }, {
      test: /\.css$/, loader: 'style!css!postcss'
    }]
  },
  postcss: function () {
    return [autoprefixer, precss];
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
