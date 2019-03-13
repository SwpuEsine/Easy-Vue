<template>
  <el-card>
    <div slot="header">
      <span class="title">{{cardObj.title}}</span>
      <el-button style="float: right; padding: 3px 0;vertical-align: middle " type="text">....</el-button>
    </div>
    <el-row>
      <el-col :span="18"><div class="left-word">{{cardObj.desc}}</div></el-col>
      <el-col :span="6"><div class="right-image">图片</div></el-col>
    </el-row>
  </el-card>
</template>

<script>
    export default{
        name: "DashCard",
        props:['cardObj'],
        data(){
          return {

          }
        },

    }
</script>

<style lang="scss" scoped>
  .title{
    font-weight: bold;
  }
</style>
