var path = require('path');

module.exports = {
  watch: true,
  entry: path.resolve(__dirname, '../src/entry.js'),
  output: {
    filename: 'terminal.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [{
      test: /\.js$/, exclude: /node_modules/, loader: 'babel?presets[]=es2015'
    }, {
      test: /\.css$/, loader: 'style!css!autoprefixer'
    }]
  }
};
