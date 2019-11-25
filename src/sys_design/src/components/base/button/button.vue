<template>
  <el-button :disabled="disabled || (loading && allowLoading)"
             :type="type"
             :size="size"
             :round="round"
             :plain="plain"
             :native-type="nativeType"
             class="ui-button"
             @click="onClick">
    <v-svg v-if="btnSvgName && !isLoading"
           :svg="btnSvgName"
           class="btn-icon"></v-svg>
    <slot v-if="!isLoading"></slot>
    <span v-if="isLoading">
      <v-loading :text="loadingText"
                 :url="loadingUrl"></v-loading>
    </span>
    <i v-if="iconR"
       :class="'icon-'+iconR"
       class="el-icon--right" />
  </el-button>
</template>

<script>
import { Button } from 'element-ui'
import { mapState } from 'vuex'

export default {
  name: 'vButton',
  components: {
    [Button.name]: Button
  },
  data () {
    return {
      loadingUrl: require('@assets/loading-white.svg')
    }
  },
  props: {
    // 按钮类型 primary / success / warning / danger / info / text
    type: {
      type: String,
      default: 'primary'
    },
    // 尺寸 medium / small / mini
    size: {
      type: String,
      default: 'small'
    },
    // 禁用与否
    disabled: Boolean,
    // 左图标
    icon: String,
    // 右图标
    iconR: String,
    // 是否圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    // 原生type属性
    nativeType: {
      type: String
    },
    // 朴素按钮
    plain: {
      type: Boolean,
      default: false
    },
    // 按钮图标svg名称
    btnSvgName: String,
    // 是否是loading状态
    isLoading: {
      type: Boolean,
      default: false
    },
    // loading文本
    loadingText: {
      type: String,
      default: '保存中···'
    },
    allowLoading: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    onClick (e) {
      if (this.loading) return
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
.el-button.ui-button {
  border-radius: 0;
  vertical-align: middle;

  // 普通按钮样式
  &.el-button--primary {
    @include button-color($mainColor);
    // 朴素按钮
    &.is-plain {
      color: $mainColor;
      border-color: $mainColor;
      background: #fff;
      &:hover,
      &:focus {
        color: darken($mainColor, 10%);
        border-color: darken($mainColor, 10%);
      }
      &:active {
        color: lighten($mainColor, 10%);
        border-color: lighten($mainColor, 10%);
      }
    }
  }

  // 成功按钮样式
  &.el-button--success {
    @include button-color($successColor);
    // 朴素按钮
    &.is-plain {
      color: $successColor;
      border-color: $successColor;
      background: #fff;
      &:hover,
      &:focus {
        color: darken($successColor, 10%);
        border-color: darken($successColor, 10%);
      }
      &:active {
        color: lighten($successColor, 10%);
        border-color: lighten($successColor, 10%);
      }
    }
  }

  // 危险按钮样式
  &.el-button--danger {
    @include button-color($failureColor);
    // 朴素按钮
    &.is-plain {
      color: $failureColor;
      border-color: $failureColor;
      background: #fff;
      &:hover,
      &:focus {
        color: darken($failureColor, 10%);
        border-color: darken($failureColor, 10%);
      }
      &:active {
        color: lighten($failureColor, 10%);
        border-color: lighten($failureColor, 10%);
      }
    }
  }

  // 警告按钮样式
  &.el-button--warning {
    @include button-color($warningColor);
    // 朴素按钮
    &.is-plain {
      color: $warningColor;
      border-color: $warningColor;
      background: #fff;
      &:hover,
      &:focus {
        color: darken($warningColor, 10%);
        border-color: darken($warningColor, 10%);
      }
      &:active {
        color: lighten($warningColor, 10%);
        border-color: lighten($warningColor, 10%);
      }
    }
  }

  // 信息按钮样式
  &.el-button--info {
    @include button-color($messageColor);
    // 朴素按钮
    &.is-plain {
      color: $messageColor;
      border-color: $messageColor;
      background: #fff;
      &:hover,
      &:focus {
        color: darken($messageColor, 10%);
        border-color: darken($messageColor, 10%);
      }
      &:active {
        color: lighten($messageColor, 10%);
        border-color: lighten($messageColor, 10%);
      }
    }
  }

  // 文本按钮
  &.el-button--text {
    color: $mainColor;
    // 朴素按钮
    &.is-plain {
      color: $mainColor;
      background: #fff;
      &:hover,
      &:focus {
        color: darken($mainColor, 10%);
        border-color: #fff;
      }
      &:active {
        color: lighten($mainColor, 10%);
        border-color: #fff;
      }
    }
  }

  // 大按钮
  &.el-button--medium {
    @extend .button-medium;
  }

  // 小按钮
  &.el-button--small {
    @extend .button-small;
  }

  // mini按钮
  &.el-button--mini {
    @extend .button-mini;
  }
}
</style>
