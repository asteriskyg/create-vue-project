import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    hmr: {
      path: 'ws',
      port: 5173,
      timeout: 3000,
      clientPort: 443,
    },
    strictPort: true,
  }
});
