import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    id: null,
    name: 'John Doe',
    email: 'foo@bar.baz',
    image: '/mock/avatar.jpg',
  }),
})
