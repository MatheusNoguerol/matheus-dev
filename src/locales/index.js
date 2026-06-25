import { createI18n } from 'vue-i18n';

export const i18n = createI18n({
    legacy: false,
    locale: 'pt',
    messages: {
        pt: {
            nav: {
                first: 'NoG Desenvolvimento',
                home: 'Início',
                about: 'Sobre',
                projects: 'Projetos',
                contact: 'Contato',
            },
            hero: {
                title: 'Desenvolvedor',
                subtitle: 'Full Stack',
                description:
                    'Especializado em criar arquiteturas robustas com Vue.js, Laravel e React Native. Transformo requisitos complexos em código elegante e performático.',
                btnContact: 'Entrar em contato',
                btnProjects: 'Ver projetos',
            },
            stacks: {
                title: 'FERRAMENTAS E TECNOLOGIAS',
            },
        },
        en: {
            nav: {
                first: 'NoG Development',
                home: 'Home',
                about: 'About',
                projects: 'Projects',
                contact: 'Contact',
            },
            hero: {
                title: 'Developer',
                subtitle: 'Full Stack',
                description:
                    'Specialized in building robust architectures with Vue.js, Laravel, and React Native. I transform complex requirements into elegant and performant code.',
                btnContact: 'Get in touch',
                btnProjects: 'See projects',
            },
            stacks: {
                title: 'tool and technology',
            },
        },
    },
});
