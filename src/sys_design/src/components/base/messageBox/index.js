import {
  MessageBox
} from 'element-ui'
import './messageBox.scss'

// 默认配置
let defaultOpts = {
  customClass: 'ui-message-box', // MessageBox 的自定义类名
  confirmButtonText: '确定', // 确定按钮文本内容
  cancelButtonText: '取消', // 取消按钮文本内容
  confirmButtonClass: 'confirm-button', // 确定按钮自定义类名
  cancelButtonClass: 'cancel-button', // 取消按钮自定义类名
  showClose: false, // 是否显示右上角关闭按钮
  closeOnClickModal: false // 是否可通过点击遮罩关闭 MessageBox
}

// alert提示框
export const alert = (content, title, opts) => {
  let _opts = Object.assign({}, defaultOpts, opts)
  return MessageBox.alert(content, title, _opts)
}

// confir确认框
export const confirm = (content, title, opts) => {
  let _opts = Object.assign({}, defaultOpts, opts)
  return MessageBox.confirm(content, title, _opts)
}

// 提交内容的确定框，有输入框
export const prompt = (content, title, opts) => {
  let _opts = Object.assign({}, defaultOpts, opts)
  return MessageBox.prompt(content, title, _opts)
}
