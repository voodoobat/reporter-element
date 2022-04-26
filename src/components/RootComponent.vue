<template>
  <el-container class="app-root" :class="props.type">
    <el-header class="app-head">
      <el-row>
        <el-col :span="12"></el-col>
        <el-col :span="12">
          <lang-switcher />
        </el-col>
      </el-row>
    </el-header>
    <el-main class="app-main">
      <slot />
    </el-main>
    <el-footer class="app-foot" />
  </el-container>
</template>

<script setup>
import LangSwitcher from '~/components/layout/LangSwitcher.vue'

const props = defineProps({
  type: {
    type: String,
    default: '',
    validator(v) {
      return v === '' || ['login'].indexOf(v) !== -1
    },
  },
})
</script>

<style lang="scss" scoped></style>
