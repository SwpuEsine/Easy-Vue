import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg组件

// register globally  全局注册组件
Vue.component('svg-icon', SvgIcon)

// 相当于require组件
let requireAll = requireContext => requireContext.keys().map(requireContext)
let req = require.context('./svg', false, /\.svg$/)
requireAll(req)
