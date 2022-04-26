import { defineStore } from 'pinia'

export const useLocaleStore = defineStore({
  id: 'config',
  state: () => ({
    lang: 'ru',
  }),
  actions: {
    setLang(lang) {
      this.patch({
        lang,
      })
    },
  },
})
