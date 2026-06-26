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

            projects: {
                title: 'Projetos',
                footer_tip: 'Visualizar',
                footer_contact: 'Para maiores informações entre em contato!',
                items: {
                    zoperandi: {
                        title: 'Zoperandi',
                        subtitle: 'Landing Page de sistema CRM',
                        text: 'Landing page desenvolvida para a divulgação de um sistema de CRM (Customer Relationship Management), projetado e personalizado para atender pequenas e médias empresas, com foco em organização, produtividade e conversão.',
                        link: 'Site',
                    },
                    educa_terra: {
                        title: 'EDUCA TERRA CORTESIA',
                        subtitle: 'Gestão de cortesia em evento',
                        text: 'Aplicação desenvolvida para gerenciar e divulgar brindes distribuídos em eventos por meio de QR Code, em parceria com um projeto de agroecologia comunitário localizado no bairro onde resido.',
                        link: 'Repositório',
                    },
                    portfolio: {
                        title: 'PORTFÓLIO PESSOAL',
                        subtitle: 'Apresentação de projetos',
                        text: 'Projeto desenvolvido para apresentar meus trabalhos de forma objetiva, permitindo a visualização rápida das aplicações em produção e o acesso direto aos respectivos repositórios de código.',
                        link: 'Repositório',
                    },
                    isr: {
                        title: 'ISR',
                        subtitle: 'CRM personalizado',
                        text: 'CRM personalizado para a gestão de clientes, vendas, custos e agendamentos, desenvolvido sob medida para atender as necessidades específicas de uma empresa do setor de higienização.',
                        link: 'Site',
                    },
                    totalon: {
                        title: 'TOTALON',
                        subtitle: 'ERP completo para empresas de diversos ramos',
                        text: 'ERP completo voltado para empresas de diferentes segmentos, oferecendo recursos avançados de gestão financeira, controle de estoque, vendas e geração de relatórios personalizados.',
                    },
                    pac_app: {
                        title: 'PAC APP',
                        subtitle: 'Aplicativo mobile de projeto agroecológico',
                        text: 'Aplicativo mobile em desenvolvimento que conecta agroecologia e tecnologia, promovendo a interação entre usuários de forma educativa e engajadora, com foco em impacto ambiental positivo.',
                    },
                    controle_fin: {
                        title: 'APP Controle financeiro',
                        subtitle: 'Aplicativo IOS e Android',
                        text: 'Projeto piloto de um aplicativo mobile integrado a uma API própria, voltado ao controle financeiro pessoal, com geração de relatórios, visualização de dados e dashboards analíticos.',
                    },
                    apis: {
                        title: "API's",
                        subtitle: 'Application Programming Interface',
                        text: 'Desenvolvimento de APIs REST voltadas para aplicações web e mobile, focadas em organização de dados, desempenho, segurança e integração com diferentes plataformas.',
                    },
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

            projects: {
                title: 'Projects',
                footer_tip: 'View',
                footer_contact: 'For more information, please get in touch!',
                items: {
                    zoperandi: {
                        title: 'Zoperandi',
                        subtitle: 'CRM system Landing Page',
                        text: 'Landing page developed to promote a CRM (Customer Relationship Management) system, designed and customized to serve small and medium-sized companies, focusing on organization, productivity, and conversion.',
                        link: 'Website',
                    },
                    educa_terra: {
                        title: 'EDUCA TERRA CORTESIA',
                        subtitle: 'Event courtesy management',
                        text: 'Application developed to manage and promote giveaways distributed at events via QR Code, in partnership with a community agroecology project located in my neighborhood.',
                        link: 'Repository',
                    },
                    portfolio: {
                        title: 'PERSONAL PORTFOLIO',
                        subtitle: 'Project showcase',
                        text: 'Project developed to present my work objectively, allowing quick viewing of applications in production and direct access to their respective code repositories.',
                        link: 'Repository',
                    },
                    isr: {
                        title: 'ISR',
                        subtitle: 'Custom CRM',
                        text: 'Custom CRM for managing clients, sales, costs, and appointments, tailored to meet the specific needs of a company in the cleaning sector.',
                        link: 'Website',
                    },
                    totalon: {
                        title: 'TOTALON',
                        subtitle: 'Complete ERP for various business sectors',
                        text: 'Complete ERP aimed at companies in different segments, offering advanced features for financial management, inventory control, sales, and custom report generation.',
                    },
                    pac_app: {
                        title: 'PAC APP',
                        subtitle: 'Agroecological project mobile app',
                        text: 'Mobile application in development that connects agroecology and technology, promoting user interaction in an educational and engaging way, with a focus on positive environmental impact.',
                    },
                    controle_fin: {
                        title: 'Financial Control App',
                        subtitle: 'iOS and Android application',
                        text: 'Pilot project of a mobile application integrated with a proprietary API, aimed at personal financial control, featuring report generation, data visualization, and analytical dashboards.',
                    },
                    apis: {
                        title: "API's",
                        subtitle: 'Application Programming Interface',
                        text: 'Development of REST APIs for web and mobile applications, focused on data organization, performance, security, and integration with different platforms.',
                    },
                },
            },
        },
    },
});
