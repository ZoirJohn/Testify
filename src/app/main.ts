import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify/framework'

import App from './App.vue'
import router from './router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createI18n } from 'vue-i18n'
import { uz } from '@/shared/i18n/uz.ts'
import { ru } from '@/shared/i18n/ru.ts'
import { en } from '@/shared/i18n/en.ts'

const pinia = createPinia()
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  defaultLocale: 'uz',
  messages: {
    uz,
    ru,
    en,
  },
})
const vuetify = createVuetify({
  components,
  directives,
  theme: { defaultTheme: 'dark' },
})
const app = createApp(App).use(router).use(pinia).use(vuetify).use(i18n)

app.mount('#app')
