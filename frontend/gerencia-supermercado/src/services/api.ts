import type { User } from "@/utils/intefaces";
import axios from "axios";
import Cookies from "js-cookie";
import type { SupplierDTO, CreateSupplierDTO, UpdateSupplierDTO } from '@/dto/supplier.dto';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    accept: 'application/json',
  }
});

api.interceptors.request.use(config => {
  const token = Cookies.get('auth_token')
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});
//Pegando o token do Cookies salvo pelo pinia



//Usuários

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


// Fornecedores


export const getAllSuppliers = async (): Promise<SupplierDTO[]> => {
  try {
    const response = await api.get('/supplier');
    return response.data as SupplierDTO[];
  } catch (error) {
    console.error('Erro ao buscar fornecedores', error);
    throw new Error('Erro ao buscar fornecedores');
  }
};

export const createNewSupplier = async (supplierData: CreateSupplierDTO): Promise<SupplierDTO> => {
  try {
    const response = await api.post('/supplier', supplierData);
    return response.data as SupplierDTO;
  } catch (error) {
    console.error('Erro ao criar o fornecedor:', error);
    throw error;
  }
};

export const deleteSupplier = async (supplierId: string): Promise<void> => {
  try {
    await api.delete(`/supplier/${supplierId}`);
  } catch (error) {
    console.error('Erro ao deletar o fornecedor:', error);
    throw error;
  }
};

export const editSupplier = async (
  supplierId: string,
  supplierData: UpdateSupplierDTO
): Promise<SupplierDTO> => {
  try {
    const response = await api.patch(`/supplier/${supplierId}`, supplierData);
    return response.data as SupplierDTO;
  } catch (error) {
    console.error('Erro ao editar fornecedor', error);
    throw error;
  }
};



// Estados

export const getStates = async () => {
  try{
    const response = await api.get('/states');
    return response.data;
  } catch (error){
    console.error('Erro ao buscar estados', error);
    throw new Error('Erro ao bsucar estados');
  }
}


// Login

export const login = async (email: string, password: string) => {
  try{
    const response = await api.post(`/login`,{
      email,
      password,
    });
    return response.data;
  }catch (e){
    console.error("Erro no login", e);
    throw e;
  }
}




export default api;
