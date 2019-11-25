<template>
  <el-form ref="elForm"
           class="ui-form"
           :disabled="disabled"
           :model="model"
           :rules="rules"
           :inline="inline"
           :label-position="labelPosition"
           :label-width="inline ? labelWidth : '100%'">
    <slot></slot>
  </el-form>
</template>

<script>
import { Form } from 'element-ui'

export default {
  name: 'vForm',
  components: {
    [Form.name]: Form
  },
  props: {
    // 是否禁用表单
    disabled: Boolean,
    // 表单数据对象
    model: Object,
    // 表单验证规则
    rules: Object,
    // 行内表单模式
    inline: Boolean,
    /**
     * 表单域标签的位置，可取值：
     * right(默认)  - 右对齐
     * left     - 左对齐
     * top      - 顶部对齐
     */
    labelPosition: String,
    // 表单域标签的宽度
    labelWidth: {
      type: String,
      default: '100px'
    }
  },
  methods: {
    validate () {
      return this.$refs.elForm.validate()
    },
    clearValidate () {
      return this.$refs.elForm.clearValidate()
    },
    validateField (prop, cb) {
      return this.$refs.elForm.validateField(prop, cb)
    },
    resetFields () {
      return this.$refs.elForm.resetFields()
    },
    onValidate (prop, a, b) {
      console.log('onValidate', prop, a, b)
    }
  }
}
</script>

<style lang="scss" scoped>
  .ui-form.el-form {
    /deep/.ui-form-item.el-form-item {
      margin-bottom: 14px;
      .el-form-item__label {
        // display: block;
        color: #333333;
        font-size: 14px;
        text-align: left;
        padding-right: 5px;
        &::before {
          display: none;
        }
      }
      &.is-required {
        .el-form-item__label {
          &::after {
            content: "*";
            color: #f56c6c;
            margin-left: 4px;
          }
        }
      }
      .el-form-item__content {
        line-height: 1;
        margin-left: 0 !important;
      }
    }
    &.el-form--inline {
      /deep/.el-form-item {
        margin-bottom: 5px;
        margin-right: 5px;
      }
      /deep/.el-form-item__label {
        width: auto !important;
        height: 28px;
        line-height: 28px;
      }
      /deep/.el-input__inner {
        width: 120px !important;
        padding: 0 2px 0 5px;
      }
      /deep/.ui-date-picker {
        width: 200px !important;
      }
      /deep/.el-date-editor--datetimerange {
        width: 330px !important;
        .el-range-input {
          width: 42%;
        }
        .el-range__close-icon {
          display: none;
        }
      }
    }
  }
</style>