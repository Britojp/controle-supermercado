import axios from 'axios'
import Cookies from 'js-cookie'
import type { SupplierDTO, CreateSupplierDTO, UpdateSupplierDTO } from '@/dto/supplier.dto'
import type { createUserDTO, UserDTO } from '@/dto/users.dto'
import type { CreateTransactionDTO, TransactionDTO } from '@/dto/transaction.dto'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    accept: 'application/json',
  },
})

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get('auth_token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
//Pegando o token do Cookies salvo pelo pinia

//Usuários

export const getAllUsers = async () => {
  try {
    const response = await api.get('/user')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    throw new Error('Erro ao buscar usuários')
  }
}

export const createNewUser = async (userData: createUserDTO) => {
  try {
    const response = await api.post('/user', {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    })

    return response.data
  } catch (error) {
    console.error('Erro ao criar usuário:', error)
    throw error
  }
}

export const deleteUser = async (userId: string) => {
  try {
    await api.delete(`/user/${userId}`)
    console.log(userId)
  } catch (e) {
    console.error('Erro ao deletar usuário:', e)
    throw e
  }
}

export const editUser = async (user: UserDTO) => {
  try {
    const response = await api.patch(`/user/${user.id}`, {
      name: user.name,
      email: user.email,
      password: user.password,
    })
    return response.data
  } catch (e) {
    console.error('Erro ao editar usuário', e)
    throw e
  }
}

// Fornecedores

export const getAllSuppliers = async (): Promise<SupplierDTO[]> => {
  try {
    const response = await api.get('/supplier')
    return response.data as SupplierDTO[]
  } catch (error) {
    console.error('Erro ao buscar fornecedores', error)
    throw new Error('Erro ao buscar fornecedores')
  }
}

export async function createNewSupplier(supplierData: CreateSupplierDTO): Promise<SupplierDTO> {
  try {
    const response = await api.post('/supplier', supplierData)
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error('Erro ao criar o fornecedor:', error.response.data)
    } else {
      console.error('Erro desconhecido:', error)
    }
    throw error
  }
}

export const deleteSupplier = async (supplierId: string): Promise<void> => {
  try {
    await api.delete(`/supplier/${supplierId}`)
  } catch (error) {
    console.error('Erro ao deletar o fornecedor:', error)
    throw error
  }
}

export const editSupplier = async (
  supplierId: string,
  supplierData: UpdateSupplierDTO
): Promise<SupplierDTO> => {
  try {
    const response = await api.patch(`/supplier/${supplierId}`, supplierData)
    return response.data as SupplierDTO
  } catch (error) {
    console.error('Erro ao editar fornecedor', error)
    throw error
  }
}

// Estados

export const getStates = async () => {
  try {
    const response = await api.get('/states')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar estados', error)
    throw new Error('Erro ao bsucar estados')
  }
}

// Login

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post(`/login`, {
      email,
      password,
    })
    return response.data
  } catch (e) {
    console.error('Erro no login', e)
    throw e
  }
}


// Marcas

export const getAllBrands = async () => {
  try {
    const response = await api.get('/brand')

    return response.data
  } catch (error) {
    console.error('Erro ao buscar marcas:', error)
    throw new Error('Erro ao buscar marcas')
  }
}

export const createNewBrand = async (brandData: { name: string }) => {
  try {
    const response = await api.post('/brand', brandData)
    return response.data
  } catch (error) {
    console.error('Erro ao criar marca:', error)
    throw new Error('Erro ao criar marca')
  }
}

// Categorias

export const getAllCategories = async () => {
  try {
    const response = await api.get('/categories')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar categorias:', error)
    throw new Error('Erro ao buscar categorias')
  }
}

// Unidades de Medida
export const getAllUnits = async () => {
  try {
    const response = await api.get('/measurement')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar unidades de medida:', error)
    throw new Error('Erro ao buscar unidades de medida')
  }
}

// Prateleiras
export const getAllShelves = async () => {
  try {
    const response = await api.get('/shelves')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar prateleiras:', error)
    throw new Error('Erro ao buscar prateleiras')
  }
}

// Corredores
export const getAllCorridors = async () => {
  try {
    const response = await api.get('/corridors')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar corredores:', error)
    throw new Error('Erro ao buscar corredores')
  }
}

// Transações
export const getAllTransactions = async () => {
  try {
    const response = await api.get('/transaction')
    return response.data
  } catch (error) {
    console.error('Erro ao buscar transações:', error)
    throw new Error('Erro ao buscar transações')
  }
}

export const createNewTransaction = async (transactionData: CreateTransactionDTO) : Promise<TransactionDTO> => {
  try {
    const response = await api.post('/transaction', transactionData)
    return response.data
  } catch (error) {
    console.error('Erro ao criar transação:', error)
    throw new Error('Erro ao criar transação')
  }
}
export const deleteTransaction = async (transactionId: string) => {
  try {
    await api.delete(`/transaction/${transactionId}`)
    console.log(`Transação ${transactionId} deletada com sucesso`)
  } catch (error) {
    console.error('Erro ao deletar transação:', error)
    throw new Error('Erro ao deletar transação')
  }
}


export default api
