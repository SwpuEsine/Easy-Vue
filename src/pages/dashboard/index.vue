<template>
  <div class="dashboard">
    <el-row>
      <div class="pd-lt-15">
        <h2 class="font-weight-light mb-2" style="margin-bottom: 4px">服务器状态</h2>
        <el-tag size="mini" type="success" style="margin-bottom: 10px;">RUNNING</el-tag>
      </div>
    </el-row>

    <el-row :gutter="30" class="m-b-17">
      <div class="pd-lt-15">
        <el-col :span="6">
          <dash-card></dash-card>
        </el-col>
        <el-col :span="6">
          <dash-card></dash-card>
        </el-col>
        <el-col :span="6">
          <dash-card></dash-card>
        </el-col>
        <el-col :span="6">
          <dash-card></dash-card>
        </el-col>
      </div>
    </el-row>

    <el-row class="m-b-17">
      <div class="pd-lt-15" >
        <el-col :span="24">
          <ip-cavas></ip-cavas>
        </el-col>
      </div>
    </el-row>


    <el-row :gutter="30" class="m-b-17">
      <div class="pd-lt-15" >
        <el-col :span="14">
          <update-log></update-log>
        </el-col>
        <el-col :span="10">
          <technology></technology>
        </el-col>
      </div>
    </el-row>

  </div>
</template>

<script>
  import DashCard from './Card'
  import IpCavas from './IpCavas'
  import UpdateLog from './UpdateLog'
  import Technology from './Technology'
  export default {
    components: {DashCard,IpCavas,UpdateLog,Technology},
    name: "index",
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-row{
    padding-left: 15px;
    padding-right: 15px;
  }
  .dashboard{
    .pd-lt-15{
      padding-right: 24px;
      margin-bottom: 11px;
    }
    .m-b-17{
      margin-bottom: 17px;
    }
  }
</style>
