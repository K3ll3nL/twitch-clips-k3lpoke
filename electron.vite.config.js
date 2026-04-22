import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin({ exclude: ['obs-websocket-js', 'electron-updater', 'axios'] })]
  },
  renderer: {
    resolve: {
      alias: { '@': resolve('src/renderer/src') }
    },
    plugins: [react()]
  }
})
