import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin({ exclude: ['obs-websocket-js', 'electron-updater', 'axios'] })]
  },
  preload: {
    build: {
      lib: {
        entry: resolve('src/preload/index.js'),
        formats: ['cjs']
      }
    }
  },
  renderer: {
    resolve: {
      alias: { '@': resolve('src/renderer/src') }
    },
    plugins: [react()]
  }
})
