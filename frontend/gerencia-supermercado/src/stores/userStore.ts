import { defineStore } from 'pinia';
import type { User } from '@/utils/intefaces';
import * as api from '@/services/api';
import { toast } from 'vue3-toastify';

export const userStore = defineStore('userStore', {
  state: () => ({
    allUsers: [] as User[],
    loading: false,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        this.allUsers = await api.getAllUsers();
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async createUser(userData: User): Promise<User> {
      try {
        const createdUser = await api.createNewUser(userData);
        this.allUsers.push(createdUser);
        return createdUser;
      } catch (error) {
        throw error;
      }
    },


    async deleteUser(userId: string) {
      try {
        await api.deleteUser(userId);
        this.allUsers = this.allUsers.filter(user => user.id !== userId);
      } catch (error) {
        console.error(error);
      }
    },

    async editUser(user: User): Promise<User> {
      try {
        const updatedUser = await api.editUser(user);
        const index = this.allUsers.findIndex(u => u.id === user.id);
        if (index !== -1) {
          this.allUsers[index] = updatedUser;
        }
        return updatedUser;
      } catch (error) {
        throw error;
      }
    }

  }
});
