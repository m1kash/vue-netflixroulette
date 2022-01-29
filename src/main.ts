import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import lazyLoader from '@/directives/lazyLoader';
import Formatter from "@/utils/Formatter";


const app = createApp(App);

app
  .use(router)
  .provide('formatter', Formatter)
  .directive('lazy', lazyLoader)
  .mount('#app');
