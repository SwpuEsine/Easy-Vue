<template>
  <el-card shadow="never">
    <iframe
      id="iframe"
      :src="url" class="table"
      frameborder="0"
      width="100%"
      :height="height"
      scrolling="auto"
      v-loading="loading"
    ></iframe>
  </el-card>
</template>

<script>
    export default {
        name: "druid-sql",
        data(){
          return {
            url:"http://localhost/druid/index",
            height:'',
            loading:true
          }
        },
        methods:{
          judgeSuccess(){
            let that = this;

            let iframe = document.getElementById("iframe");
            // ie判断
            if (iframe.attachEvent) {
              iframe.attachEvent("onload",()=> this.loading=false);
            } else {
              //其他浏览器
              iframe.onload = ()=> this.loading=false
            }
          }
        },
        mounted() {
          let height = document.documentElement.clientHeight;
          this.height = Number(height-217) + "px";
          this.judgeSuccess();
        }
    }
</script>

<style scoped>

</style>
