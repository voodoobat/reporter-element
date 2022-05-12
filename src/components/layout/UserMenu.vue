<template>
  <!-- user -->
  <div v-if="user.id" class="user">
    <el-avatar :size="25" :src="user.image" />
    <h4 class="user-name">{{ user.name }}</h4>
  </div>
</template>

<script setup>
import AppRoute from '~/core/components/AppRoute.vue'
import { useUserStore } from '~/core/store/user'
import { Menu as MenuIcon } from '@element-plus/icons-vue'

const user = useUserStore()
</script>

<style lang="scss" scoped>
.no-user {
  // TODO: fix with var
  background: white;
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
