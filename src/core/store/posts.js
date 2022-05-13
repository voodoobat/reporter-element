import { defineStore } from 'pinia'
import { generate } from '~/mock/posts'

export const usePostsStore = defineStore('posts', {
  state: () => generate(20),
})
