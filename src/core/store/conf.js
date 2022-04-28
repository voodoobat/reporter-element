import { defineStore } from 'pinia'

export const useConfStore = defineStore('media', {
  state: () => ({
    mq: '',
  }),
})
