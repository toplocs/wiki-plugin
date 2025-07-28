import { ref, inject, provide, computed, onMounted, onUnmounted, type Ref } from 'vue';
import gun from '../gun';
import type { WikiProviderState, WikiPage } from '../types/wiki';

export function wikiProvider(
  instance: string, //637a553d-50c7-4101-b3b0-736727fe5e7e
) {
  const wiki: Ref<WikiPage | null> = ref(null);
  const pages: Ref<WikiPage[]> = ref([]);
  const count = computed(() => pages.value.length)

  const createPage = async (formData: FormData) => {
    const id = crypto.randomUUID();
    const data: any = Object.fromEntries(formData.entries());
    data.id = id;
    pages.value.push(data as WikiPage);

    const node = gun.get(`wiki-plugin/${id}`).put(data); //put data
    gun.get('wikis').get(instance).set(node); //set relations
    //gun.get('wikis').get(other topic).set(node);
    wiki.value = data as WikiPage;

    return node;
  }

  const setPage = async (id: string) => {
    wiki.value = pages.value.find(x => x.id === id) || null;

    return wiki.value || undefined;
  }

  const editPage = async (formData: FormData) => {
    const id = wiki.value?.id;
    if (!id) return;
    
    pages.value = pages.value.filter(x => x.id !== id);
    await removePage(id);
    const node = await createPage(formData);

    return node;
  }

  const removePage = async (id: string) => {
    const node = gun.get(`wiki-plugin/${id}`);
    (node as any).then(() => {
      gun.get('wikis').get(instance).unset(node);
    });
    wiki.value = null;
  }

  onMounted(() => {
    gun.get('wikis')
    .get(instance)
    .map()
    .once((data) => {
      if (data) {
        const exists = pages.value.some(x => x.id === data.id);
        if (!exists) {
         pages.value.push(data);
        }
      }
    });
  });

  onUnmounted(() => {
    gun.get('wikis')
    .get(instance)
    .map()
    .off();
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

export function useWiki(): WikiProviderState {
  const data = inject<WikiProviderState>('wiki');

  if (!data) {
    throw new Error('Composable must have a wiki provider.');
  }

  return data;
}