<template>
  <WikiView />

  <WikiCreateView />
</template>

<script setup lang="ts">
import './assets/main.css';
import axios from 'axios';
import { ref, inject, provide } from 'vue';
import { useRoute } from 'vue-router';
import WikiView from './views/WikiView.vue';
import WikiCreateView from './views/WikiCreateView.vue';

const apiURL = import.meta.env.VITE_API_URL;
const tab = ref('Wiki');
const interest = ref({
  id: '9138e908-b6e3-4bfa-b34f-960a0e703500',
  title: 'Test'
});
const location = ref(null);

provide('tab', tab);
provide('interest', interest);
provide('location', location);

axios.defaults.baseURL = apiURL;
</script>
