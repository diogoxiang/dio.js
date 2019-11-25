/**
 * 用户管理 api
 */
import {
    get,
    post,
    del,
    put
  } from '@/http'

const USER_BASEURL = '/v1/users'

// 查询用户列表
export const queryUsersList = _params => get(`${USER_BASEURL}`, _params)

// 删除用户
export const deleteUser = _id => del(`${USER_BASEURL}/${_id}`)

// 新增用户
export const addUser = _params => post(`${USER_BASEURL}`, _params)

// 修改用户
export const updateUser = _params => put(`${USER_BASEURL}/${_params.id}`, _params)

// 查询单个用户详情
export const queryUserDetail = _id => get(`${USER_BASEURL}/${_id}`)

// 查询用户拥有的角色列表
export const queryRolesByUser = _id => get(`${USER_BASEURL}/${_id}/roles`)

// 给用户设置角色
export const updateUserRoles = _params => post(`${USER_BASEURL}/${_params.userId}/roles`, _params)
  