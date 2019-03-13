<template>
  <el-card shadow="never">
    <div class="role">
      <search-from :menuGroup="menuGroup" ></search-from>

      <el-table v-loading="loading" class="role-table" size="medium"
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"  @selection-change="handleSelectionChange" border>
        <el-table-column
          type="selection">
        </el-table-column>
        <el-table-column type="index" label="序号">
        </el-table-column>
        <el-table-column v-for="{prop,label,sortable} in cloConfig"  :key="prop" :label="label" :prop="prop" :sortable="sortable">
        </el-table-column>
      </el-table>

      <pagination :currentPage="currentPage" :total="total" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></pagination>
      <add-form @queryUserList="queryUserList"></add-form>
      <edit-form @queryUserList="queryUserList" :from="editModel"></edit-form>
    </div>
  </el-card>
</template>

<script>
    import SearchFrom from '@/components/SearchForm/Form.vue'
    import Pagination from '@/components/pagination'
    import AddForm from './AddForm'
    import EditForm from './EditForm'
    import {preValid} from '@/utils/validate'
    export default {
        name: "index",
        data(){
          return {
            currentPage:1,
            total:0,
            pageSize:20,
            loading:false,
            batchSelect:[],
            editModel:{},
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
                icon:"el-icon-search"
              },{
                type:"button",
                label:"修改",
                method:this.edit,
                icon:"el-icon-search"
              },{
                type:"button",
                label:"删除",
                method:this.delete,
                icon:"el-icon-search"
              }]
            },
            //表格列配置
            cloConfig:[{
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
            tableData:[],
            multipleSelection: []
          }
        },
        components:{
          SearchFrom,Pagination,AddForm,EditForm
        },
        created() {
          this.queryUserList(this.currentPage,this.pageSize,"");
        },
        methods:{
          formatStatus(row, column){
            return row.sex==0?'<el-tag :type="primary">正常</el-tag>':'<el-tag :type="danger">锁定</el-tag>'
          },
          formatSex(row, column){
            return row.sex==0?'<el-tag :type="primary">男</el-tag>':'<el-tag :type="danger">女</el-tag>'
          },
          query(){
            const params={}
            this.menuGroup.items.forEach(function (item) {
              params[item.name]=item.value
            })
            this.queryUserList(1,this.pageSize,params['userName'])
            this.currentPage=1
          },
          add(){
            this.$store.dispatch('alterDialogVisible', true)
          },
          edit(){
            console.log(this.batchSelect)
            const userList=this.batchSelect
            if (preValid(userList)){
               this.editModel=userList[0]
              this.$store.dispatch('alterDialogVisible', true)
            }
          },
          delete(){
            const userList=this.batchSelect
          },
          //批量选择
          handleSelectionChange(val){
            this.batchSelect=val
          },
          handleCurrentChange(page){
            this.queryUserList(page,this.pageSize,"");
            this.currentPage=page
          },
          handleSizeChange(size){
            this.queryUserList(this.currentPage,size,"");
            this.pageSize=size
          },
          queryUserList(currentpage,limit,userName){
              const payload={page:currentpage==''?this.currentPage:currentpage,limit:limit==''?this.limit:limit,userName:userName}
              this.$store.dispatch('queryUserList', payload).then((data) => {
                this.loading = false
                if(data.code==200){
                  console.log(data)
                  this.tableData=data.rows
                  this.total=data.total
                }else {
                  this.$notify.error({
                    title: '错误',
                    message: data.msg
                  });
                }
              }).catch((error) => {
                console.log(error)
                this.loading = false
              })
          }

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
