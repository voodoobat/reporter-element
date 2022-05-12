<template>
  <div class="page">
    <h2 v-if="title" class="page-title">{{ props.title }}</h2>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 1em;
}
</style>
