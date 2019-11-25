import Vue from 'vue'
import 'babel-polyfill'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import 'nprogress/nprogress.css'
import '@cm/css/index.scss' // css基础样式和公共样式
import '@cm/fonts/iconfont.js' // 字体图标

import './permission' // 权限控制
import '@cp/base' // 基础组件

import * as filters from './filters' // 全局filter
for (let key in filters) {
  Vue.filter(key, filters[key])
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
