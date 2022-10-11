var path = require('path');

module.exports = {
  entry: './src/js/controller.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
