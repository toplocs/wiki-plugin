import { ref, inject, provide, watch, onMounted, onUnmounted } from 'vue';
import gun from '../gun';

export function wikiProvider(
  instance: string,
) {
  const pages = ref([]);

  const createPage = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    const email = data.email.toLowerCase();
    const hash = CryptoJS.SHA256(email).toString(CryptoJS.enc.Hex);
    wiki.value = {
      ...data,
      id: id,
      image: `https://gravatar.com/avatar/${hash}`,
    }

    const node = gun.user().get(`wiki/${id}`).put(wiki.value);
    gun.user().get('wikis').set(node);
    gun.get('wikis').get(id).set(node);

    return wiki.value;
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
    wiki,
    createWiki,
    editWiki,
    removeWiki,
  });
}

export function useProfile() {
  const data = inject('wiki');

  if (!data) {
    throw new Error('Composable must have an wiki provider.');
  }

  return data;
}