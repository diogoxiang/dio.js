<template>
  <div class="not-found">
    <img src="@/assets/404.gif"
         alt="">
    <h6>错误原因：</h6>
    <p>1，地址URL拼写错误，请检查地址是否正确；</p>
    <p>2，没有权限访问此页面，请联系管理员或你的上级人员。</p>
    <div class="back">
      <v-button @click="onBack"
                plain>返回</v-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound',
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    console.log('not found')
  }
}
</script>

<style lang="scss" scoped>
.not-found {
  padding-top: 20px;
  width: 400px;
  margin: auto;
  img {
    width: 100%;
  }
  h6 {
    padding: 10px 0;
    font-size: 16px;
  }
  p {
    line-height: 24px;
  }
  .back {
    padding: 10px;
    text-align: center;
  }
}
</style>
