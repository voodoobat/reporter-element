<template>
  <root-component>
    <page-content :title="$t('my_posts')">
      <post-card v-for="post in posts" :key="post.id" :post="post" />
    </page-content>
  </root-component>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import PostCard from '~/components/posts/PostCard.vue'
import { usePostsStore } from '~/core/store/posts'

const posts = storeToRefs(usePostsStore())
</script>

<style lang="scss" scoped>
.post {
  + .post {
    border-top: $BD_COMMON;
  }
}
</style>
