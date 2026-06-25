// src/composables/useTheme.js
import { ref } from 'vue';

const isDark = ref(false);

export function useTheme() {
    const toggleDarkMode = () => {
        isDark.value = !isDark.value;

        console.log('isDark:', isDark.value);
        console.log('html:', document.documentElement.className);

        applyTheme();
    };

    const applyTheme = () => {
        // Manipula a classe no elemento <html>
        if (isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        isDark.value = savedTheme === 'dark' || (!savedTheme && systemDark);
        applyTheme();
    };

    return { isDark, toggleDarkMode, initTheme };
}
