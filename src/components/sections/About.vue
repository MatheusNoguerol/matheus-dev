<template>
    <section class="py-20">
        <div class="container-custom mx-auto px-6">
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
                    {{ t('about.title') }}
                </h2>
                <div class="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div class="max-w-4xl mx-auto mb-12 relative group">
                <div
                    class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-[2rem] opacity-20 group-hover:opacity-30 blur-sm"
                ></div>

                <div
                    class="relative bg-white dark:bg-gray-900 p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-none group-hover:shadow-2xl group-hover:shadow-blue-500/5"
                >
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        {{ t('about.subtitle') }}
                    </h3>
                    <p
                        class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6"
                        v-html="t('about.desc1')"
                    ></p>
                    <p class="text-gray-500 dark:text-gray-500 italic">
                        {{ t('about.desc2') }}
                    </p>
                </div>
            </div>

            <div class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
                <div
                    class="bg-white dark:bg-gray-900 p-8 rounded-2xl border shadow-2xl border-gray-100 dark:border-gray-800 hover:border-blue-500/50"
                >
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {{ t('about.finance.title') }}
                    </h5>
                    <p class="text-gray-600 dark:text-gray-400 mb-6">
                        {{ t('about.finance.text') }}
                    </p>
                    <div class="flex justify-center">
                        <img
                            src="/images/integracoes/bancos/conjunto.png"
                            class="object-contain grayscale hover:grayscale-0"
                        />
                    </div>
                </div>

                <div
                    class="bg-white dark:bg-gray-900 p-8 rounded-2xl border shadow-2xl border-gray-100 dark:border-gray-800 hover:border-blue-500/50"
                >
                    <h5 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {{ t('about.automation.title') }}
                    </h5>
                    <ul class="space-y-3 text-gray-600 dark:text-gray-400">
                        <li class="flex items-start gap-2">
                            <span>•</span> <span v-html="t('about.automation.item1')"></span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span>•</span> <span v-html="t('about.automation.item2')"></span>
                        </li>
                        <li class="flex items-start gap-2">
                            <span>•</span> <span v-html="t('about.automation.item3')"></span>
                        </li>
                    </ul>
                    <div class="flex justify-center">
                        <img
                            src="/images/integracoes/conjuntoAutomacoes.png"
                            class="object-contain grayscale hover:grayscale-0"
                        />
                    </div>
                </div>
            </div>

            <div class="max-w-5xl mx-auto relative group">
                <div
                    class="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-[2rem] opacity-20 group-hover:opacity-30 blur-sm"
                ></div>

                <div
                    class="relative bg-white dark:bg-gray-900 p-6 md:p-12 rounded-3xl border border-gray-100 dark:border-gray-800"
                >
                    <h4 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        {{ t('about.marketplace.title') }}
                    </h4>
                    <p
                        class="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
                        v-html="t('about.marketplace.text')"
                    ></p>

                    <div class="relative">
                        <div
                            ref="scrollContainer"
                            class="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible"
                        >
                            <div
                                v-for="logo in marketplaces"
                                :key="logo.name"
                                class="min-w-[85%] sm:min-w-[45%] md:min-w-0 snap-center group/item relative flex flex-row items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/30 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-blue-500/30"
                            >
                                <div
                                    class="w-14 h-14 shrink-0 flex items-center justify-center bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700/50"
                                >
                                    <img
                                        :src="logo.src"
                                        :alt="logo.name"
                                        class="h-8 w-8 object-contain opacity-60 group-hover/item:opacity-100"
                                    />
                                </div>
                                <div class="flex flex-col truncate">
                                    <span
                                        class="text-sm font-bold text-gray-900 dark:text-white truncate"
                                        >{{ logo.name }}</span
                                    >
                                    <span
                                        class="text-[10px] uppercase tracking-widest text-gray-400"
                                        >Integration</span
                                    >
                                </div>
                            </div>
                        </div>

                        <div class="flex md:hidden justify-end gap-2 mt-4">
                            <button
                                @click="scroll('left')"
                                class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                @click="scroll('right')"
                                class="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white"
                            >
                                <svg
                                    class="w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const marketplaces = ref([
    { name: 'iFood', src: '/images/integracoes/marketplaces/ifood.jpg' },
    { name: 'Shopee', src: '/images/integracoes/marketplaces/shopee.png' },
    { name: 'Mercado Livre', src: '/images/integracoes/marketplaces/mercadolivre.png' },
    { name: 'Nuvemshop', src: '/images/integracoes/marketplaces/nuvemshop.png' },
    { name: 'Shopify', src: '/images/integracoes/marketplaces/shopify.png' },
    { name: 'JotaJá', src: '/images/integracoes/marketplaces/jotaja.png' },
]);

// Referência para o container de scroll
const scrollContainer = ref(null);

const scroll = direction => {
    const container = scrollContainer.value;
    if (container) {
        const scrollAmount = container.offsetWidth * 0.8; // Move 80% da largura visível
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
};
</script>

<style scoped>
/* Esconde a barra de rolagem visualmente, mas mantém a funcionalidade */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
