<template>
  <el-tab-pane :label="label"
               :disabled="disabled"
               :name="name">
    <slot :name="name"></slot>
  </el-tab-pane>
</template>

<script>
import { TabPane } from 'element-ui'

export default {
  components: {
    [TabPane.name]: TabPane
  },
  props: {
    name: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    label: {
      type: String
    }
  }
}
</script>
