import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import vuetify from 'vite-plugin-vuetify'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {map} from "./resolveHelper.ts"

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    vueDevTools(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        '@vueuse/core',
        'vue-i18n',
        { vuetify: ['useDisplay', 'useTheme'] },
        { '@vueuse/integrations/useChangeCase': ['useChangeCase'] },
      ],
      dirs: ['src/composables', 'src/stores', 'src/utils'],
      eslintrc: { enabled: true },
      dts: 'src/app/types/auto-import.d.ts',
      vueTemplate: true,
    }),
    Components({
      dirs: ['src/shared/ui'],
      resolvers: [
        (name) => {
          const from = map.get(name)
          if (from) return { name, from }
        },
      ],
      dts: 'src/app/types/components.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
