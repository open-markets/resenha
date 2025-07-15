/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

// Leaflet
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
