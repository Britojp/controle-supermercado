import { defineStore } from 'pinia';
import api from '@/services/api';

export const dataStore = defineStore('dataStore', {
  state: () => ({
    productsData: null as any
  }),
  actions: {
    fetchProductsData() {
      api.get("product")
        .then((response: any) => {
          this.productsData = response.data;
        })
        .catch((err: any) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
  }
});

