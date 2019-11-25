<template>
  <el-dropdown class="ui-dropdown"
               :split-button="false"
               :placement="placement"
               :hide-on-click="hideOnClick"
               :show-timeout="showTimeout"
               :hide-timeout="hideTimeout"
               :trigger="trigger"
               @command="onCommand">
    <slot></slot>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item, index) in dropList"
                        :key="index"
                        :command="item.command"
                        :class="{'is-selected': showSelected && item.command === currentCommand}"
                        :disabled="item.disabled || false"
                        :divided="item.divided || false"
                        :icon="item.icon || ''">{{item.text}}</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'

export default {
  name: 'vDropdown',
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownMenu.name]: DropdownMenu,
    [DropdownItem.name]: DropdownItem
  },
  props: {
    // 下拉菜单列表
    dropList: Array,
    // 当前选中的下拉菜单对应的command
    currentCommand: [Number, String, Boolean],
    // 是否展示选中状态
    showSelected: {
      type: Boolean,
      default: true
    },
    // 触发方式
    trigger: {
      type: String,
      default: 'click'
    },
    // 菜单弹出的位置
    placement: String,
    // 是否在点击菜单项后隐藏
    hideOnClick: {
      type: Boolean,
      default: true
    },
    // 展开下拉菜单的延时（仅在 trigger 为 hover 时有效）
    showTimeout: {
      type: Number,
      default: 150
    },
    // 收起下拉菜单的延时（仅在 trigger 为 hover 时有效)
    hideTimeout: {
      type: Number,
      default: 100
    }
  },
  methods: {
    // 点击菜单项的回调
    onCommand (_command) {
      this.$emit('command', _command)
    }
  }
}
</script>

<style lang="scss" scoped>
// .ui-dropdown {
//     vertical-align: middle;
// }
// 下拉菜单样式
.el-dropdown-menu {
  border-color: #e2edff;
  border-radius: 0;
  margin-top: 6px;
  box-shadow: 0px 4px 4px 0px rgba(177, 177, 177, 0.2);
  .el-dropdown-menu__item {
    padding: 0 30px 0 40px;
    &.is-selected {
      color: $mainColor;
      position: relative;
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        border: 2px solid $mainColor;
        border-left: 0 none;
        border-top: 0 none;
        left: 20px;
        top: 10px;
        width: 5px;
        height: 10px;
        transform: rotate(45deg);
      }
    }
  }
  .el-dropdown-menu__item:focus,
  .el-dropdown-menu__item:not(.is-disabled):hover {
    color: $mainColor;
    background: #fff;
  }
}
</style>
