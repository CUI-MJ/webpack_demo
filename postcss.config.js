 //这个是后处理css 样式的一个模块 可以解析css 自动加前缀等


const autoprefixer = require('autoprefixer')

module.exports = {
    Plugins:[
        autoprefixer()
    ]
}