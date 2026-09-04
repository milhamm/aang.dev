import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  optimizeDeps: {
    include: ['shaders/react'],
  },
  plugins: [nitro(), tanstackStart(), viteReact()],
})

export default config
