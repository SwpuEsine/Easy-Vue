<template>
  <el-dialog
    title="提示"
    :visible="visable"
    @open="handleOpen"
    @close="handleClose"
    width="30%" :modal="false" :show-close="false">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="handleHide">取 消</el-button>
    <el-button type="primary" @click="handleHide">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: "form",
    data(){
      return {
        "newDialogVisible":true
      }
    },
    methods:{
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
