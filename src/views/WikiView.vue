<template>
  <Container>
    <div class="w-full mr-4">
      <WikiPlugin />
    </div>

    <Sidebar />
  </Container>
</template>

<script setup lang="ts">
import '../assets/main.css';
import Container from '@/components/common/Container.vue';
import Sidebar from '@/components/SideBar.vue';
import Title from '@/components/common/Title.vue';
import WikiPlugin from '@/components/Main.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String
});

wikiProvider(props.parentId);
</script>
