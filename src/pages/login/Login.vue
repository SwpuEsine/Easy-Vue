<template>
  <div class="sys-app">
    <div class="sys-login">
      <div class="em-index__login">
        <!--<img src="@/assets/image/easy-mock.png" alt="怎么回事"/>-->
        <h1>Easy Vue</h1>
        <!--<p>但，不仅于此</p>-->
        <!--<el-button :loading="loading" type="success" style="width:100%;margin-bottom:30px;height: 45px;background-color: #19be6b;" @click.native.prevent="handleLogin">登录</el-button>
-->   </div>

      <div class="login-box">
        <el-row>
          <el-col>
            <el-button :loading="loading" type="success" style="width:100%;height: 45px;background-color: #19be6b;" @click.native.prevent="handleLogin">登录</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-input id="name" v-model="user.userName" placeholder="请输入帐号">
              <template slot="prepend">帐号</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-input id="password" v-model="user.passWord" type="password" placeholder="请输入密码">
              <template slot="prepend">密码</template>
            </el-input>
          </el-col>
        </el-row>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            loading:false,
            user:{
              userName:'',
              passWord:''
            }/*,
            rules: {
              name: [
                { required: true, message: '请输入活动名称', trigger: 'blur' },
                { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              region: [
                { required: true, message: '请选择活动区域', trigger: 'change' }
              ],
              date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
              ],
              date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
              ],
              type: [
                { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
              ],
              resource: [
                { required: true, message: '请选择活动资源', trigger: 'change' }
              ],
              desc: [
                { required: true, message: '请填写活动形式', trigger: 'blur' }
              ]
            }*/
          }
        },
        methods:{
          handleLogin(){
            const name = this.user.userName;
            const password = this.user.passWord;
            if(name == '' || password == ''){
              //消息弹窗
              /*this.$message({
                showClose: true,
                message : '账号或密码为空！',
                type : 'error'
              })*/
              //通知
              this.$notify.error({
                title: '错误',
                message: '账号或密码为空！'
              });
              return false
            }else {
              this.loading = true
              // dispatch：含有异步操作，例如向后台提交数据 接着我们继续延伸约定，
              // 组件不允许直接修改属于 store 实例的 state，
              // 而应执行 action 来分发 (dispatch) 事件通知 store 去改变
              //你需要明白 store.dispatch 可以处理被触发的 action 的处理函数返回的 Promise
              this.$store.dispatch('LoginByUsername', this.user).then((data) => {
                this.loading = false
                if(data.code==200){
                  this.$router.push({name:'home'})
                }
              }).catch(error=>{
                this.loading=false
              })
            }
          }
        }
    }
</script>

<style  type="scss" scoped>
  .sys-app{
    position: relative;
    width: 100%;
    height: 100%;
    background: url("https://images.unsplash.com/photo-1519109798364-ba17c14731df?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjExOTUwfQ&s=6f8e5d4ab29401278d004f6a137b4545?w=2200") 50% 50% / cover;
  }

  .sys-app:before{
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: rgba(0,0,0,.3);
    -webkit-transition: all .5s;
    transition: all .5s;
  }

  .sys-login{
    width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 7;
    text-align: center;
    margin-left: -150px;
    margin-top: -165px;
    font-size: 17px;
    font-weight: 700;
  }
  .em-index__login{

  }

  .login-box {
    margin-top:20%;
  }


.el-row {
  margin-bottom: 20px;
&:last-child {
   margin-bottom: 0;
 }
}

img {
  border-style: none;
}
.em-index__login img{
  width: 230px;
  margin-bottom: 15px;
}

p,h1{
  color: #fff;
}

</style>
