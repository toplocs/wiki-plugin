/**
 * Main plugin entry point
 * This file defines the plugin configuration and exports it for use in TopLocs
 */

import type { BasePluginConfig } from '@toplocs/plugin-sdk'

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
