<template>
    <header
        class="fixed w-full z-20 top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
    >
        <nav class="border-b border-gray-200 dark:border-gray-800">
            <div class="max-w-7xl mx-auto p-4 w-full">
                <div class="flex justify-between items-center w-full">
                    <a href="#" class="flex items-center space-x-3">
                        <img src="/images/logo/logo.png" class="h-8" alt="Logo" />
                        <span
                            class="self-center text-xl font-semibold text-gray-900 dark:text-white"
                            >{{ t('nav.first') }}</span
                        >
                    </a>

                    <div class="hidden md:flex items-center space-x-6">
                        <a
                            href="https://api.whatsapp.com/send/?phone=5521965230293&text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
                            class="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            +55 (21) 9 6523-0293
                        </a>
                        <button
                            @click="toggleLang"
                            class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                        >
                            <img
                                v-if="locale === 'pt'"
                                src="https://flagicons.lipis.dev/flags/4x3/br.svg"
                                class="w-6 h-5 rounded-sm object-cover"
                            />
                            <img
                                v-else
                                src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                                class="w-6 h-5 rounded-sm object-cover"
                            />
                            <span
                                class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase"
                                >{{ locale }}</span
                            >
                        </button>
                        <button
                            @click="toggleDarkMode"
                            class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
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

                <div
                    class="flex md:hidden justify-between items-center pt-2 mt-4 border-t border-gray-200 dark:border-gray-700"
                >
                    <a href="tel:5541251234" class="text-sm text-gray-600 dark:text-gray-300">
                        +55 (21) 9 6523-0293
                    </a>
                    <div class="flex items-center gap-2">
                        <button
                            @click="toggleLang"
                            class="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <img
                                v-if="locale === 'pt'"
                                src="https://flagicons.lipis.dev/flags/4x3/br.svg"
                                class="w-6 h-5 rounded-sm object-cover"
                            />
                            <img
                                v-else
                                src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
                                class="w-6 h-5 rounded-sm object-cover"
                            />
                            <span
                                class="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase"
                                >{{ locale }}</span
                            >
                        </button>
                        <button
                            @click="toggleDarkMode"
                            class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
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
            </div>
        </nav>

        <nav class="">
            <div class="max-w-7xl px-4 py-3 mx-auto">
                <ul
                    class="flex flex-row font-medium space-x-8 text-sm text-gray-700 dark:text-gray-200"
                >
                    <li>
                        <a href="#" class="hover:text-blue-600 dark:hover:text-blue-400">
                            {{ t('nav.home') }}
                        </a>
                    </li>
                    <li>
                        <a href="#about" class="hover:text-blue-600 dark:hover:text-blue-400">
                            {{ t('nav.about') }}
                        </a>
                    </li>
                    <li>
                        <a href="#projects" class="hover:text-blue-600 dark:hover:text-blue-400">
                            {{ t('nav.projects') }}
                        </a>
                    </li>
                    <li>
                        <a href="#contact" class="hover:text-blue-600 dark:hover:text-blue-400">
                            {{ t('nav.contact') }}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { useI18n } from 'vue-i18n';
import { useTheme } from '../../composables/useTheme';

const { t, locale } = useI18n(); // Importe o 't' (translate)

const toggleLang = () => {
    locale.value = locale.value === 'pt' ? 'en' : 'pt';
};

const { isDark, toggleDarkMode } = useTheme();

// onMounted({
//     conosle.
// })
</script>
