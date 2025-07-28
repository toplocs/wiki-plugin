<template>
  <Sidebar :parentId="props.parentId" />
</template>

//
<script setup lang="ts">
import Sidebar from '@/components/SideBar.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String,
});

console.log("SideBar instance: ", props.parentId);
wikiProvider(props.parentId ?? 'test');
</script>
