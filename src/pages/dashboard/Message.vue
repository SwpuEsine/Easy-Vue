<template>
    <div v-if="show" class="message" v-clickoutside="handleClose">
      <el-card shadow="never">
          <div slot="header">
            投
          </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <!--<div class="card-header">Messages</div>
    <div class="card-body">

      <div class="media pb-1 mb-3">
        <img src="/products/appwork/v121/assets_/img/avatars/6-small.png" class="d-block ui-w-40 rounded-circle" alt>
        <div class="media-body ml-3">
          <div class="mb-1">
            <strong class="font-weight-semibold">Mae Gibson</strong>
            &nbsp;
            <small class="text-muted">58m ago</small>
          </div>
          <a href="#" class="text-dark">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
        </div>
      </div>

      <div class="media pb-1 mb-3">
        <img src="/products/appwork/v121/assets_/img/avatars/4-small.png" class="d-block ui-w-40 rounded-circle" alt>
        <div class="media-body ml-3">
          <div class="mb-1">
            <strong class="font-weight-semibold">Kenneth Frazier</strong>
            &nbsp;
            <small class="text-muted">1h ago</small>
          </div>
          <a href="#" class="text-dark">Mea et legere fuisset, ius amet purto luptatum te.</a>
        </div>
      </div>

      <div class="media pb-1 mb-3">
        <img src="/products/appwork/v121/assets_/img/avatars/5-small.png" class="d-block ui-w-40 rounded-circle" alt>
        <div class="media-body ml-3">
          <div class="mb-1">
            <strong class="font-weight-semibold">Nelle Maxwell</strong>
            &nbsp;
            <small class="text-muted">2h ago</small>
          </div>
          <a href="#" class="text-dark">Sit meis deleniti eu, pri vidit meliore docendi ut.</a>
        </div>
      </div>

      <div class="media">
        <img src="/products/appwork/v121/assets_/img/avatars/1-small.png" class="d-block ui-w-40 rounded-circle" alt>
        <div class="media-body ml-3">
          <div class="mb-1">
            <strong class="font-weight-semibold">Mike Greene</strong>
            &nbsp;
            <small class="text-muted">1d ago</small>
          </div>
          <a href="#" class="text-dark">Lorem ipsum dolor sit amet, vis erat denique in.</a>
        </div>
      </div>

    </div>
    <div class="card-footer">
      <button type="button" class="btn btn-default btn-block md-btn-flat">Show all</button>
    </div>-->

</template>

<script>
  const clickoutside = {
    // 初始化指令
    bind(el, binding, vnode) {
      function documentHandler(e) {
        // 这里判断点击的元素是否是本身，是本身，则返回
        if (el.contains(e.target)) {
          return false;
        }
        // 判断指令中是否绑定了函数
        if (binding.expression) {
          // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
          binding.value(e);
        }
      }
      // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
      el.__vueClickOutside__ = documentHandler;
      document.addEventListener('click', documentHandler);
    },
    update() {},
    unbind(el, binding) {
      // 解除事件监听
      document.removeEventListener('click', el.__vueClickOutside__);
      delete el.__vueClickOutside__;
    },
  };

    import ElCard from "element-ui/packages/card/src/main";

    export default {
      components: {ElCard},
      name: "message",
      props:['show'],
      directives: {clickoutside},
      methods: {
        handleClose(e) {
          this.$emit('handleClose')
        },
      },
    }
</script>

<style lang="scss" scoped>
  //chrome 不支持  要加webkit
  @-webkit-keyframes dropdownAnimation {
    0% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0)
    }

    80% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }

    100% {
      opacity: 1
    }
  }
  // ie等等支持
  @keyframes dropdownAnimation {
    0% {
      opacity: 0;
      -webkit-transform: scale(0);
      transform: scale(0)
    }

    80% {
      -webkit-transform: scale(1);
      transform: scale(1)
    }

    100% {
      opacity: 1
    }
  }

  .message{
    //display: none;
    z-index: 1000;
    position: absolute;
    width: 22rem;
    overflow: hidden;
    right: 160px;
    /*top: 50%;
    right: 50%;*/
    margin-top: -4px;
    transform-origin: top right;
    animation: dropdownAnimation .25s;
    font-size: .894rem;
    color: #4E5155;
    background-color: #fff;
    border: 0px solid rgba(24,28,33,0.15);
    border-radius: .125rem;
  }
  .active{
    display: block;
  }
</style>
