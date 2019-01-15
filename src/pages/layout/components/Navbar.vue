<template>
  <nav class="navbar">
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

    <ul class="navbar-nav">
      <li class="tab">
        <a href="/">
          <svg-icon name="user"></svg-icon>
          <span class="menu-text">在线用户</span>
        </a>
      </li>
      <li class="tab ">
        <a href="/">
          <svg-icon name="message"></svg-icon>
          <span class="menu-text">消息</span>
          <el-badge  class="item" :value="3">
          </el-badge>
        </a>
      </li>
      <li class="tab ">
        <a href="/subscriptions">
          <span class="menu-text">最大化</span>
        </a>
      </li>
    </ul>

  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import Notification from '@/components/Notification'
export default {
  components: {
    Hamburger,
    Notification
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
      margin-left: -9px;
      margin-top: -6px;
    }
    .navbar-nav{
      height: 100%;
      float: right;
      margin-right: 20px;
      li{
        margin-right: 20px;
        float: left;
        line-height: 50px;
        padding: 0px 10px;
        cursor: pointer;
        color: #a3a4a6;
        &:hover{
          color: #4E5155;
        }
        svg{
          margin-right: 6px;
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
      display: inline-block;
      float: right;
      margin-right: 30px;
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
