import { defineStore } from 'pinia';
import type { Corridors } from '@/utils/interfaces';
import * as api from '@/services/api';

export const corridorsStore = defineStore('corridorsStore', {
  state: () => ({
    allCorridors: [] as Corridors[],
    loading: false
  }),

  actions: {
    async fetchCorridors() {
      try {
        this.allCorridors = await api.getAllCorridors();
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
