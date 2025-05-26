import type { Brand } from '@/utils/interfaces';
import { defineStore } from 'pinia';
import * as api from '@/services/api';

export const brandsStore = defineStore('brandStore', {
  state: () => ({
    allBrands: [] as Brand[],
    loading: false
  }),

  actions: {
    async fetchBrands() {
      try {
        this.allBrands = await api.getAllBrands();
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
