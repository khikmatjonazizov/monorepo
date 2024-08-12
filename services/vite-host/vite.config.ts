import { type UserConfig, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "ES2022"
  },
  plugins: [
    react(),
    federation({
      name: 'vite_host',
      filename: 'remoteEntry.js',
      remotes: {
        'vite_remote': 'http://localhost:4001/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ],
}) satisfies UserConfig;
