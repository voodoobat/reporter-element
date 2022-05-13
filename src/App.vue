<template>
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script setup>
import { computed } from 'vue'

import en from 'element-plus/lib/locale/lang/en'
import ru from 'element-plus/lib/locale/lang/ru'
import de from 'element-plus/lib/locale/lang/de'

const lang = { en, ru, de }

import { useGlobalMedia } from '~/core/lib/useGlobalMedia'
import i18n from '~/core/i18n'

const locale = computed(() => {
  return lang[i18n.global.locale]
})

// set media current media
window.addEventListener('resize', useGlobalMedia)
useGlobalMedia()
</script>
