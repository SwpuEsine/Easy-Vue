// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'normalize.css'
import App from './App'
import router from './router'
import './icons'
import './assets/iconfont'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import i18n from '@/utils/i18n'
import store from '@/store'
import '@/styles/index.scss' // global css引入是可以引入的,在js中引入css是可以的
import '@/components/echarts'
import validate from '@/utils/validate'
Vue.config.productionTip = false

//兼容 vue-i18n@6.x
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
new Vue({
  el: '#app',
  router,
  store,
  VueI18n,
  components: { App },
  template: '<App/>'
})
