<template>
  <WikiView parentId="test" />

  <WikiCreateView parentId="test" />
</template>

<script setup lang="ts">
import './assets/main.css';
import { ref, inject, provide } from 'vue';
import { useRoute } from 'vue-router';
import WikiView from './views/WikiView.vue';
import WikiCreateView from './views/WikiCreateView.vue';
import { wikiProvider } from './composables/wikiProvider';

const tab = ref('Wiki');

provide('tab', tab);
</script>
