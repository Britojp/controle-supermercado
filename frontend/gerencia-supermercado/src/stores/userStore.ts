import { defineStore } from 'pinia';
import * as api from '@/services/api';
import type { createUserDTO, UpdateUserDTO, UserDTO } from '@/dto/users.dto';

export const userStore = defineStore('userStore', {
  state: () => ({
    allUsers: [] as UserDTO[],
    loading: false
  }),

  actions: {
    async fetchUsers() {
      try {
        this.allUsers = await api.getAllUsers();
        this.loading = true
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    async createUser(userData: UserDTO): Promise<createUserDTO> {
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

    async editUser(user: UserDTO): Promise<UpdateUserDTO> {
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
