/**
 * 角色管理 api
 */
import {
    get,
    post,
    del,
    put
  } from '@/http'
  
  const ROLE_BASEURL = '/v1/roles'
  
  // 新增角色
  export const addRole = _params => post(`${ROLE_BASEURL}`, _params)
  
  // 查询角色列表
  export const queryRolesList = _params => get(`${ROLE_BASEURL}`, _params)
  
  // 修改角色
  export const updateRole = _params => put(`${ROLE_BASEURL}/${_params.id}`, _params)
  
  // 删除角色
  export const deleteRole = _id => del(`${ROLE_BASEURL}/${_id}`)
  
  // 查询单个角色详情
  export const queryRoleDetail = _id => get(`${ROLE_BASEURL}/${_id}`)
  
  // 查询角色拥有的菜单权限
  export const queryMenusByRoles = _id => get(`${ROLE_BASEURL}/${_id}/menus`)
  
  // 给角色设置菜单
  export const updateRoleMenus = _params => post(`${ROLE_BASEURL}/${_params.roleId}/menus`, _params)
  