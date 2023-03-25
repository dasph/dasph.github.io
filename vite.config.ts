import { defineConfig, mergeConfig, UserConfigExport } from 'vite';
import solid from 'vite-plugin-solid';

import { entry } from './src/plugins';

const common: UserConfigExport = {
  resolve: {
    alias: {
      '@hooks': '/src/hooks',
      '@types': '/src/types',
      '@assets': '/src/assets'
    }
  },
  plugins: [solid({ ssr: true })]
};

const client: UserConfigExport = {
  build: {
    target: 'esnext',
    outDir: './dist/client'
  },
  server: {
    port: 3000,
    host: true
  },
  plugins: [entry('./src/assets/index.html')]
};

const server: UserConfigExport = {
  build: {
    ssr: true,
    outDir: './dist/server',
    rollupOptions: {
      input: {
        index: './src/server.tsx'
      },
      output: {
        format: 'cjs'
      }
    }
  }
};

export default defineConfig(({ mode }) => mergeConfig(common, mode === 'server' ? server : client));
