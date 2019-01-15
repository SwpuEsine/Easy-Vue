<template>
    <div>
    <i class="iconfont icon-zhedie hamburger" :class="{'is-active':isActive}" @click="toggleClick"  ></i>
    </div>
</template>

<script>
export default {
  //父亲给属性  儿子给事件 v-bind 指令将 todo
  // 子类定义一个属性  然后就可以使用了  等父亲来传递就可以了
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.hamburger{
  display: inline-block;
  cursor: pointer;
  transform: rotate(0deg);
  transition: .38s;
  transform-origin: 50% 50%;
}

.hamburger.is-active {
  transform: rotate(90deg);
}
</style>
