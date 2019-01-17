
const app={
  state:{
    sidebarIsOpen:false,
    newDialogVisible:false
  },
  mutations:{
    //更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
    alterSideBar:state => {state.sidebarIsOpen=!state.sidebarIsOpen},
    alterDialogVisible:(state,visable)=>{state.newDialogVisible=visable}
  },
  actions:{
    alterSideBarAction({commit}){
        commit("alterSideBar")
    },
    alterDialogVisible({commit},visable){
      commit("alterDialogVisible",visable)
    }
  }
}

export default app
