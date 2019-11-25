<template>
  <el-tabs class="ui-tabs"
           :value="value"
           :type="type"
           @input="onInput"
           @tab-click="handleClick">
    <el-tab-pane v-if="tabData.length"
                 v-for="tab in tabData"
                 :key="tab.name"
                 :label="tab.label"
                 :disabled="disabled"
                 :name="tab.name">
      <slot :name="tab.name"></slot>
    </el-tab-pane>
    <slot></slot>
  </el-tabs>
</template>

<script>
import { Tabs, TabPane } from 'element-ui'
export default {
  components: {
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane
  },
  props: {
    // 当前选中的tabs
    value: String,
    // tabPane 数据
    tabData: {
      type: Array,
      default () {
        return []
      }
    },
    // 样式
    type: {
      type: String
    },
    disabled: Boolean
  },
  methods: {
    onInput (v) {
      this.$emit('input', v)
    },
    handleClick (tab, e) {
      this.$emit('tabClick', tab, e)
    }
  }
}
</script>

<style lang="scss">
.ui-tabs.el-tabs {
  .el-tabs__header {
    .el-tabs__nav-scroll {
      padding-left: 20px;
    }
    .el-tabs__nav-wrap::after {
      height: 1px;
      background-color: #eaeaea;
    }

    .el-tabs__active-bar {
      height: 3px;
      background-color: $mainColor;
    }

    .el-tabs__item {
      color: #333;
      height: 35px;
      line-height: 35px;
      &.is-active {
        color: #333;
      }
    }
  }
}
</style>
