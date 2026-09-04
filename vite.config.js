import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Modern baseline — avoids shipping legacy-browser transpilation/polyfills
    // for engines that don't need them.
    target: 'es2020',
  },
})
