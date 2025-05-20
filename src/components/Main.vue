<template>
  <div class="p-6 border rounded-lg bg-white border-gray-300 dark:bg-gray-900 dark:border-gray-600 dark:text-white">
    <Title>{{ wiki?.title }}</Title>

    <div v-if="content.length">
      <div v-if="isEditing" class="mt-4 wiki-editor">
        <Callout v-if="successMessage" color="green">
          {{ successMessage }}
        </Callout>
        <Callout v-if="errorMessage" color="red">
          {{ errorMessage }}
        </Callout>

        <form
          ref="form"
          @submit.prevent="onSubmit"
          class="w-full bg-white-500"
        >
          <WikiEdit v-model="content" />
        
          <div class="mt-2 space-x-2">
            <button
              type="submit"
              class="px-4 py-2 rounded font-semibold transition-colors duration-200 bg-green-500 hover:bg-green-600 text-white"
            > Save
            </button>

             <button
              type="button"
              class="px-4 py-2 rounded font-semibold transition-colors duration-200 bg-gray-500 hover:bg-gray-600 text-white"
              @click.prevent="cancelEdit"
            > Cancel
            </button>
          </div>
        </form>
      </div>

      <div v-else class="wiki-display">
        <div v-html="content" className="mt-4 custom-editor"></div>
        <button
          class="mt-4 px-4 py-2 rounded font-semibold transition-colors duration-200 bg-green-500 hover:bg-green-600 text-white"
          @click="editContent"
        > Edit the Wiki
        </button>
      </div>
    </div>

    <span v-else>There is no content available</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import Title from '@/components/common/Title.vue';
import Callout from '@/components/common/Callout.vue';
import LocationBadge from '@/components/badges/LocationBadge.vue';
import InterestBadge from '@/components/badges/InterestBadge.vue';
import WikiEdit from './WikiEdit.vue';
import { useWiki } from '@/composables/wikiProvider';

const { wiki, editPage } = useWiki();
const form = ref<HTMLFormElement | null>(null);
const isEditing = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const content = ref('');

const editContent = () => {
  isEditing.value = true;
};

const cancelEdit = () => {
  isEditing.value = false;
};

const onSubmit = async () => {
  try {
    const formData = new FormData(form.value ?? undefined);
    formData.append('title', wiki.value?.title);
    formData.append('content', JSON.stringify(content.value));
    const node = await editPage(formData);
    successMessage.value = 'Wiki content was saved successfully!';
  } catch (error) {
    console.error(error);
    errorMessage.value = error.response.data;
  }
}

watchEffect(async () => {
  successMessage.value = '';
  errorMessage.value = '';
  content.value = JSON.parse(wiki.value?.content || '{}');
});
</script>
