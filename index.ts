// Plugin Development Environment
import { createPluginDevelopmentEnvironment, type PluginDevConfig } from '@toplocs/plugin-sdk';
import '@toplocs/plugin-sdk/style.css';

// Import plugin configuration and components
import pluginConfig from './src/index';
import MainView from './src/views/MainView.vue';
import SidebarView from './src/views/SidebarView.vue';
import SettingsView from './src/views/SettingsView.vue';
import WikiView from './src/views/WikiView.vue';
import CreateView from './src/views/CreateView.vue';

// Create development environment with plugin configuration
const devConfig: PluginDevConfig = {
  pluginConfig,
  components: {
    MainView,
    SidebarView,
    SettingsView,
    WikiView,
    CreateView
  }
};

const app = createPluginDevelopmentEnvironment(devConfig);

app.mount('#plugin-dev');