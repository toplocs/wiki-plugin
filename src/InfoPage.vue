<template>
  <PluginInfoPage
    :plugin-config="pluginConfig"
    icon="📖"
    :about="about"
    :features="features"
    :endpoints="endpoints"
    :development="development"
    :slot-descriptions="slotDescriptions"
  />
</template>

<script setup lang="ts">
import { PluginInfoPage } from '@toplocs/plugin-sdk'
import pluginConfig from './index'

const about = `
The Wiki Plugin brings collaborative wiki functionality to TopLocs spheres, enabling communities to create, share, and organize knowledge collectively. Built on TipTap for rich text editing and Gun.js for P2P data sync, it provides a decentralized knowledge management system.
`

const features = [
  {
    icon: '📝',
    title: 'Rich Text Editing',
    description: 'Create wikis with rich formatting including headings, lists, links, code blocks, and text alignment using TipTap editor'
  },
  {
    icon: '🔍',
    title: 'Wiki Organization',
    description: 'Browse, search, and organize wikis within each sphere with an intuitive interface'
  },
  {
    icon: '🔐',
    title: 'Sphere-Scoped Wikis',
    description: 'Each sphere maintains its own wiki collection, ensuring proper content separation and privacy'
  },
  {
    icon: '🔄',
    title: 'Real-time Sync',
    description: 'P2P synchronization ensures wikis are available across all sphere members instantly'
  },
  {
    icon: '👥',
    title: 'Community Collaboration',
    description: 'Multiple members can contribute to sphere wikis, building knowledge together'
  },
  {
    icon: '⚙️',
    title: 'Sphere Settings',
    description: 'Configure wiki preferences and permissions at the sphere level'
  }
]

const endpoints = {
  plugin: 'http://localhost:3006/assets/plugin.js',
  landing: 'https://toplocs.github.io/wiki-plugin',
  demo: 'http://localhost:3000'
}

const development = {
  stack: ['Vue 3', 'TypeScript', 'TipTap', 'Gun.js', 'Tailwind CSS'],
  setup: `pnpm install && pnpm dev`,
  urls: [
    { label: 'GitHub Repository', url: 'https://github.com/toplocs/wiki-plugin' },
    { label: 'Plugin Development', url: 'http://localhost:3006' }
  ]
}

const slotDescriptions = {
  'Topic → Info → Content': 'MainView: Displays wikis associated with the current topic',
  'Topic → Info → Sidebar': 'SidebarView: Shows wiki-related actions and quick access',
  'Topic → Settings → Content': 'SettingsView: Wiki configuration options for the sphere'
}
</script>