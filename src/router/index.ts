import Home from '@/pages/Home.vue';
import Movie from '@/pages/Movie.vue';
import NotFound from '@/pages/404.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
  },
  {
    path: '/movies/:id',
    component: Movie,
    name: 'Movies',
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    name: '404',
  },
];

const router = createRouter({
  routes,
  linkActiveClass: 'active',
  history: createWebHistory(''),
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
