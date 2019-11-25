<template>
  <el-col class="ui-col"
          :span="span">
    <slot></slot>
  </el-col>
</template>

<script>
import { Col } from 'element-ui'
export default {
  data () {
    return {

    }
  },
  components: {
    [Col.name]: Col
  },
  props: {
    span: Number
  }
}
</script>

<style lang="scss" scoped>
.ui-col.el-col {
  box-sizing: border-box;
}
</style>
