var path = require('path');

var webpack = require('webpack');

module.exports = {
  entry: ['./src/pitbull.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pitbull.js'
  },
  target: 'node',
  plugins: []
}
