<template>
  <el-breadcrumb
    class="ui-breadcrumb"
    :separator="separator">
    <el-breadcrumb-item v-for="(item, index) in title"
                        :key="index"
                        :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { Breadcrumb, BreadcrumbItem } from 'element-ui'

export default {
  name: 'vBreadCrumb',
  components: {
    [Breadcrumb.name]: Breadcrumb,
    [BreadcrumbItem.name]: BreadcrumbItem
  },
  props: {
    // 标题数组
    title: Array,
    // 分隔符
    separator: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.el-breadcrumb.ui-breadcrumb {
  height: 40px;
  line-height: 40px;
  .el-breadcrumb__item {
    height: 40px;
    line-height: 40px;
  }
  .el-breadcrumb__inner,
  .el-breadcrumb__separator {
    color: $fontColor;
    font-size: 13px;
  }
  .el-breadcrumb__inner {
    cursor: pointer;
  }
  .el-breadcrumb__separator {
    margin: 0 5px;
  }
}
</style>
