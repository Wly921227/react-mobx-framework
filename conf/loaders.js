const ExtractTextPlugin = require('extract-text-webpack-plugin')

let rules = [
    // JS
    {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: [{
            loader: 'babel-loader',
            // options: {
            //     plugins: [
            //         'transform-decorators-legacy',
            //         'react-hot-loader/babel'
            //     ],   /// 使用decorator写法
            //     presets: [
            //         ['es2015', {'modules': false}],
            //         'stage-2',
            //         'react'
            //     ]
            // }
        }]
        // loader: 'babel', // 'babel-loader' is also a legal name to reference
        // query: {
        //     plugins: [
        //         'transform-decorators-legacy',
        //         'react-hot-loader/babel'
        //     ],   /// 使用decorator写法
        //     presets: [
        //         'es2015',
        //         'stage-2',
        //         'react'
        //     ]
        // }
    },
    // images
    {
        test: /\.(png|jpg|gif|jpeg)$/,
        exclude: /(node_modules)/,
        use: [
            'url-loader?limit=1000&name=images/[name].[hash].[ext]'
        ]
        // loader: 'url?limit=1000'   // 单位b
    }
]

if (process.env.NODE_ENV === 'production') {
    // 生产环境css单独打包
    rules = rules.concat([
        // less
        {
            test: /\.less?$/,
            exclude: /(node_modules)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'autoprefixer-loader?browsers=last 2 version',
                    'less-loader'
                    // {
                    //     loader: 'autoprefixer-loader',
                    //     options: {
                    //         browsers: ['last 2 version', 'ie >= 8'],
                    //         remove: false
                    //     }
                    // }
                ]
            })
            // loader: ExtractTextPlugin.extract('style', 'css!postcss!less')
        },
        // css
        {
            test: /\.css?$/,
            exclude: /(node_modules)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'autoprefixer-loader?browsers=last 2 version'
                    // {
                    //     loader: 'autoprefixer-loader',
                    //     options: {
                    //         browsers: ['last 2 version', 'ie >= 8'],
                    //         remove: false
                    //     }
                    // }
                ]
            })
            // loader: ExtractTextPlugin.extract('style', 'css!postcss')
        }
    ])
} else {
    // 开发环境css热加载
    rules = rules.concat([
        // less
        {
            test: /\.less?$/,
            exclude: /(node_modules)/,
            use: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader?browsers=last 2 version',
                'less-loader'
                // {
                //     loader: 'autoprefixer-loader',
                //     query: {
                //         browsers: ['last 2 version', 'ie >= 8'],
                //         remove: false
                //     }
                // }
            ]
        },
        // css
        {
            test: /\.css?$/,
            exclude: /(node_modules)/,
            use: [
                'style-loader',
                'css-loader',
                'autoprefixer-loader?browsers=last 2 version'
                // {
                //     loader: 'autoprefixer-loader',
                //     query: {
                //         browsers: ['last 2 version', 'ie >= 8'],
                //         remove: false
                //     }
                // }
            ]
        }
    ])
}

module.exports = rules