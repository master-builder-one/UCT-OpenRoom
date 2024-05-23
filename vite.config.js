import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basename from 'path-browserify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      path: "path-browserify",
    },
  },
  build:{
    target: "esnext", // or "es2019",
    rollupOptions: {
      input: {
        app: './',
      },
    },
  },
  server: {
    open: './',
  },
})