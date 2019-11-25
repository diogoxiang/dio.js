<template>
  <el-form-item ref="elFormItem"
                :prop="prop"
                :label="label"
                :label-width="labelWidth"
                :rules="rules"
                class="ui-form-item"
                :class="{'show-tip-icon': showIcon}">
    <template slot="label">
      <slot name="label"></slot>
    </template>
    <slot></slot>
  </el-form-item>
</template>

<script>
import { FormItem } from 'element-ui'

export default {
  name: 'vFormItem',
  components: {
    [FormItem.name]: FormItem
  },
  props: {
    // 传入 vForm 组件的 model 中的字段，在使用 vForm的校验和重置时必填
    prop: String,
    // 标签文本，也可用slot=label指定
    label: String,
    // 标签的宽度，默认取vForm的labelWidth
    labelWidth: {
      type: String,
      // default: '100%'
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    rules: [Array, Object]
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
