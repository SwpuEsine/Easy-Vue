<template>
  <el-card>
    <div slot="header">
      <span class="title">更新日志</span>
      <el-button style="float: right; padding: 3px 0;vertical-align: middle " type="text">....</el-button>
    </div>
    <el-row class="padding-bottom-line">
      <el-col :span="18">
        <div class="left-word">
          <div class="font-weight-semibold">3.0版本发布</div>
          <small class="text-muted">02/05/2018 11:32:45</small>
        </div>
      </el-col>
      <el-col :span="6">
        <el-tag size="mini" type="prime" style="margin-bottom: 10px;">未知</el-tag>
      </el-col>
    </el-row>
    <el-row class="padding-bottom-line">
      <el-col :span="18">
        <div class="left-word">
          <div class="font-weight-semibold">2.0版本发布</div>
          <small class="text-muted">02/05/2018 11:32:45</small>
        </div>
      </el-col>
      <el-col :span="6">
        <el-tag size="mini" type="prime" style="margin-bottom: 10px;">正在准备中</el-tag>
      </el-col>
    </el-row>
    <el-row class="padding-bottom-line">
      <el-col :span="18">
        <div class="left-word">
          <div class="font-weight-semibold">1.0版本发布</div>
          <small class="text-muted">02/05/2018 11:32:45</small>
        </div>
      </el-col>
      <el-col :span="6">
        <el-tag size="mini" type="success" style="margin-bottom: 10px;">发布完成</el-tag>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
    export default {
        name: "update-log"
    }
</script>

<style lang="scss" scoped>
  .title{
    font-weight: bold !important;
  }
  .font-weight-semibold{
    font-weight: 500 !important;
  }
  .padding-bottom-line{
    padding-bottom: 1rem;
    padding-top: 0.3rem;
    padding-left: 0.3rem;
  }
  small{
    font-size: 85%;
    font-weight: 400;
    color: #a3a4a6 !important;
  }
</style>
