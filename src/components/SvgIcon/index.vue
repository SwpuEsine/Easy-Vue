<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="`#iconfont-${name}`"/>
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      name: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      svgClass () {
        if (this.className) {
          return 'svg-icon ' + this.className
        } else {
          return 'svg-icon'
        }
      },
    },
  }
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
