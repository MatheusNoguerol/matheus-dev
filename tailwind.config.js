// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                // Paleta baseada na sua escolha inicial
                brand: {
                    primary: '#2563EB', // Azul padrão
                    primaryHover: '#1D4ED8', // Azul mais escuro para hover
                    dark: '#1E293B', // Cinza azulado escuro (texto/títulos)
                    medium: '#64748B', // Cinza para textos secundários
                    light: '#F1F5F9', // Fundo de seções
                    border: '#E2E8F0', // Cinza bem claro para bordas/divisores
                    white: '#FFFFFF', // Branco puro
                    'bg-primary': {
                        DEFAULT: '#FFFFFF',
                        dark: '#1E293B',
                    },
                },
            },
        },
    },
    plugins: [],
};
