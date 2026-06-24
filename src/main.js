import { createApp } from 'vue';
import { i18n } from './locales'; // Importe o plugin
import App from './App.vue';
import './assets/main.css';

const app = createApp(App);
app.use(i18n); // Registre o plugin
app.mount('#app');
