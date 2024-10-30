import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import SdkService from './composables/sdkService'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
})

const sdkService = SdkService.getInstance()

sdkService.init().then(() => {
  sdkService.emitLoaded()
})

app.use(router)
app.mount('#app')
