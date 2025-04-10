/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import AllEmployees from '@/pages/allEmployees.vue'
import Dashboard from '@/pages/dashboard.vue'
import Index from '@/pages/index.vue'
import Register from '@/pages/register.vue'
import Transaction from '@/pages/transaction.vue'
import { createRouter, createMemoryHistory } from 'vue-router/auto'

const routes = [
  {path: '/', component: Index},
  {path: '/dashboard', component: Dashboard},
  {path: '/transaction', component: Transaction},
  {path: '/register', component: Register},
  {path: '/allEmployees', component: AllEmployees}
]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
})


// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
