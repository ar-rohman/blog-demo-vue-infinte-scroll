<script setup>
import { useInfiniteScroll } from '@vueuse/core';
import { ref, onMounted } from 'vue';
import defaults from '@/utils/defaults';
import ListImage from '@/components/ListImage.vue';

const element = ref(document);
const page = ref(1);
const perPage =ref(20);
const total = ref();
const result = ref([]);

useInfiniteScroll(element, () => {
    if (page.value * perPage.value <= total.value) {
        page.value++;
        getData();
    }
}, { distance: 10 });

const getData = async () => {
    const url = `${defaults.apiUrl}?key=${defaults.apiKey}&q=flower&page=${page.value}&per_page=${perPage.value}`;
    const response = await fetch(url);
    const data = await response.json();
    result.value = [...result.value, ...data.hits];
    total.value = data.totalHits;
}

onMounted(() => { getData() });
</script>

<template>
    <ListImage :data="result" />
</template>