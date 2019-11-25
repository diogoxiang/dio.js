/**
 * 登录api
 */
import {
    get,
    post
  } from '@/http'
  
  // 登录接口
  export const login = _params => post('/login', _params, {
    'Content-Type': 'application/x-www-form-urlencoded'
  })
  
  // 修改密码
  // export const updatePassword = _params => post('/profile/password', _params)
  
  // 获取用户菜单权限
  // export const getMenus = _params => post('/getMenusByRoleId', _params)
  
  // 获取当前登陆用户信息
  export const getUserDetail = () => get('/profile', {})
  
  // 退出登陆
  export const logOut = () => get('/logout')
  