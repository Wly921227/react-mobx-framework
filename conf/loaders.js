var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
    // JS
    {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
            plugins: [
                'transform-decorators-legacy',
                'react-hot-loader/babel'
            ],   /// 使用decorator写法
            presets: [
                'es2015',
                'stage-2',
                'react'
            ]
        }
    },
    // less
    {
        test: /\.less?$/,
        exclude: /(node_modules)/,
        // loader: 'style!css!less!autoprefixer?browsers=last 2 version&remove=false'
        loader: ExtractTextPlugin.extract('style', 'css!less!autoprefixer?browsers=last 2 version&remove=false')
    },
    // css
    {
        test: /\.css?$/,
        exclude: /(node_modules)/,
        // loader: 'style!css!autoprefixer?browsers=last 2 version&remove=false'
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 version&remove=false')
    },
    // images
    {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=1000000'   // 单位b
    }
]