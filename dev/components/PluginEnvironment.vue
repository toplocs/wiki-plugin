<template>
  <div class="p-8 max-w-6xl mx-auto">
    <div class="flex items-center justify-between border-b-2 border-blue-600 pb-2 mb-8">
      <h1 class="text-3xl font-bold text-gray-900">
        Plugin Development Environment
    </h1>
      <div class="flex items-center gap-2">
        <span class="text-sm text-gray-600">Mode:</span>
        <span 
          class="px-3 py-1 rounded-full text-sm font-semibold"
          :class="isPreviewMode ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'"
        >
          {{ isPreviewMode ? 'Preview (Federation)' : 'Dev (Hot Reload)' }}
        </span>
      </div>
    </div>

    <div class="flex flex-row gap-4">
      <div class="flex flex-col gap-4 w-3/4">
        <h2 class="text-2xl font-semibold text-gray-700">
          <u>Main Content Area</u>
        </h2>
        <div v-for="(content, i) in contents" :key="i">
          <div
            v-if="content.page == 'Info'"
            class="border-2 border-blue-600 rounded-lg p-4 bg-white min-h-72"
          >
            <p class="text-gray-600 mb-2">
              Entity: {{ content.entity }}
            </p>
            <p class="text-gray-600 mb-2">
              Page: {{ content.page }}
            </p>
            <p class="text-gray-600 mb-4">
              {{ content.component }}
            </p>

            <!-- Dev mode: Direct component rendering -->
            <DirectComponent
              v-if="components[content.component]"
              :component="components[content.component]"
            />
            <!-- Preview mode: Federated component via PluginComponent -->
            <PluginComponent 
              v-else
              :plugin="pluginConfig"
              :position="content.component" 
            />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-4 min-w-72">
        <h2 class="text-2xl font-semibold text-gray-700">
          <u>Sidebar</u>
        </h2>
        <div v-for="(sidebar, i) in sidebars" :key="i" >
          <div class="border-2 border-blue-600 rounded-lg p-4 bg-white min-h-72">
            <p class="text-gray-600 mb-2">
              Entity: {{ sidebar.entity }}
            </p>
            <p class="text-gray-600 mb-2">
              Page: {{ sidebar.page }}
            </p>
            <p class="text-gray-600 mb-4">
              {{ sidebar.component }}
            </p>
            <!-- Dev mode: Direct component rendering -->
            <DirectComponent
              v-if="components[sidebar.component]"
              :component="components[sidebar.component]"
            />
            <!-- Preview mode: Federated component via PluginComponent -->
            <PluginComponent 
              v-else
              :plugin="pluginConfig"
              :position="sidebar.component" 
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-4 w-3/4">
      <h2 class="text-2xl font-semibold text-gray-700">
        <u>Settings Area</u>
      </h2>
      <div v-for="(content, i) in contents" :key="i">
        <div
          v-if="content.page == 'Settings'"
          class="border-2 border-blue-600 rounded-lg p-4 bg-white min-h-72"
        >
          <p class="text-gray-600 mb-2">
            Entity: {{ content.entity }}
          </p>
          <p class="text-gray-600 mb-2">
            Page: {{ content.page }}
          </p>
          <p class="text-gray-600 mb-4">
            {{ content.component }}
          </p>

          <!-- Dev mode: Direct component rendering -->
          <DirectComponent
            v-if="components[content.component]"
            :component="components[content.component]"
          />
          <!-- Preview mode: Federated component via PluginComponent -->
          <PluginComponent 
            v-else
            :plugin="pluginConfig"
            :position="content.component" 
          />
        </div>
      </div>
    </div>
    
    <div class="flex items-center justify-between border-b-2 border-blue-600 pb-2 mt-12 mb-4">
      <h1 class="text-3xl font-bold text-gray-900">
        Plugin Paths
      </h1>
    </div>

    <div class="flex flex-col gap-2">
      <div v-for="(path, i) of pluginConfig?.paths" :key="i">
        <div
          class="border-2 border-blue-600 rounded-lg p-4 bg-white min-h-72"
        >
          <p class="text-gray-600 mb-2">
            URL: {{ path.url }}
          </p>

          <!-- Dev mode: Direct component rendering -->
          <DirectComponent
            v-if="components[path.component]"
            :component="components[path.component]"
          />
          <!-- Preview mode: Federated component via PluginComponent -->
          <PluginComponent 
            v-else 
            :plugin="pluginConfig" 
            :position="path.component"
          />
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between border-b-2 border-blue-600 pb-2 mt-12 mb-4">
      <h1 class="text-3xl font-bold text-gray-900">
        Plugin Tabs
      </h1>
    </div>
    <ul>
      <li v-for="tab of pluginConfig?.tabs">
        {{ tab.value }}
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import DirectComponent from './DirectComponent.vue';
import PluginComponent from './PluginComponent.vue';

