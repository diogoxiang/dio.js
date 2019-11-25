import Vue from 'vue'
import Vuex from 'vuex'
import { constantRouterMap, asyncRouterMap } from '@/router' // 路由
import { createUUID, sessionStorage } from '@cm/js/utils' // tool
import { login, getUserDetail, logOut } from './views/page/api' // 登陆相关接口
import { alert } from '@cp/base/messageBox' // 提示框
import { sysConfig } from '../sys_config' // 系统配置

Vue.use(Vuex)

/**
 * 判断菜单是否有权限
 * @param _route 单个路由
 * @param _menus 所有有权限的路由列表
 */
function hasPermission (_route, _menus) {
  for (let item of _menus) {
    if (item.name === _route.name) {
      return true
    }
  }
  return false
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routes 所有的异步路由
 * @param menus 查询回来的具有权限的路由
 */
 // routes,menus均为对象数组
function filterAsyncRouter (routes, menus) {
  // 不需要权限控制时，返回所有菜单
  if (!sysConfig.menusByPermission) {
    return routes
  }
  // 需要权限控制时，根据menus生成有权限访问的路由
  let res = []
  routes.forEach(item => {
    if (hasPermission(item, menus)) {
      item.meta.isSubPage = item.hidden || false
      if (item.children) {
        item.children = filterAsyncRouter(item.children, menus)
      }
      res.push(item)
    }
  })
  return res
}

/**
 * 设置父路由的redirect到其第一个子路由
 */
function generateRedirect (routes) {
  routes.forEach(item => {
    if (item.children && item.children.length) {
      item.redirect = {
        name: item.children[0].name
      }
      item.children = generateRedirect(item.children)
    }
  })
  return routes
}

/**
 * 登陆成功后，处理返回的菜单列表，将嵌套数组展开
 * @param {*} arr 要出来的数据
 * @param {*} result 最终返回的数据
 */
function getMenu (arr, result = []) {
  arr.forEach(item => {
    result.push({
      name: item.routeUrl,
      content: item.name,
      permissions: item.perms
    })
    if (item.children) {
      getMenu(item.children, result)
    }
  })
  return result
}

export default new Vuex.Store({
  state: {
    sysName: sysConfig.sysName,
    showMultiPage: sysConfig.showMultiPage,
    menusMode:sysConfig.menusMode,
    Token: sessionStorage('token') || '', // 登录token
    isFullScreen: false, // 是否全屏
    loading: false, // 请求loading
    searchLoading: false, // 搜索表单的loading
    userInfor: {
      userName: sessionStorage('userName') || '',
      account: sessionStorage('account') || ''
      // roles: []
    }, // 用户信息
    menus: sessionStorage('menus') ? JSON.parse(sessionStorage('menus')) : [], // 登陆成功后，查询回来的初始菜单列表
    accessRoutes: [], // 查询回来的当前用户的权限路由
    addRouters: [], // 动态添加的路由
    subPageMenus: [], // 子页面的路由
    routesCrumb: [], // 访问的路由链(面包屑用)
    visitedPageList: [], // 访问过的路由name集合
    collapse: false // 左侧菜单折叠开关
  },
  mutations: {
    // 保存系统配置
    SET_SYS_CONFIG (state) {
      console.log(state, sysConfig)
      Object.assign(state, sysConfig)
      // Object.keys(sysConfig).forEach(key => {
      //   state[key] = sysConfig[key]
      // })
    },
    // 保存登录Token
    SET_TOKEN (state, _token) {
      state.Token = _token
    },
    // 全屏切换
    updateFullScreen (state, _res) {
      state.isFullScreen = _res
    },
    // 保存用户信息
    SET_USERINFOR (state, _infor) {
      state.userInfor = _infor
    },
    // 保存查询回来的初始菜单列表
    SET_MENUS (state, _menus) {
      state.menus = _menus
    },
    // 当前用户对应的有权限的路由
    SET_ACCESS_ROUTES (state, _routes) {
      state.accessRoutes = _routes
    },
    // 合并之后的最终的路由
    SET_ROUTES (state, _routers) {
      state.addRouters = _routers
    },
    // 生成面包屑路由
    SET_CRUMB_ROUTES (state, _res) {
      state.routesCrumb = _res
    },
    // 更新子页面的路由菜单
    UPDATE_SUBPAGE_MENUS (state, _menus) {
      state.subPageMenus = _menus
    },
    // 左侧菜单折叠
    UPDATE_COLLAPSE (state) {
      state.collapse = !state.collapse
    },
    // 添加访问过的路由
    ADD_VISITED_ROUTE (state, _route) {
      if (['notFound', 'redirect'].includes(_route.name)) return
      state.visitedPageList.push(_route)
    },
    // 删除访问过的路由
    DELETE_VISITED_ROUTE (state, _idx) {
      state.visitedPageList.splice(_idx, 1)
    },
    // 开启请求loading
    START_LOADING (state) {
      state.loading = true
    },
    // 结束请求loading
    END_LOADING (state) {
      state.loading = false
    },
    // 搜索表单的loading状态
    SET_SEARCH_LOADING (state, val) {
      state.searchLoading = val
    }
  },
  actions: {
    /**
     * 登录
     * @param {*} _params 登录参数
     */
    Login ({
      commit
    }, _params) {
      return new Promise((resolve, reject) => {
        // 登录接口
        login(_params).then(response => {
          if (response.code === '999998') {
            // reject(response)
            alert(response.message)
          } else {
            // 当前用户有权限的菜单列表
            let menus = getMenu(response)
            commit('SET_MENUS', menus)
            // token应该由后端生成
            let token = createUUID(24)
            commit('SET_TOKEN', token)
            resolve()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * 退出登陆
     */
    LogOut ({
      commit
    }) {
      return new Promise((resolve, reject) => {
        logOut().then(() => {
          commit('SET_TOKEN', null)
          commit('SET_MENUS', [])
          commit('SET_USERINFOR', {
            userName: '',
            account: ''
          })
          window.sessionStorage.clear()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * 获取当前登陆用户的基本信息
     */
    GetUserInformation ({
      commit
    }) {
      getUserDetail().then(res => {
        if (res.code === '000000') {
          // 保存用户信息
          commit('SET_USERINFOR', {
            userName: res.data.name,
            account: res.data.account
          })
        }
      })
    },
    /**
     * 获取用户角色对应的菜单权限
     * @param {*} _params 参数
     */
    async getMenus ({
      commit,
      state
    }, _params) {
      // let res = await getMenus(_params)
      // return res
      return state.menus
    },
    /**
     * 动态生成菜单
     * @param {*} _menus 用户有权访问的菜单列表
     */
    GenerateRoutes ({
      commit
    }, _menus) {
      return new Promise((resolve, reject) => {
        // 过滤出当前用户有权访问的路由
        let accessedRouters = filterAsyncRouter(asyncRouterMap, _menus)
        // 设置redirect
        accessedRouters = generateRedirect(accessedRouters)
        // 保存当前用户有权访问的菜单
        commit('SET_ACCESS_ROUTES', accessedRouters)
        // 将菜单挂载在home主菜单下
        constantRouterMap.forEach(item => {
          if (item.name === 'home') {
            // item.redirect = {
            //   name: accessedRouters[0].name
            // }
            item.children = accessedRouters
          }
        })
        commit('SET_ROUTES', constantRouterMap)
        resolve({
          constantRouterMap,
          accessedRouters
        })
      })
    },
    /**
     * 判断login页redirect的路由是否有权限
     * @param {*} path 路由path
     */
    async judgePathPermission ({
      commit,
      state
    }, path) {
      let _redirectIsInclude = false // 储存判断结果
      let menuPath = path.split('/').pop()

      function isPathHasPermission (_menu, _path) {
        for (let item of _menu) {
          if (item.path === _path) {
            _redirectIsInclude = true
            return
          }
          if (item.children && item.children.length) {
            isPathHasPermission(item.children, _path)
          }
        }
      }

      // 判断login页redirect的路由是否有权限
      await isPathHasPermission(state.accessRoutes, menuPath)

      // 生成子页面菜单列表
      let mainPath = _redirectIsInclude ? path.split('/')[2] : state.accessRoutes[0].path
      let menu = state.accessRoutes.filter(item => item.path === mainPath)[0]
      commit('UPDATE_SUBPAGE_MENUS', menu ? (menu.children || []) : [])

      return _redirectIsInclude
    },
    /**
     * 生成路由面包屑
     * @param {*} _currentRoutes 当前路由
     */
    GenerateRoutesCrumb ({
      commit,
      state
    }, _currentRoutes) {
      let arr = _currentRoutes.matched.slice(1) // 去掉首页面包屑
      commit('SET_CRUMB_ROUTES', arr) // 生成面包屑路由
    },
    /**
     * 添加访问过的路由name
     * @param {*} _routeName 需要添加的路由
     */
    addVisitedRoutes ({
      commit,
      state
    }, _route) {
      // 隐藏的路由不添加仅访问历史
      if (_route.meta.hidden) return
      let routeName = _route.name
      let isInclude = false
      // 判断是否已存在
      state.visitedPageList.forEach(item => {
        if (item.name === routeName) {
          isInclude = true
        }
      })

      // 路由已存在，不需要添加
      if (isInclude) return

      commit('ADD_VISITED_ROUTE', _route)
    },
    /**
     * 删除访问的路由
     * @param {*} param0
     * @param {*} _route
     */
    deleteVisitedPage ({
      commit,
      state
    }, _idx) {
      commit('DELETE_VISITED_ROUTE', _idx)
    }
  }
})
