<!-- 下拉选择组件 -->
<script>
import { Select } from 'element-ui'

export default {
  name: 'vSelect',
  components: {
    [Select.name]: Select
  },
  render (h) {
    let items
    if (this.options) {
      items = this.options.map(item => {
        return h('v-option', {
          props: {
            value: item[this.optionValue],
            label: item[this.optionLabel],
            disabled: item.disabled
          }
        })
      })
    } else {
      items = this.$slots.default
    }
    return h('el-select', {
      ref: 'elSelect',
      class: 'ui-select',
      props: {
        value: this.value,
        multiple: this.multiple,
        size: this.size,
        placeholder: this.placeholder,
        clearable: this.clearable,
        disabled: this.disabled,
        collapseTags: this.collapseTags,
        multipleLimit: this.multipleLimit,
        filterable: this.filterable,
        'popper-append-to-body': true,
        popperClass: 'ui-select-dropdown'
      },
      style: {
        width: this.width
      },
      on: {
        change: this.onChange,
        'visible-change': this.onVisibleChange,
        'remove-tag': this.onRemoveTag,
        focus: this.onFocus,
        blur: this.onBlur,
        clear: this.onClear
      }
    }, items)
  },
  props: {
    // 值
    value: [String, Number, Array],
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 尺寸
    size: String,
    // 选项，取代slot
    options: Array,
    optionValue: {
      type: String,
      default: 'value'
    },
    optionLabel: {
      type: String,
      default: 'label'
    },
    // 是否多选
    multiple: Boolean,
    // 占位文本
    placeholder: String,
    // 是否可清空
    clearable: {
      type: Boolean,
      default: true
    },
    // 是否禁用
    disabled: Boolean,
    // 多选时，是否把选中值折叠起来
    collapseTags: Boolean,
    // 多选时，最多选择的项目数，0代表不限制
    multipleLimit: Number,
    // 是否可搜索
    filterable: Boolean
  },
  methods: {
    // 聚焦
    focus () {
      this.$refs.elSelect.focus()
    },
    // 失去焦点
    blur () {
      this.$refs.elSelect.$refs.reference.$refs.input.blur() // 使输入框失去焦点
      this.$refs.elSelect.visible = false // 收起下拉框
    },
    /**
     * 值改变时触发
     * @param {*} v - 当前值
     */
    onChange (v) {
      this.$emit('input', v)
      this.$emit('change', v)
    },
    /**
     * 下拉框显示/隐藏时触发
     * @param {Boolean} visible - 是否可见
     */
    onVisibleChange (visible) {
      this.$emit('visible-change', visible)
    },
    /**
     * 多选时删除一项触发
     * @param {*} v - 删除的值
     */
    onRemoveTag (v) {
      this.$emit('remove-tag', v)
    },
    onFocus (e) {
      this.$emit('focus', e)
    },
    onBlur (e) {
      this.$emit('blur', e)
    },
    onClear () {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.ui-select.el-select {
  // width: 100%;
  // 输入框
  .el-input__inner {
    border-color: $borderColor;
    border-radius: 0;
  }
  .el-input__suffix .el-select__caret {
    color: $fontColor;
    font-weight: bold;
    line-height: 1;
  }

  // small尺寸
  &.el-select--small {
    .el-input__inner {
      height: 28px;
      line-height: 28px;
    }
  }
}

// 下拉框
.el-select-dropdown.ui-select-dropdown {
  border-radius: 0;
  border-color: $borderColor;
  .el-select-dropdown__list {
    span.selected {
      color: $mainColor;
    }
  }
}
</style>
