<template>
  <el-card shadow="never">
    <div class="app-container">
      <search-from :menuGroup="menuGroup" ></search-from>

      <el-table v-loading="loading" class="table" size="medium"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"  border>
        <el-table-column  type="index" align="center" header-align="center" label="序号" >
        </el-table-column>
        <el-table-column  prop="role.roleName" align="center" header-align="center" label="角色标识"/>
        <el-table-column  prop="role.remark" align="center" header-align="center" label="角色名称"/>
        <el-table-column  prop="userList" :formatter="formatUserList" align="center" :show-overflow-tooltip="true" header-align="center" label="人员列表"/>

        <el-table-column align="center" header-align="center" label="操作" width="300">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit"  @click="edit(scope.row)">修改</el-button>
            <el-button size="mini" type="success" icon="el-icon-edit"  @click="auth(scope.row)">权限分配</el-button>
            <el-button size="mini" type="danger" icon="el-icon-delete" @click="remove(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <pagination :currentPage="this.queryParams.page" :total="total" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination>
      <add-form :visable="addVisable" @handleAddHide="handleAddHide"   @getRoleList="getRoleList"></add-form>
      <edit-form v-if="editViasble" :roleId="roleId" :visable="editViasble" @handleEditHide="handleEditHide" @getRoleList="getRoleList" ></edit-form>
      <auth-form v-if="authViasble" :roleId="roleId"  :visable="authViasble" @handleAuthHide="handleAuthHide"></auth-form>
    </div>
  </el-card>
</template>

<script>
  import SearchFrom from '@/components/SearchForm/Form.vue'
  import Pagination from '@/components/pagination'
  import {queryRoleList,deleteRole} from '@/api/role'
  import AddForm from './AddForm'
  import EditForm from './EditForm'
  import AuthForm from  './AuthForm'
  import {preValid} from '@/utils/validate'
  export default {
    name: "index",
    data(){
      return {
        queryParams:{
          page:1,
          limit:20,
          //userName:''
        },
        addVisable:false,
        editViasble:false,
        authViasble:false,
        total:0,
        roleId:'',
        loading:false,
        //菜单栏
        menuGroup:{
          inline:true,
          items: [{
            type:"button",
            label:"添加",
            method:this.add,
            icon:"el-icon-plus"
          }/*{
                type:"input",
                label:"角色名称",
                name:"roleName",
                value:""
              },{
                type:"button",
                label:"查询",
                method:this.query,
                icon:"el-icon-search"
              }*/]
        },
        tableData:[]
      }
    },
    components:{
      AuthForm,
      SearchFrom,Pagination,AddForm,EditForm
    },
    created() {
      this.getRoleList();//this.currentPage,this.pageSize,""
    },
    methods:{
      formatUserList(row, column){
        let userList = row[column.property];
        let userNames=userList.reduce((prev,cur,index,arr)=>{
          if(arr.length==1){
            return cu.nikeName
          }
          return prev+cur.nikeName+","
        },'')
        return userNames.slice(0,-1)
      },
      getRoleList(){
        this.loading=true
        queryRoleList(this.queryParams).then((response)=>{
          this.loading = false
          let data=response.data
          this.tableData=data.rows
          this.total=data.total
        }).catch(error=>{
          console.log(error)
        })
      },
      add(){
        this.addVisable=true
      },
      handleAddHide(){
        this.addVisable=false
      },
      edit(row){
        this.editViasble=true
        this.roleId=row.role.roleId
      },
      auth(row){
        this.roleId=row.role.roleId
        this.authViasble=true
      },
      handleEditHide(){
        this.editViasble=false
      },
      handleAuthHide(){
        this.authViasble=false
      },
      remove(row){
        this.$confirm('此操作将永久该菜单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          deleteRole(row.role.roleId).then((response)=>{
            this.$message({
              showClose: true,
              message : '删除成功',
              type : 'success'
            })
            this.getRoleList()
          }).catch(error=>{
            console.log(error)
          })
        })
      },
      handleCurrentChange(page){
        //this.queryUserList(page,this.pageSize,"");
        this.currentPage=page
      },
      handleSizeChange(size){
        //this.queryUserList(this.currentPage,size,"");
        this.pageSize=size
      },

    }
  }
</script>

<style lang="scss" scoped>
  .el-card{
    border-radius: 0px;
  }
</style>
