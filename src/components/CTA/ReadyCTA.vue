<template>
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
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
