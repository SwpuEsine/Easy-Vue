<template>
  <el-card>
    <div slot="header">
      <span class="title">技术概览</span>
      <span>
      <el-dropdown>
        <span>
          <el-button  type="text">....</el-button>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>前端框架</el-dropdown-item>
          <el-dropdown-item>后端框架</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </span>
    </div>
    <el-row class="padding-bottom-line">
      <template>
        <el-table :show-header="false"
          :data="tableData" :highlight-current-row="true" max-height="180px"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            width="80px"
            >
          </el-table-column>
          <el-table-column prop="name">
          </el-table-column>
        </el-table>
      </template>
    </el-row>
  </el-card>
</template>


<script>
  export default {
    name: "technology",
    data() {
      return {
        tableData: [{
          date: '核心框架',
          name: 'Spring、Spring MVC、Spring Boot'
        },{
          date: '核心框架',
          name: 'Spring、Spring MVC、Spring Boot'
        },{
          date: '核心框架',
          name: 'Spring、Spring MVC、Spring Boot'
        },{
          date: '核心框架',
          name: 'Spring、Spring MVC、Spring Boot'
        }]
      }
    }
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
  .el-dropdown{
    float: right;
  }
  .el-button{
    padding: 0px 0px;
  }
</style>
