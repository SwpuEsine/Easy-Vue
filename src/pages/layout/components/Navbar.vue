<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="isSidebarActive" class="hamburger-container"/>
    <el-dropdown class="avatar-container" trigger="click">
      <!--头像右浮动-->
      <div class="avatar-wrapper">
        <img src="../../../assets/image/avatar.jpg" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            <svg-icon name="set"></svg-icon>设置
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <svg-icon name="quit"></svg-icon> 退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <ul class="navbar-nav" >
      <li class="tab">
          <svg-icon name="user"></svg-icon>
      </li>
      <li class="tab box"  >
          <svg-icon name="message" @click.native="show = !show"></svg-icon>
          <el-badge  class="item" :value="3">
          </el-badge>
          <message  :show="show" @handleClose="handleClose"></message>
      </li>
      <li class="tab">
          <!--native父组件 绑定子组件监听自己的方法-->
          <svg-icon name="fullscreen" @click.native="fullScreen"></svg-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Notification from '@/components/Notification'
import screenfull from 'screenfull'
import Message from  '@/pages/dashboard/Message'
export default {
  name:"naveBar",
  data(){
    return{
      show:false
    }
  },
  components: {
    Hamburger,
    Notification,Message
  },
  computed: {
    ...mapGetters([
      'isSidebarActive'
      /*'name',
      'avatar',
      'device'*/
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('alterSideBarAction')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()
      })
    },
    fullScreen(){
      if (!screenfull.enabled) {
        this.$message({
          message: '浏览器无法正常工作',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
    },
    handleClose(){
      this.show=false
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    background: #fff;
    color: #a3a4a6;
    font-size: 14px;
    .item{
      margin-left: -15px;
      margin-top: -6px;
    }
    .navbar-nav{
      height: 100%;
      margin-right: 20px;
      float: right;
      li{
        float: left;
        margin-right: 0.3rem;
        line-height: 50px;
        padding: 0px 10px;
        color: #a3a4a6;
        svg{
          &:hover{
            color: #4E5155;
          }
          margin-right: 6px;
          cursor: pointer;
        }
      }
    }
    .svg-icon{
      margin-right: 5px
    }
    .hamburger-container {
      line-height: 50px;
      height: 50px;
      width: 300px;
      padding: 0 10px;
      float: left;
    }
    .screenfull {
      position: absolute;
      right: 90px;
      top: 16px;
      color: red;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      float: right;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        line-height: initial;
        .user-avatar {
          width: 40px;
          height: 40px;
          border: 1px solid #ddd;
          border-radius: 50%;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>
