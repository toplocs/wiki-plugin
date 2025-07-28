<template>

</template>

<script setup lang="ts">
import Title from '@/components/common/Title.vue';
import Divider from '@/components/common/Divider.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String,
});

if (props.parentId) {
  wikiProvider(props.parentId);
}
</script>
