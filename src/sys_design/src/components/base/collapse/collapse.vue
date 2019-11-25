<template>
  <el-collapse class="ui-collapse"
               :value="value"
               @input="onInput">
    <slot></slot>
  </el-collapse>
</template>

<script>
import { Collapse } from 'element-ui'

export default {
  components: {
    [Collapse.name]: Collapse
  },
  props: {
    value: [String, Array]
  },
  methods: {
    onInput (val) {
      this.$emit('input', val)
    }
  }
}
</script>
