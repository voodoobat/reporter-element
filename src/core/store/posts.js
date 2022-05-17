import { defineStore } from 'pinia'
import { posts } from '~/mock/posts'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    list: [],
    post: null,
  }),
  actions: {
    fetchPostList() {
      this.list = posts
    },
    fetchPostById(postId) {
      this.post = posts.filter(({ id }) => postId === id)[0]
    },
  },
})
