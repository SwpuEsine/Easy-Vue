<template>
  <el-dialog
    title="编辑"
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
 import {updateRole,getRoleInfo} from  '@/api/role'
  export default {
    name: "add-from",
    data(){
      return {
        form: {
          roleName: '',
          remark:''
        }
      }
    },
    props:{
      'roleId':Number,
      'visable':Boolean
    } ,
    methods:{
      handleSubmit(form) {
        updateRole(this.form).then((response)=>{
            this.handleClose();
            this.$message({
              showClose: true,
              message : '修改成功',
              type : 'success'
            })
            this.$emit('getRoleList')
        }).catch(error=>{
          console.log(error)
        })
      },
      handleClose(){
        this.$emit('handleEditHide')
      },
      handleReset(){
        this.$refs['form'].resetFields()
      },
      getRoleInfo(){
        const  that=this
        getRoleInfo(this.roleId).then((response)=>{
            that.form=response.data.data
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    created(){
      this.getRoleInfo()
    }
    /*computed:{
      ...mapGetters(['visable'])
    }*/
  }
</script>

<style scoped>

</style>
