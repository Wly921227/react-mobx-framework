var path = require('path')
var loaders = require('./loaders')

var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: path.resolve(__dirname, '../src/app.js'),
        vendor: ['react', 'react-dom', 'react-router', 'mobx', 'mobx-react']
    },
    resolve: {
        alias: {
            'common': path.resolve(__dirname, '../src/common'),
            'images': path.resolve(__dirname, '../src/images'),
            'pages': path.resolve(__dirname, '../src/pages')
        },
        extensions: ['', '.js', '.json', '.less', '.css']
    },
    module: {
        loaders: loaders,

        // require
        // unknownContextRegExp: /$^/,
        // unknownContextCritical: false,

        // require(expr)
        // exprContextRegExp: /$^/,
        // exprContextCritical: false,

        // require("prefix" + expr + "surfix")
        wrappedContextRegExp: /$^/,
        wrappedContextCritical: false
    },
    plugins: [
        new ExtractTextPlugin('css/style.[hash].css'),
        new webpack.optimize.CommonsChunkPlugin({
            minChunks: 2,
            name: ['vendor']
        })
    ]
}