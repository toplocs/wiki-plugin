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
import { ref, computed, watchEffect, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Container from '@/components/common/Container.vue';
import Sidebar from '@/components/SideBar.vue';
import Title from '@/components/common/Title.vue';
import WikiPlugin from '@/components/Main.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const route = useRoute();

wikiProvider('9138e908-b6e3-4bfa-b34f-960a0e703500');
</script>
