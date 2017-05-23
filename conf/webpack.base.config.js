const path = require('path')
const rules = require('./loaders')

const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: {
        app: path.resolve(__dirname, '../src/app.js')
    },
    resolve: {
        modules: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules')
        ],
        // alias: {
        //     'common': path.resolve(__dirname, '../src/common'),
        //     'images': path.resolve(__dirname, '../src/images'),
        //     'pages': path.resolve(__dirname, '../src/pages')
        // },
        extensions: ['.js', '.json', '.less', '.css']
    },
    module: {
        // loaders: loaders,
        rules: rules
    }
}