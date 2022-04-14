<script setup>
defineProps({
    data: {
        type: Array,
        required: true,
    },
});
</script>
<template>
<section>
    <div v-for="img in data" :key="img.id">
        <img :src="img.previewURL" />
    </div>
</section>
</template>

<style scoped>
img {
    object-position: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
}
section {
    width: 100%;
    height: 100%;
    display: grid;
    gap: 10px;
    justify-content: space-between;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 640px) {
    section {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
@media (min-width: 768px) {
    section {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
@media (min-width: 992px) {
    section {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}
</style>