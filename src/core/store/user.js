import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    name: 'Elon Musk',
    email: '',
    image: '/mock/avatar.jpg',
  }),
})
