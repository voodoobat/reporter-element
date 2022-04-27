<template>
  <router-link :to="props.to" :class="['el-link', `el-link--${props.type}`]">
    <slot />
  </router-link>
</template>

<script setup>
// router-link using el-link prop "type"
// see: https://element-plus.org/en-US/component/link.html
const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  to: {
    type: Object || String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@import 'element-plus/theme-chalk/src/link';
</style>
