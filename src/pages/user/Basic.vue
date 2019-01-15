<template>
  <div class="basic">
    <table>
      <tbody class="base">
      <tr>
        <td class="top-line">
          <div class="avatar">
            <img :src="avatarUrl"/>
          </div>
        </td>
        <td class="top-line"><a class="btn btn-hollow"><input unselectable="on" type="file" class="hide">
          更改头像
        </a></td>
      </tr>
      <tr>
        <td class="setting-title">
          昵称
        </td>
        <td>
         <!-- <input type="text" placeholder="请输入昵称">-->
          <el-input v-model="input" placeholder="请输入昵称" clearable  size="small"></el-input>
        </td>
      </tr>
      <tr>
        <td class="setting-title">电子邮件</td>
        <td>
          <button class="btn btn-hollow">点击绑定</button> <!----></td>
      </tr>
      <tr>
        <td class="setting-title">手机</td>
        <td><input type="submit" class="btn btn-hollow" value="绑定手机"></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import avatar from '@/assets/image/avatar.jpg'
  export default {
    name: "Basic",
    data(){
      return{
        avatarUrl:avatar,
        input: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-input{
    width: auto;
  }
  .basic{
     img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
    .top-line{
      padding-top: 0;
    }
    tr{
      border-bottom: 1px solid #f0f0f0;
      &:first-child{
        border: none;
      }
    }
    td{
      padding: 20px 0;
    }
    .setting-title {
      font-size: 15px;
      color: #969696;
    }
    .avatar {
      width: 100px;
      height: 100px;
      cursor: pointer;
      display: block;
    }
  }
</style>
