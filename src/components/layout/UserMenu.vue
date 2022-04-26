<template>
  <el-dropdown trigger="click" @command="setLang">
    <el-avatar size="20" src="/mock/avatar.jpg" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Профиль</el-dropdown-item>
        <el-dropdown-item>{{ $t('log_out_button') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
