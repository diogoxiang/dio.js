import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export { default as asyncRouterMap } from './asyncRouterMap' // 所有路由

// 所有权限通用的路由，不需要权限判断
export const constantRouterMap = [{
  path: '/',
  name: 'redirect'
},
{
  path: '/login',
  name: 'loginComponent',
  component: () => import(/* webpackChunkName: "login" */ '@page/page/login'), // 登录页
  meta: {
    title: '登录'
  }
},
{
  path: '/home',
  name: 'home',
  component: () => import(/* webpackChunkName: "home" */ '@page/page/home'), // 首页
  meta: {
    title: '首页'
  },
  children: []
},
{
  path: '*',
  name: 'notFound',
  component: () => import(/* webpackChunkName: "notFound" */ '@page/page/notFound'), // 404
  meta: {
    title: '404'
  }
}
]

let router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constantRouterMap
})

export default router
