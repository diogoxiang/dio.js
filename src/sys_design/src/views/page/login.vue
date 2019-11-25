<template>
  <div class="login-container">
    <div class="login-middle">
      <div class="login-wrapper">
        <img class="logo" src="@assets/logo-128x128.png">
        <h2>欢迎登录{{sysName}}</h2>
        <v-input v-model="form.username"
                 class="login_input"
                 :placeholder="'手机号/邮箱'"></v-input>
        <v-input v-model="form.password"
                 class="login_input"
                 :placeholder="'密码'"
                 :type="'password'"></v-input>
        <v-button :isLoading="loading"
                  :loadingText="'登录中···'"
                  v-on:keypress.enter="loginIn"
                  @click="loginIn">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</v-button>
        <!-- <div>
          <a href="#">忘记密码？</a>
          <a href="#">注册用户</a>
        </div> -->
      </div>
      </div>
    <div class="login-buttom">
      <ul class="link-group">
        <li class="space">关于我们</li>
        <li class="space">服务协议</li>
        <li class="space">隐私政策</li>
        <li>联系我们</li>
      </ul>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      // 登陆表单
      form: {
        username: '',
        password: ''
      },
      // 跳转页面
      redirect: ''
    }
  },
    computed: {
    ...mapState(['loading', 'sysName']),
  },
  methods: {
    // 登录点击事件
    async loginIn () {
      // 1，登陆，获取菜单列表，获取sessionId，初始化有权限访问的路由
      await this.$store.dispatch('Login', this.form)
      // 2，获取当前登陆用户的基本信息
      await this.$store.dispatch('GetUserInformation')
      // 3，跳转页面
      this.$router.push({
        path: this.redirect
      })
    }
  },
  mounted () {
    // hash 属性是一个可读可写的字符串，可设置或返回当前 URL 的查询部分（问号 ? 之后的部分）
    let hash = location.hash.split('?')[1]
    let url = hash ? hash.split('=')[1] : ''
    this.redirect = url ? decodeURIComponent(url) : '/'
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100%;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    background-image: url('~@assets/login_bg.png');
    background-size: 100% 100%;
    div {
      &.login-middle {
        flex: 4;
        .login-wrapper {
          width: 320px;
          margin: 0 auto {
          top: 80px;
          }
          text-align: center;
          .logo {
            width: 100px;
            height: 100px;
          }
          h2 {
            margin: 44px 0 52px;
            font-size: 26px;
            color: #333;
            font-family: PingFang-SC-Medium;
            font-weight: normal;
          }
          .login_input {
            height: 40px;
            line-height: 40px;
            border-radius: 20px;
            margin-bottom: 24px;
            /deep/.el-input__inner {
              height: 40px;
              background:rgba(234,234,234,1);
              line-height: 40px;
              border-radius: 20px;
              border: 0 none;
              padding-left: 20px;
              color: #999999;
              font-size: 14px;
            }
          }
          /deep/ .ui-button {
            width: 320px;
            border-radius: 20px;
            height: 40px;
            line-height: 40px;
            margin-bottom: 10px;
          }
          div {
            a {
              &:nth-child(1) {
                float: left;
              }
              &:nth-child(2) {
                float: right;
              }
            }
          }
        }
      }
      &.login-buttom {
        flex: 3;
        position: relative;
        .link-group {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 32px;
          color: #fff;
          font-size: 14px;
          li {
            float: left;
            padding: 0 10px;
            line-height: 12px;
            border-right: 1px solid #ccc;
            &:nth-child(4) {
              border-right: none;
            }
          }
        }
      }
    }
  }
</style>