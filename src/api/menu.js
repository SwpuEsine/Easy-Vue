import request from '@/utils/request'
import qs from "qs";

export function queryMenuList(roleId) {
  return request({
    url: '/menu/list',
    method: 'get',
    params:{roleId}
  })
}

export function queryMenuInfo(id) {
  return request({
    url: '/menu/info',
    method: 'get',
    params:{id}
  })
}

export function deleteMenu(id) {
  return request({
    url: '/menu/delete',
    method: 'post',
    data:qs.stringify({id}),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}



export function addMenu(sysResource) {
  return request({
    url: '/menu/add',
    method: 'post',
    data:sysResource
  })
}

export function updateMenu(sysResource) {
  return request({
    url: '/menu/edit',
    method: 'post',
    data:sysResource
  })
}



export function queryMenuSelectList() {
  return request({
    url: '/menu/selectList',
    method: 'get',
  })
}




