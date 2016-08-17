var join = require('path').join;
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: { path: join(__dirname, 'build'), publicPath: join(__dirname, 'build'), filename: 'bundle.js' },
  module: {
    preLoaders: [
      { test: /\.json$/, exclude: /node_modules/, loader: 'json' },
    ],
    loaders: [{
      test: /.js?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css-loader?minimize!postcss-loader')
    }]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new webpack.ProvidePlugin({
      _: "lodash",
      'React': 'react',
      'ReactDOM': 'react-dom'
    }),
    new ExtractTextPlugin("bundle.css")
  ],
  devServer: {
    host: 'localhost',
    port: 8080,
    contentBase: __dirname + '/build',
    watchOptions: {
      aggregateTimeout: 300,
      hot: true,
      poll: 1000
    },
  },
  postcss: function() {
    return [
      require("autoprefixer"),
      require("postcss-advanced-variables")(),
      require("postcss-at-rules-variables"),
      require("postcss-browser-reporter"),
      require("postcss-calc")(),
      require("postcss-center"),
      require("postcss-clearfix"),
      require("postcss-color-function"),
      require("postcss-color-short"),
      require("postcss-custom-media")(),
      require("postcss-custom-selectors"),
      require("postcss-easy-import"),
      require("postcss-extend"),
      require("postcss-focus"),
      require("postcss-mixins"),
      require("postcss-nested"),
      require("postcss-pxtorem")({
        rootValue: 16,
        propWhiteList: ['font', 'font-size', 'line-height', 'letter-spacing'],
      }),
      require("postcss-responsive-images"),
      require("postcss-selector-matches"),
      require("postcss-selector-not"),
      require("postcss-short"),
      require("postcss-write-svg"),
      require("css-mqpacker"),
      require('postcss-modules')({
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      })
    ];
  }
};
