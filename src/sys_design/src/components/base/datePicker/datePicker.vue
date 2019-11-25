<template>
  <el-date-picker class="ui-date-picker"
                  :style="{'width': width}"
                  :value="value"
                  :type="type"
                  :placeholder="placeholder"
                  :disabled="disabled"
                  :editable="editable"
                  :clearable="clearable"
                  :start-placeholder="startPlaceholder"
                  :end-placeholder="endPlaceholder"
                  :popper-class="popperClass"
                  :range-separator="rangeSeparator"
                  :value-format="valueFormat"
                  :format="format"
                  :size="size"
                  :picker-options="pickerOptions"
                  @input="onInput"
                  @change="onChange">
  </el-date-picker>
</template>

<script>
import { DatePicker } from 'element-ui'
export default {
  name: 'vDatePicker',
  components: {
    [DatePicker.name]: DatePicker
  },
  props: {
    // 双向绑定的值
    value: [String, Array, Date],
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 类型
    type: {
      type: String,
      default: 'date'
    },
    placeholder: String, // 占位符
    disabled: Boolean, // 是否禁用
    editable: Boolean, // 输入框是否可输入
    clearable: {
      type: Boolean,
      default: false
    }, // 是否可清空
    size: String, // 尺寸
    startPlaceholder: String, // 范围选择时开始日期的占位内容
    endPlaceholder: String, // 范围选择时结束日期的占位内容
    rangeSeparator: String, // 时间范围分隔符
    popperClass: {
      type: String,
      default: 'ui-timePicker-popper'
    }, // 下拉框类名
    valueFormat: {
      type: String,
      default: 'yyyy-MM-dd'
    }, // 绑定值的格式 yyyy-MM-dd HH:mm:ss
    pickerOptions: {
      type: Object,
      default () {
        return {}
      }
    },
    format: String // 显示在输入框中的格式
  },
  methods: {
    onInput (_val) {
      this.$emit('input', _val)
    },
    onChange (_val) {
      this.$emit('change', _val)
    }
  }
}
</script>

<style lang="scss">
.el-input--prefix .el-input__inner {
  padding-left: 10px;
}
.ui-date-picker {
  position: relative;
  &.el-input__inner {
    border-radius: 0;
    border-color: $borderColor;
  }
  .el-input__prefix,
  .el-range__icon {
    position: absolute;
    right: 5px;
    top: 2px;
    color: $fontColor;
  }
  &.el-range-editor--small.el-input__inner {
    height: 28px;
    line-height: 28px;
  }
}
.el-date-range-picker {
  width: 520px;
}
.el-picker-panel {
  .el-picker-panel__body {
    .el-picker-panel__content {
      padding: 8px;
      .el-date-range-picker__header {
        height: 20px;
        line-height: 20px;
        .el-picker-panel__icon-btn {
          margin-top: 4px;
        }
      }
    }
    .el-date-table {
      td {
        padding: 1px 0;
        div {
          padding: 1px 0;
        }
        &.start-date,
        &.end-date,
        &.current {
          span {
            border-radius: 0;
            background: $mainColor;
          }
        }
      }
    }
  }
}

.el-date-picker {
  width: 308px;
  .el-date-picker__header {
    margin: 8px 8px 0;
    height: 20px;
    line-height: 20px;
    .el-picker-panel__icon-btn {
      margin-top: 4px;
    }
  }
  .el-picker-panel__content {
    margin: 0;
  }
}

.el-time-panel {
  width: 110px;
}
</style>
