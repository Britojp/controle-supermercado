import { defineStore } from 'pinia';
import * as api from '@/services/api';
import type { Shelves } from '@/utils/interfaces';

export const shelvesStore = defineStore('shelvesStore', {
  state: () => ({
    allShelves: [] as Shelves[],
    loading: false
  }),

  actions: {
    async fetchShelves() {
      try {
        this.allShelves = await api.getAllShelves();
        this.loading = true
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    persist: true,
  }
}
);
