var join = require('path').join;
var webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: { path: join(__dirname, 'build'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
