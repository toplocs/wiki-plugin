<template>
  <Search
    placeholder="Add some interests ..."
    name="selectedItem"
    :findOptions="findInterests"
    @selected="addInterest"
  />
  <div class="mt-2 space-x-1 space-y-1">
    <span v-for="interest of interests">
      <InterestBadge
        :key="interest.id"
        :title="interest.title"
        :remove="() => removeInterest(interest)"
      />
    </span>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import TextInput from './common/TextInput.vue';
import Search from './Search.vue';
import InterestBadge from './badges/InterestBadge.vue';

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  }
});
const emit = defineEmits(['update:modelValue']);
const shellURL = import.meta.env.VITE_SHELL_API_URL;
const interests = ref(props.modelValue);

const findInterests = async (title: string) => {
  try {
    const response = await axios.get(`${shellURL}/api/interest?title=${title}`);

    return response.data
  } catch (error) {
    console.error(error);
  }
}

const addInterest = (selected: Object) => {
  if (interests.value.includes(selected)) return;
  interests.value.push(selected);
  emit('update:modelValue', interests.value);
}

const removeInterest = (interest: Object) => {
  interests.value = interests.value.filter(x => x != interest);
  emit('update:modelValue', interests.value);
}
</script>
