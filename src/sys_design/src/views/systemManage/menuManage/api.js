/**
 * 菜单管理 api
 */
import {
    get,
    post,
    del,
    put
  } from '@/http'
  
  const MENU_BASEURL = '/v1/menus'
  
  // 新增菜单
  export const addMenu = _params => post(`${MENU_BASEURL}`, _params)
  
  // 查询菜单列表
  export const queryMenusList = _params => get(`${MENU_BASEURL}`, _params)
  
  // 修改菜单
  export const updateMenu = _params => put(`${MENU_BASEURL}/${_params.id}`, _params)
  
  // 删除菜单
  export const deleteMenu = _id => del(`${MENU_BASEURL}/${_id}`)
  
  // 查询单个菜单详情
  export const queryMenuDetail = _id => get(`${MENU_BASEURL}/${_id}`)
  