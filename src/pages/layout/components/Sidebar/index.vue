<template>
  <div class="root">
  <div class="ev-logo">
    <img src="../../../../assets/image/logo.png" class="ffn_img">
    <span>&nbsp;EasyVue</span>
  </div>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu   background-color="#fff"
               active-text-color="#4E5155" text-color="#a3a4a6" :collapse="isCollapse" >
    <!--  <el-submenu index="1">
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
      <el-submenu index="3">
        <template slot="title"><svg-icon name="myaccount"></svg-icon>role</template>
        <a href="/#/user_profile">
          <el-menu-item index="2-1">role</el-menu-item>
        </a>
      </el-submenu>-->
      <sidebar-item :items="menuList"></sidebar-item>
    </el-menu>
  </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem' //SidebarItem

export default {
  name:"Sidebar",
  components: {  SidebarItem},
  data(){
    return {
      menuList:[]
      //冒号 表示动态传
    }
  },
  created(){
    this.getMenuList();
  },
  methods:{
    getMenuList(){
      this.$store.dispatch('getMenuList').then((data) => {
        if(data.code==200){
          this.menuList=data.data
        }else {
          this.$notify.error({
            title: '错误',
            message: data.data
          });
        }
      }).catch((error) => {
        console.log(error)
        this.loading = false
      })
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
