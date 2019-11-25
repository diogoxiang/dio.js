import Vue from 'vue'

import {
  alert,
  confirm,
  prompt
} from './messageBox' // alert, confirm, prompt弹出框
import {
  message
} from './message' // message消息提示

import {
  vButton
} from './button' // 按钮
import {
  vInput
} from './input' // 输入框
import {
  vStatus
} from './status' // 状态
import {
  vSelect,
  vOption,
  vOptionGroup
} from './select' // 下拉选择框
import {
  vCheckbox,
  vCheckboxGroup,
  vCheckboxButton
} from './checkbox' // 多选框
import {
  vTag
} from './tag' // 标签
import {
  vBreadCrumb
} from './breadcrumb' // 面包屑
import {
  vPagination
} from './pagination' // 分页组件
import {
  vRow,
  vCol
} from './layout' // 布局
import {
  vDialog
} from './dialog' // 对话框
import {
  vTable,
  vTableColumn
} from './table' // 表格
import {
  vDropdown
} from './dropdown' // 下拉菜单
import {
  vForm,
  vFormItem
} from './form' // 表单
import {
  vDatePicker
} from './datePicker' // 时间选择器
import {
  vTabs,
  vTabPane
} from './tab' // tabs
import {
  vUpload
} from './upload' // 上传文件
import {
  vSvg
} from './svg' // svg图标
import {
  vEchart
} from './echart' // echart图
import {
  vRadioGroup,
  vRadio
} from './radio' // 单选框
import {
  vTree
} from './tree' // tree
import {
  vCollapse,
  vCollapseItem
} from './collapse' // 折叠面板
import {
  vTimePicker
} from './timePicker' // 时间选择器
import {
  vLoading
} from './loading' // loading
import {
  vSlider
} from './slider' // 滑块
import {
  vInputNumber
} from './inputNumber' // 计数器
import {
  vColorPicker
} from './colorPicker' // 颜色选择器
import {
  vSteps
} from './steps' // 步骤条
import {
  vProgress,
} from './progress' // 进度条
import {
  vTooltip
} from './tooltip' // 文字提示
import {
  vPageTransition
} from './pageTransition' // 页面底部弹出组件

Vue.prototype.$message = message
Vue.prototype.$alert = alert
Vue.prototype.$confirm = confirm
Vue.prototype.$prompt = prompt

let coms = {
  vButton,
  vInput,
  vStatus,
  vSelect,
  vOption,
  vOptionGroup,
  vCheckbox,
  vCheckboxGroup,
  vCheckboxButton,
  vTag,
  vBreadCrumb,
  vPagination,
  vRow,
  vCol,
  vDialog,
  vTable,
  vTableColumn,
  vDropdown,
  vForm,
  vFormItem,
  vDatePicker,
  vTabs,
  vTabPane,
  vUpload,
  vSvg,
  vEchart,
  vRadioGroup,
  vRadio,
  vTree,
  vCollapse,
  vCollapseItem,
  vTimePicker,
  vLoading,
  vSlider,
  vInputNumber,
  vColorPicker,
  vSteps,
  vProgress,
  vTooltip,
  vPageTransition
}

// 注册为全局组件
for (let com in coms) {
  Vue.component(com, coms[com])
}
