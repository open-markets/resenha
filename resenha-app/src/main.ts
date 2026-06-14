import './assets/main.css'
import './assets/ui.scss'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import DialogService from 'primevue/dialogservice';

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(DialogService)

app.mount('#app')
