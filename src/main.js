import { createApp } from 'vue';
import { i18n } from './locales'; // Importe o plugin
import { useTheme } from './composables/useTheme'; // Importe seu composable
import App from './App.vue';
import './assets/main.css';

const { initTheme } = useTheme();
initTheme(); // Aplica o tema imediatamente

const app = createApp(App);
app.use(i18n); // Registre o plugin
app.mount('#app');
