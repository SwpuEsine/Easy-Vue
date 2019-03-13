<template>
  <el-card shadow="never">
    <div class="app-container">
      <search-from :menuGroup="menuGroup" ></search-from>

      <el-table v-loading="loading" class="table" size="medium"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"  @selection-change="handleSelectionChange" border>
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column  type="index" align="center" header-align="center" label="序号" >
        </el-table-column>
        <el-table-column  prop="userName" align="center" header-align="center" label="账号"/>
        <el-table-column  prop="nikeName" align="center" header-align="center" label="昵称"/>
        <el-table-column  prop="phone" align="center"  header-align="center" label="手机号"/>
        <el-table-column  prop="sex" align="center"  header-align="center"  label="性别">
          <template scope="scope">
            <el-tag type="success" v-if="scope.row.sex=== 0"> 男</el-tag>
            <el-tag type="danger" v-if="scope.row.sex=== 1"> 女</el-tag>
          </template>
        </el-table-column>
        <el-table-column  prop="createTime" align="center"  header-align="center"  label="创建时间" :formatter="formatTime"/>
        <el-table-column  prop="isLock" align="center"  header-align="center" label="状态">
          <template scope="scope">
            <el-tag type="success" v-if="scope.row.isLock=== 0"> 正常</el-tag>
            <el-tag type="danger" v-if="scope.row.isLock=== 1"> 锁定</el-tag>
          </template>
        </el-table-column>

       <!-- <el-table-column v-for="{prop,label,sortable} in cloConfig"  :key="prop" :label="label" :prop="prop" :sortable="sortable">
        </el-table-column>-->
      </el-table>

      <pagination :currentPage="this.queryParams.page" :total="total" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination>
      <add-form :visable="addVisable" @handleAddHide="handleAddHide"   @getUserList="getUserList"></add-form>
      <edit-form v-if="editViasble" :userId="userId" :visable="editViasble" @handleEditHide="handleEditHide" @getUserList="getUserList" ></edit-form>
    </div>
  </el-card>
</template>

<script>
    import SearchFrom from '@/components/SearchForm/Form.vue'
    import Pagination from '@/components/pagination'
    import {queryUserList,getMenuList,deleteUser} from '@/api/user'
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
              userName:''
            },
            addVisable:false,
            editViasble:false,
            total:0,
            userId:'',
            loading:false,
            batchSelect:[],
            //菜单栏
            menuGroup:{
              inline:true,
              items: [{
                type:"input",
                label:"姓名",
                name:"userName",
                value:""
              },{
                type:"button",
                label:"查询",
                method:this.query,
                icon:"el-icon-search"
              },{
                type:"button",
                label:"添加",
                method:this.add,
                icon:"el-icon-plus"
              },{
                type:"button",
                label:"修改",
                method:this.edit,
                icon:"el-icon-edit"
              },{
                type:"button",
                label:"删除",
                method:this.delete,
                icon:"el-icon-delete"
              }]
            },
            //表格列配置
            cloConfig:[
              {
              prop:"userName",
              label:"账号"
            },{
              prop:"nickName",
              label:"用户名"
            },{
              prop:"phone",
              label:"手机号"
            },{
              prop:"sex",
              label:"性别",
              //formatter:formatSex
            },{
              prop:"createTime",
              label:"创建时间"
            },{
               prop:"isLock",
               label:"状态"
            }],

            newDialogVisible:false,
            tableData:[]
          }
        },
        components:{
          SearchFrom,Pagination,AddForm,EditForm
        },
        created() {
          this.getUserList();//this.currentPage,this.pageSize,""
        },
        methods:{
          //日期格式化
          formatTime(row, column){
            let date = row[column.property];
            if (date == undefined) {
              return "";
            }
            return moment(date).format("YYYY-MM-DD HH:mm:ss");
          },
          getUserList(){
            this.loading=true
            queryUserList(this.queryParams).then((response)=>{
              this.loading = false
              let data=response.data
              if(data.code==200){
                this.tableData=data.rows
                this.total=data.total
              }
            }).catch(error=>{
              console.log(error)
            })
          },
          //过滤查询
          query(){
            let that =this
            this.menuGroup.items.forEach(function (item) {
              that.queryParams[item.name]=item.value
            })
            this.queryParams.page=1
            this.getUserList()
          },
          add(){
            this.addVisable=true
          },
          handleAddHide(){
            this.addVisable=false
          },
          edit(){
            const userList=this.batchSelect
            if (preValid(userList)){
               let user=userList[0]
               this.editViasble=true
               this.userId=user.userId

            }
          },
          handleEditHide(){
            this.editViasble=false
          },
          delete(){
            const userList=this.batchSelect
            let userIds=[]
            userList.forEach((user)=>{
              const userId=user.userId
              userIds.push(userId)
            })

            this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(()=>{
              deleteUser(userIds.join(",")).then((response)=>{
                let data=response.data
                if(data.code==200){
                  this.$message({
                    showClose: true,
                    message : '删除成功',
                    type : 'success'
                  })
                  this.getUserList()
                }

              }).catch(error=>{
                console.log(error)
              })
            })


          },
          //批量选择
          handleSelectionChange(val){
            this.batchSelect=val
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
