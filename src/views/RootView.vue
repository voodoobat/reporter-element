<template>
  <root-component>
    <page-content title="Home" />
  </root-component>
</template>

<script setup>
import { useRouter } from 'vue-router'
import RootComponent from '~/components/RootComponent.vue'
import PageContent from '~/components/PageContent.vue'

const { push } = useRouter()
push({
  name: 'posts-list',
})
</script>

<style lang="scss">
.page-title {
  margin-bottom: 1em;
}
</style>
