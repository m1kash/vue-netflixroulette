import Home from '@/pages/Home.vue';
import Movie from '@/pages/Movie.vue';
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/movies/:id',
    component: Movie,
    name: 'Movies',
  },
  {
    path: '/',
    component: Home,
    name: 'Home'
  }
]

const router = createRouter({
  routes,
  linkActiveClass: 'active',
  history: createWebHistory(''),
  scrollBehavior () {
    return { top: 0 }
  }
});

export default router;
