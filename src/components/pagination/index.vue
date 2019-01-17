<template>
  <div class="commonPagination">
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total=total>
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
          return {
            pageSizes:[20, 100, 150, 200]
          }
        },
        props:['currentPage','total','pageSize'],
        methods:{
          //当前页改变
          handleCurrentChange(index){
            this.$emit('handleCurrentChange',index)
          },
          handleSizeChange(size){
            this.$emit('handleSizeChange',size)
          }
        }
    }
</script>

<style lang="scss" scoped>
  .commonPagination{
    //padding-left: 60%;
    text-align: center;
  }
</style>
