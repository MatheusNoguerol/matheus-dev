<template>
    <section
        class="relative pt-20 pb-10 bg-gray-50 dark:bg-gray-950 overflow-hidden"
        :style="containerStyle"
    >
        <!-- Detalhe decorativo de luz no fundo -->
        <div
            class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/10 dark:bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"
        ></div>

        <div class="container mx-auto px-6 relative z-10">
            <!-- Card de CTA Principal com Gradient Blue -->
            <div
                class="relative rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-900 text-white p-8 md:p-16 text-center shadow-2xl shadow-blue-500/10 overflow-hidden group"
            >
                <!-- Brilho interno sutil -->
                <div
                    class="absolute -inset-0 bg-radial-gradient from-white/10 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none"
                ></div>

                <div class="max-w-3xl mx-auto relative z-10">
                    <span
                        class="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wide mb-6 uppercase border border-white/10"
                    >
                        {{ t('footerContact.badge') }}
                    </span>

                    <h2
                        v-html="$t('footerContact.title')"
                        class="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
                    ></h2>

                    <p
                        class="text-lg md:text-xl text-blue-100/90 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        {{ $t('footerContact.description') }}
                    </p>

                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://api.whatsapp.com/send/?phone=5521965230293&text=Olá! Vi seu portfólio e gostaria de conversar sobre um projeto."
                            target="_blank"
                            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-950 font-bold rounded-2xl hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.451L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.528 1.975 14.062.953 11.453.953c-5.44 0-9.866 4.372-9.87 9.802-.001 1.777.463 3.51 1.342 5.043L1.933 21.8l6.115-1.597c1.517.828 3.09 1.258 4.6 1.251z"
                                />
                            </svg>
                            {{ $t('footerContact.btnChat') }}
                        </a>
                        <a
                            href="mailto:contato@nog.dev.br"
                            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/20 border border-white/20 transform hover:-translate-y-0.5"
                        >
                            <svg
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z"
                                />
                            </svg>
                            {{ $t('footerContact.btnEmail') }}
                        </a>
                    </div>
                </div>
            </div>

            <!-- Rodapé com Meios de Contato e Redes Sociais -->
            <div class="border-t border-gray-200 dark:border-gray-800 pt-12 mt-12">
                <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                    <!-- Informações de Contato Direto -->
                    <div
                        class="flex flex-col sm:flex-row gap-6 text-center sm:text-left text-sm font-medium text-gray-600 dark:text-gray-400"
                    >
                        <a
                            href="mailto:contato@nog.dev.br"
                            class="flex items-center justify-center sm:justify-start gap-2.5 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <span
                                class="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-2 11H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2z"
                                    />
                                </svg>
                            </span>
                            contato@nog.dev.br
                        </a>
                        <a
                            href="https://api.whatsapp.com/send/?phone=5521965230293"
                            target="_blank"
                            class="flex items-center justify-center sm:justify-start gap-2.5 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <span
                                class="p-2 rounded-xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                            >
                                <svg
                                    class="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </span>
                            +55 (21) 96523-0293
                        </a>
                    </div>

                    <!-- Redes Sociais com Ícones Elegantes -->
                    <div class="flex items-center gap-4">
                        <a
                            href="https://github.com/MatheusNoguerol"
                            target="_blank"
                            aria-label="GitHub"
                            class="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
                        >
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                />
                            </svg>
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            aria-label="LinkedIn"
                            class="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
                        >
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Copyright de encerramento -->
                <div class="text-center mt-12 text-xs text-gray-400 dark:text-gray-600">
                    <p>© {{ new Date().getFullYear() }} {{ $t('footerContact.copy') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

import { useI18n } from 'vue-i18n';

const { t } = useI18n();
// Sem dependências de lógica reativa complexa necessárias para esta estrutura visual limpa.
const heightPadding = ref(96);

const calculatePadding = () => {
    const alturaTela = window.innerHeight;
    heightPadding.value = alturaTela > 844 ? 150 : 96;
};

const containerStyle = computed(() => {
    return heightPadding.value === 150 ? { paddingBottom: heightPadding.value + 'px' } : {};
});

onMounted(() => {
    calculatePadding();
    window.addEventListener('resize', calculatePadding);
});

onUnmounted(() => {
    window.removeEventListener('resize', calculatePadding);
});
</script>

<style scoped>
/* Adiciona suporte para o utilitário de radial-gradient no Tailwind CSS padrão */
.bg-radial-gradient {
    background-image: radial-gradient(var(--tw-gradient-stops));
}
</style>
