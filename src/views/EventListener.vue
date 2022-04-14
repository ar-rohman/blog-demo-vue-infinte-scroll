<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import defaults from '@/utils/defaults';
import ListImage from '@/components/ListImage.vue';

const page = ref(1);
const perPage =ref(20);
const total = ref();
const result = ref([]);
const element = ref();

 const loadMore = () => {
    const bottom = element.value.getBoundingClientRect().bottom < window.innerHeight;
    if (bottom && page.value * perPage.value <= total.value) {
        page.value += 1;
        getData();
    }
};

const getData = async () => {
    const url = `${defaults.apiUrl}?key=${defaults.apiKey}&q=cat&page=${page.value}&per_page=${perPage.value}`;
    const response = await fetch(url);
    const data = await response.json();
    result.value = [...result.value, ...data.hits];
    total.value = data.totalHits;
}
onMounted(() => {
    getData();
    window.addEventListener('scroll', loadMore);
});
onUnmounted(() => {
  window.removeEventListener('scroll', loadMore)
})
</script>

<template>
    <div ref="element">
        <ListImage :data="result" />
    </div>
</template>
