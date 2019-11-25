<template>
  <el-row class="ui-row"
          :gutter="gutter">
    <slot></slot>
  </el-row>
</template>

<script>
import { Row } from 'element-ui'
export default {
  data () {
    return {

    }
  },
  components: {
    [Row.name]: Row
  },
  props: {
    gutter: Number
  }
}
</script>

<style lang="scss" scoped>
.ui-row {
  box-sizing: border-box;
}
</style>
