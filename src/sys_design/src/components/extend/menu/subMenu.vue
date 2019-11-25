<template>
  <div>
    <component v-for="(item, index) in menuList"
               :key="index"
               :index="item.name"
               v-if="!item.hidden"
               :is="item.children && item.children.length ? 'elSubmenu' : 'elMenuItem'">
      <template v-if="item.children && item.children.length"
                slot="title">
        <!-- 菜单图标 -->
        <v-svg v-if="item.meta.icon"
               class="menu-icon"
               :svg="item.meta.icon + ($route.path.includes(item.path) ? 'xuanzhong' : '')"></v-svg>
        <!-- 标题 -->
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <v-submenu v-if="item.children && item.children.length"
                 :menuList="item.children"></v-submenu>
      <template v-else>
        <v-svg v-if="item.meta.icon"
               class="menu-icon"
               :svg="item.meta.icon + ($route.path.includes(item.path) ? 'xuanzhong' : '')"></v-svg>
        <span slot="title">{{item.meta.title}}</span>
      </template>

    </component>
  </div>
</template>

<script>
import { Submenu, MenuItem } from 'element-ui'

export default {
  name: 'vSubmenu',
  components: {
    [Submenu.name]: Submenu,
    [MenuItem.name]: MenuItem
  },
  props: {
    // 菜单列表
    menuList: Array
  }
}
</script>
