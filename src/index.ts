/**
 * Main plugin entry point
 * This file defines the plugin configuration and exports it for use in TopLocs
 */

interface BasePluginConfig {
  id: string;
  name: string;
  url: string;
  version?: string;
  description?: string;
  author?: string;
  slots: Array<PluginSlot>;
  paths?: Array<PluginPath>;
  tabs?: Array<PluginTab>;
}

interface PluginSlot {
  entity: string;
  page: string;
  slot: string;
  component: string;
}

interface PluginPath {
  url: string;
  component: string;
}

interface PluginTab {
  value: string;
  href: string;
}

const pluginConfig: BasePluginConfig = {
  id: 'wiki_plugin',
  name: 'Wiki',
  url: 'http://localhost:3006/assets/plugin.js',
  version: '1.0.0',
  description: 'Share and organize wikis within TopLocs spheres',
  author: 'TopLocs Team',
  slots: [
    { entity: 'Topic', page: 'Info', slot: 'Content', component: 'MainView' },
    { entity: 'Topic', page: 'Info', slot: 'Sidebar', component: 'SidebarView' },
    { entity: 'Topic', page: 'Settings', slot: 'Content', component: 'SettingsView' },
  ],
  paths: [
    { url: 'wiki', component: 'WikiView' },
    { url: 'wiki/create', component: 'CreateView' },
  ],
  tabs: [
    { value: 'Wiki', href: 'wiki' },
  ]
};

export default pluginConfig;
