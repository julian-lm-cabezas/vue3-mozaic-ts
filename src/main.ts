import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import libraries CSS
import '@mozaic-ds/vue-3/dist/mozaic-vue.css'
import '@vuepic/vue-datepicker/dist/main.css'

// Mount App
createApp(App).use(router).mount('#app')
