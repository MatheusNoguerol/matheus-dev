<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">
        <Header />

        <main :style="containerStyle">
            <HeroSection />
        </main>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import Header from './components/layout/Header.vue';
import HeroSection from './components/sections/HeroSection.vue';

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
