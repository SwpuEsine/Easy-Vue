<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
  }
}
</script>

<style scoped>
  .app-main {
    /*50 = navbar  */
    min-height: calc(100vh - 100px);
    position: relative;
    overflow: hidden;
    left: 0px;
    right: 0px;
  }
</style>

