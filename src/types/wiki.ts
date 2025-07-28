export interface WikiPage {
  id: string;
  title?: string;
  content?: string;
  [key: string]: any;
}

import type { Ref } from 'vue';

export interface WikiProviderState {
  wiki: Ref<WikiPage | null>;
  pages: Ref<WikiPage[]>;
  createPage: (formData: FormData) => Promise<any>;
  setPage: (id: string) => Promise<WikiPage | undefined>;
  editPage: (formData: FormData) => Promise<any>;
  removePage: (id: string) => Promise<void>;
}