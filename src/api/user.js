import request from '@/utils/request'
import qs from "qs";

export function queryUserList(requestParam) {
  return request({
    url: '/user/list',
    method: 'get',
    params:requestParam
  })
}

export function getMenuList() {
  return request({
    url: '/user/menuList',
    method: 'get'
  })
}

export function addUser(user,rolesList) {
  return request({
    url: '/user/add',
    method: 'post',
    data:{user,rolesList}
    //data:qs.stringify(rolesList),//user_profile,
  })
}

export function updateUser(vo) {
  return request({
    url: '/user/edit',
    method: 'post',
    data:vo
    //data:qs.stringify(rolesList),//user_profile,
  })
}

export function deleteUser(userIds) {
  return request({
    url: '/user/delete',
    method: 'post',
    data:qs.stringify({userIds}),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}


export function getUserRoleInfo(userId){
  return request({
    url: '/user/info',
    method: 'get',
    params:{userId}
  })
}
