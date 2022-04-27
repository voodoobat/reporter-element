<template>
  <el-container class="app-root" :class="props.type">
    <el-header class="app-head">
      <el-row class="row">
        <el-col :md="20" class="column"></el-col>
        <el-col :md="4" class="column user-column">
          <user-menu />
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
import UserMenu from '~/components/layout/UserMenu.vue'

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

<style lang="scss" scoped>
.app-root {
  min-height: 100%;
}

.app-main {
  .app-root.login & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
}

.row {
  min-height: 100%;
}

.column {
  display: flex;
  align-items: center;
}

.user-column {
  justify-content: flex-end;
  > * + * {
    margin-left: 0.5em;
  }
}
</style>
