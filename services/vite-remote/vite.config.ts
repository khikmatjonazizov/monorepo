import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "ES2022"
  },
  plugins: [
    react(),
    federation({
      name: 'vite_remote',
      filename: 'remoteEntry.js',
      exposes: {
        './button': path.resolve(__dirname, 'src', 'shared', 'ui', 'button.tsx'),
      },
      shared: ['react', 'react-dom']
    })
  ],
})
