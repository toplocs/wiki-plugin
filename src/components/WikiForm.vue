<template>
  <form
      ref="form"
      @submit.prevent="onSubmit"
    >
      <Callout v-if="successMessage" color="green">
        {{ successMessage }}
      </Callout>
      <Callout v-if="errorMessage" color="red">
        {{ errorMessage }}
      </Callout>

      <div className="mb-2">
        <label
          for="title"
          class="block text-gray-900 dark:text-gray-100 font-medium text-sm mb-2"
        > Wiki Page Title
        </label>

        <TextInput
          type="text"
          id="title"
          name="title"
          autoComplete="title"
          placeholder="The wiki page title"
        />
      </div>

      <div class="mb-2">
        <AddInterests v-model="interests" />
      </div>

      <div class="mb-2">
        <AddLocations v-model="locations" />
      </div>

      <WikiEdit v-model="content" />

      <div class="mt-2 space-x-2">
        <button
          type="submit"
          class="px-4 py-2 rounded font-semibold transition-colors duration-200 bg-green-500 hover:bg-green-600 text-white"
        > Create
        </button>
      </div>
    </form>
</template>

<script setup lang="ts">
import '../assets/main.css';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Title from '@/components/common/Title.vue';
import Callout from '@/components/common/Callout.vue';
import TextInput from '@/components/common/TextInput.vue';
import AddInterests from '@/components/AddInterests.vue';
import AddLocations from '@/components/AddLocations.vue';
import WikiEdit from '@/components/WikiEdit.vue';
import { useWiki } from '@/composables/wikiProvider';

const route = useRoute();
const { pages, createPage } = useWiki();
const form = ref<HTMLFormElement | null>(null);
const successMessage = ref('');
const errorMessage = ref('');
const content = ref(
  `<h2>
      Welcome to the Wiki
    </h2>

    <p>
      This is a simple <em>wiki</em> page made for your <strong>text editor</strong>. It includes basic text styles that you would expect from any modern editor. But there’s more than just text. Take a look at the lists below:
    </p>

    <ul>
      <li>
        A standard bullet point …
      </li>
      <li>
        … with two items, just for fun.
      </li>
    </ul>

    <p>
      Pretty cool, right? But that’s not all! Here’s a code block for you to try:
    </p>

    <pre><code class="language-js">function greet() {
      console.log("Hello, world!");
    }</code></pre>

    <p>
      Nice, isn’t it? Don’t stop there, explore more features by trying out different options. Maybe even create some more code or lists of your own.
    </p>

    <blockquote>
      "This wiki page looks fantastic, keep up the good work!" 👏
      <br />
      — Your Mentor
    </blockquote>

  `
);

const onSubmit = async () => {
  try {
    if (successMessage.value.length) return;
    const formData = new FormData(form.value ?? undefined);
    formData.append('content', JSON.stringify(content.value));
    const node = await createPage(formData);
    successMessage.value = 'Wiki content was saved successfully!';
  } catch (error) {
    console.error(error);
    errorMessage.value = error.response.data;
  }
}
</script>
