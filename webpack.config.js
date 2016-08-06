var join = require('path').join;
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {path: join(__dirname, 'build'), filename: 'bundle.js'},
    module: {
        loaders: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true
        })
    ]
};
