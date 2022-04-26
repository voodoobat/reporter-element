import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '~/App.vue'
import router from '~/router'

import '~/scss/index.scss'

const app = createApp(App).use(router).use(createPinia()).mount('#app')
