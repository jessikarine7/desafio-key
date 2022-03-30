import { createApp } from 'vue'
import App from './App.vue'

const production  = 'https://key-backend.herokuapp.com/api';
const development = 'http://localhost:3001';
const url = (process.env.NODE_ENV === 'development' ? development : production);

const app = createApp(App)
app.config.globalProperties.apiUrl = url;
app.mount('#app')
