const getter={
  name:state=>state.user.name,
  isSidebarActive:state=>state.app.sidebarIsOpen,
  visable: state => state.app.newDialogVisible,
  token: state => state.user.token,
}
export default getter
