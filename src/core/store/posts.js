import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
  state: () => [
    {
      id: 1,
      title: 'Заголовок статьи 1',
    },
    {
      id: 2,
      title: 'Заголовок статьи 2',
    },
    {
      id: 3,
      title: 'Заголовок статьи 3',
    },
    {
      id: 4,
      title: 'Заголовок статьи 4',
    },
  ],
})
