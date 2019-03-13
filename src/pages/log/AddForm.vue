<template>
  <el-dialog
    title="添加"
    :visible="visable"
    width="30%" :modal="false" :before-close="handleClose">
    <el-form ref="form"  :model="form" label-width="80px">
      <el-form-item label="角色标识"  prop="roleName">
        <el-input v-model="form.roleName"></el-input>
      </el-form-item>
      <el-form-item label="角色名称" prop="remark">
        <el-input v-model="form.remark"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleReset">重 置</el-button>
      <el-button type="primary" @click="handleSubmit('form')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
 /* import { mapGetters } from 'vuex'*/
  import {queryRoleSelectList,addRole} from '@/api/role'
 //重置必须加上Prop才可以生效
  export default {
    name: "add-from",
    props:['visable'],
    data(){
      return {
        form: {
          roleName: '',
          remark:''
        }
      }
    },
    methods:{
      handleSubmit(form){
        addRole(this.form).then((response)=>{
            this.handleClose();
            this.$message({
              showClose: true,
              message : '添加成功',
              type : 'success'
            })
            this.$emit('getRoleList')
        }).catch(error=>{
          console.log(error)
        })
      },
      handleReset(){
        this.$refs['form'].resetFields()
        //this.$emit('handleAddHide')
      },
      handleClose(){
        this.$emit('handleAddHide')
      },
      getRoleList(){
        let that=this
        queryRoleSelectList().then((response)=>{
            const data=response.data
            that.roles=data.data
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    /*computed:{
      ...mapGetters(['visable'])
    },*/
    created(){
      this.getRoleList()
    }
  }
</script>

<style scoped>

</style>
