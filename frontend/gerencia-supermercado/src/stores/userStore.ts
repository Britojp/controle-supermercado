import { defineStore } from 'pinia';
import api from '@/services/api';
import type { User } from '@/utils/intefaces';
import { toast } from 'vue3-toastify';

export const userStore = defineStore('userStore', {
  state: () => ({
    productsData: null as any,
    allUsers: [] as User[],
  }),

  actions: {
    async fetchUserData() {
      try {
        const response = await api.get("user");
        this.allUsers = response.data;
        return response.data;
      } catch (error) {
        console.error("Erro ao carregar todos os usuários:", error);
        return [];
      }
    },

    async createNewUser(userData: User) {
      try {
        const response = await api.post('/user', {
          name: userData.name,
          email: userData.email,
          password: userData.password
        });
        console.log('Usuário criado com sucesso:', response.data);
        return response.data;
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
        throw error;
      }
    },

    async deleteUser(userId: string){
      try {
        await api.delete(`/user/${userId}`);
        this.allUsers = this.allUsers.filter(user => user.id !== userId);
      }catch(e){
        toast.error("Erro ao deletar usuário")
      }
    }
  }

});
