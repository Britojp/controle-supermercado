import { getAllCategories } from './../services/api';
import type { CategoriesDTO } from '@/dto/categories.dto';
import { defineStore } from 'pinia';

export const categoriesStore = defineStore('categoriesStore', {
  state: () => ({
    allCategories: [] as CategoriesDTO[],
    loading: false
  }),

  actions: {
    async fetchCategories() {
          this.loading = true;
          try {
            this.allCategories = await getAllCategories();
          } catch (error) {
            console.error(error);
          } finally {
            this.loading = false;
          }
        },
}
});
