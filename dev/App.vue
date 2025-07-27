<template>
  <div class="min-h-screen bg-white dark:bg-black">

    <div class="mx-auto max-w-5xl">
      <RouterView :key="$route.params.id" />
    </div>
    
  </div>
</template>

//
<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>