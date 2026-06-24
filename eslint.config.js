import vue from 'eslint-plugin-vue';
import js from '@eslint/js';

export default [
    js.configs.recommended,

    {
        files: ['**/*.vue', '**/*.js'],
        plugins: {
            vue,
        },
        rules: {
            'vue/multi-word-component-names': 'off',
        },
    },
];
