<template>
    <div id="settings">
      <el-row  class="row-bg" :gutter="20">
        <el-col :offset="3" :span="5">

            <ul>
              <li>
                <router-link :to="{path:'/sysuser/settings/basic'}" class="link">
                  <div class="setting-icon">
                    <svg-icon class="" name="user"/>
                  </div>
                  <span>基础设置</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/sysuser/settings/profile'}" class="link">
                  <div class="setting-icon">
                    <svg-icon class="" name="user"/>
                  </div>
                  <span>个人资料</span>
                </router-link>
              </li>
              <li>
                <router-link :to="{path:'/sysuser/settings/account'}" class="link">
                  <div class="setting-icon">
                    <svg-icon class="" name="user"/>
                  </div>
                  <span>账户管理</span>
                </router-link>
              </li>
            </ul>

        </el-col>
        <el-col :offset="1" :span="10">
            <router-view/>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "Settings",
        data(){
          return{

          }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  ul{
    padding: 0px 0px 0px 15px;
    li{
      line-height: 20px;
    }
  }
  li{
    line-height: 20px;
  }
  .link{
    padding: 10px 15px;
    font-size: 15px;
    display: block;
    &:hover{
      background-color: #f0f0f0;
      border-radius: 4px;
    }
  }
  .text {
    font-size: 14px;
  }
  .row-bg {
    padding: 5% 0;
  }
  .setting-icon{
    position: relative;
    margin-right: 13px;
    width: 32px;
    height: 32px;
    text-align: center;
    color: #fff;
    background-color: #a0a0a0;
    border-radius: 4px;
    display: inline-block;
    vertical-align: middle;
      svg{
        margin:auto;
        font-size: 18px;
        display: block;
        position: absolute;
        left: 0;
        right: 0px;
        top: 0px;
        bottom: 0px;
      }
      span{
        margin-left: 17px;
        vertical-align: middle;
      }
  }
</style>
