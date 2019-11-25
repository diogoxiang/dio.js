<template>
  <el-checkbox-group :disabled="disabled"
                     :value="value"
                     :max="max"
                     :min="min"
                     class="ui-checkbox-group"
                     @input="onInput"
                     @change="onChange">
    <slot></slot>
  </el-checkbox-group>
</template>

<script>
import { CheckboxGroup } from 'element-ui'

export default {
  name: 'vCheckboxGroup',
  components: {
    [CheckboxGroup.name]: CheckboxGroup
  },
  props: {
    // 是否禁用
    disabled: Boolean,
    // 子checkbox选中的值的集合
    value: Array,
    // 允许选中的最小数量
    min: Number,
    // 允许选中的最大数量
    max: Number
  },
  methods: {
    onInput (v) {
      this.$emit('input', v)
    },
    onChange (v) {
      this.$emit('change', v)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.el-checkbox-group.ui-checkbox-group {
  width: 100%;
  display: inline-block;
}
</style>
