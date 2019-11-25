<template>
  <el-radio-group
                  class="ui-radio-group"
                  :value="value"
                  :disabled="disabled"
                  :size="size"
                  :text-color="textColor"
                  :fill="fill"
                  @input="onInput"
                  @change="onChange">
    <slot></slot>
  </el-radio-group>
</template>

<script>
import { RadioGroup } from 'element-ui'
export default {
  components: {
    [RadioGroup.name]: RadioGroup
  },
  props: {
    value: [String, Number, Boolean],
    size: String,
    disabled: Boolean,
    textColor: String,
    fill: String
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
</style>
