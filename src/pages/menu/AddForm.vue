<template>
  <el-dialog
    title="添加"
    :visible="visable"
    width="30%" :modal="false" :show-close="false">
    <el-form label-suffix=":" ref="form" :model="form" label-width="100px">
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
  import {queryMenuSelectList,addMenu} from '@/api/menu'
  export default {
    name: "add-from",
    props:['visable'],
    data(){
      return {
        form:{
          menu:{
            resourceName: '',
            path:'',
            iconName:'',
            isMenu:'',
            order:'',
            parentId:''
          },
          menuList:[]
        }
      }
    },
    methods:{
      handleSubmit(form){
        addMenu(this.form.menu).then((response)=>{
          this.handleHide();
            this.$message({
              showClose: true,
              message : '添加成功',
              type : 'success'
            })
            this.$refs[form].resetFields()
            this.$emit('getMenus')
        }).catch(error=>{
          console.log(error)
        })
      },
      handleHide(){
        this.$emit('handleAddHide')
      },
      getMenuList(){
        const that=this
        queryMenuSelectList().then((response)=>{
            const data=response.data
            this.form.menuList=data.data
            console.log(this.form)
        }).catch(error=>{
          console.log(error)
        })
      }
    },
    /*computed:{
      ...mapGetters(['visable'])
    },*/
    created(){
      this.getMenuList()
    }
  }
</script>

<style scoped>

</style>
