import { defineStore } from 'pinia'
import i18n from '~/i18n'

export const useLocaleStore = defineStore({
  id: 'config',
  state: () => ({
    lang: i18n.global.locale,
  }),
})
