<template>
  <el-tag class="ui-tag"
          :type="type"
          :size="size"
          :color="color"
          :hit="hit"
          :disable-transitions="disableTransitions"
          :closable="false"
          @click="onClick">
    <slot></slot>
    <v-svg v-if="closable"
           class="close-svg"
           :svg="'shanchu-'"
           @click.native="onClose"></v-svg>
  </el-tag>
</template>

<script>
import { Tag } from 'element-ui'

export default {
  name: 'vTag',
  components: {
    [Tag.name]: Tag
  },
  props: {
    // 主题
    type: {
      type: String,
      default: 'primary'
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: true
    },
    // 尺寸
    size: String,
    // 背景色
    color: String,
    // 是否禁用渐变动画
    disableTransitions: Boolean,
    // 是否有描边
    hit: Boolean
  },
  methods: {
    // 关闭时触发
    onClose () {
      this.$emit('close')
    },
    // 点击标签时触发
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss">
.el-tag.ui-tag {
  border: 0 none;
  line-height: 32px;
  border-radius: 0;
  margin-right: 10px;
  color: #333333;
  font-size: 14px;
  cursor: pointer;
  &.el-tag--primary {
    background: #f4f8ff;
  }

  .close-svg {
    font-size: 16px;
  }
}
</style>
