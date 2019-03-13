<template>
  <el-dialog
    title="编辑"
    :visible="visable"
    width="40%" :modal="false" :show-close="false">
 <!--   ref="form"-->
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="用户名" prop="user.userName">
        <el-input v-model="form.user.userName"></el-input>
      </el-form-item>
     <!-- <el-form-item label="密码">
        <el-input v-model="form.user.passWord"></el-input>
      </el-form-item>-->
      <el-form-item label="手机号" prop="user.phone">
        <el-input v-model="form.user.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮件" prop="user.email">
        <el-input v-model="form.user.email"></el-input>
      </el-form-item>
      <el-form-item label="昵称">
        <el-input v-model="form.user.nikeName"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.user.sex">
          <el-radio  border :label="0">男</el-radio>
          <el-radio  border :label="1">女</el-radio>
        </el-radio-group>
        <!--label="男"-->
      </el-form-item>

      <el-form-item label="角色" prop="rolesList">
        <el-select  filterable v-model="form.rolesList" multiple placeholder="请选择">
          <el-option
            v-for="item in roles"
            :key="item.roleId"
            :label="item.remark"
            :value="item.roleId">
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleHide">取 消</el-button>
      <el-button type="primary" @click="handleSubmit('form')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
 /* import { mapGetters } from 'vuex'*/
 import {getUserRoleInfo,updateUser} from  '@/api/user'
  export default {
    name: "add-from",
    data(){
      return {
        roles:[],
        form:{
          user:{
            userName: '',
            phone:'',
            email:'',
            nikeName:'',
            sex:0
          },
          rolesList:[]
        }
        ,rules:{
            user:{
              userName:[
                {required:true,message:'用户名不能为空',trigger:blur},
                { min: 1, max: 8, message: '长度在 3 到 5 个字符', trigger: 'blur' }
              ],
              email:[
                { type: 'email',//要检验的类型（number，email，date等）
                  message: '请输入正确的邮箱地址',
                  trigger: ['blur', 'change'], //hange为检验的字符变化的时候
                  required:true
                }
              ],
              phone:[
                {
                  required: true,
                  pattern: /^1[34578]\d{9}$/,//可以写正则表达式
                  message: '目前只支持中国大陆的手机号码',
                  trigger: 'blur'
                }
              ]
            },
            rolesList:[
              { type:'array',required: true, message: '请至少选择一个角色', trigger: 'blur'}
            ],

        }

      }
    },
    props:{
      'userId':Number,
      'visable':Boolean
    } ,
    methods:{
      handleSubmit(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            updateUser(this.form).then((response)=>{
              this.handleHide();
              let data=response.data
              if(data.code==200){
                this.$message({
                  showClose: true,
                  message : '修改成功',
                  type : 'success'
                })
                this.$emit('getUserList')
              }
            }).catch(error=>{
              console.log(error)
            })
          } else {
            return false;
          }
        });

      },
      handleHide(){
        this.$emit('handleEditHide')
      },
      getUserInfo(){
        const  that=this
        getUserRoleInfo(this.userId).then((response)=>{
          const data=response.data
          if(data.code==200){
            that.roles=data.roles
            that.form=data.form
          }
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    created(){
      this.getUserInfo()
    }
    /*computed:{
      ...mapGetters(['visable'])
    }*/
  }
</script>

<style scoped>

</style>
