<template>
  <div>
    <template v-for="item in items">
    <el-submenu index="1" v-if="item.subMenus && item.subMenus.length>0" :key="item.name" :index="item.index"  >
      <template slot="title" >
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </template>
      <sidebar-item :items="item.subMenus"></sidebar-item>
    </el-submenu>
    <el-menu-item v-else  :key="item.name" :index="item.index">
      <router-link :to="item.url">
        <i class="el-icon-menu"></i>
        <span>{{item.name}}</span>
      </router-link>
    </el-menu-item>
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
  }
}
</script>
