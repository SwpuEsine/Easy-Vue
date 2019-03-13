<template>
  <el-card shadow="never">
      <search-from :menuGroup="menuGroup" ></search-from>
      <div class="app-container">
        <tree-table v-loading="loading" class="table" size="medium" :data="data" :eval-func="func" :eval-args="args" :expand-all="expandAll" border>
          <el-table-column align="center" header-align="center" prop="path" label="菜单url"/>
          <el-table-column align="center" header-align="center" prop="order" label="排序号"/>
          <el-table-column align="center" header-align="center"label="类型">
            <template slot-scope="scope">
              <el-tag type="primary" v-if="scope.row.isMenu"> 菜单</el-tag>
              <el-tag type="success" v-else="scope.row.isMenu"> 按钮</el-tag>
            </template>
          </el-table-column>

          <el-table-column align="center" header-align="center" label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" icon="el-icon-edit"  @click="edit(scope.row)">修改</el-button>
              <el-button size="mini" type="danger" icon="el-icon-delete" @click="remove(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </tree-table>
      </div>
    <add-form   v-if="addVisable"  :visable="addVisable" @handleAddHide="handleAddHide"  @getMenus="getMenus"></add-form>
    <edit-form  v-if="editViasble" :resourceId="resourceId" :visable="editViasble" @handleEditHide="handleEditHide" @getMenus="getMenus" ></edit-form>
  </el-card>
</template>

<script>

import treeTable from '@/components/TreeTable'
import treeToArray from './customEval'
import SearchFrom from '@/components/SearchForm/Form.vue'
import EditForm from  './EditForm'
import AddForm from './AddForm'
import {queryMenuList,deleteMenu} from '@/api/menu'
export default {
  name: 'index',
  components: { treeTable,SearchFrom,EditForm,AddForm},
  data() {
    return {
      loading:false,
      editViasble:false,
      addVisable:false,
      resourceId:'',
      menuGroup:{
        inline:true,
        items: [{
          type:"button",
          label:"添加",
          method:this.add,
          icon:"el-icon-plus"
        }]
      },
      func: treeToArray,
      expandAll: false,
      data: {},
      args: []
    }
  },
  methods: {
    handleAddHide(){
      this.addVisable=false
    },
    edit(row){
      this.editViasble=true
      this.resourceId=row.id
    },
    add(){
      this.addVisable=true
    },
    remove(row){
      this.$confirm('此操作将永久该菜单, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        deleteMenu(row.id).then((response)=>{
          this.$message({
            showClose: true,
            message : '删除成功',
            type : 'success'
          })
          this.getMenus()
        }).catch(error=>{
          console.log(error)
        })
      })
    },
    getMenus(){
      this.loading=true
      queryMenuList().then((response)=>{
        this.loading = false
        let data=response.data
        if(data.code==200){
          this.data=data.data
        }
      }).catch(error=>{
        console.log(error)
      })
    },
    handleEditHide(){
      this.editViasble=false
    }

  },
  created(){
    this.getMenus()
  }
}
</script>

<style lang="scss" scoped>
  .role{
    .role-table{
      margin: 20px 0px;
    }
  }
  .el-card{
    border-radius: 0px;
  }
</style>
