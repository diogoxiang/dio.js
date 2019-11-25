<template>
  <div id="home">
    <!-- banner -->
    <div class="banner">
      <div class="box">
        <!-- logo -->
        <div class="logo">
          <h1 :style="{'background-image': 'url('+logo+')'}">活动营销系统</h1>
        </div>
        <!-- banner导航栏，分离模式下的第一级菜单 -->
        <div class="links" v-if="menusMode === 'dispersive'">
          <router-link v-for="item in accessRoutes"
                       :key="item.name"
                       :to="{name: item.name}"
                       :class="{'is-selected': $route.path.includes(item.path)}"
                       @click.native="onSelectMenu(item)">{{item.meta.title}}</router-link>
        </div>
        <!-- 菜单统一模式下的面包屑 -->
        <div class="page-crumb" v-if="menusMode === 'unitive'">
          <span class="menu-flod-btn">
            <v-svg
              :class="[{'is-rotate': !collapse}]"
              :svg="'zhankai'"
              v-if="pageLeftMenus.length"
              @click.native="foldingMenus"></v-svg>
          </span>
          <v-bread-crumb :title="routesCrumb"></v-bread-crumb>
        </div>
        <!-- right tools -->
        <div class="tools">
          <v-svg :svg="'fuzhi'"
                 @svgClick="handleFullScreen"></v-svg>
          <v-svg :svg="'pifu'"></v-svg>
          <v-svg :svg="'sousuo'"></v-svg>
          <v-svg :svg="'xiaoxi'"></v-svg>
          <!-- 右侧头像下拉列表 -->
          <v-dropdown :dropList="dropList"
                      :trigger="'hover'"
                      @command="onCommand">
            <span class="user">
              {{userInfor.userName}}
              <v-svg :svg="'zhankai-1'"></v-svg>
            </span>
          </v-dropdown>
        </div>
      </div>
    </div>
    <section class="pages_container">
      <!-- 二级菜单目录 -->
      <div class="page-menu"
        v-if="pageLeftMenus.length">
        <v-menu
          :menuList="pageLeftMenus"
          :collapse="collapse"></v-menu>
      </div>
      <!-- 路由出口 -->
      <div class="page">
        <!-- 多页面菜单切换栏 -->
        <v-page-tabs v-if="showMultiPage" :pages="visitedPageList"></v-page-tabs>
        <!-- 顶部面包屑 -->
        <div class="page-crumb" v-if="!showMultiPage && menusMode === 'dispersive'">
          <span class="menu-flod-btn">
            <!-- 展开折叠图标 -->
            <v-svg
              :class="[{'is-rotate': !collapse}]"
              :svg="'zhankai'"
              v-if="pageLeftMenus.length"
              @click.native="foldingMenus"></v-svg>
          </span>
          <!-- 面包屑 -->
          <v-bread-crumb :title="routesCrumb"></v-bread-crumb>
        </div>
         <!-- 页面内容路由出口 -->
         <router-view />
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { vMenu } from '@cp/extend/menu'
import { vPageTabs } from '@cp/extend/pageTabs'

