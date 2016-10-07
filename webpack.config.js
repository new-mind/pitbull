var path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: ['./src/pitbull'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: 'pitbull.js'
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: function (context, request, cb) {
    var isExternal = /^[a-z]/.test(request);
    cb(null, isExternal);
  },
  plugins: []
}
