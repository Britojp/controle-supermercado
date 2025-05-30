import { defineStore } from 'pinia';
import * as api from '@/services/api';
import type { Meansurement } from '@/utils/interfaces';

export const uitsOfMeansureStore = defineStore('unitsOfMeansureStore', {
  state: () => ({
    allUnits: [] as Meansurement[],
    loading: false
  }),

  actions: {
    async fetchMeansurements() {
      try {
        this.allUnits = await api.getAllUnits();
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
