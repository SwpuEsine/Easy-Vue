
const app={
  state:{
    sidebarIsOpen:false
  },
  mutations:{
    alterSideBar:state => {state.sidebarIsOpen=!state.sidebarIsOpen},

  },
  actions:{
    alterSideBarAction({commit}){
        commit("alterSideBar")
    }
  }
}

export default app
