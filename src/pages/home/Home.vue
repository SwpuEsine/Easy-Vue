<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <app-main/>
      <app-footer/>
    </div>
  </div>
</template>



<script>
    import Sidebar from "../layout/components/Sidebar"
    import Navbar from "../layout/components/Navbar"
    import AppMain from "../layout/components/AppMain"
    import AppFooter from "../layout/components/AppFooter"
    export default {
        components:{
          Sidebar,
          Navbar,
          AppMain,
          AppFooter
        },
        name: "home",
        data() {
          return {

          };
        },
        computed:{
          sidebarIsOpen() {
            return this.$store.state.app.sidebarIsOpen
          },
          classObj() {
            return {
              hideSidebar: !this.sidebarIsOpen,
              openSidebar: this.sidebarIsOpen,
              withoutAnimation: false
            }
          }
        }
    }
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
</style>
