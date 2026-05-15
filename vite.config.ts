import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
// DYNAMIC BASE-URL:
  // if VITE_IS_PREVIEW is set to "true" in our GitHub Action, we use a relative path ''.
  base: process.env.VITE_IS_PREVIEW === 'true' ? '' : '/wayfinder/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