export default {
  name: 'home',
  data () {
    return {
      logo: require('@assets/logo.png'), // logo
      dropList: [
        { text: '修改密码', command: 'editPass' },
        { text: '退出', command: 'loginOut' }
      ]
    }
  },
  computed: {
    ...mapState([
      'userInfor',
      'accessRoutes',
      'isFullScreen',
      'loading',
      'subPageMenus',
      'collapse',
      'routesCrumb',
      'visitedPageList',
      'showMultiPage',
      'menusMode'
    ]),
    pageLeftMenus () {
      if (this.menusMode === 'dispersive') {
        // 菜单分离模式下，为子级路由
        return this.subPageMenus
      } else {
        // 菜单统一模式下，为所有路由
        return this.accessRoutes
      }
    }
  },
  components: {
    vMenu,
    vPageTabs
  },
  methods: {
    // 切换路由时
    onSelectMenu (_menu) {
      this.$router.push({
        name: _menu.name
      })
      // 生成子页面菜单列表
      this.$store.commit('UPDATE_SUBPAGE_MENUS', _menu.children || [])
    },
    // 右侧头像下拉列表点击事件
    onCommand (_com) {
      // 退出登陆
      if (_com === 'loginOut') {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()
        })
      }
    },
    // 左侧菜单折叠事件
    foldingMenus () {
      this.$store.commit('UPDATE_COLLAPSE')
    },
    // 全屏切换
    handleFullScreen () {
      if (!this.isFullScreen) {
        // 全屏
        this.fullScreen()
      } else {
        // 退出全屏
        this.exitScreen()
      }
      this.$store.commit('updateFullScreen', !this.isFullScreen)
    },
    // 全屏方法
    fullScreen () {
      var el = document.documentElement
      var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen
      if (typeof rfs !== 'undefined' && rfs) {
        rfs.call(el)
      }
    },
    // 退出全屏
    exitScreen () {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      if (typeof cfs !== 'undefined' && cfs) {
        cfs.call(el)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .banner {
    width: 100%;
    height: $bannerHeight;
    background: linear-gradient(90deg, $mainColor - 10, $mainColor);
    color: #fff;
    .box {
      height: $bannerHeight;
      line-height: $bannerHeight;
      font-size: 0;
      position: relative;
      .logo {
        width: 200px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
        // border-right: 1px solid rgba(255, 255, 255, 0.3);
        h1 {
          width: 130px;
          height: 39px;
          background-image: url('/static/img/logo.ea606522.png');
          background-size: cover; 
          filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='/static/img/logo.ea606522.png',sizingMethod='scale');
          margin: 0 40px;
          background-size: 100%;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
      .links {
        position: absolute;
        right: 250px;
        left: 200px;
        top: 0;
        display: inline-block;
        vertical-align: middle;
        height: $bannerHeight;
        a {
          display: inline-block;
          color: #fff;
          font-size: 16px;
          opacity: 0.6;
          padding: 0 28px;
          cursor: pointer;
          &.is-selected {
            opacity: 1;
            font-weight: bold;
          }
        }
      }
      .page-crumb {
        position: absolute;
        right: 250px;
        left: 200px;
        top: 0;
        height: $bannerHeight;
        line-height: $bannerHeight;
        align-items: center;
        display: flex;
        .menu-flod-btn {
          cursor: pointer;
          color: #fff;
          line-height: 1;
          margin-right: 10px;
          .icon {
            font-size: 16px;
            transition: all 0.3s linear;
            transform-origin: center;
            &.is-rotate {
              transform: rotate(180deg);
            }
          }
        }
      }
      .tools {
        padding-right: 20px;
        position: absolute;
        right: 0;
        top: 0;
        height: $bannerHeight;
        line-height: $bannerHeight;
        .icon {
          display: inline-block;
          font-size: 15px;
          cursor: pointer;
          padding: 0 10px;
        }
        .user {
          color: #fff;
          font-size: 14px;
          padding-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .pages_container {
    width: 100%;
    flex: 1;
    box-sizing: border-box;
    padding: 0;
    background-color: $bgColor;
    overflow-x: hidden;
    display: flex;
    .page-menu {
      padding-top: 20px;
      height: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
      border-right: 1px solid rgba(24, 101, 231, 0.15);
      background-color: $menuBgColor;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .page {
      flex: 1;
      background: #fff;
      width: 100%;
      height: 100%;
      position: relative;
      overflow-x: hidden;
      // 面包屑
      .page-crumb {
        padding-left: 40px;
        background: #fff;
        box-shadow: 0px 2px 4px 0px rgba(191, 196, 205, 0.3);
        &.is-back {
          padding-left: 120px;
        }
        position: relative;
        .menu-flod-btn {
          position: absolute;
          top: 50%;
          margin-top: -8px;
          left: 9px;
          cursor: pointer;
          color: #676e7a;
          .icon {
            font-size: 16px;
            transition: all 0.3s linear;
            transform-origin: center;
            &.is-rotate {
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }
}
</style>
