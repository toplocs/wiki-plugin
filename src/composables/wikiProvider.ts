import { ref, inject, provide, computed, onMounted, onUnmounted } from 'vue';
import gun from '../gun';

export function wikiProvider(
  instance: string,
) {
  const wiki = ref(null);
  const pages = ref([]);
  const count = computed(() => pages.value.length)

  const createPage = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    pages.value.push({
      page: count.value,
      ...data
    });

    const node = gun.get(`wiki-plugin/${instance}/${count.value}`).put({
      page: count.value,
      ...data
    });
    gun.get('wikis').get(instance).set(node);
    console.log(count.value)

    return node;
  }

  const setPage = async (pageNumber: number) => {
    wiki.value = pages.value.find(x => x.page === pageNumber)

    return page.value;
  }

  const editPage = async (data: Profile) => {
    wiki.value = data;

    return wiki.value;
  }

  const removePage = async (id: string) => {
    const node = gun.get(`wiki/${instance}/${id}`);
    node.then(() => {
      gun.get('wikis').get(id).unset(node);
      wiki.value = null;
    });
  }

  onMounted(() => {
    gun.get('wikis')
    .get(instance)
    .map()
    .once((data) => {
      if (data) {
        pages.value.push(data);
      }
    });
  });

  provide('wiki', {
    wiki,
    pages,
    createPage,
    setPage,
    editPage,
    removePage,
  });
}

export function useWiki() {
  const data = inject('wiki');

  if (!data) {
    throw new Error('Composable must have an wiki provider.');
  }

  return data;
}