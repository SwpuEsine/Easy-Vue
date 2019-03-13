
import axios from 'axios'
import { Message,Notification } from 'element-ui'
import { getToken,removeToken } from '@/utils/auth'

// create an axios instance

const service = axios.create({
  //rap2 操作
  //baseURL: "http://rap2api.taobao.org/app/mock/87079", // api 的 base_url
  baseURL: "http://localhost/",
  timeout: 30000, // request timeout
  withCredentials: true//带上Cookie
})

// request interceptor
service.interceptors.request.use(
  config => {
    //后台判断ajax用
    config.headers['X-Requested-With']='XMLHttpRequest'
    /*if (getToken()) {
      config.headers['Token'] = getToken()
    }*/
   /* if(config.method === 'post') {
        config.data = qs.stringify( {
        ...config.data
      })
    }*/
    return config
  },
  error => {
    console.log(error)
    // Promise.reject失败异步请求
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  response => {
    const res = response.data
    if (res.code != 200) {
      //其他状态码
      switch (res.code){
        case 500:
          Notification({
            title: '错误',
            type: 'error',
            message: res.msg
          });
          break
        default:
          Notification({
            title: '错误',
            type: 'error',
            message: res.msg
          });
          break
      }
      return Promise.reject(response)
    } else {
      return response
    }
  },
  error => {

    // 错误信息有error.message
    /* 正常返回有下面三条信息
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);*/
    console.log('err' + error) // for debug
    if (error.response) {
      //请求已发出，但服务器响应的状态码不在 2xx 范围内
      switch (error.response.status) {
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
        case 403:
          Message({
            message: '权限不足',
            type: 'error',
            duration: 5 * 1000
          })
        case 500:
          Notification({
            title: '错误',
            type: 'error',
            message: res.msg
          });
      }
    }else {
      Message({
        message: '出现错误',
        type: 'error',
        duration: 5 * 1000
      })
    }
    //这里处理 上层不用拦截了
    return Promise.reject(error)
  }
)

export default service
