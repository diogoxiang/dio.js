<template>
  <span class="loading-wrapper">
    <img class="loading-img"
         :src="url || defaultLoadUrl"
         alt="">
    <span>{{text}}</span>
  </span>
</template>

<script>
export default {
  data () {
    return {
      defaultLoadUrl: require('@assets/loading-blue.svg') // 默认loading图标地址
    }
  },
  props: {
    // loading图标地址
    url: {
      type: String,
      default: ''
    },
    // loading文本
    text: {
      type: String,
      default: '加载中···'
    }
  }
}
</script>

<style lang="scss" scoped>
  @keyframes rotating {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .loading-wrapper {
    img {
      width: 16px;
      height: 16px;
      vertical-align: middle;
      animation: rotating 1s linear infinite;
    }
  }
</style>
