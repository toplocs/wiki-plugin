<template>
  <MainComponent />
</template>

<script setup lang="ts">
import MainComponent from '@/components/MainComponent.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String,
});

wikiProvider(props.parentId);
</script>
