import { ref, onMounted } from 'vue';

const isDark = ref(false);

export function useTheme() {
    const toggleDarkMode = () => {
        isDark.value = !isDark.value;
        document.documentElement.classList.toggle('dark', isDark.value);
        localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
    };

    onMounted(() => {
        const savedTheme = localStorage.getItem('theme');
        isDark.value =
            savedTheme === 'dark' ||
            (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
        document.documentElement.classList.toggle('dark', isDark.value);
    });

    return { isDark, toggleDarkMode };
}
