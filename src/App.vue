<template>
  <WikiView parentId="test" />

  <WikiCreate parentId="test" />
</template>

<script setup lang="ts">
import './assets/main.css';
import { ref, provide } from 'vue';
import WikiView from './views/WikiView.vue';
import WikiCreate from './views/WikiCreate.vue';

const tab = ref('Wiki');

provide('tab', tab);
</script>
