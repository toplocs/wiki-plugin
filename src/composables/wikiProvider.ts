import { ref, inject, provide, watch, onMounted, onUnmounted } from 'vue';
import gun from '../gun';

export function wikiProvider(
  instance: string,
) {
  const wiki = ref(); //remove
  const page = ref(1);
  const pages = ref([]);

  const createPage = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    pages.value.push(data);

    const node = gun.get(`wiki-plugin/${instance}/${page}`).put(data);
    gun.get('wikis').get(instance).get(page).set(node);
    console.log(pages.value)

    return node;
  }

  const editPage = async (data: Profile) => {
    wiki.value = data;

    return wiki.value;
  }

  const removePage = async (id: string) => {
    if (gun.user().is) {
      const node = gun.user().get(`wiki/${id}`);
      node.then(() => {
        gun.user().get('wikis').unset(node);
        gun.get('wikis').get(id).unset(node);
        wiki.value = null;
      });
    }
  }

  onMounted(() => {
    gun.user()
    .get('wikis')
    .map()
    .once((data) => {
      if (data && data.id === id) {
        wiki.value = data;
      }
    });
  });

  provide('wiki', {
    page,
    pages,
    createPage,
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