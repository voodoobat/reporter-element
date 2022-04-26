<template>
  <el-dropdown @command="setLang">
    <component :is="languages[locale.lang].icon" class="icon" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(lang, key) in languages"
          :key="key"
          :command="key"
        >
          <component :is="languages[key].icon" class="icon" />
          &nbsp; {{ lang.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { useLocaleStore } from '~/store/locale'

import RuSvg from 'flag-icons/flags/4x3/ru.svg'
import GbSvg from 'flag-icons/flags/4x3/gb.svg'
import DeSvg from 'flag-icons/flags/4x3/de.svg'

const languages = {
  ru: {
    icon: RuSvg,
    name: 'Русский',
  },
  en: {
    icon: GbSvg,
    name: 'English',
  },
  de: {
    icon: DeSvg,
    name: 'Deutsch',
  },
}

const locale = useLocaleStore()
const setLang = (lang) => {
  locale.lang = lang
}
</script>

<style lang="scss" scoped>
.icon {
  width: 1.3em;
  margin-right: 0.2em;
  border: 1px solid var(--el-text-color-secondary);
}
</style>
