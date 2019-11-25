<template>
  <div class="page-multipage">
    <div v-for="item in pages"
         :key="item.name"
         :class="{'is_current': $route.name === item.name}"
         @click="turnPage(item)">
      <span class="dot"></span>
      <span>{{item.meta.title}}</span>
      <v-svg class="close-icon"
             :svg="'shanchu-1'"
             @svgClick.stop="onCloseVisitedPage(item)"></v-svg>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    // 访问过的路由历史集合
    pages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    ...mapState(['accessRoutes', 'menusMode']),
    // 获取一级路由下所有路由名，与一级路由的对应关系
    subMenus () {
      let obj = {}
      this.accessRoutes.forEach(item => {
        obj[item.name] = []
        this.getSubMenus(item.children, obj[item.name])
      })
      return obj
    }
  },
  methods: {
    // 遍历路由，保存所有路由的name
    getSubMenus (menus, arr) {
      menus.forEach(item => {
        arr.push(item.name)
        if (item.children && item.children.length) {
          this.getSubMenus(item.children, arr)
        }
      })
    },
    // 路由页面跳转
    turnPage (_route) {
      let routeName = _route.name
      // 分离模式下，生成子级菜单列表
      if (this.menusMode === 'dispersive') {
        this.getAllChildrenMenus(routeName)
      }
      // 路由跳转
      this.$router.push({
        name: routeName
      })
    },
    // 关闭访问过的页面
    async onCloseVisitedPage (_route) {
      // 只剩一个菜单时不能删
      if (this.pages.length === 1) {
        return
      }
      
      // 要删除的路由在pages中的索引
      let idx
      this.pages.forEach((item, index) => {
        if (item.name === _route.name) {
          idx = index
        }
      })

      // 要删除的路由是否是当前路由
      let isDelCurrentRoute = this.$route.name === _route.name

      let toRoute
      // 要删除的路由是当前路由时，切换到相邻页
      if (isDelCurrentRoute) {
        toRoute = this.pages[idx - 1] || this.pages[idx + 1]
      }

      // 删除当前路由
      await this.$store.dispatch('deleteVisitedPage', idx)

      // 跳转到相邻路由
      if (isDelCurrentRoute && toRoute) {
        // 分离模式下，生成子级菜单列表
        if (this.menusMode === 'dispersive') {
          this.getAllChildrenMenus(toRoute.name)
        }
        this.$router.push({
          name: toRoute.name
        })
      }
    },
    // 获取要去的路由所属的一级路由的所有子路由
    getAllChildrenMenus (_routeName) {
      let subPageMenus = []
      Object.keys(this.subMenus).forEach(key => {
        if (this.subMenus[key].includes(_routeName)) {
          subPageMenus = this.accessRoutes.filter(item => item.name === key)[0].children || []
        }
      })

      this.$store.commit('UPDATE_SUBPAGE_MENUS', subPageMenus)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-multipage {
  padding: 5px 5px 0;
  background: #fff;
  border-bottom: 1px solid rgba(24, 101, 231, 0.15);
  white-space: nowrap;
  div {
    display: inline-block;
    border: 1px solid rgba(24, 101, 231, 0.15);
    border-bottom-color: transparent;
    height: 24px;

    line-height: 24px;
    padding: 0 10px;
    cursor: pointer;
    margin-bottom: -1px;
    // 当前页面
    &.is_current {
      background-color: $mainColor;
      border-color: $mainColor;
      color: #fff;
      .dot {
        background-color: #fff;
      }
    }
    &:not(.is_current) .close-icon {
      color: $fontColor;
      width: 0px;
      transition: width 0.1s linear;
    }
    &:hover .close-icon {
      width: 12px;
    }
    & + div {
      margin-left: 6px;
    }
    // 圆点
    .dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: rgba(24, 101, 231, 0.15);
    }
  }
}
</style>
