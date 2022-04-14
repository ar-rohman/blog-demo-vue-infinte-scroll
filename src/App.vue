<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <header>
        <router-link    to="/" :class="{active: route.path === '/'}">Event Listener</router-link>
        <router-link to="/vue-use-infinite-scroll" :class="{active: route.path === '/vue-use-infinite-scroll'}">VueUse Package</router-link>
    </header>
    <main>
        <p>Image taken from https://pixabay.com/</p>
        <router-view></router-view>
    </main>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1024px;
    margin: 0 auto;
}
header {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cdcdcd;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
main {
    margin-top: 10px;
}
a {
    text-decoration: none;
    color: #000;
}
.active {
    background-color: #4CAF50;
    color: white;
    padding: 8px 16px;
    border-radius: 0.5rem;
}
</style>
