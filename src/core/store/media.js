import { defineStore } from 'pinia'

export const useMediaStore = defineStore('media', {
  state: () => ({
    mq: '',
  }),
  getters: {
    MQ_LG: ({ mq }) => mq === 'LG',
    MQ_MD: ({ mq }) => mq === 'MD',
    MQ_SM: ({ mq }) => mq === 'SM',
  },
})
