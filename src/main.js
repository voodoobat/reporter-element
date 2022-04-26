import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '~/App.vue'
import router from '~/router'
import i18n from '~/i18n'

import '~/scss/index.scss'

const app = createApp(App)
  .use(createPinia())
  .use(i18n)
  .use(router)
  .mount('#app')
