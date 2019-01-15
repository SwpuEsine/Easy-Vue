<template>
  <el-card>
    <div slot="header">
      <span class="title">网络状况</span>
      <el-button style="float: right; padding: 3px 0;vertical-align: middle " type="text">....</el-button>
    </div>
    <el-row>
      <el-col :span="18"><div class="left-word">文字</div></el-col>
      <el-col :span="6"><div class="right-image">图片</div></el-col>
    </el-row>
  </el-card>
</template>

<script>
    export default{
        name: "DashCard",
        data(){
          return {
            cardObj:{
            }
          }
        },

    }
</script>

<style lang="scss" scoped>
  .title{
    font-weight: bold;
  }
</style>
