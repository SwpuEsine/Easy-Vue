<template>
  <el-dialog
    title="编辑"
    :visible="visable"
     width="30%" :modal="false" :show-close="false">
 <!--   ref="form"-->
    <el-form label-suffix=":" ref="form" :model="form" label-width="100px" v-loading="loading">
      <el-form-item label="权限名称">
        <el-input v-model="form.menu.resourceName"></el-input>
      </el-form-item>
      <el-form-item label="菜单url">
        <el-input v-model="form.menu.path"></el-input>
      </el-form-item>
      <el-form-item label="菜单图标" >
        <el-input v-model="form.menu.iconName"></el-input>
      </el-form-item>
      <el-form-item label="是否为菜单">
        <el-radio-group v-model="form.menu.isMenu">
          <el-radio   :label="true">是</el-radio>
          <el-radio   :label="false">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="同级序号">
        <el-input v-model="form.menu.order"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单">
        <el-select  filterable v-model="form.menu.parentId" clearable placeholder="请选择">
          <el-option
            v-for="item in form.menuList"
            :key="item.resourceId"
            :label="item.resourceName"
            :value="item.resourceId">
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
 import {queryMenuList,queryMenuInfo,updateMenu} from '@/api/menu'
  export default {
    name: "edit-from",
    data(){
      return {
        loading:false,
        form:{
          menu:{
            resourceName: '',
            path:'',
            iconName:'',
            isMenu:'',
            order:0,
            parentId:''
          },
          menuList:[]
        }
      }
    },
    props:{
      'resourceId':Number,
      'visable':Boolean
    } ,
    methods:{
      handleSubmit(form) {
          updateMenu(this.form.menu).then((response)=>{
              this.handleHide();
              this.$message({
                showClose: true,
                message : '修改成功',
                type : 'success'
              })
              this.$emit('getMenus')
          }).catch(error=>{
            console.log(error)
          })
      },
      handleHide(){
        this.$emit('handleEditHide')
      },
      getMenuInfo(){
        this.loading=true
        queryMenuInfo(this.resourceId).then(response=>{
          let data=response.data
          if(data.code==200){
            let form=data.data
            if(form.menu.parentId===-1){
              form.menu.parentId=''
            }
            this.form=form
          }
        }).catch(error=>{
          console.log(error)
        })
        this.loading=false

      }
    },
    created(){
      this.getMenuInfo()
    }
  }
</script>

<style scoped>

</style>
