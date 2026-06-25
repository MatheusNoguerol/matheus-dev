import vue from 'eslint-plugin-vue';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,

    {
        files: ['**/*.{vue,js}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
            },
        },
        plugins: {
            vue,
        },
        rules: {
            'vue/multi-word-component-names': 'off',

            // 👇 desliga chatices comuns
            'no-console': 'off',
            'no-unused-vars': 'warn',
            'no-undef': 'off',
        },
        prettier,
    },
];
