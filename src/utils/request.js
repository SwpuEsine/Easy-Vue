import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
//import { getToken } from '@/utils/auth'

// create an axios instance

const service = axios.create({
  //rap2 操作
  //baseURL: "http://rap2api.taobao.org/app/mock/87079", // api 的 base_url
  baseURL: "http://localhost/",
  timeout: 3000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    /*config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // Do something before request is sent   store.getters这个是取出参数格式化 然后转化token
    /!*if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改  控制数据读取使用GETTER
      config.headers['X-Token'] = ''
    }*!/
    if(config.method === 'post') {
      config.data = qs.stringify( {
        ...config.data
      })
    }*/
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    // Promise.reject失败异步请求
    Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    if (res.code != 200) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      /*if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 请自行在引入 MessageBox
        // import { Message, MessageBox } from 'element-ui'
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }*/
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    // 错误信息有error.message
    /* 正常返回有下面三条信息
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);*/
    console.log('err' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
