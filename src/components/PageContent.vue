<template>
  <div class="page">
    <h2 v-if="props.title" class="page-title">
      {{ props.title }}
      <el-tag v-if="props.label">{{ props.label }}</el-tag>
    </h2>
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  label: {
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
