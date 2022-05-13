import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '~/App.vue'
import router from '~/core/router'
import i18n from '~/core/i18n'

import '~/scss/index.scss'

createApp(App).use(router).use(createPinia()).use(i18n).mount('#app')
