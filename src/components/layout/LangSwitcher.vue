<template>
  <el-dropdown trigger="click" @command="setLang">
    <button class="button" type="button">
      <component :is="ui[locale].icon" class="icon-lang" />
      <arrow-down class="icon-arrow" />
    </button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="({ name }, key) in ui"
          :key="key"
          :command="key"
        >
          <component :is="ui[key].icon" class="icon-lang" />
          &nbsp; {{ name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

import i18n from '~/core/i18n'
import ui from '~/core/i18n/ui'
import { setLocalState } from '~/core/lib/setLocalState'

const locale = ref(i18n.global.locale)
const setLang = (lang) => {
  setLocalState({ locale: lang })
  locale.value = lang
  i18n.global.locale = lang
}
</script>

<style lang="scss" scoped>
.icon-arrow {
  width: 1em;
  margin-left: 0.2em;
}

.icon-lang {
  width: 1.3em;
  border: 1px solid var(--el-text-color-secondary);
  margin-right: 0.2em;
}
</style>
