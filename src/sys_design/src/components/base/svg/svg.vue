<template>
  <svg class="icon"
       aria-hidden="true"
       @click="onClick">
    <use :xlink:href="'#icon-icon_' + svg"></use>
  </svg>
</template>

<script>
export default {
  props: {
    // 图标名
    svg: String
  },
  methods: {
    onClick (e) {
      this.$emit('svgClick', e)
    }
  }
}
</script>

<style lang="scss" scoped>
svg.icon {
  cursor: pointer;
}
</style>
