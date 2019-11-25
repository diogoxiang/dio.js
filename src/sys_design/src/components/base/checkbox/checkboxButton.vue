<template>
  <el-checkbox-button :disabled="disabled"
                      :label="label"
                      :value="value"
                      class="ui-checkbox-button"
                      @input="onInput"
                      @change="onChange">
    <slot></slot>
  </el-checkbox-button>
</template>

<script>
import { CheckboxButton } from 'element-ui'

export default {
  name: 'vCheckboxButton',
  components: {
    [CheckboxButton.name]: CheckboxButton
  },
  props: {
    // 是否禁用
    disabled: Boolean,
    // 选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）
    label: [String, Number, Boolean],
    // 值
    value: Boolean
  },
  methods: {
    onInput (v) {
      this.$emit('input', v)
    },
    onChange (v, e) {
      this.$emit('change', v, e)
    }
  }
}
</script>
