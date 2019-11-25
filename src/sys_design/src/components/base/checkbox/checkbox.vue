<template>
  <el-checkbox :disabled="disabled"
               :label="label"
               :value="value"
               class="ui-checkbox"
               @input="onInput"
               @change="onChange">
    <slot></slot>
  </el-checkbox>
</template>

<script>
import { Checkbox } from 'element-ui'

export default {
  name: 'vCheckbox',
  components: {
    [Checkbox.name]: Checkbox
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

<style lang="scss" rel="stylesheet/scss">
.ui-checkbox.el-checkbox + .ui-checkbox.el-checkbox {
  margin-left: 0;
}
.ui-checkbox.el-checkbox {
  margin-right: 45px;
  .el-checkbox__label {
    font-size: 14px;
    color: $fontColor;
  }
  .el-checkbox__inner {
    width: 14px;
    height: 14px;
    cursor: pointer;
    border: 2px solid $mainColor;
    border-radius: 0;
    transition-duration: 0s;
  }
  &.is-checked .el-checkbox__inner {
    background-color: #fff;
    &:after {
      border: 2px solid $mainColor;
      border-left: 0 none;
      border-top: 0 none;
      left: 3px;
      top: 1px;
      width: 2px;
      height: 5px;
    }
  }
}
</style>
