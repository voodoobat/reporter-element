import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import components from 'unplugin-vue-components/vite'
import eslint from 'vite-plugin-eslint'
import svg from 'vite-svg-loader'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    svg(),
    components({
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'm',
    jsxFragment: '"["',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '~/scss/_var' as *;
          @use '~/scss/_functions' as *;
          @use '~/scss/_mixins' as *;
       `,
      },
    },
  },
})
