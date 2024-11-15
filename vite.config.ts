import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  plugins: [
    vue(),
    federation({
        name: 'wiki-plugin',
        filename: 'plugin.js',
        exposes: { //add config file for routing etc.
          './WikiView': './src/views/WikiView.vue',
          './WikiCreateView': './src/views/WikiCreateView.vue',
          './Main': './src/components/Main.vue',
          './Sidebar': './src/components/Sidebar.vue',
        },
        shared: ['vue']
    }),
    topLevelAwait({
      promiseExportName: '__tla',
      promiseImportName: i => `__tla_${i}`
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  /*server: {
    port: 3000,
  },*/
  /*define: {
    'process.env': {},
  },*/
  build: {
    outDir: './server/views',
    /*lib: {
      entry: 'src/main.ts', // Entry point for the plugin
      name: 'ChatPlugin',
      fileName: (format) => `ChatPlugin.${format}.js`
    },*/
    /*rollupOptions: {
      // Ensure the component can be imported by the main app
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }*/
  }
});
