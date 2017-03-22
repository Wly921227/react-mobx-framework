var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var express = require('express')

var devConfig = require('../conf/webpack.dev.config')

var compiler = webpack(devConfig.config)

var server = new WebpackDevServer(compiler, {
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