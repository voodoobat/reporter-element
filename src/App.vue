<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<script setup>
// TODO: setup locale
import { useMediaStore } from '~/core/store/media'
import { useLangStore } from '~/core/store/lang'
import { useGlobalMedia } from '~/core/lib/useGlobalMedia'

const { lang } = useLangStore()
const media = useMediaStore()

// set media current media
window.addEventListener('resize', () => useGlobalMedia(media))
useGlobalMedia(media)
</script>