import {
  __federation_method_getRemote as getRemote,
  __federation_method_setRemote as setRemote,
  __federation_method_unwrapDefault as unwrapModule,
} from 'virtual:__federation__';

interface BasePluginConfig {
  id: string;
  name: string;
  url: string;
  version?: string;
  description?: string;
  author?: string;
  slots: Array<PluginSlot>;
  paths: Array<PluginPath>;
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

// Mode detection
const isPreviewMode = ref(false);
const pluginConfig = ref<BasePluginConfig | null>(null);
const components = ref({});

const contents = computed(() => pluginConfig.value?.slots.filter(
  x => x.slot == 'Content'
));
const sidebars = computed(() => pluginConfig.value?.slots.filter(
  x => x.slot == 'Sidebar'
));

// Check if preview mode (plugin server at 3006) is running
async function detectMode() {
  try {
    await fetch('http://localhost:3006/assets/plugin.js', {
      method: 'HEAD',
    });
    isPreviewMode.value = true;
  } catch {
    isPreviewMode.value = false;
  }
}

const loadPluginConfig = async (pluginUrl) => {
  try {
    setRemote('plugin', {
      url: () => Promise.resolve(pluginUrl),
      format: 'esm',
      from: 'vite'
    });

    const module = await getRemote('plugin', './PluginConfig');
    const component = await unwrapModule(module);
    return component;
  } catch (e) {
    console.error('Failed to load remote plugin config:', e);
  }
};

// Load components directly from source in dev mode
async function loadDirectImports() {
  try {
    // First load config to get component list
    const configModule = await import('../../src/index.ts');
    const config = configModule.default;
    
    if (!config) {
      console.error('Config is undefined');
      return;
    }
    
    console.log('Config loaded:', config);
    pluginConfig.value = config;
    const componentSet = new Set<string>();
    
    config.slots?.forEach(slot => {
      if (slot.component) componentSet.add(slot.component);
    });
    
    config.paths?.forEach(path => {
      if (path.component) componentSet.add(path.component);
    });
    
    const componentNames = Array.from(componentSet);
    console.log('Components to load:', componentNames);
    
    if (componentNames.length === 0) {
      console.log('No components found in config');
      return;
    }
    
    // Dynamic imports for all components
    const componentModules = await Promise.all(
      componentNames.map(async (name) => {
        try {
          const module = await import(`../../src/views/${name}.vue`);
          return { name, module: module.default };
        } catch (error) {
          console.error(`Failed to load component ${name}:`, error);
          return { name, module: null };
        }
      })
    );
    
    // Build components object
    const loadedComponents = {};
    componentModules.forEach(({ name, module }) => {
      if (module) {
        loadedComponents[name] = module;
      }
    });
    
    components.value = loadedComponents;
    console.log('Components loaded:', Object.keys(loadedComponents));
    
  } catch (error) {
    console.error('Failed to load direct imports:', error);
  }
}

// Load plugin in appropriate mode
async function loadPlugin() {
  await detectMode();
  
  if (isPreviewMode.value) {
    console.log('Preview mode: Loading from federation server');
    pluginConfig.value = await loadPluginConfig('http://localhost:3006/assets/plugin.js');
  } else {
    console.log('Dev mode: Loading direct imports from ../src');
    await loadDirectImports();
  }
  
  console.log("Final Plugin Config:", pluginConfig.value);
  console.log("Final Components:", components.value);
}

onMounted(() => {
  loadPlugin();
});
</script>