<template>
  <el-color-picker :value="value"
                   :disabled="disabled"
                   :size="size"
                   :show-alpha="true"
                   @input="onInput"
                   @change="onChange"></el-color-picker>
</template>

<script>
import { ColorPicker } from 'element-ui'

export default {
  components: {
    [ColorPicker.name]: ColorPicker
  },
  props: {
    value: String,
    size: String,
    disabled: Boolean
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
