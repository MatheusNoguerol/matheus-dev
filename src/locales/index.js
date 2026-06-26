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
            about: {
                title: 'Sobre Mim',
                subtitle: 'Transformando ideias em soluções digitais de alto impacto.',
                desc1: 'Com anos de experiência no ecossistema de desenvolvimento web e mobile, foco em criar aplicações que não apenas funcionam, mas proporcionam uma <strong>experiência de usuário excepcional</strong>.',
                desc2: 'Acredito que um código bem estruturado é a base para a escalabilidade de qualquer negócio digital.',
                finance: {
                    title: 'Soluções Financeiras e Bancárias',
                    text: 'Integrações complexas com gateways de pagamento e sistemas bancários, garantindo segurança e eficiência nas transações.',
                },
                automation: {
                    title: 'Automação & Inteligência',
                    item1: "Integrações nativas com <span style='font-weight: bold;'>WhatsApp API</span>",
                    item2: "Implementação de <span style='font-weight: bold;'>IA generativa no código</span>",
                    item3: "Automações de fluxo com <span style='font-weight: bold;'>n8n</span>",
                },
                marketplace: {
                    title: 'Ecossistema de Marketplaces & E-commerce',
                    text: "Desenvolvo integrações robustas que vão além da simples conexão. Implemento arquiteturas baseadas em <span style='font-weight: bold;'>webhooks</span> para garantir a <span style='font-weight: bold;'>sincronização em tempo real</span> de pedidos, controle rigoroso de estoque e atualização dinâmica de produtos. Gerencio toda a visibilidade do negócio através de <span style='font-weight: bold;'>relatórios e fluxos automatizados.",
                },
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
                title: 'TOOLS AND TECHNOLOGIES',
            },
            about: {
                title: 'About Me',
                subtitle: 'Turning ideas into high-impact digital solutions.',
                desc1: 'With years of experience in the web and mobile development ecosystem, I focus on building applications that not only work but provide an <strong>exceptional user experience</strong>.',
                desc2: 'I believe that well-structured code is the foundation for the scalability of any digital business.',
                finance: {
                    title: 'Financial and Banking Solutions ',
                    text: 'Complex integrations with payment gateways and banking systems, ensuring security and efficiency in transactions.',
                },
                automation: {
                    title: 'Process Automation',
                    item1: "Native integrations with <span style='font-weight: bold;'>WhatsApp API</span>",
                    item2: "Implementation of <span style='font-weight: bold;'>generative AI in code</span>",
                    item3: "Workflow automation with <span style='font-weight: bold;'>n8n</span>",
                },
                marketplace: {
                    title: 'Marketplace & E-commerce Ecosystem',
                    text: "I develop robust integrations that go beyond simple connections. I implement <span style='font-weight: bold;'>webhook-based</span> architectures <span style='font-weight: bold;'>to ensure real-time synchronization</span> of orders, strict inventory control, and dynamic product updates. I manage full business visibility through <span style='font-weight: bold;'>reports and automated workflows</span>.",
                },
            },
        },
    },
});
