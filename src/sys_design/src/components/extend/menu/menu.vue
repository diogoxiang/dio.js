<template>
  <el-menu class="ui-menu"
           :mode="'vertical'"
           :collapse="collapse"
           :router="false"
           :default-active="defaultActive"
           :unique-opened="uniqueOpened"
           :collapse-transition="true"
           @select="onSelect">
    <sub-menu :menuList="menuList"></sub-menu>
  </el-menu>
</template>

<script>
import { Menu } from 'element-ui'
import subMenu from './subMenu.vue'

export default {
  name: 'vMenu',
  components: {
    [Menu.name]: Menu,
    subMenu
  },
  props: {
    // 菜单列表
    menuList: Array,
    // 是否折叠
    collapse: Boolean,
    // 是否只保持一个子菜单展开
    uniqueOpened: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    defaultActive () {
      return this.$route.name
    }
  },
  methods: {
    // 菜单激活回调
    onSelect (idx, idxPath) {
      // console.log('页面跳转至：', idx)
      // 页面跳转
      this.$router.push({
        name: idx
      })
    }
  }
}
</script>

<style lang="scss">
.ui-menu.el-menu {
  width: 200px;
  display: inline-block;
  border-right: 0 none;
  background-color: $menuBgColor;
  &.el-menu--collapse {
    width: 60px;
    overflow: hidden;
    .el-submenu,
    .el-menu-item {
      &.is-active {
        position: relative;
        background-color: $menuHoverColor;
        &::before {
          width: 3px;
          height: 40px;
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-color: $mainColor;
        }
      }
    }
    .el-submenu__icon-arrow {
      display: none;
    }
  }
  &:not(.el-menu--collapse) .el-menu-item,
  &:not(.el-menu--collapse) .el-submenu__title {
    padding: 0 !important;
  }


  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 40px;
    position: relative;
    * {
      vertical-align: top;
    }
    &:hover {
      background-color: $menuHoverColor;
    }
    span {
      color: $menuTextColor;
      padding-left: 54px;
      display: block;
      border-left: 4px solid transparent;
    }

    .menu-icon {
      position: absolute;
      font-size: 21px;
      top: 50%;
      transform: translateY(-50%);
      left: 20px;
    }
  }

  .el-menu-item.is-active {
    span {
      border-left-color: $mainColor;
      background: $menuHoverColor;
      color: $mainColor;
    }
  }
}

// 菜单弹出框样式
.el-menu--vertical {
  border: 1px solid #f2f2f2;
  box-shadow: 0px 8px 9px 1px rgba(177, 177, 177, 0.5);
  .el-menu {
    margin: 0;
    padding: 5px 0;
    li {
      height: 40px;
      line-height: 40px;
      color: $menuTextColor;
      display: block;
      padding-left: 20px;
      opacity: 0.8;
      &.is-active {
        color: $mainColor;
      }
    }
    &.el-menu--popup {
      li:hover {
        background-color: $menuHoverColor;
      }
      li.is-active {
        background-color: $menuHoverColor;
      }
    }
  }
}
</style>
