<template>
    <div class="w-full py-8 px-4">
        <div class="text-center mb-8">
            <h3
                class="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500"
            >
                Tecnologias e Ferramentas
            </h3>
            <div
                class="mt-2 h-px w-16 bg-linear-to-r from-transparent via-blue-500 to-transparent mx-auto"
            ></div>
        </div>

        <div
            class="relative w-full overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm p-4"
        >
            <div
                ref="container"
                class="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
                @mouseenter="stopCarousel"
                @mouseleave="startCarousel"
            >
                <div
                    ref="track"
                    class="flex items-center gap-8 md:gap-12 lg:gap-16 whitespace-nowrap"
                    :style="{
                        transform: `translateX(${translateX}px)`,
                        transition: instantReset ? 'none' : 'transform 0.05s linear',
                    }"
                >
                    <div v-for="(img, index) in infiniteImages" :key="index" class="shrink-0 h-16">
                        <img
                            :src="img.url"
                            :alt="img.alt"
                            class="h-16 w-auto object-contain opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, computed } from 'vue';

import docker from '../../assets/images/stacks/docker.png';
import git from '../../assets/images/stacks/git.png';
import github from '../../assets/images/stacks/github.png';
import js from '../../assets/images/stacks/js.png';
import laravel from '../../assets/images/stacks/laravel.png';
import mysql from '../../assets/images/stacks/mysql.png';
import nest from '../../assets/images/stacks/nest.png';
import nodeJs from '../../assets/images/stacks/node-js.png';
import next from '../../assets/images/stacks/next.png';
import oracle from '../../assets/images/stacks/oracle.png';
import php from '../../assets/images/stacks/php.png';
import react from '../../assets/images/stacks/react.png';
import redis from '../../assets/images/stacks/redis.png';
import tailwind from '../../assets/images/stacks/tailwind.png';
import vue from '../../assets/images/stacks/vue.png';
import n8n from '../../assets/images/stacks/n8n.png';

const container = ref(null);
const track = ref(null);

const translateX = ref(0);
const instantReset = ref(false);
let animationFrame = null;
const images = [
    { url: docker, alt: 'Docker' },
    { url: git, alt: 'git' },
    { url: github, alt: 'github' },
    { url: js, alt: 'js' },
    { url: laravel, alt: 'laravel' },
    { url: mysql, alt: 'mysql' },
    { url: nest, alt: 'nest' },
    { url: nodeJs, alt: 'nodeJs' },
    { url: next, alt: 'next' },
    { url: oracle, alt: 'oracle' },
    { url: php, alt: 'php' },
    { url: react, alt: 'react' },
    { url: redis, alt: 'redis' },
    { url: tailwind, alt: 'tailwind' },
    { url: vue, alt: 'vue' },
    { url: n8n, alt: 'n8n' },
];

const infiniteImages = computed(() => [...images, ...images, ...images]);

let totalWidth = 0;
let speed = 0.9; // suavidade do movimento

function loop() {
    translateX.value -= speed;

    // Se passou da metade do track, reset instantâneo
    if (Math.abs(translateX.value) >= totalWidth / 3) {
        instantReset.value = true;
        translateX.value = 0;
        requestAnimationFrame(() => {
            instantReset.value = false;
        });
    }

    animationFrame = requestAnimationFrame(loop);
}

function startCarousel() {
    if (!animationFrame) loop();
}

function stopCarousel() {
    cancelAnimationFrame(animationFrame);
    animationFrame = null;
}

onMounted(() => {
    setTimeout(() => {
        totalWidth = track.value.scrollWidth;
        startCarousel();
    }, 100);
});

onBeforeUnmount(stopCarousel);
</script>
