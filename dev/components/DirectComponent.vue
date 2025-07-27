<template>
  <Suspense>
    <template #default>
      <component
        v-if="component"
        :is="component"
        :parentId="route.params.id"
        :query="route.query"
      />
      <div v-else>
        <i class="text-sm text-gray-400">
          {{ plugin.name }} is not available
        </i>
      </div>
    </template>
    <template #fallback>
      <div>Loading remote component...</div>
    </template>
  </Suspense>
</template>

//
<script setup lang="ts">
import { useRoute } from 'vue-router';

const { component } = defineProps({
  component: {
    type: Object,
    required: true
  }
});

const route = useRoute();
console.log('Route params:', route.params);

</script>
