import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Tắt Vue DevTools trong production
if (import.meta.env.PROD) {
  window.__VUE_PROD_DEVTOOLS__ = false;
}

// Tạo và mount ứng dụng Vue
const app = createApp(App);

// Cấu hình Vue
app.config.devtools = false;
app.config.performance = false;

app.mount('#app')
