<template>
  <el-dialog
    title="编辑"
    :visible="visable"
    width="30%" :modal="false" :before-close="handleClose">
    <el-form ref="form"  :model="form" label-width="80px">
      <el-form-item label="任务名称"   prop="roleName">
        <el-input v-model="form.jobName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="任务分组" prop="remark">
        <el-input v-model="form.jobGroup" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="任务类(权限定命名)" prop="remark">
        <el-input v-model="form.jobClass"></el-input>
      </el-form-item>
      <el-form-item label="任务描述" prop="remark">
        <el-input v-model="form.description"></el-input>
      </el-form-item>
      <el-form-item label="参数字符串" prop="remark">
        <el-input v-model="form.parameter"></el-input>
      </el-form-item>
      <el-form-item label="cron表达式" prop="remark">
        <el-input v-model="form.cronExpression"></el-input>
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
 import {updatePlan,getPlanInfo} from  '@/api/plan'
  export default {
    name: "add-from",
    data(){
      return {
        form: {
          jobName: '',
          jobGroup:'',
          jobClass:'',
          description:'',
          parameter:'',
          cronExpression:'',
          jobStatus:'1'
        }
      }
    },
    props:{
      'planId':Number,
      'visable':Boolean
    },
    methods:{
      handleSubmit(form) {
        updatePlan(this.form).then((response)=>{
            this.handleClose();
            this.$message({
              showClose: true,
              message : '修改成功',
              type : 'success'
            })
            this.$emit('getPlanList')
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
      getPlanInfo(){
        getPlanInfo(this.planId).then((response)=>{
            this.form=response.data.data
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    created(){
      this.getPlanInfo()
    }
    /*computed:{
      ...mapGetters(['visable'])
    }*/
  }
</script>

<style scoped>

</style>
