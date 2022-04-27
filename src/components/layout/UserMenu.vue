<template>
  <!-- user -->
  <div v-if="user.id" class="user">
    <el-avatar :size="25" :src="user.image" />
    <h4 class="user-name">{{ user.name }}</h4>
  </div>
  <!-- login -->
  <el-dropdown v-else trigger="click">
    <el-avatar :size="25" class="no-user">
      <el-icon :size="15">
        <menu-icon />
      </el-icon>
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <app-route :to="{ name: 'sign-in' }" :underline="false" class="link">
            {{ $t('log_in_title') }}
          </app-route>
        </el-dropdown-item>
        <el-dropdown-item>
          <app-route :to="{ name: 'sign-up' }" :underline="false" class="link">
            {{ $t('sign_up_title') }}
          </app-route>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
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
