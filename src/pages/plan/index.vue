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
        <el-table-column  prop="jobName" align="center" header-align="center" label="任务名称"/>
        <el-table-column  prop="jobGroup" align="center" header-align="center" label="任务分组"/>
        <el-table-column  prop="description" align="center" header-align="center" label="任务描述"/>
        <el-table-column  prop="jobClass"  align="center" :show-overflow-tooltip="true" header-align="center" label="jobClass"/>
        <el-table-column  prop="previousTime" :formatter="formatTime"  align="center"  header-align="center" label="上次运行时间"/>
        <el-table-column  prop="nextTime" :formatter="formatTime"   align="center" header-align="center" label="下次运行时间"/>
        <el-table-column  prop="jobStatus" :formatter="formatUserStatus" align="center"  header-align="center" label="状态"/>

        <el-table-column align="center" header-align="center" label="操作" width="300">
          <template slot-scope="scope">
            <el-tooltip class="item" effect="dark" content="修改" placement="top-start">
              <el-button size="mini" type="primary" icon="el-icon-edit"  @click="edit(scope.row)"></el-button>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="暂停" placement="top-start">
              <el-button size="mini" type="success" icon="el-icon-caret-right"  @click="pause(scope.row)"></el-button>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="恢复" placement="top-start">
              <el-button size="mini" type="success" icon="el-icon-refresh"  @click="resumePlan(scope.row)"></el-button>
            </el-tooltip>

            <el-tooltip class="item" effect="dark" content="删除" placement="top-start">
              <el-button size="mini" type="danger" icon="el-icon-delete" @click="remove(scope.row)"></el-button>
            </el-tooltip>
            <!--<el-button size="mini" type="primary" icon="el-icon-edit"  @click="edit(scope.row)">暂停</el-button>-->

            <el-tooltip class="item" effect="dark" content="立即执行一次" placement="top-start">
              <el-button size="mini" type="primary" icon="el-icon-d-arrow-right" @click="execute(scope.row)"></el-button>
            </el-tooltip>

          </template>
        </el-table-column>
      </el-table>

      <pagination :currentPage="this.queryParams.page" :total="total" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination>
      <add-form :visable="addVisable" @handleAddHide="handleAddHide"   @getPlanList="getPlanList"></add-form>
      <edit-form v-if="editViasble" :planId="planId" :visable="editViasble" @handleEditHide="handleEditHide" @getPlanList="getPlanList" ></edit-form>
    </div>
  </el-card>
</template>

<script>
    import SearchFrom from '@/components/SearchForm/Form.vue'
    import Pagination from '@/components/pagination'
    import {queryPlanList,deletePlan,pausePlan,resumePlan,executePlan} from '@/api/plan'
    import AddForm from './AddForm'
    import EditForm from './EditForm'
    import {preValid} from '@/utils/validate'
    import moment from 'moment'
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
            planId:'',
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
          SearchFrom,Pagination,AddForm,EditForm
        },
        created() {
          this.getPlanList();//this.currentPage,this.pageSize,""
        },
        methods:{
          formatTime(row, column){
            let date = row[column.property];
            if (date == undefined) {
              return "";
            }
            return moment(date).format("YYYY-MM-DD HH:mm:ss");
          },
          formatUserStatus(row, column){
            let userStatus = row[column.property];
            if (userStatus =='0'){
              return '禁用'
            }else if(userStatus =='1'){
             return '启用';
            }else if(userStatus =='2'){
              return '删除';
            }
          },
          getPlanList(){
            this.loading=true
            queryPlanList(this.queryParams).then((response)=>{
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
            this.planId=row.jobId
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
          execute(row){
            this.$confirm('确定立即该任务吗, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              executePlan(row).then((response)=>{
                this.$message({
                  showClose: true,
                  message : '执行成功',
                  type : 'success'
                })
                this.getPlanList()
              }).catch(error=>{
                console.log(error)
              })
            })
          },
          resumePlan(row){
            this.$confirm('确定恢复该任务吗, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              resumePlan(row).then((response)=>{
                this.$message({
                  showClose: true,
                  message : '恢复成功',
                  type : 'success'
                })
                this.getPlanList()
              }).catch(error=>{
                console.log(error)
              })
            })
          },
          pause(row){
            this.$confirm('确定暂停任务吗, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              pausePlan(row).then((response)=>{
                this.$message({
                  showClose: true,
                  message : '暂停成功',
                  type : 'success'
                })
                this.getPlanList()
              }).catch(error=>{
                console.log(error)
              })
            })
          },
          remove(row){
            this.$confirm('确认删除任务吗, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              deletePlan(row).then((response)=>{
                this.$message({
                  showClose: true,
                  message : '删除成功',
                  type : 'success'
                })
                this.getPlanList()
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
