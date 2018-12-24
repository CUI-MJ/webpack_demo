import Vue from 'vue'

import App from './App.vue'

import '../asset/styles/global.styl'
var root = document.createElement('div')
document.body.appendChild(root)
new Vue({

    render: (h) => h(App)
    //render 方法就是将虚拟dom 通过  $mount 真正的挂载到DOM上
    
}).$mount(root)