//解析
import {loginByUsername, logout, getUserInfo,addUser } from '@/api/login'
import {queryUserList,getMenuList} from '@/api/user'
import {removeToken} from '@/utils/auth'
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
    //这里可以发送异步请求
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
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getMenuList({commit}){
      return new Promise((resolve, reject) => {
        //axios返回一个promise对象 可能正常  可能错误
        getMenuList().then(response => {
          const data = response.data
          //把data传递给外层
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    LogOut({commit}){
      return new Promise((resolve, reject) => {
        //axios返回一个promise对象 可能正常  可能错误
        logout().then(response => {
          const data = response.data
          //把data传递给外层
          commit('SET_TOKEN', '')
          removeToken()
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    }

  }
}

export default user
