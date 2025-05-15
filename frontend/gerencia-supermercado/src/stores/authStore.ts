import { defineStore } from 'pinia';
import * as api from '@/services/api';
import { toast } from 'vue3-toastify';

export const authStore = defineStore('authStore', {
  state: () => ({
    token: localStorage.getItem('auth_token') || ''
  }),

  getters: {
    isAuthenticated(): boolean {
      return !!this.token;
    }
  },

  actions: {
    async login(email: string, password: string) {
      try {
        const { access_token } = await api.login(email, password);
        this.token = access_token;
        localStorage.setItem('auth_token', access_token);
        toast.success("Logado com sucesso!");
        return access_token;
      } catch (error) {
        console.error('Erro no login:', error);
        toast.error("Falha ao fazer login. Verifique suas credenciais.");
        throw error;
      }
    },

    logout() {
      this.token = '';
      localStorage.removeItem('auth_token');
      toast.info("Você saiu da sua conta.");
    }
  }
});
