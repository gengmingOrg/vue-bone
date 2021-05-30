const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV == 'development'
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    entry: {
        main: './src/main.js'
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            inject: 'body'
        })
    ]
};

if (isDev) {
    // config.devtool = 'cheap-module-eval-source-map'//生成map文件
    config.devServer = {
        port: 8080,
        host: '0.0.0.0'//使用本机ip也可以访问
    }
}


module.exports = (env, argv) => {

    // if (argv.mode === 'development') {
    //   config.devtool = 'source-map';
    // }

    // if (argv.mode === 'production') {
    //   //...
    // }

    return config;
};