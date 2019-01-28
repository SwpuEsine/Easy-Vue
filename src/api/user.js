import request from '@/utils/request'

export function queryUserList(page,limit,userName) {
  const params = {
    userName,
    page,limit
  }
  return request({
    url: '/user/list',
    method: 'get',
    params:params
  })
}

export function getMenuList() {

  return request({
    url: '/user/menuList',
    method: 'get'
  })
}
