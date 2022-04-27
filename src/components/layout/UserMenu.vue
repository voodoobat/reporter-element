<template>
  <el-dropdown trigger="click">
    <el-avatar size="20" src="/mock/avatar.jpg" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <router-link :to="{ path: '/' }">
            {{ $t('log_in_title') }}
          </router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="sign-up">{{ $t('sign_up_title') }}</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <a href="">{{ $t('log_out_button') }}</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
