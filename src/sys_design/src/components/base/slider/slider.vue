<template>
  <el-slider class="ui-slider"
             :value="value"
             :min="min"
             :max="max"
             :disabled="disabled"
             :show-tooltip="showTooltip"
             :step="step"
             @change="onChange"
             @input="onInput"></el-slider>
</template>

<script>
import { Slider } from 'element-ui'

export default {
  components: {
    [Slider.name]: Slider
  },
  props: {
    value: Number,
    min: Number,
    max: Number,
    disabled: Boolean,
    showTooltip :{
      type: Boolean,
      default: false
    },
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

<style lang="scss" scoped>
.ui-slider.el-slider {
  display: inline-block;
  /deep/.el-slider__runway {
    margin: 12px 0;
  }
}
</style>
