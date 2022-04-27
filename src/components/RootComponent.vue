<template>
  <el-container class="app-root" :class="props.type">
    <el-header class="app-head">
      <el-row class="row">
        <el-col :span="24" class="column user-column">
          <user-menu />
          <lang-switcher />
        </el-col>
      </el-row>
    </el-header>
    <div class="app-main-box">
      <!--      <nav-menu v-if="type !== 'login'" class="app-nav" />-->
      <main-nav v-if="props.type !== 'login'" />
      <el-main class="app-main">
        <slot />
      </el-main>
    </div>
  </el-container>
</template>

<script setup>
import LangSwitcher from '~/components/layout/LangSwitcher.vue'
import UserMenu from '~/components/layout/UserMenu.vue'
import MainNav from '~/components/layout/MainNav.vue'

const props = defineProps({
  type: {
    type: String,
    default: '',
    validator(v) {
      return v === '' || ['user'].indexOf(v) !== -1
    },
  },
})
</script>

<style lang="scss" scoped>
$layout-border: 1px solid var(--el-color-info-light-7);

.app-root {
  min-height: 100%;
}

.app-main-box {
  display: flex;
  justify-content: space-between;
  flex-grow: 10;
}

.app-nav {
  border-right: $layout-border;
}

.app-main {
  flex-grow: 10;

  .app-root.login & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100%;
  }
}

.app-head {
  border-bottom: $layout-border;
}

.app-foot {
  border-top: $layout-border;
}

.row {
  min-height: 100%;
}

.column {
  display: flex;
  align-items: center;
}

.user-column {
  justify-content: space-between;
  .app-root.login & {
    justify-content: flex-end;
    > * + * {
      margin-left: 0.5em;
    }
  }
}
</style>
