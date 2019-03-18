const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public/build'),
    publicPath: 'build/',
    filename: 'bundle.js'
  }
};