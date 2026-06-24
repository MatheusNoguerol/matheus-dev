<template>
    <header class="fixed w-full z-20 top-0 inset-s-0">
        <nav class="bg-neutral-primary">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-7xl p-4">
                <a
                    href="https://flowbite.com"
                    class="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        class="h-7"
                        alt="Flowbite Logo"
                    />
                    <span class="self-center text-xl text-heading font-semibold whitespace-nowrap"
                        >Flowbite</span
                    >
                </a>
                <div class="flex items-center space-x-6 rtl:space-x-reverse">
                    <a
                        href="tel:5541251234"
                        class="text-sm text-body hover:text-brand-primary transition-colors"
                    >
                        (555) 412-1234
                    </a>

                    <button
                        @click="lang = lang === 'pt' ? 'en' : 'pt'"
                        class="text-xs font-bold uppercase tracking-wider text-body hover:text-brand-primary transition-all duration-300 w-8 h-8 rounded-full border border-gray-200 hover:border-brand-primary flex items-center justify-center"
                    >
                        {{ lang }}
                    </button>

                    <button
                        @click="toggleDarkMode"
                        class="p-2 rounded-full text-body hover:bg-gray-100 hover:text-brand-primary transition-all duration-300"
                        aria-label="Toggle theme"
                    >
                        <svg
                            v-if="isDark"
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <svg
                            v-else
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
        <nav class="bg-neutral-secondary-soft border-y border-default border-default">
            <div class="max-w-7xl px-4 py-3 mx-auto">
                <div class="flex items-center">
                    <ul
                        class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm"
                    >
                        <li>
                            <a href="#" class="text-heading hover:underline" aria-current="page"
                                >Home</a
                            >
                        </li>
                        <li>
                            <a href="#" class="text-heading hover:underline">Company</a>
                        </li>
                        <li>
                            <a href="#" class="text-heading hover:underline">Team</a>
                        </li>
                        <li>
                            <a href="#" class="text-heading hover:underline">Features</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const lang = ref('pt');
const isDark = ref(false);

const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    // Lógica para alternar a classe dark no elemento raiz
    if (isDark.value) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
};
</script>
