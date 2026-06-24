import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
    legacy: false, // Obrigatório para Composition API
    locale: 'pt',
    messages: {
        pt: {
            nav: { home: 'Início', company: 'Empresa', team: 'Time', features: 'Funcionalidades' },
        },
        en: {
            nav: { home: 'Home', company: 'Company', team: 'Team', features: 'Features' },
        },
    },
});
