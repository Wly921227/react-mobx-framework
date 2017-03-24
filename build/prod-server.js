require('shelljs/global')
env.NODE_ENV = 'production'

var ora = require('ora')
var path = require('path')

var webpack = require('webpack')
var express = require('express')

var prodConfig = require('../conf/webpack.prod.config')

var app = express()
app.use(express.static(path.join(__dirname, '../dist')))

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(__dirname, '../dist')
rm('-rf', assetsPath)
mkdir('-p', assetsPath)


webpack(prodConfig.config, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n')

    app.listen(prodConfig.port, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at http://localhost:' + prodConfig.port);
    })
})
