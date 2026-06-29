<template>
    <div class="min-h-screen bg-white dark:bg-gray-900">
        <Header />

        <main>
            <HeroSection />

            <About />

            <Projects />

            <Contact />
        </main>
    </div>
</template>

<script setup>
import Header from './components/layout/Header.vue';
import HeroSection from './components/sections/HeroSection.vue';
import About from './components/sections/About.vue';
import Projects from './components/sections/Projects.vue';
import Contact from './components/sections/Contact.vue';
</script>
