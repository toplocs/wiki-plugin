<template>
  <Container>
    <div class="w-full mr-4">
      <WikiPlugin :wikiId="wikiId" />
    </div>

    <Sidebar
      :wikiPages="wikiPages"
      :href="href"
      @selectWikiPage="selectWikiPage"
    />
  </Container>
</template>

<script setup lang="ts">
import '../assets/main.css';
import axios from 'axios';
import { ref, computed, inject, watchEffect, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Container from '@/components/common/Container.vue';
import Sidebar from '@/components/SideBar.vue';
import Title from '@/components/common/Title.vue';
import WikiPlugin from '@/components/Main.vue';

const apiURL = import.meta.env.VITE_API_URL;
const route = useRoute();
const profile = inject('profile');
const interest = inject('interest');
const location = inject('location');
const tab = inject('tab');
const wikiId = ref('');
const wikiPages = ref([]);
const href = computed(() => {
  const params = new URLSearchParams();
  if (interest.value) params.append('interest', interest.value.id);
  if (location.value) params.append('location', location.value.id);

  return `/wiki/create${params.toString() ? '?' + params.toString() : ''}`;
});

const fetchWikiPages = async (prop: String) => {
  try {
    const response = await axios.get(`/api/wiki/pages/${prop}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const selectWikiPage = (id: String) => {
  wikiId.value = id;
}

onMounted(async () => {
  wikiPages.value = await fetchWikiPages(
    interest.value?.id || location.value?.id
  );
  if (wikiPages.value.length) {
    wikiId.value = wikiPages.value[0].id;
  }
  tab.value = 'Wiki';  
});

axios.defaults.baseURL = apiURL;
</script>
