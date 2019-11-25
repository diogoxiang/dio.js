<template>
  <component :is="com" class="ui-radio"
            :value="value"
            :disabled="disabled"
            :size="size"
            :name="name"
            :label="label"
            :border="border"
            @input="onInput"
            @change="onChange">
    <slot></slot>
  </component>
</template>

<script>
import { Radio, RadioButton } from 'element-ui'
export default {
  components: {
    [Radio.name]: Radio,
    [RadioButton.name]: RadioButton
  },
  computed: {
    com () {
      return this.type === 'button' ? 'el-radio-button' : 'el-radio'
    }
  },
  props: {
    value: [String, Number, Boolean],
    size: {
      type: String,
      default: 'normal'
    },
    disabled: Boolean,
    name: String,
    border: Boolean,
    type: {
      type: String,
      default: 'normal'
    }, // 单选框模式 normal:普通 button:按钮
    label: [String, Number, Boolean]
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

<style lang="scss" scoped>
.el-radio.ui-radio {
  /deep/.el-radio__input {
    .el-radio__inner {
      border: 2px solid $mainColor;
    }
    &.is-checked {
      .el-radio__inner {
        background: $mainColor;
      }
    }
  }
  &.is-checked {
    /deep/.el-radio__label {
      color: $mainColor;
    }
  }
  &.is-bordered {
    border-radius: 0;
    padding-left: 20px;
  }
}

.el-radio-button.ui-radio {
  &.el-radio-button--mini {
    height: 28px;
    line-height: 28px;
    /deep/.el-radio-button__inner {
      padding: 7px 10px;
      border-radius: 0;
      font-size: 12px;
    }
  }
  /deep/.el-radio-button__inner {
    padding: 8px 10px;
    border-radius: 0;
    font-size: 12px;
  }
  &.is-active /deep/.el-radio-button__inner {
      background: $mainColor;
    }
  &:not(.is-active) /deep/.el-radio-button__inner:hover {
    color: $mainColor;
  }
}
</style>
