const path = require('path');
module.exports = {
  entry: './index',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2'],
        },
      }
    ]
  }
}
