var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/entry.js'),
  output: {
    filename: path.resolve(__dirname, '../dist/terminal.min.js')
  },
  module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'
    }, {
      test: /\.css$/, loader: 'style!css!autoprefixer'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
