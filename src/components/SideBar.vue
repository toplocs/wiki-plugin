<template>
  <div className="mb-4 min-w-[200px]">
    <Title>Wiki pages:</Title>

    <router-link
      v-for="page of pages"
      :key="page.id"
      :to="`${href}?page=${page.id}`"
    >
      <WikiListItem :title="page.title || 'Untitled'" />
    </router-link>

    <router-link
      :to="`${href}/create`"
      class="flex items-center p-2 w-full border-t border-gray-100 dark:border-gray-700 hover:bg-blue-50 text-blue-500 dark:hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
    > Create a new Page
    </router-link>
  </div>
</template>

<script setup lang="ts">
import '../assets/main.css';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Title from './common/Title.vue';
import WikiListItem from './WikiListItem.vue';
import { useWiki } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String,
})
const { pages, setPage } = useWiki();
const href = computed(() => `/topic/${props.parentId}/wiki`);
</script>
