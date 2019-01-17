//解析
import { loginByUsername, logout, getUserInfo } from '@/api/login'
import {queryUserList} from '@/api/user'
const user={
  //vuex初始化状态
  state: {
    name:'',
    token:''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },
  actions: {
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        //axios返回一个promise对象 可能正常  可能错误
        loginByUsername(username, userInfo.passWord).then(response => {
          const data = response.data
          commit('SET_TOKEN', data.token)
          //setToken(response.data.token)
          //把data传递给外层
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    queryUserList({commit},payLoad){
      return new Promise((resolve, reject) => {
        //axios返回一个promise对象 可能正常  可能错误
        queryUserList(payLoad.page, payLoad.limit,payLoad.userName).then(response => {
          const data = response.data
          //把data传递给外层
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
