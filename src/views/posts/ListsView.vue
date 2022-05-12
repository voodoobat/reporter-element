<template>
  <root-component>
    <page-content :title="$t('my_posts')">
      <post-card :post="post" class="post" />
      <post-card :post="post" class="post" />
      <post-card :post="post" class="post" />
    </page-content>
  </root-component>
</template>

<script setup>
import PostCard from '~/components/posts/PostCard.vue'

const post = {
  id: 1,
  title: 'Заголовок поста',
  created: '03.07.2022',
  edited: '03.07.2022',
}
</script>

<style lang="scss" scoped>
.post {
  + .post {
    border-top: $BD_COMMON;
  }
}
</style>
