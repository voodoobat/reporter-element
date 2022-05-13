import { createI18n } from 'vue-i18n'
import { getLocalState } from '~/core/lib/getLocalState'

import en from '~/core/i18n/langs/en.json'
import ru from '~/core/i18n/langs/ru.json'
import de from '~/core/i18n/langs/de.json'

const locale =
  getLocalState()?.locale || navigator?.language?.slice(0, 2) || 'en'
export default createI18n({
  locale,
  messages: {
    en,
    ru,
    de,
  },
})
