<script>
import { TableColumn } from 'element-ui'

export default {
  name: 'vTableColumn',
  components: {
    [TableColumn.name]: TableColumn
  },
  props: {
    /**
     * 列的类型，可取值：
     * 'selection'    - 显示多选框
     * 'index'        - 显示行索引
     */
    type: String,
    // type=index有用，自定义索引
    index: [String, Function],
    // 标题
    label: String,
    // 对应列内容的字段名
    prop: String,
    // 列宽
    width: String,
    // 列的最小宽度，会把剩余宽度按比例分配给设置了 min-width 的列
    minWidth: String,
    /**
     * 列是否固定在左侧或者右侧，可取值：
     * true/'left'  - 固定左侧
     * 'right'      - 固定右侧
     */
    fixed: [String, Boolean],
    /**
     * 列是否可以排序，可取值：
     * true     - 可排序
     * false    - 不可排序
     * 'custom' - 可排序但不自动排序，可监听vTable的sort-change事件
     */
    sortable: [Boolean, String],
    /**
     * 用来格式化内容
     * @param {Object} row - 行数据
     * @param {Object} column - 列信息
     * @param {*} value - 数据值
     * @return {String} 输出内容
     */
    formatter: Function,
    // 对齐方式，可取值：left/center/right
    align: String,
    // 表头对齐方式，默认与align一致，可取值：left/center/right
    headerAlign: String,
    // 当内容过长被隐藏时显示 tooltip
    showOverflowTooltip: {
      type: Boolean,
      default: false
    },
    // 是否可选
    selectable: {
      type: Function
    },
    // 列标题 Label 区域渲染使用的 Function
    renderHeader: {
      type: Function
    },
    // 表头下拉列表筛选数据{text, value}}
    filters: {
      type: Array
    },
    // 下拉列表过滤函数
    filterMethod: {
      type: Function
    },
    // 下拉列表的位置
    filterPlacement: {
      type: String,
      default: 'bottom'
    }
  },
  render (h) {
    // let vNode = []
    // Object.keys(this.$slots).forEach(item => {
    //   vNode.push(h('span', {
    //     slot: 'header',
    //     scopedSlots: {
    //       header: this.$scopedSlots.header
    //     },
    //   }, this.$slots[item]))
    // })
    return h('el-table-column', {
      ref: 'elTableColumn',
      props: {
        type: this.type,
        index: this.index,
        label: this.label,
        prop: this.prop,
        width: this.width,
        minWidth: this.minWidth,
        fixed: this.fixed,
        sortable: this.sortable,
        formatter: this.formatter,
        align: this.align,
        filters: this.filters,
        filterMethod: this.filterMethod,
        filterPlacement: this.filterPlacement,
        headerAlign: this.headerAlign,
        showOverflowTooltip: this.showOverflowTooltip,
        selectable: this.selectable,
        renderHeader: this.renderHeader
      },
      scopedSlots: {
        default: this.$scopedSlots.default
      },
    })
  },
  mounted () {
    this._elTableColumn = this.$refs.elTableColumn
  }
}
</script>
