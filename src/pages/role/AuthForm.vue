<template>
  <el-dialog
    title="权限控制"
    :visible="visable"
    width="30%" :modal="false" :before-close="handleClose">
    <el-tree default-expand-all
      :data="data"
      show-checkbox
      node-key="id"
      :default-checked-keys="checkedKeys"
      :props="defaultProps"  ref="tree" highlight-current :render-content="renderContent">
    </el-tree>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleReset">重 置</el-button>
      <el-button type="primary" @click="handleSubmit('form')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
    import {getRoleResoureIds,setRoleAuthorities,queryMenuList} from '@/api/role'

    export default {
        name: "auth-form",
        props:['visable','roleId'],
        data(){
          return {
            checkedKeys:[],
            data: [/*{
              id: 1,
              name: '系统管理',
              isMenu:true,
              children: [{
                id: 4,
                name: '用户管理',
                isMenu:true,
                children: [{
                  id: 9,
                  name: '用户删除',
                  isMenu:false
                }, {
                  id: 10,
                  name: '用户修改',
                  isMenu:false
                }]
              }]
            }*/],
            defaultProps: {
              children: 'children',
              label: 'name'
            }
          }

        },
        created(){
          this.getAuthorities()
        },
        methods:{
          handleSubmit(){
            //false 是否只包含叶子节点    //true 是否包含半选状态节点

            let halfTreeKeys = this.$refs.tree.getHalfCheckedKeys()
            console.log(halfTreeKeys)
            let treeKeys = this.$refs.tree.getCheckedKeys()
            setRoleAuthorities(this.roleId,halfTreeKeys.concat(treeKeys)).then(response=>{
              this.handleClose();
              this.$message({
                showClose: true,
                message : '权限设置成功',
                type : 'success'
              })
            }).catch(error=>{
              console.log(error)
            })
          },
          getAuthorities(){
            let that=this;
            getRoleResoureIds(this.roleId).then(response=>{
              that.checkedKeys=response.data.data
            }).catch(error=>{
              console.log(error)
            })
            console.log(this.checkedKeys)
            queryMenuList().then(response=>{
              this.data=response.data.data
            }).catch(error=>{
              console.log(error)
            })
          },
          renderContent(h, { node, data, store }) {
            return (
              <span class="custom-tree-node">
                {this.iconClass(data.isMenu)}
              <span style="margin-left:5px;">{node.label}</span>
              </span>
            )
          },
          iconClass(isMenu){
            if(isMenu){
              return <i v-else class="el-icon-menu"></i>
            }else{
              return <i class="el-icon-document"></i>
            }

          },
          handleClose(){
              this.$emit('handleAuthHide')
          },
          handleReset(){
            this.$refs.tree.setCheckedKeys([]);
          }
        }
    }
</script>

<style scoped>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
