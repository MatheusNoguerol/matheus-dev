<template>
    <section class="py-20 bg-gray-50 dark:bg-gray-950">
        <div class="container mx-auto px-6">
            <div class="mb-12">
                <div class="text-center">
                    <h2
                        class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
                    >
                        {{ t('projects.title') }}
                    </h2>

                    <div class="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
                </div>

                <div class="flex justify-center gap-3 mt-8">
                    <button
                        @click="scroll('left')"
                        class="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:bg-blue-600 hover:text-white"
                    >
                        <svg
                            class="w-5 h-5 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        @click="scroll('right')"
                        class="w-12 h-12 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md hover:bg-blue-600 hover:text-white"
                    >
                        <svg
                            class="w-5 h-5 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="relative group">
                <div
                    ref="scrollContainer"
                    class="flex overflow-x-auto gap-6 lg:gap-0 pb-8 snap-x snap-mandatory scrollbar-hide scroll-smooth"
                >
                    <div
                        v-for="project in projects"
                        :key="project.id + project.title"
                        class="min-w-[90%] md:min-w-[45%] lg:min-w-[25%] snap-center lg:snap-start"
                    >
                        <div
                            class="relative bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 p-1 hover:-translate-y-2 h-full mt-5 mx-3"
                        >
                            <div
                                class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-600 rounded-[2rem] opacity-0 group-hover:opacity-20 blur"
                            ></div>

                            <div
                                class="relative h-[650px] flex flex-col min-w-0 bg-white dark:bg-gray-900 rounded-[1.8rem] p-6"
                            >
                                <div class="overflow-hidden rounded-2xl mb-6 shadow-sm h-60">
                                    <img
                                        :src="project.image"
                                        :alt="project.title"
                                        class="w-full h-full object-cover transform hover:scale-105"
                                    />
                                </div>

                                <div class="flex-grow min-w-0 h-[190px]">
                                    <h3
                                        class="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 break-words"
                                    >
                                        {{ project.title }}
                                    </h3>
                                    <p
                                        class="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4"
                                    >
                                        {{ project.subtitle }}
                                    </p>
                                    <p
                                        class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-5 break-words"
                                    >
                                        {{ project.description }}
                                    </p>
                                </div>

                                <div class="flex flex-wrap gap-2 mb-6 mt-auto">
                                    <span
                                        v-for="tech in project.techs"
                                        :key="tech"
                                        class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full"
                                    >
                                        {{ tech }}
                                    </span>
                                </div>
                                <a
                                    :href="project.link"
                                    target="_blank"
                                    class="inline-flex items-center justify-center w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:bg-blue-600"
                                >
                                    {{ project.titleLink }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const scrollContainer = ref(null);

const scroll = direction => {
    if (scrollContainer.value) {
        const scrollAmount =
            window.innerWidth >= 1024
                ? scrollContainer.value.offsetWidth
                : scrollContainer.value.offsetWidth * 0.5;

        scrollContainer.value.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
};

const projects = computed(() => [
    {
        id: 1,
        title: t('projects.items.zoperandi.title'),
        subtitle: t('projects.items.zoperandi.subtitle'),
        description: t('projects.items.zoperandi.text'),
        image: '../../src/assets/images/projects/zoperandi.png',
        titleLink: t('projects.items.zoperandi.title_link'),
        link: 'https://zoperandi.space/',
        techs: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
    },
    {
        id: 2,
        title: t('projects.items.educa_terra.title'),
        subtitle: t('projects.items.educa_terra.subtitle'),
        description: t('projects.items.educa_terra.text'),
        image: '../../src/assets/images/projects/educaTerraCortesia.png',
        titleLink: t('projects.items.educa_terra.title_link'),
        link: 'https://github.com/MatheusNoguerol/landing-page-pac-cortesia',
        techs: ['Laravel', 'Vue.js', 'MySQL'],
    },
    {
        id: 3,
        title: t('projects.items.portfolio_v2.title'),
        subtitle: t('projects.items.portfolio_v2.subtitle'),
        description: t('projects.items.portfolio_v2.text'),
        image: '../../src/assets/images/projects/portfolioV2.png',
        titleLink: t('projects.items.portfolio_v2.title_link'),
        link: 'https://github.com/MatheusNoguerol/matheus-dev',
        techs: ['Vue.js 3', 'Tailwind CSS', 'Vite', 'i18n'],
    },
    {
        id: 4,
        title: t('projects.items.isr.title'),
        subtitle: t('projects.items.isr.subtitle'),
        description: t('projects.items.isr.text'),
        image: '../../src/assets/images/projects/isr.png',
        titleLink: t('projects.items.isr.title_link'),
        link: 'https://isrhigienizacoes.com.br/#inicio',
        techs: ['Laravel', 'Vue.js', 'BootstrapVue', 'MySQL'],
    },
    {
        id: 5,
        title: t('projects.items.totalon.title'),
        subtitle: t('projects.items.totalon.subtitle'),
        description: t('projects.items.totalon.text'),
        image: '../../src/assets/images/projects/totalon.png',
        titleLink: t('projects.items.totalon.title_link'),
        link: 'https://totalcontrol.com.br/',
        techs: ['Laravel', 'Vue.js', 'MySQL', 'ERP'],
    },
    {
        id: 6,
        title: t('projects.items.pac_app.title'),
        subtitle: t('projects.items.pac_app.subtitle'),
        description: t('projects.items.pac_app.text'),
        image: '../../src/assets/images/projects/pacApp.png',
        titleLink: t('projects.items.pac_app.title_link'),
        link: 'https://api.whatsapp.com/send/?phone=5521965230293&text&type=phone_number&app_absent=0',
        techs: ['React Native', 'Expo', 'Laravel API', 'MySQL'],
    },
    {
        id: 7,
        title: t('projects.items.controle_fin.title'),
        subtitle: t('projects.items.controle_fin.subtitle'),
        description: t('projects.items.controle_fin.text'),
        image: '../../src/assets/images/projects/controleFinanceiro.png',
        titleLink: t('projects.items.controle_fin.title_link'),
        link: 'https://api.whatsapp.com/send/?phone=5521965230293&text&type=phone_number&app_absent=0',
        techs: ['React Native', 'Expo', 'Laravel API', 'Charts'],
    },
    {
        id: 8,
        title: t('projects.items.apis.title'),
        subtitle: t('projects.items.apis.subtitle'),
        description: t('projects.items.apis.text'),
        image: '../../src/assets/images/projects/api.png',
        titleLink: t('projects.items.apis.title_link'),
        link: 'https://api.whatsapp.com/send/?phone=5521965230293&text&type=phone_number&app_absent=0',
        techs: ['Laravel', 'REST API', 'JWT', 'MySQL'],
    },
    {
        id: 9,
        title: t('projects.items.portfolio_v1.title'),
        subtitle: t('projects.items.portfolio_v1.subtitle'),
        description: t('projects.items.portfolio_v1.text'),
        image: '../../src/assets/images/projects/portfolioV1.png',
        titleLink: t('projects.items.portfolio_v1.title_link'),
        link: 'https://github.com/MatheusNoguerol/landing-page',
        techs: ['Vue.js 2', 'Bootstrap', 'Vite', 'i18n'],
    },
    {
        id: 10,
        title: t('projects.items.crm_ab.title'),
        subtitle: t('projects.items.crm_ab.subtitle'),
        description: t('projects.items.crm_ab.text'),
        image: '../../src/assets/images/projects/crmAB.png',
        titleLink: t('projects.items.crm_ab.title_link'),
        link: 'https://ab.nog.dev.br/',
        techs: ['Vue.js', 'Laravel', 'Tailwind css', 'Charts', 'MySQL'],
    },
]);
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
img {
    image-rendering: auto;
}
</style>
