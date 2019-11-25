import Axios from 'axios'
import QS from 'qs' // 引入qs模块，用来序列化post类型的数据
import store from '@/store'
import router from '@/router'
import { message } from '@cp/base/message' // 提示框
import { alert } from '@cp/base/messageBox' // 确认框

export const instance = Axios.create({
  baseURL: process.env.VUE_APP_BASEURL,
  timeout: 10000, // 超时时间
  withCredentials: true, // 携带cookie
  validateStatus: status => { // 200、400、500
    return status === 200 || status === 400 || status === 500
  }
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    // 如果存在的话，则每个http header都加上token
    const token = store.state.token
    token && (config.headers.Authorization = token)

    // 防止IE浏览器get请求缓存
    if (config.method === 'get' && config.params) {
      config.params._t = Date.now()
    }

    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 返回的状态码为200
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      // 登陆超时
      if (response.data.errorCode === 'im9999') {
        alert('您的登录已超时，请重新登录', '确定登出').then(() => {
          store.commit('SET_TOKEN', null)
          router.replace({
            path: '/login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
        })
      } else {
        if (typeof response.data.errorCode !== 'undefined') {
          message({
            message: response.data.errorMsg,
            type: 'error'
          })
        } else {
          message({
            message: '服务器内部出现错误',
            type: 'error'
          })
        }
        return Promise.reject(response)
      }
    }
  },
  error => {
    console.log('请求失败', error.code)
    if (error.code === 'ECONNABORTED') {
      // 请求超时
      message({
        message: '请求超时，请重试',
        type: 'error'
      })
    } else {
      if (error.response && error.response.status) {
        switch (error.response.status) {
        // 401: 未登录
        case 401:
          alert('登录过期，请重新登录', '提示').then(() => {
            store.commit('SET_TOKEN', null)
            store.commit('SET_MENUS', [])
            store.commit('SET_USERINFOR', {
              userName: '',
              account: ''
            })
            window.sessionStorage.clear()
            window.location.reload()
          })
          break
          // 403 没权限
        case 403:
          alert('你没权限访问此资源, 请联系管理员!', '提示').then(() => {
            
          })
          break
          // 404请求不存在
        case 404:
          message({
            message: '网络请求不存在-404',
            type: 'error'
          })
          break
          // 其他错误，直接抛出错误提示
        default:
            message({
              message: error.response.data.message,
              type: 'error'
            })
        }
      }
    }
    return Promise.reject(error)
  }
)

// 开始loading
const loadingStart = (showLoading) => {
  if (showLoading === false) return
  store.commit('START_LOADING')
}

// 结束loading
const loadingend = (showLoading) => {
  if (showLoading === false) return
  store.commit('END_LOADING')
  store.commit('SET_SEARCH_LOADING', false)
}

/**
 * get方法，对应查询
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Boolean} showLoading [是否显示loading]
 * @param {Object} headers [headers配置]
 */
export function get (url, params = {}, showLoading = true, headers= {}) {
  loadingStart(showLoading)
  return new Promise((resolve, reject) => {
    instance({
      url,
      method: 'get',
      params,
      headers
    }).then(res => {
      loadingend(showLoading)
      resolve(res.data)
    }).catch(err => {
      loadingend(showLoading)
      reject(err.data)
    })
  })
}

/**
 * post方法，对应新增
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} headers [headers配置]
 */
export function post (url, data, headers = {
  'Content-Type': 'application/json;charset=UTF-8'
}) {
  loadingStart()
  return new Promise((resolve, reject) => {
    instance({
      url,
      data: headers['Content-Type'] === 'application/x-www-form-urlencoded' ? QS.stringify(data) : data,
      method: 'post',
      headers
    })
      .then(res => {
        loadingend()
        resolve(res.data)
      })
      .catch(err => {
        loadingend()
        reject(err.data)
      })
  })
}

/**
 * delete方法，对应删除
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function del (url, params) {
  loadingStart()
  return new Promise((resolve, reject) => {
    instance.delete(url, params)
      .then(res => {
        loadingend()
        resolve(res.data)
      })
      .catch(err => {
        loadingend()
        reject(err.data)
      })
  })
}

/**
 * put方法，对应修改
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put (url, params) {
  loadingStart()
  return new Promise((resolve, reject) => {
    instance.put(url, params)
      .then(res => {
        loadingend()
        resolve(res.data)
      })
      .catch(err => {
        loadingend()
        reject(err.data)
      })
  })
}

/**
 *patch方法, 对应修改
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求携带的参数]
 */
export function patch(url, params){
  loadingStart()
  return new Promise((resolve, reject) => {
    instance({
      url,
      data: params,
      method: 'patch'
    })
      .then(res => {
        loadingend()
        resolve(res.data)
      })
      .catch(err => {
        loadingend()
        reject(err.data)
      })
  })
}
