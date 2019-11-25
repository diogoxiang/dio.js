<template>
  <el-time-picker :value="value"
                  :style="{'width': width}"
                  :editable="false"
                  :clearable="clearable"
                  :align="'center'"
                  :size="size"
                  :is-range="isRange"
                  :value-format="valueFormat"
                  @input="onInput"></el-time-picker>
</template>

<script>
import { timePicker } from 'element-ui'
export default {
  name: 'vTimePicker',
  components: {
    [timePicker.name]: timePicker
  },
  props: {
    // 双向绑定的值
    value: [String, Date, Array],
    // 尺寸
    size: {
      type: String,
      default: 'small'
    },
    // 是否是时间范围
    isRange: {
      type: Boolean,
      default: false
    },
    // 是否可清除
    clearable: {
      type: Boolean,
      default: false
    },
    // 宽度
    width: {
      type: String,
      default: '100%'
    },
    // 绑定值的格式
    valueFormat: {
      type: String,
      default: 'HH:mm:ss'
    }
  },
  methods: {
    onInput (_val) {
      this.$emit('input', _val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
