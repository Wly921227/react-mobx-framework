const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackBase = require('./webpack.base.config')
const port = 8080
const httpPath = `http://localhost:${port}/`

let config = Object.assign(webpackBase, {
    devtool: 'inline-source-map'
})

Object.getOwnPropertyNames((webpackBase.entry || {})).map(function (name) {
    config.entry[name] = []
    //添加HMR文件
        .concat('react-hot-loader/patch')
        .concat('webpack-dev-server/client?' + httpPath)
        .concat('webpack/hot/dev-server')
        .concat(webpackBase.entry[name])
})

// 输出目录
config.output = {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, '../static/'),
    publicPath: httpPath
}

// webpack-dev-server
config.devServer = {
    contentBase: path.resolve(__dirname, '../static/'),
    publicPath: httpPath,
    hot: true
}

// 插件
config.plugins = (webpackBase.plugins || []).concat(
    new webpack.DefinePlugin({
        'process.env.NODE.ENV': 'development'
    }),
    new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
            warnings: false
        }
    }),
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换（HMR）
    new webpack.NamedModulesPlugin(),
    // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        title: 'Demo',
        filename: 'index.html',
        template: path.resolve(__dirname, './template/index.dev.html'),
        favicon: path.resolve(__dirname, '../src/images/favicon.png'),
        inject: 'body'
        // inject: true
    })
)

module.exports = {
    config,
    port
}