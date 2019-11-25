// 路由权限控制
import router from './router'
import NProgress from 'nprogress' // 进度条
import { alert } from '@cp/base/messageBox' // 提示框
import store from '@/store' // store

// 白名单路由，不需要登录
const whiteList = ['/login', '/examples']

router.beforeEach(async (to, from, next) => {
  // 加载进度条
  NProgress.start()
  // 路由发生变化修改页面title
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  } else {
    // 页面加载过程中,或者未设置title时
    document.title = store.state.sysName
  }

  // 404
  if (to.matched.length === 0) {
    next({
      name: 'notFound'
    })
    return
  }

  // 未登录时
  if (!store.state.Token) {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
    return
  }
  // 已登录
  if (to.path === '/login') {
    // 当前的导航被中断，然后进行一个新的导航
    next({
      path: '/'
    })
  } else {
    // 已经有路由，直接进入页面
    if (store.state.accessRoutes.length) {
      next()
    } else {
      // 没有路由（第一次登陆）时生成路由
      // 获取当前用户的菜单权限
      const menus = await store.dispatch('getMenus', {
        // roleId: store.getters.roles[0]
      })

      // 生成动态路由
      const {
        constantRouterMap,
        accessedRouters
      } = await store.dispatch('GenerateRoutes', menus)

      if (!accessedRouters.length) {
        NProgress.done()
        alert('该用户没有配置任何菜单权限，请联系管理员')
        return
      }
      // 动态添加可访问路由表
      router.addRoutes(constantRouterMap)
      // 判断login页redirect进来的路由是否在权限路由里面
      const redirectIsInclude = await store.dispatch('judgePathPermission', to.path)
      // 登录成功跳转
      next({
        path: redirectIsInclude ? to.path : '/home/' + accessedRouters[0].path,
        replace: true
      }) // hack方法 确保addRoutes已完成
    }
  }

  // 添加访问过的路由，存到store的visitedPageList里
  store.dispatch('addVisitedRoutes', to)
})

router.afterEach((to, from, next) => {
  NProgress.done()
  // 生成路由面包屑
  store.dispatch('GenerateRoutesCrumb', to)
})
