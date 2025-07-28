<template>
  <MainComponent />
</template>

<script setup lang="ts">
import MainComponent from '@/components/Main.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String,
});

if (props.parentId) {
  wikiProvider(props.parentId);
}
</script>
