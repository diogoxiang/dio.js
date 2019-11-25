<template>
  <el-collapse-item class="ui-collapse-item"
                    :title="title"
                    :name="name"
                    :disabled="disabled">
    <template slot="title">
      <slot name="title"></slot>
    </template>
    <slot></slot>
  </el-collapse-item>
</template>

<script>
import { CollapseItem } from 'element-ui'

export default {
  components: {
    [CollapseItem.name]: CollapseItem
  },
  props: {
    title: String, // 面板标题
    name: [String, Number], // 唯一标志符
    disabled: Boolean // 是否禁用
  }
}
</script>

<style lang="scss" scoped>
.ui-collapse-item {
  /deep/.el-collapse-item__wrap {
    border-bottom: 0 none;
  }
  /deep/.el-collapse-item__header {
    padding-left: 10px;
  }
  /deep/.el-collapse-item__content {
    border: 1px solid #f2f2f2;
    box-shadow: 0px 0px 6px 0px rgba(191, 196, 205, 0.4);
    padding: 10px;
  }
  /deep/.el-collapse-item__arrow {
    margin: 0 0 0 10px;
  }
}
</style>
