require('shelljs/global')
env.NODE_ENV = 'production'

const ora = require('ora')
const path = require('path')

const webpack = require('webpack')
const express = require('express')

const prodConfig = require('../conf/webpack.prod.config')

const app = express()
app.use(express.static(path.join(__dirname, '../dist')))

const spinner = ora('building for production...')
spinner.start()

const assetsPath = path.join(__dirname, '../dist')
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
