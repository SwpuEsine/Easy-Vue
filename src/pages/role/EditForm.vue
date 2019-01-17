<template>
  <el-dialog
    title="编辑"
    :visible="visable"
    @open="handleOpen"
    @close="handleClose"
    width="40%" :modal="false" :show-close="false">

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone"></el-input>
        <!--<el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>-->
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleHide">取 消</el-button>
      <el-button type="primary" @click="handleSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "add-from",
    data(){
      return {
      }
    },
    props:['form'],
    methods:{
      handleSubmit() {
        console.log('submit!');
        this.handleHide();
        //编辑事件
        this.$emit('queryUserList')
      },
      handleOpen() {
        //没用
        //this.$store.dispatch('alterDialogVisible',true)
      },
      handleClose(){
        //this.$store.dispatch('alterDialogVisible',false)
      },
      handleHide(){
        this.$store.dispatch('alterDialogVisible', false)
      }
    },
    computed:{
      ...mapGetters(['visable'])
    }
  }
</script>

<style scoped>

</style>
