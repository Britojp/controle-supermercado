import type { User } from "@/utils/intefaces";
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    accept: 'application/json',
  }
});

export const getAllUsers = async () => {
  try {
    const response = await api.get('/user');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw new Error('Erro ao buscar usuários');
  }
};

export const createNewUser = async (userData: User) => {
  try {
    const response = await api.post('/user', {
      name: userData.name,
      email: userData.email,
      password: userData.password
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  try {
    await api.delete(`/user/${userId}`);
    console.log(userId)
  } catch (e) {
    console.error("Erro ao deletar usuário:", e);
    throw e;
  }
};

export const editUser = async (user: User) => {
  try {
const response = await api.patch(`/user/${user.id}`, {
      name: user.name,
      email: user.email,
      password: user.password
    });
    return response.data;
  } catch (e){
    console.error("Erro ao editar usuário", e);
    throw e;
  }
}

export default api;
