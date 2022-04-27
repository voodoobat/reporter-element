<template>
  <el-dropdown trigger="click">
    <!-- has user -->
    <el-avatar v-if="user.email" :size="25" :src="user.image" />
    <!-- no user -->
    <el-avatar v-else :size="25" class="no-user">
      <el-icon :size="15">
        <menu-icon />
      </el-icon>
    </el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <!-- has user -->
        <template v-if="!user.email">
          <el-dropdown-item>
            <app-route :to="{ path: '/' }" :underline="false" class="link">
              {{ $t('log_in_title') }}
            </app-route>
          </el-dropdown-item>
          <el-dropdown-item>
            <app-route to="sign-up" :underline="false" class="link">
              {{ $t('sign_up_title') }}
            </app-route>
          </el-dropdown-item>
        </template>
        <!-- no user -->
        <template v-else>
          <el-dropdown-item>
            <el-link href="/" :underline="false" class="link">
              {{ $t('log_out_button') }}
            </el-link>
          </el-dropdown-item>
        </template>
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
</style>
