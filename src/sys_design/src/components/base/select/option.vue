<template>
  <el-option :value="value"
             :label="label"
             :disabled="disabled"
             class="ui-option">
    <slot></slot>
  </el-option>
</template>

<script>
import { Option } from 'element-ui'

export default {
  name: 'vOption',
  components: {
    [Option.name]: Option
  },
  props: {
    // 选项的值
    value: [String, Number, Object],
    // 选项的标签，若不设置则默认与 value 相同
    label: [String, Number],
    // 是否禁用
    disabled: Boolean
  }
}
</script>
