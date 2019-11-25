<template>
  <keep-alive :include="cacheRouteName">
    <router-view />
  </keep-alive>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'page',
  computed: {
    ...mapState(['visitedPageList']),
    // 需要缓存的路由name集合
    cacheRouteName () {
      let visitedList = []
      this.visitedPageList.forEach(item => {
        if (item.meta.cache) {
          visitedList.push(item.name)
        }
      })
      // console.log('需要缓存的组件names', visitedList)
      return visitedList
    },
  }
}
</script>
