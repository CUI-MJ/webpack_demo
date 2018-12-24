const path = require('path')
const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
                test: /\.jsx$/,
                use: ['babel-loader']
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
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap :true,
                        }
                    },
                    'stylus-loader'
                ]
            },
        ],

    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev? '"development"' : '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            // template : path.resolve(__dirname, 'index.html'),
        }),
        new webpack.NoEmitOnErrorsPlugin()  //减少没用的错误信息提示
    ]
}
if(isDev){
    //整个黑窗调试代码比较整洁
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000,
        host:'0.0.0.0',
        overlay: {
            warnings: true,
            errors: true
        },
        hot: true,
        inline:true,
    }
}


module.exports  = config;