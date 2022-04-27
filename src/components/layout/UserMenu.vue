<template>
  <el-dropdown trigger="click">
    <el-avatar size="20" src="/mock/avatar.jpg" />
    <template #dropdown>
      <el-dropdown-menu>
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
        <el-dropdown-item>
          <el-link href="/" :underline="false" class="link">
            {{ $t('log_out_button') }}
          </el-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import AppRoute from '~/core/components/AppRoute.vue'
</script>

<style lang="scss" scoped>
.link {
  min-width: 100%;
  display: block;
}
</style>
