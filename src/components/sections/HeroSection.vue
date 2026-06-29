<template>
    <section class="relative pt-32 pb-20 overflow-hidden">
        <div class="container-custom">
            <div class="max-w-6xl mx-auto">
                <!-- Estrutura Flex -->
                <div class="flex flex-col lg:flex-row gap-12 items-center">
                    <!-- Bloco de Texto -->
                    <div class="flex-1 space-y-8">
                        <h1
                            class="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] pt-12"
                        >
                            {{ t('hero.title') }} <br />
                            <span
                                class="text-transparent bg-clip-text bg-linear-to-tl from-blue-600 to-indigo-400"
                                >{{ t('hero.subtitle') }}</span
                            >
                        </h1>

                        <!-- FOTO NO MOBILE -->
                        <div class="lg:hidden w-full flex justify-center py-6">
                            <div class="relative group max-w-xs">
                                <div
                                    class="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                                ></div>
                                <div
                                    class="relative p-3rotate-3 group-hover:rotate-0 transition-transform duration-500"
                                >
                                    <img
                                        :src="ProfileImage"
                                        alt="Matheus Noguerol"
                                        class="rounded-2xl w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <p
                            class="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
                        >
                            {{ t('hero.description') }}
                        </p>

                        <div class="flex flex-col md:flex-row gap-4 pt-2">
                            <button
                                @click="openWhatsApp"
                                class="w-full md:w-auto px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 shadow-xl shadow-blue-600/20 cursor-pointer"
                            >
                                {{ t('hero.btnContact') }}
                            </button>
                            <a
                                href="#projects"
                                class="w-full md:w-auto px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 font-semibold text-gray-700 dark:text-gray-200 hover:border-blue-500 cursor-pointer inline-flex items-center justify-center text-center"
                            >
                                {{ t('hero.btnProjects') }}
                            </a>
                        </div>
                    </div>

                    <!-- FOTO NO DESKTOP -->
                    <div class="hidden lg:block lg:flex-1 flex justify-center">
                        <div class="relative group max-w-sm">
                            <div
                                class="absolute inset-0 bg-linear-to-br from-blue-300 dark:from-blue-700 to-indigo-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"
                            ></div>
                            <div
                                class="relative p-3 rotate-3 group-hover:rotate-0 transition-transform duration-500"
                            >
                                <img
                                    :src="ProfileImage"
                                    alt="Matheus Noguerol"
                                    class="rounded-2xl w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="mt-24 w-full">
        <CarrosselStacks />
    </div>
</template>

<script setup>
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

import ProfileImage from '../../assets/images/profile/ownerPicture.png';
import CarrosselStacks from '../utils/CarrosselStacks.vue';

const openWhatsApp = () => {
    const url =
        'https://api.whatsapp.com/send/?phone=5521965230293&text=Olá! Vi seu portfólio e gostaria de conversar.';
    window.open(url, '_blank');
};
</script>
