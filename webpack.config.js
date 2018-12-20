const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDev = process.env.NODE_env === 'development'
/**
 * webpack 本质就是js 的静态文件打包器
 * loader 可以让webpack 处理非JS文件 本身只认识js 文件
 */
const config = {
    /**
     * entry 编译入口文件
     * path.join(arg1,arg2)拼接两个路径 即文件的绝对路径
     * __dirname 表示当前文件所在的目录,即项目根目录
     */
    target:'web',
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|tif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            },
           {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
        ],

    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ]
}
if(isDev){
    config.devServer = {
        compress: true,
        port: 9000,
        host:'0.0.0.0',
        overlay: {
            warnings: true,
            errors: true
        },
    }
}


module.exports  = config;