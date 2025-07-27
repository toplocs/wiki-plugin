import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PluginEnvironment from './components/PluginEnvironment.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: PluginEnvironment,
    },
    {
      path: '/:id',
      component: PluginEnvironment,
    }
  ]
});

// Development environment - standalone
const app = createApp(App);
app.use(router);
app.mount('#link-plugin');