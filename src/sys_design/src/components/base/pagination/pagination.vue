<template>
  <div class="pagination-wrap">
    <span class="total-number">全部内容，共{{total}}条数据</span>
    <el-pagination class="ui-pagination"
                   :background="true"
                   layout="prev, pager, next"
                   :prev-text="prevText"
                   :next-text="nextText"
                   :disabled="disabled || loading"
                   :total="total"
                   :current-page="currentPage"
                   :page-size="pageSize"
                   @size-change="onSizeChange"
                   @current-change="onPageChange"
                   @prev-click="onPageChange"
                   @next-click="onPageChange">
    </el-pagination>
  </div>
</template>

<script>
import { Pagination } from 'element-ui'

import { mapState } from 'vuex'

export default {
  name: 'vPagination',
  components: {
    [Pagination.name]: Pagination
  },
  props: {
    // 总数
    total: {
      type: Number,
      default: 0
    },
    // 当前页码
    currentPage: {
      type: Number,
      default: 0
    },
    // 每页显示数量
    pageSize: {
      type: Number,
      default: 10
    },
    // 上一页文字
    prevText: {
      type: String,
      default: '上一页'
    },
    // 下一页文字
    nextText: {
      type: String,
      default: '下一页'
    },
    // 是否禁用
    disabled: Boolean
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    // 页码点击事件
    onPageChange (_page) {
      this.$emit('pageChange', _page)
    },
    // 每页显示数量改变
    onSizeChange (_size) {
      this.$emit('sizeChange', _size)
    }
  }
}
</script>

<style lang="scss">
.total-number {
  display: inline-block;
  color: $fontColor;
  height: 22px;
  line-height: 22px;
  padding-right: 30px;
  vertical-align: middle;
}
.ui-pagination.el-pagination.is-background {
  display: inline-block;
  padding: 0;
  vertical-align: middle;
  .btn-prev,
  .btn-next {
    background-color: #fff;
    border-radius: 0;
    color: $fontColor;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    span {
      height: 22px;
      line-height: 22px;
    }
  }
  .el-pager {
    .number {
      font-size: 12px;
      border-radius: 0;
      height: 22px;
      line-height: 20px;
      border: 1px solid $borderColor;
      color: $fontColor;
      background-color: #fff;
      min-width: 22px;
      font-weight: normal;
      margin: 0 8px;
      &.active {
        background-color: $mainColor;
        border-color: $mainColor;
      }
      &:not(.disabled):not(.active):hover {
        color: $mainColor;
        border-color: $mainColor;
      }
    }
    .btn-quicknext,
    .btn-quickprev {
      background: #fff;
      border-color: #fff;
      border-radius: 0;
      height: 22px;
      line-height: 20px;
      min-width: 22px;
      margin: 0 8px;
    }
    .more:before {
      line-height: 22px;
    }
  }
}
</style>
