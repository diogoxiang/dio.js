<template>
  <el-table ref="elTable"
            class="ui-table"
            :data="data"
            :height="height"
            :max-height="maxHeight"
            :stripe="stripe"
            :border="border"
            :emptyText="emptyText"
            :highlight-current-row="highlightCurrentRow"
            :row-class-name="rowClassName"
            :cell-class-name="cellClassName"
            :header-row-class-name="headerRowClassName"
            :header-cell-class-name="headerCellClassName"
            @row-click="onRowClick"
            @select="onSelect"
            @select-all="onSelectAll"
            @selection-change="onSelectionChange"
            @current-change="onCurrentChange"
            @sort-change="onSortChange"
            @cell-mouse-enter="onCellMouseEnter"
            @cell-mouse-leave="onCellMouseLeave"
            @filter-change="onFilterChange"
            @expand-change="onExpandChange">
    <template slot="empty">
      <slot name="empty"></slot>
    </template>
    <template slot="append">
      <slot name="append"></slot>
    </template>
    <slot></slot>
  </el-table>
</template>

<script>
import { Table } from 'element-ui'

export default {
  name: 'vTable',
  components: {
    [Table.name]: Table
  },
  props: {
    // 表格数据
    data: {
      type: Array,
      required: true
    },
    // Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。
    height: [Number, String],
    // Table 最大高度
    maxHeight: [Number, String],
    // 是否为斑马纹 table
    stripe: {
      type: Boolean,
      default: false
    },
    // 是否带有纵向边框
    border: {
      type: Boolean,
      default: false
    },
    // 空数据时显示的文本，也可以通过 slot="empty" 设置，默认"暂无数据"
    emptyText: {
      type: String,
      default: ' '
    },
    // 是否单选高亮模式
    highlightCurrentRow: {
      type: Boolean,
      default: false
    },
    // 自定义行类名
    // rowClassName: {
    //     type: String,
    //     default: 'ui-table-row'
    // },
    // 自定义单元格类名
    cellClassName: {
      type: String,
      default: 'ui-table-cell'
    },
    // 自定义表头行类名
    headerRowClassName: {
      type: String,
      default: 'ui-table-header-row'
    },
    // 自定义表头单元格类名
    headerCellClassName: {
      type: String,
      default: 'ui-table-header-cell'
    },
    // 多选模式下选中的行数据
    selectedRows: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    // 真实的数据集（与data的区别是，tableData排序后会更改）
    tableData () {
      return this._elTable.tableData
    },
    // 当前高亮行的数据
    currentRow () {
      return this._elTable.store.states.currentRow
    }
  },
  methods: {
    // 自定义行类名
    rowClassName ({ row, rowIndex }) {
      let className = 'ui-table-row'
      for (let item of this.selectedRows) {
        if (row === item) {
          className = 'ui-table-row is-row-selected'
        }
      }
      return className
    },
    // 多选模式下，清空复选框
    clearSelection () {
      this._elTable.clearSelection()
    },
    /**
     * 多选模式下，切换某一行的勾选状态
     * @param {Number|Object} row - 行号 或 行数据
     * @param {Boolean} [selected] - 选中与否，默认切换
     */
    toggleRowSelection (row, selected) {
      if (typeof row === 'number') {
        row = this.tableData[row]
      }
      this._elTable.toggleRowSelection(row, selected)
    },
    /**
     * 高亮某一行
     * @param {Number|Object} row - 行号 或 行数据
     */
    setCurrentRow (row) {
      if (typeof row === 'number') {
        row = this.tableData[row]
      }
      this._elTable.setCurrentRow(row)
    },
    // 清空排序条件
    clearSort () {
      this._elTable.clearSort()
    },
    // 对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法
    doLayout () {
      this._elTable.doLayout()
    },
    /**
     * 排序变更时触发
     * @param {Object} info - 排序信息
     * @param {Object} info.column - 列信息
     * @param {String} info.prop - 列字段名
     * @param {String} info.order - 排序方向，ascending/descending
     */
    onSortChange (info) {
      if (this.currentRow) { // 排序后，去除高亮行
        this._elTable.store.commit('setCurrentRow')
        const currentRowTr = this.$el.querySelector('tr.current-row')
        currentRowTr && currentRowTr.classList.remove('current-row')
      }
      this.$emit('sort-change', info)
    },
    /**
    * 当某一行被点击时触发
    * @param {Object} row - 所选行数据
    * @param {Object} event - 事件
    * @param {Object} column - 所选列数据
    */
    onRowClick (row, event, column) {
      this.$emit('row-click', row, event, column)
    },
    /**
     * 多选模式下，勾选/反选 数据行的 Checkbox 时触发
     * @param {Array} selection - 所有选中状态的行数据
     * @param {Object} row - 勾选的行数据
     */
    onSelect (selection, row) {
      this.$emit('select', selection, row)
    },
    /**
     * 多选模式下，勾选/反选 全选 Checkbox 时触发
     * @param {Array} selection - 所有选中状态的行数据
     */
    onSelectAll (selection) {
      this.$emit('select-all', selection)
    },
    /**
     * 多选模式下，当选择项发生变化时会触发
     * @param {Array} selection - 所有选中状态的行数据
     */
    onSelectionChange (selection) {
      this.$emit('selection-change', selection)
    },
    /**
     * 高亮行发生变化是触发
     * @param {Object} row - 高亮的行
     * @param {Object} oldRow - 之前高亮的行
     */
    onCurrentChange (row, oldRow) {
      this.$emit('current-change', row, oldRow)
    },
    onCellMouseEnter (row, column, cell, event) {
      this.$emit('cell-mouse-enter', row, column, cell, event)
    },
    onCellMouseLeave (row, column, cell, event) {
      this.$emit('cell-mouse-leave', row, column, cell, event)
    },
    onExpandChange (row, expandedRows) {
      this.$emit('expand-change', row, expandedRows)
    },
    onFilterChange (filters) {
      console.log(filters, 'test')
    }
  },
  mounted () {
    this._elTable = this.$refs.elTable
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
.el-table.ui-table {
  // 表头
  .el-table__header-wrapper {
    // 单元格
    .ui-table-header-cell {
      padding: 10px 0;
      font-size: 14px;
      color: $mainColor;
      .cell {
        line-height: 1;
      }
    }
  }
  // 内容区域
  .el-table__body-wrapper {
    .ui-table-row {
      &.hover-row td {
        background-color: #f4f8ff;
        border-bottom-color: #dde8fb;
      }
      &.is-row-selected td {
        background-color: #f4f8ff;
        border-bottom-color: #dde8fb;
      }
      .ui-table-cell {
        padding: 8px 0;
        border-bottom-color: #eee;
        color: #333333;
        font-size: 12px;
      }
      // 选中行
      &.current-row td {
        background-color: $menuHoverColor;
      }
    }
  }

  // 多选框
  .el-checkbox__input {
    .el-checkbox__inner {
      width: 14px;
      height: 14px;
      cursor: pointer;
      border: 2px solid $mainColor;
      border-radius: 0;
      transition-duration: 0s;
    }
    &.is-indeterminate {
      .el-checkbox__inner {
        background-color: #fff;
        &::before {
          background-color: $mainColor;
          height: 4px;
          top: 3px;
        }
      }
    }
    &.is-checked {
      .el-checkbox__inner {
        background-color: #fff;
        &::after {
          border: 2px solid $mainColor;
          border-left: 0 none;
          border-top: 0 none;
          left: 3px;
          top: 1px;
          width: 2px;
          height: 5px;
        }
      }
    }
  }
}
</style>
