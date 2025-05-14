/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import {createPinia} from 'pinia';



// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './router'
import Vue3Toastify from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const app = createApp(App)
const pinia = createPinia()

app.use(Vue3Toastify, {
  autoClose: 3000,
  position: 'top-right',
  theme: 'colored',
});

registerPlugins(app)

app.use(pinia)
app.use(router)
app.mount('#app')
