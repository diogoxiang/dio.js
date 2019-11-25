<!-- 列表页面组件（待完善） -->
<!-- 1，props参数： -->
<!--pageConfig:  Object    页面配置 -->
<!--dataList：   Array     表格数据-->
<!--2，emit事件： -->
<!--handleEdit:  触发事件  -->
<template>
  <div class="page-container">
    <!-- 头部 -->
    <div class="page-top"
         v-if="pageConfig_f.header">
      <!-- 左侧按钮  -->
      <div class="buttons">
        <span v-if="pageConfig_f.header.buttons">
          <v-button v-for="(btn, index) in pageConfig_f.header.buttons"
                    :key="index"
                    :btnSvgName="btn.svg"
                    :plain="btn.plain"
                    :allowLoading="false"
                    @click="handleClick('btnClick', btn)">{{btn.text}}</v-button>
        </span>
        <!-- 自定义按钮slot -->
        <slot name="headerBtn"></slot>
      </div>
      <!-- 右侧 -->
      <div class="filters">
        <!-- 普通搜索框 -->
        <v-input v-if="pageConfig_f.header.filters && pageConfig_f.header.filters.isSearch"
                 v-model="searchVal"
                 :placeholder="pageConfig_f.header.filters.searchPlaceholder || '请输入搜索条件'"
                 isSearch
                 clearable
                 @search="handleClick('search', searchVal)"></v-input>
        <slot name="filters"></slot>
        <!-- 更多搜索 -->
        <v-svg v-if="pageConfig_f.header.filters && pageConfig_f.header.filters.isMoreSearch"
               :svg="'gengduochaxun'"
               class="filter-btn more-search"
               @click.native="handleClick('moreSearch')"></v-svg>
        <!-- 排序 -->
        <v-dropdown v-if="pageConfig_f.header.filters && pageConfig_f.header.filters.isSortable && pageConfig_f.header.filters.sortList && pageConfig_f.header.filters.sortList.length"
                    :dropList="pageConfig_f.header.filters.sortList"
                    :trigger="'hover'"
                    showSelected
                    :currentCommand="currentCommand"
                    @command="onCommand">
          <span>
            <v-svg :svg="'paixu'"
                   class="filter-btn"></v-svg>
          </span>
        </v-dropdown>
      </div>
    </div>
    <slot v-else
          name="pageHeader"></slot>
    <!-- 更多搜索slot -->
    <slot name="pageSearch"></slot>
    <!-- 表格 -->
    <v-table ref="pageComponentTable"
             class="page-component-table"
             :data="dataList"
             :highlight-current-row="true" 
             @cell-mouse-enter="onCellMouseEnter"
             @cell-mouse-leave="onCellMouseLeave"
             @selection-change="onSelectChange"
             @row-click="onRowClick">
      <!-- 表格第一列 索引-->
      <v-table-column v-if="pageConfig_f.tableIndex"
                      :type="pageConfig_f.tableIndex"></v-table-column>
      <!-- 表格其他列 -->
      <v-table-column v-for="(item, index) in pageConfig_f.tableProps"
                      :key="index"
                      :label="item.label"
                      :width="item.width"
                      :align="item.align || 'left'">
                      <!-- <span v-if="item.slot" slot="header">
                        <slot :name="item.slot"></slot>
                      </span> -->
        <template slot-scope="{ row }">
          <!-- 需要处理的字段 -->
          <span v-if="item.func"
                :style="{'color': item.color}">{{item.func(row)}}</span>
          <!-- 状态 -->
          <v-status v-else-if="item.isStatus"
                    :status="row[item.prop]"
                    :statusList="item.statusList"></v-status>
          <!-- 图片 -->
          <img class="prize-img-preview"
               v-else-if="item.isPic"
               :src="`${item.previewUrl}/${row[item.prop]}`"
               alt="">
          <!-- 普通显示字段 -->
          <span v-else
                :style="{'color': item.color}">{{row[item.prop]}}{{item.slot}}</span>
          <!-- 编辑栏 pageConfig_f.editTypes -->
          <span class="edit-btns"
                v-if="item.isEdit && (item.isHoverShow ? currentMouseHoverId === row.id : true)"
                :style="{'color': item.color}">
                <template class="table-icon" v-for="svg in allEditType">
                  <v-tooltip :key="svg.svgName" :content="svg.text">
                    <v-svg v-if="pageConfig_f.editTypes.includes(svg.type)"
                      :svg="svg.svgName"
                      class="table-icon"
                      @click.native.stop="onEdit(svg, row)"></v-svg>
                  </v-tooltip>
                </template>
          </span>
        </template>
      </v-table-column>
      <span slot="empty">
        <v-loading v-if="loading"></v-loading>
        <span v-else>暂无数据</span>
      </span>
    </v-table>

    <!-- 分页 -->
    <div class="pagination-container"
         v-if="pageConfig_f.showPagination">
      <v-pagination :currentPage="currentPage"
                    :pageSize="pageSize"
                    :total="total"
                    @pageChange="onPageChange"></v-pagination>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'vTablePageComponent',
  data () {
    return {
      searchVal: '', // 条件搜索的值
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示数量
      total: 0, // 总数
      currentCommand: '', // 当前排序条件
      currentMouseHoverId: '', // 当前鼠标所在行的ID
      basePageConfig: {
        tableIndex: 'index', // 表格第一列 index 索引；selection 多选框
        tableProps: [], // 表格字段列表
        editTypes: ['edit', 'delete'], // 表格操作列svg图标配置，仅当tableProps项的isEdit为true时有效，默认编辑和删除
        showPagination: true
      },
      allEditType: [
        { type: 'preview', svgName: 'kehuyulan', text: '预览' }, // 预览，查看详情
        { type: 'edit', svgName: 'bianji', text: '编辑' }, // 编辑
        { type: 'delete', svgName: 'shanchu', text: '删除' }, // 删除
        { type: 'launch', svgName: 'qiyong', text: '启用' }, // 上线，启用
        { type: 'offline', svgName: 'xiaxian', text: '关闭'}, // 下线，关闭
        { type: 'export', svgName: 'quzhong', text: '导出' }, // 导出
        { type: 'copy', svgName: 'fuzhi', text: '复制' }, // 复制
      ]
    }
  },
  computed: {
    ...mapState(['loading']),
    // 合并后的页面配置
    // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。
    // 后面的属性会覆盖前面的属性
    pageConfig_f () {
      return Object.assign({}, this.basePageConfig, this.pageConfig)
    }
  },
  props: {
    // 页面配置
    pageConfig: {
      type: Object,
      default () {
        return {}
      }
    },
    // 表格数据
    dataList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    setVal (key, val) {
      this.$set(this, key, val)
    },
    // 表格单元格鼠标移入时
    onCellMouseEnter (row, column, cell, event) {
      this.currentMouseHoverId = row.id
    },
    // 表格单元格鼠标移出时
    onCellMouseLeave () {
      this.currentMouseHoverId = ''
    },
    // 组件触发的事件
    handleClick (_type, _param) {
      if (this.loading) return
      this.$emit('handleEdit', {
        type: _type,
        param: _param
      })
    },
    // 排序
    onCommand (_com) {
      this.currentCommand = _com
      this.handleClick('sort', this.currentCommand)
    },
    // 表格编辑
    onEdit (_svg, _row) {
      this.handleClick('edit', {
        svg: _svg,
        row: _row
      })
    },
    // 分页查询
    onPageChange (_page) {
      this.currentPage = _page
      this.handleClick('pageChange', _page)
    },
    // 表格某一行点击事件
    onRowClick (row, column, event) {
      if (this.pageConfig_f.tableIndex === 'index') {
        this.handleClick('select', [row])
      } else {
        this.toggleRowSelection(row)
      }
    },
    // 切换某一行的选中状态
    toggleRowSelection (row) {
      this.$refs.pageComponentTable.toggleRowSelection(row)
    },
    // 设定某一行为选中行，用于单选表格
    setCurrentRow (idx) {
      this.$refs.pageComponentTable.setCurrentRow(this.dataList[idx])
      this.handleClick('select', [this.dataList[idx]])
    },
    // 清空多选
    clearSelection () {
      this.$refs.pageComponentTable.clearSelection()
    },
    // 当选择项发生变化时会触发该事件
    onSelectChange (selection) {
      this.handleClick('select', selection)
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  .ui-button {
    padding: 0 20px;
  }
}
.page-component-table {
  /deep/.current-row {
    .ui-table-cell:first-child:not(.el-table-column--selection) {
      .cell div {
        color: $mainColor;
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
}
.table-icon {
  font-size: 16px;
  cursor: pointer;
  & + .table-icon {
    margin-left: 20px;
  }
}

// 图片预览
.prize-img-preview {
  width: 40px;
}
</style>
