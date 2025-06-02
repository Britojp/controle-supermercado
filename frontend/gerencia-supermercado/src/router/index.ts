/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import AllEmployees from '@/pages/allEmployees.vue'
import Dashboard from '@/pages/dashboard.vue'
import Index from '@/pages/index.vue'
import Transaction from '@/pages/transaction.vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import { authStore } from '@/stores/authStore'
import AllSuppliers from '@/pages/allSuppliers.vue'
import AllTransactions from '@/pages/allTransactions.vue'
import AllProducts from '@/pages/AllProducts.vue'
import Settings from '@/pages/settings.vue'

const routes = [
  {path: '/', component: Index, meta: {hideNavBar: true}},
  {path: '/dashboard', component: Dashboard, meta: { requiresAuth: true }},
  {path: '/transacao', component: Transaction, meta: { requiresAuth: true }},
  {path: '/todos-funcionarios', component: AllEmployees, meta: { requiresAuth: true }},
  {path: '/produtos', component: AllProducts,   meta: { requiresAuth: true }},
  {path: '/todos-fornecedores', component: AllSuppliers,   meta: { requiresAuth: true }},
  {path: '/transacoes', component: AllTransactions, meta: {requiresAuth: true}},
  {path: '/configuracoes', component: Settings, meta: { requiresAuth: true }}
]


const router = createRouter({
  history: createWebHistory(),
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

router.beforeEach((to, from, next) => {
  const store = authStore();

  if (to.meta.requiresAuth && !store.isAuthenticated) {

    return next('/');
  }

  next();
});

export default router
