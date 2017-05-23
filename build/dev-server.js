const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
// var express = require('express')

const devConfig = require('../conf/webpack.dev.config')

const compiler = webpack(devConfig.config)

let server = new WebpackDevServer(compiler, {
    stats: {
        chunks: false,
        hash: false,
        colors: true
    },
    publicPath: devConfig.config.output.publicPath,
    inline: true,
    hot: true,
    // 请求代理设置
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            pathRewrite: {'^/api': '/api'}
        }
    }
})
server.listen(devConfig.port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at http://localhost:' + devConfig.port);
})