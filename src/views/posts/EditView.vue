<template>
  <root-component>
    <page-content :title="post.title" />
  </root-component>
</template>

<script setup>
import { reactive } from 'vue'
import PageContent from '~/components/PageContent.vue'
import { usePostsStore } from '~/core/store/posts'

const postsStore = usePostsStore()
const post = reactive(postsStore.post)
</script>
