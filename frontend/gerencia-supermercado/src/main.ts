/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import VueMask from '@devindex/vue-mask'

// Composables
import { createApp } from 'vue'
import router from './router'

const app = createApp(App)

registerPlugins(app)
app.use(VueMask)
app.use(router)
app.mount('#app')
