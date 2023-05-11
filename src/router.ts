import {
  createWebHistory,
  createRouter,
  type RouteRecordRaw,
} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('./Index.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
