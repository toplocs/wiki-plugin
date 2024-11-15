<template>
  <div className="mb-4 min-w-[200px]">
    <Title>Wiki pages:</Title>
    <WikiListItem
      v-for="page of wikiPages"
      :key="page.id"
      :title="page.title"
      @click="() => selectWikiPage(page.id)"
    />
    <router-link
      :to="href"
      class="flex items-center p-2 w-full border-t border-gray-100 dark:border-gray-700 hover:bg-blue-50 text-blue-500 dark:hover:bg-gray-800 transition duration-150 ease-in-out cursor-pointer"
    > Create a new Page
    </router-link>
  </div>
</template>

<script setup lang="ts">
import '../assets/main.css';
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Title from './common/Title.vue';
import WikiListItem from './WikiListItem.vue';

const props = defineProps({
  wikiPages: {
    type: Array,
    default: [],
  },
  href: {
    type: String,
    default: '',
  }
});
const emit = defineEmits(['selectWikiPage']);

const selectWikiPage = (id: String) => {
  emit('selectWikiPage', id);
}
</script>
