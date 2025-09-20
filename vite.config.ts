import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname),
        '@': path.resolve(__dirname, 'src'),
        '@tests': path.resolve(__dirname, '__tests__'),
        '@app-types': path.resolve(__dirname, 'types'),
      },
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        [env.VITE_API_BASE_PATH]: {
          target: 'http://localhost:3001',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
