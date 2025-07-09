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
import Card from '@/components/common/Card.vue';
import Container from '@/components/common/Container.vue';
import Title from '@/components/common/Title.vue';
import WikiForm from '@/components/WikiForm.vue';
import { wikiProvider } from '@/composables/wikiProvider';

const props = defineProps({
  parentId: String,
});

wikiProvider(props.parentId);
</script>
