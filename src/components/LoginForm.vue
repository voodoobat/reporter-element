<template>
  <el-form class="form" :model="model">
    <el-form-item>
      <h2>{{ title }}</h2>
    </el-form-item>
    <slot />
    <el-form-item class="submit">
      <el-button type="primary">
        {{ button }}
      </el-button>
      <slot name="note" />
    </el-form-item>
  </el-form>
</template>

<script setup>
const props = defineProps({
  title: String,
  model: Object,
  button: String,
})
</script>

<style lang="scss" scoped>
.form {
  min-width: 90%;
  @include media($MQ_SM) {
    min-width: 25em;
  }
}

.submit {
  &::v-deep(.el-form-item__content) {
    display: flex;
    justify-content: space-between;
  }
  &::v-deep(a) {
    color: var(--el-link-text-color);
  }
}
</style>
