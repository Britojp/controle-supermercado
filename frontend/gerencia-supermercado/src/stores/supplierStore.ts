import { defineStore } from 'pinia';
import * as api from '@/services/api';
import type { CreateSupplierDTO, SupplierDTO, UpdateSupplierDTO } from '@/dto/supplier.dto';
import axios from 'axios';
import type { StateDTO } from '@/dto/state.dto';

export const supplierStore = defineStore('supplierStore', {
  state: () => ({
    allSuppliers: [] as SupplierDTO[],
    loading: false,
    states: [] as StateDTO[]
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
  console.log('Editando fornecedor:', id);
  console.log('Dados enviados para atualização:', JSON.stringify(data, null, 2));

  try {
    const updatedSupplier = await api.editSupplier(id, data);

    const index = this.allSuppliers.findIndex(supplier => supplier.id === id);
    if (index !== -1) {
      this.allSuppliers.splice(index, 1, updatedSupplier);
    } else {
      console.warn(`Fornecedor com id ${id} não encontrado na lista`);
    }

    return updatedSupplier;
  } catch (error: any) {
    console.error('Erro ao editar fornecedor no store:', error.response?.data || error.message);
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
