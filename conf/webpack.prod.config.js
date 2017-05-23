const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const webpackBase = require('./webpack.base.config')
const port = 8081
let config = Object.assign(webpackBase, {
    // devtool: 'source-map'
    devtool: false  // 控制台代码映射
})

config.entry['react'] = ['react', 'react-dom', 'react-router']
config.entry['mobx'] = ['mobx', 'mobx-react']
Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    config.entry[name] = [].concat(webpackBase.entry[name])
})

// 输出目录
config.output = {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].bundle.[hash].js',
    chunkFilename: "js/[name].[hash].js"
}

// 插件
config.plugins = (webpackBase.plugins || []).concat(
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        title: 'Demo',
        filename: 'index.html',
        template: path.resolve(__dirname, './template/index.prod.html'),
        favicon: path.resolve(__dirname, '../src/images/favicon.png'),
        inject: 'body',
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin({
        filename: 'css/style.[hash].css',
        allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        minChunks: 2,
        name: ['react', 'mobx', 'common']
    })
)

module.exports = {
    config,
    port
}