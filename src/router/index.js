import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
Vue.use(Router)
const Layout=()=> import('../pages/home/Home.vue')
const Settings=() => import('../pages/user_profile/Settings.vue')
export default new Router({
  //给命名起名字 使其能够更快的连接和跳转  可能会用在keep-alive缓存里面
  base:"/",
  routes: [
    {
      path: '/',
      redirect:'/login'
    },{
      path:'/login',
      name:'login',
      //你也可以在工厂函数中返回一个 Promise，所以把 webpack 2 和 ES2015 语法加在一起，我们可以写成这样：
      component:()=> import('../pages/login/Login.vue')
    },{
      path:'/home',
      name:'home',
      component:Layout
    },{
      path:'/dashboard',
      name:'dashboard',
      component:Layout,
      children: [{
        path:"",
        component:()=> import('../pages/dashboard/index.vue')
      }]
    },{
      path:'/user',
      name:'user',
      component:Layout,
      children: [{
        path:"",
        component:()=> import('../pages/user/index.vue')
      }]
    },{
      path:'/menu',
      name:'menu',
      component:Layout,
      children: [{
        path:"",
        component:()=> import('../pages/menu/index.vue')
      }]
    },{
      path:'/role',
      name:'role',
      component:Layout,
      children: [{
        path:"",
        component:()=> import('../pages/role/index.vue')
      }]
    },{
      path:'/log',
      name:'log',
      component:Layout,
      children: [{
        path:"",
        component:()=> import('../pages/log/index.vue')
      }]
    },{
      path:'/cache',
      name:'cache',
      component:Layout,
      children: [{
        path:"",
        component:()=> import('../pages/cache/index.vue')
      }]
    },{
      path:'/plan',
      name:'plan',
      component:Layout,
      children: [{
        path:"",
        component:()=> import('../pages/plan/index.vue')
      }]
    },{
      path:'/monitor',
      name:'druidSql',
      component:Layout,
      children: [{
        path:"sql",
        component:()=> import('../pages/monitor/druidSql.vue')
      },{
        path:"queue",
        component:()=> import('../pages/monitor/rabbitMq.vue')
      },{
        path:"es",
        component:()=> import('../pages/monitor/elasticSearch.vue')
      }]
    },{
      path:'/sysuser',
      name:'sysuser',
      component:Layout,
      meta: { title: 'Example', icon: 'user' },
      redirect:"/sysuser/settings",
      children: [
        {
          path: 'settings',
          name:'settings',
          component: Settings,
          redirect:"settings/basic",
          children:[
            {
              path:"basic",
              name:'basic',
              component:()=> import('../pages/user_profile/Basic.vue')
            },
            {
              path:"profile",
              name:'profile',
              component:()=> import('../pages/user_profile/Profile.vue')
            },{
              path:"account",
              name:'account',
              component:()=> import('../pages/user_profile/Account.vue')
            }
          ]
        }
      ]
    }
  ]
})
