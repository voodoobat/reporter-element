<template>
  <router-link :to="props.to" :class="classList">
    <slot />
  </router-link>
</template>

<script setup>
// router-link using el-link prop "type" and "underline"
// see: https://element-plus.org/en-US/component/link.html
import { reactive } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default',
  },
  underline: {
    type: Boolean,
    default: true,
  },
  to: {
    type: Object || String,
    default: '',
  },
})

const classList = reactive([
  'el-link',
  `el-link--${props.type}`,
  props.underline && 'is-underline',
])
</script>

<style lang="scss" scoped>
@import 'element-plus/theme-chalk/src/link';
</style>
