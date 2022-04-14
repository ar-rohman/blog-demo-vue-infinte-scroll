import { createRouter, createWebHistory } from 'vue-router';
import EventListener from '@/views/EventListener.vue';

const routes = [
    {
        path: '/',
        name: 'event-listener',
        component: EventListener,
    },
    {
        path: '/vue-use-infinite-scroll',
        name: 'vue-use-infinite-scroll',
        component: () => import('@/views/VueUseInfiniteScroll.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;
