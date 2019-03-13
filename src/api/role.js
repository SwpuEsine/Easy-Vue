import request from '@/utils/request'
import qs from "qs";

export function queryRoleSelectList(requestParam) {
  return request({
    url: '/role/selectList',
    method: 'get',
    params:requestParam
  })
}


export function queryRoleList() {
  return request({
    url: '/role/list',
    method: 'get'
  })
}

export function getRoleInfo(roleId) {
  return request({
    url: '/role/info',
    method: 'get',
    params:{roleId}
  })
}

export function deleteRole(id) {
  return request({
    url: '/role/delete',
    method: 'post',
    data:qs.stringify({id}),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function addRole(sysResource) {
  return request({
    url: '/role/add',
    method: 'post',
    data:sysResource
  })
}

export function updateRole(sysResource) {
  return request({
    url: '/role/edit',
    method: 'post',
    data:sysResource
  })
}

export function setRoleAuthorities(roleId,resIds) {
  let data={
    roleId,resIds
  }
  return request({
    url: '/role/resIds',
    method: 'post',
    data:data
  })
}

export function getRoleResoureIds(roleId) {
  return request({
    url: '/role/resIds',
    method: 'get',
    params:{roleId}
  })
}


export function queryMenuList(roleId) {
  return request({
    url: '/role/menu/list',
    method: 'get',
    params:{roleId}
  })
}

