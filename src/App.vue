<template>
  <el-config-provider>
    <router-view />
  </el-config-provider>
</template>

<script setup>
// TODO: setup locale
import { useConfStore } from '~/core/store/conf'

const conf = useConfStore()

const MQ_SM = 768
const MQ_MD = 992
const MQ_LG = 1200

const onResize = () => {
  const w = window.innerWidth || document.documentElement.clientWidth
  if (w <= MQ_SM) {
    conf.mq = 'SM'
  } else if (w > MQ_SM && w < MQ_MD) {
    conf.mq = 'MD'
  } else if (w >= MQ_LG) {
    conf.mq = 'LG'
  }
}
window.addEventListener('resize', onResize)
onResize()
</script>
