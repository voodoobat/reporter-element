import { createI18n } from 'vue-i18n'

import en from '~/core/i18n/langs/en.json'
import ru from '~/core/i18n/langs/ru.json'
import de from '~/core/i18n/langs/de.json'

import RuSvg from 'flag-icons/flags/4x3/ru.svg'
import GbSvg from 'flag-icons/flags/4x3/gb.svg'
import DeSvg from 'flag-icons/flags/4x3/de.svg'

export const ui = {
  ru: {
    icon: RuSvg,
    name: 'Русский',
  },
  en: {
    icon: GbSvg,
    name: 'English',
  },
  de: {
    icon: DeSvg,
    name: 'Deutsch',
  },
}

const locale =
  localStorage.getItem('ui_lang') || navigator?.language?.slice(0, 2) || 'en'
export default createI18n({
  locale,
  messages: {
    en,
    ru,
    de,
  },
})
