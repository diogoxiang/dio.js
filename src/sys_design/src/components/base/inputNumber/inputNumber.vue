<template>
  <el-input-number :value="value"
                   :min="min"
                   :max="max"
                   :disabled="disabled"
                   :step="step"
                   @input="onInput"
                   @change="onChange"></el-input-number>
</template>

<script>
import { InputNumber } from 'element-ui'

export default {
  components: {
    [InputNumber.name]: InputNumber
  },
  props: {
    value: Number,
    min: Number,
    max: Number,
    disabled: Boolean,
    step: {
      type: Number,
      default: 1
    }
  },
  methods: {
    onInput (v) {
      this.$emit('input', v)
    },
    onChange (v) {
      this.$emit('change', v)
    }
  }
}
</script>
