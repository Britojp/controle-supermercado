import { defineStore } from 'pinia';
import * as api from '@/services/api';
import type { BrandDTO, CreateBrandDTO } from '@/dto/brands.dto';

export const brandsStore = defineStore('brandStore', {
  state: () => ({
    allBrands: [] as BrandDTO[],
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

    async createBrand(brandData: CreateBrandDTO): Promise<BrandDTO> {
      try {
        const createdBrand = await api.createNewBrand(brandData);
        this.allBrands.push(createdBrand);
        return createdBrand;
      } catch (error) {
        console.error('Erro ao criar marca:', error);
        throw error;
      }
    },

    persist: true,
  }
}
);
