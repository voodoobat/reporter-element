<template>
  <div v-if="user.id" class="user">
    <el-avatar :size="25" :src="user.image" />
    <h4 class="user-name">{{ user.name }}</h4>
  </div>
</template>

<script setup>
import { useUserStore } from '~/core/store/user'

const user = useUserStore()
</script>

<style lang="scss" scoped>
.no-user {
  background: var(--el-bg-color-page);
  color: var(--el-text-color-primary);
}

.link {
  min-width: 100%;
  display: block;
}

.user {
  display: flex;
  align-items: center;
  &-name {
    margin-left: 0.5em;
  }
}
</style>
