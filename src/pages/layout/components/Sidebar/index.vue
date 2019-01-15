<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu   background-color="#fff"
               active-text-color="#4E5155" text-color="#a3a4a6" :collapse="isCollapse" >
      <el-submenu index="1">
        <template slot="title"><svg-icon name="myaccount"></svg-icon>用户管理</template>
        <a href="/#/sysuser">
          <el-menu-item index="1-1">选项4-1</el-menu-item>
        </a>
        <a href="/#/sysuser">
          <el-menu-item index="1-3">选项4-1</el-menu-item>
        </a>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><svg-icon name="myaccount"></svg-icon>dashboard</template>
        <a href="/#/dashboard">
          <el-menu-item index="2-1">dashboard</el-menu-item>
        </a>
      </el-submenu>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
//import SidebarItem from './SidebarItem' //SidebarItem

export default {
  name:"Sidebar",
  components: {  },
  data(){
    return {
      //冒号 表示动态传值
      route:{
        path:'/sysuser',
        name:'sysuser',
        component:Layout
      }
    }
  },
  computed: {
    ...mapGetters([
      'isSidebarActive'
    ]),
    isCollapse() {
      return !this.isSidebarActive
    }
  }
}
</script>
