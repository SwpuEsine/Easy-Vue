<template>
  <el-dialog
    title="提示"
    :visible.sync="newDialogVisible"
    width="30%" :modal="false" :show-close="false">
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
    <el-button @click="cancel">取 消</el-button>
    <el-button type="primary" @click="ok">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {

          }
        },
        props:{
          newDialogVisible:Boolean
        },
        methods:{
          cancel(){
            this.$emit('cancel')
          },
          ok(){
            this.$emit('cancel')
          }
        }
    }
</script>

<style scoped>

</style>
