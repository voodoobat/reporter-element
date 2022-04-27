import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'Elon Musk',
    email: '',
    image: '/mock/avatar.jpg',
  }),
})
