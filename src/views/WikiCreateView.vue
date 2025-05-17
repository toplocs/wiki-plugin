<template>
  <Container>
    <div class="w-full">
      <Card className="space-y-4">
        <Title>
          Creating a new wiki page:
        </Title>
        <WikiForm />
      </Card>
    </div>
  </Container>
</template>

<script setup lang="ts">
import '../assets/main.css';
import { ref, inject, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Card from '@/components/common/Card.vue';
import Container from '@/components/common/Container.vue';
import Title from '@/components/common/Title.vue';
import WikiForm from '@/components/WikiForm.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  interest: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  }
});
const route = useRoute();

wikiProvider('9138e908-b6e3-4bfa-b34f-960a0e703500'); //route.params.id

//axios.defaults.baseURL = apiURL;
</script>
