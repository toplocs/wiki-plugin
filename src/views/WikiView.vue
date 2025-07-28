<template>
  <Container>
    <div class="w-full mr-4">
      <WikiPlugin :query="query" />
    </div>

    <Sidebar :parentId="props.parentId" />
  </Container>
</template>

<script setup lang="ts">
import Container from '@/components/common/Container.vue';
import Sidebar from '@/components/SideBar.vue';
import Title from '@/components/common/Title.vue';
import WikiPlugin from '@/components/Main.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String,
  query: Object,
});

if (props.parentId) {
  wikiProvider(props.parentId);
}
</script>
