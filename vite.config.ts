import { copyFile } from 'node:fs/promises'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'github-pages-spa-fallback',
      apply: 'build',
      async closeBundle() {
        await copyFile(
          new URL('./dist/index.html', import.meta.url),
          new URL('./dist/404.html', import.meta.url),
        )
      },
    },
  ],
  base: '/microleccion-audiovisual/',
})
