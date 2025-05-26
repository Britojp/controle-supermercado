import { defineStore } from 'pinia';
import * as api from '@/services/api';
import type { States, Supplier } from '@/utils/intefaces';
import type { CreateSupplierDTO, SupplierDTO, UpdateSupplierDTO } from '@/dto/supplier.dto';
import axios from 'axios';

export const supplierStore = defineStore('supplierStore', {
  state: () => ({
    allSuppliers: [] as SupplierDTO[],
    loading: false,
    states: [] as States[]
  }),

  actions: {
    async fetchSuppliers() {
      this.loading = true;
      try {
        this.allSuppliers = await api.getAllSuppliers();
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async createSupplier(supplierData: CreateSupplierDTO): Promise<SupplierDTO> {
      try {
        const createdSupplier = await api.createNewSupplier(supplierData);
        return createdSupplier;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          console.error('Erro na API:', error.response.data);
        } else {
          console.error(error);
        }
        throw error;
}

    },

    async deleteSupplier(supplierId: string) {
      try {
        await api.deleteSupplier(supplierId);
        this.allSuppliers = this.allSuppliers.filter(supplier => supplier.id !== supplierId);
      } catch (error) {
        console.error(error);
      }
    },

  async editSupplier(id: string, data: UpdateSupplierDTO): Promise<SupplierDTO> {
  try {
    const updatedSupplier = await api.editSupplier(id, data);
    const index = this.allSuppliers.findIndex(u => u.id === id);
    if (index !== -1) {
      this.allSuppliers.splice(index, 1, updatedSupplier);
    }
    return updatedSupplier;
  } catch (error) {
    throw error;
  }
},


    async fetchStates() {
      this.loading = true;
      try {
        this.states = await api.getStates();
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  }
});
