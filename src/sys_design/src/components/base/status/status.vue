<template>
  <span class="ui_status">
    <span class="ui_status_dot"
          :style="{'background': currentStatus.color}">
      <span v-if="currentStatus.isFlash"
            class="ui_status_flash"
            :style="{'border-color': currentStatus.color}">
      </span>
    </span>

    <span class="ui_status_content">{{currentStatus.content}}</span>
  </span>
</template>

<script>
export default {
  name: 'vStatus',
  computed: {
    // 当前状态
    currentStatus () {
      return this.statusList.get(this.status)
    }
  },
  props: {
    // 状态列表
    statusList: {
      type: Map,
      default () {
        return new Map([
          ['0', { content: '未开始', color: 'purple', isFlash: true }],
          ['1', { content: '进行中', color: '#36BB42', isFlash: true }],
          ['2', { content: '待审批', color: '#3380FF', isFlash: true }],
          ['3', { content: '已结束', color: '#A0A0A0', isFlash: false }],
          ['4', { content: '已拒绝', color: 'orange', isFlash: false }]
        ])
      }
    },
    // 当前状态
    status: {
      type: [Number, String],
      default: '1'
    }
  }
}
</script>

<style lang="scss" scoped>
.ui_status {
  margin-right: 10px;
}
.ui_status_dot {
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
}
.ui_status_content {
  vertical-align: middle;
  margin-left: 8px;
  color: #333333;
}

.ui_status_flash {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 4px;
  border-radius: 50%;
  border: 1px solid #fff;
  content: "";
  animation: uiStatusProcessing 1.2s infinite ease-in-out;
}
@keyframes uiStatusProcessing {
  0% {
    transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0.5;
  }
  to {
    transform: scale(2.4);
    transform: scale(2.4);
    opacity: 0;
  }
}
</style>
