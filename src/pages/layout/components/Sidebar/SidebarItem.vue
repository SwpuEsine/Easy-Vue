<template>
  <div>
    <template v-for="item in items">
    <el-submenu  v-if="item.subMenus && item.subMenus.length>0" :key="item.name" :index="item.index+''+getTime()"  >
      <template slot="title" >
        <svg-icon :name="item.icon"></svg-icon>
        <span slot="title">{{item.name}}</span>
      </template>
      <sidebar-item :items="item.subMenus"></sidebar-item>
    </el-submenu>

      <router-link v-else  :to="item.url">
        <el-menu-item :key="item.name" :index="item.index+ '' ">
            <svg-icon :name="item.icon"></svg-icon>
            <span>{{item.name}}</span>
        </el-menu-item>
      </router-link>
    </template>
  </div>
</template>



<script>

export default {
  name: 'SidebarItem',
  props: {
    // route object
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
  methods: {
    getTime(){
      return (new Date()).getTime()
    }
  },
  computed:{

  }
}
</script>
