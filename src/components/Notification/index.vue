<template>
  <a data-hover="dropdown" href="/notifications" class="notification-btn">
    <span class="menu-text">消息</span>
    <i class="iconfont icon-navigation-notification menu-icon"></i>
  </a>
</template>

<script>
  export default {
    name: "Notification",
  }
</script>

<style scoped>
  .menu-icon{
    cursor: pointer;
    font-size: 20px;
  }
  .menu-text{
    color: #333
  }
</style>
