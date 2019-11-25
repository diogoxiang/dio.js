<template>
  <el-dialog class="ui-dialog"
             :visible.sync="dialogVisible"
             :title="title"
             :width="width"
             :fullscreen="false"
             :close-on-click-modal="false"
             :top="top"
             :lock-scroll="false"
             :modal="modal"
             :center="center"
             :show-close="showClose"
             :modal-append-to-body="modalAppendToBody"
             :before-close="beforeClose"
             @open="onOpen"
             @opened="onOpened"
             @close="onClose">
    <template slot="title">
      <slot name="title"></slot>
    </template>
    <slot></slot>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
import { Dialog } from 'element-ui'

export default {
  name: 'vDialog',
  components: {
    [Dialog.name]: Dialog
  },
  computed: {
    dialogVisible: {
      get () {
        return this.visible
      },
      set (_val) {
        this.$emit('update:visible', _val)
      }
    }
  },
  props: {
    // 显示与否
    visible: Boolean,
    // 标题，也可通过具名 slot=title 传入
    title: String,
    // 宽度，默认'50%'
    width: {
      type: String,
      default: '50%'
    },
    center: Boolean,
    // 是否需要遮罩层
    modal: Boolean,
    // 上边距
    top: {
      type: String,
      default: '10vh'
    },
    // 是否插入到body元素上
    modalAppendToBody: {
      type: Boolean,
      default: true
    },
    // 关闭前的回调，会暂停 Dialog 的关闭。参数：{Function} done用于关闭 Dialog
    beforeClose: Function,
    // 是否显示右上角关闭按钮
    showClose: Boolean,
    // 是否loading
    loading: Boolean
  },
  methods: {
    // 打开时回调
    onOpen () {
      this.$emit('input', true)
      this.$emit('open')
    },
    // 打开结束时回调
    onOpened () {
      this.$emit('opened')
    },
    // 关闭时回调
    onClose (a) {
      if (this.loading) {
        return
      }
      this.$emit('input', false)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.ui-dialog {
  background-color: rgba(0, 0, 0, 0.05);

  // 对话框
  .el-dialog {
    padding: 24px;
    border-radius: 0;
    border: 1px solid #e2edff;
    box-shadow: 0px 8px 18px 2px rgba(156, 156, 156, 0.3);
    margin: 0 auto;
    // 头部
    .el-dialog__header {
      padding: 0;
      position: relative;
      margin-bottom: 10px;
      .el-dialog__title {
        font-weight: 700;
        display: inline-block;
        font-size: 16px;
        color: #333;
      }
      .el-dialog__headerbtn {
        position: absolute;
        width: 26px;
        height: 26px;
        top: 0;
        right: -7px;
        padding: 5px;
        box-sizing: border-box;
        background-color: #fff;
        &:hover {
          background-color: #f2f2f2;
        }
        .el-dialog__close {
          content: "×";
          width: 16px;
          height: 16px;
          font: 400 16px Tahoma;
          color: #888;
        }
      }
    }
    // 内容区域
    .el-dialog__body {
      padding: 0 !important;
    }
    // 底部按钮
    .el-dialog__footer {
      padding: 0;
      padding-top: 10px;
      .ui-button {
        padding-left: 26px;
        padding-right: 26px;
        &.is-plain {
          background: #f4f8ff;
          border-color: #f4f8ff;
          color: #999;
        }
      }
    }
  }
}
</style>
