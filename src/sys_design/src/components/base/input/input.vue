<template>
  <el-input ref="elInput"
            class="ui-input"
            :class="{'ui-search-input': isSearch}"
            :style="{'width': isSearch ? '300px' : width}"
            :value="value"
            :type="type"
            :disabled="disabled"
            :maxlength="maxLength"
            :placeholder="placeholder"
            :clearable="!readonly && !disabled && clearable"
            :prefixIcon="prefixIcon ? 'icon-'+ prefixIcon: ''"
            :suffixIcon="suffixIcon ? 'icon-'+ suffixIcon: ''"
            :rows="rows"
            :size="size"
            :autosize="autosize"
            :autofocus="autofocus"
            :readonly="readonly"
            :show-word-limit="showWordLimit"
            @input="onInput"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
            @clear="onClear">
    <template slot="prepend">
      <slot name="prepend"></slot>
    </template>
    <!-- 搜索框右侧搜索图标 -->
    <template v-if="isSearch"
              slot="append">
      <v-svg :svg="'sousuo'"
             v-if="!loading"
             @click.native="onSearch"></v-svg>
      <v-loading v-if="loading"
                 :text="''"></v-loading>
    </template>
    <template slot="append">
      <slot name="append"></slot>
    </template>
    <template slot="suffix">
      <slot name="suffix"></slot>
    </template>
  </el-input>
</template>

<script>
import { Input } from 'element-ui'
import { mapState } from 'vuex'

export default {
  name: 'vInput',
  components: {
    [Input.name]: Input
  },
  props: {
    // 类型，text(默认) / textarea
    type: String,
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 值
    value: [String, Number],
    // 最大长度
    maxLength: Number,
    // 占位文本
    placeholder: String,
    // 是否可清空
    clearable: {
      type: Boolean,
      default: true
    },
    // 是否禁用
    disabled: Boolean,
    // 头部图标
    prefixIcon: String,
    // 尾部图标
    suffixIcon: String,
    // type=textarea有效，输入框行数
    rows: {
      type: Number,
      default: 5
    },
    // 输入框尺寸
    size: {
      type: String,
      default: 'medium'
    },
    // type=textarea有效，自适应内容高度，可传入对象，如，{ minRows: 2, maxRows: 6 }
    autosize: {
      type: [Boolean, Object],
      default: true
    },
    // 是否只读
    readonly: Boolean,
    // 自动获取焦点
    autofocus: {
      type: Boolean,
      default: false
    },
    // 是否是搜索框
    isSearch: Boolean,
    // 展示字数统计
    showWordLimit: Boolean
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    // 聚焦
    focus () {
      this.$refs.elInput.focus()
    },
    // 失去焦点
    blur () {
      (this.$refs.elInput.$refs.input || this.$refs.elInput.$refs.textarea).blur()
    },
    // 选中文字
    select () {
      this.$refs.elInput.inputSelect()
    },
    onInput (v) {
      this.$emit('input', v)
    },
    onChange (v) {
      this.$emit('change', v)
    },
    onFocus (e) {
      this.$emit('focus', e)
    },
    onBlur (e) {
      this.$emit('blur', e)
    },
    onClear () {
      this.$emit('clear')
    },
    onSearch () {
      if (!this.isSearch) return
      this.$emit('search')
    }
  }
}
</script>

<style lang="scss">
.el-input.ui-input {
  .el-input__inner {
    border-color: $borderColor;
    border-radius: 0;
  }
  &.is-disabled {
    .el-input__inner {
      background: #fff;
    }
  }
  &.el-input-group--append {
    .el-input__inner {
      border-right-color: #fff;
    }
  }
  .el-input__count {
    font-size: 14px;
  }
  .el-input-group__append {
    background-color: $bgColor;
    color: $fontColor;
    border-radius: 0;
    border-color: $borderColor;
    padding: 0 10px;
  }
  // 搜索框
  &.ui-search-input {
    margin-right: 10px;
    .el-input__inner {
      height: 32px;
      line-height: 32px;
      background: $bgColor;
      border-color: $bgColor;
    }
    .el-input-group__append {
      background: $bgColor;
      border-color: $bgColor;
      border-radius: 0;
      padding: 0 10px;
      cursor: pointer;
      .icon {
        font-size: 16px;
        color: $fontColor;
      }
    }
  }

  // small尺寸
  &.el-input--small {
    .el-input__inner {
      height: 28px;
      line-height: 28px;
    }
  }
}

.el-textarea.ui-input {
  .el-textarea__inner {
    border-color: $borderColor;
    border-radius: 0;
    height: auto !important;
  }
  .el-input__count {
    font-size: 14px;
  }
}
</style>
