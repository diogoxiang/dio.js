<template>
  <el-option-group :label="label"
                   :disabled="disabled"
                   class="ui-option-group">
    <slot></slot>
  </el-option-group>
</template>

<script>
import { OptionGroup } from 'element-ui'

export default {
  name: 'vOptionGroup',
  components: {
    [OptionGroup.name]: OptionGroup
  },
  props: {
    // 分组的标签
    label: [String, Number],
    // 是否禁用整个组
    disabled: Boolean
  }
}
</script>
