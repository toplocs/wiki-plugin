<template>
  <WikiView />

  <WikiCreateView />
</template>

<script setup lang="ts">
import './assets/main.css';
import { ref, inject, provide } from 'vue';
import { useRoute } from 'vue-router';
import WikiView from './views/WikiView.vue';
import WikiCreateView from './views/WikiCreateView.vue';
import wikiProvider from './composables/wikiProvider';

const tab = ref('Wiki');

provide('tab', tab);
wikiProvider('9138e908-b6e3-4bfa-b34f-960a0e703500');
</script>
