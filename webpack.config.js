var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, './wwwroot');
var COMPONTENTS_DIR = path.resolve(__dirname, './application');

module.exports = {
    context: path.join(__dirname, '/'),
    entry: COMPONTENTS_DIR + '/index.jsx',
    output: {
        path: APP_DIR,
        filename: '/bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: [
                path.resolve(__dirname, "node_modules"),
            ],
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react']
            }
        }]
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};