import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    federation({
      name: 'wiki-plugin',
      filename: 'plugin.js',
      exposes: {
        './PluginConfig': './src/index.ts',
        './MainView': './src/views/MainView.vue',
        './SidebarView': './src/views/SidebarView.vue',
        './SettingsView': './src/views/SettingsView.vue',
        './WikiView': './src/views/WikiView.vue',
        './CreateView': './src/views/CreateView.vue',
      },
      shared: ['vue', 'tailwindcss'],
      remotes: {
        remoteName: '',
      },
    }),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: i => `__tla_${i}`
    })
  ],

  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  optimizeDeps: {
    exclude: ["__federation__"],
  },

  server: {
    port: 3006,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    outDir: './dist',
    assetsDir: '',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        landing: path.resolve(__dirname, 'landing.html')
      },
      output: {
        format: 'esm',
        entryFileNames: '[name].js',
      },
    },
  },
});
