import { defineStore } from 'pinia'
import * as api from '@/services/api'
import { toast } from 'vue3-toastify'
import router from '@/router'
import Cookies from 'js-cookie'

export const authStore = defineStore('authStore', {
  state: () => ({
    token: Cookies.get('auth_token') || '',
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    loading: false,
  }),

  getters: {
    isAuthenticated(): boolean {
      return !!this.token
    },
  },

  actions: {
    async login(email: string, password: string): Promise<string> {
      this.loading = true
      try {
        const { access_token, user } = await api.login(email, password)

        this.token = access_token

        Cookies.set('auth_token', access_token)

        router.push('/dashboard')
        setTimeout(() => {
          toast.success('Login realizado com sucesso!')
        }, 200)

        return access_token
      } catch (error) {
        console.error('Erro no login:', error)
        toast.error('Falha ao fazer login. Verifique suas credenciais.')
        throw error
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.token = ''
      this.user = null
      Cookies.remove('auth_token')
      router.push('/')
      setTimeout(() => {
        toast.info('Logout realizado com sucesso!')
      }, 200)
    },
  },
})
