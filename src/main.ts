import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import Formatter from "@/utils/Formatter";
import lazy, {IOptionsLazy} from "@/plugins/lazy";


const app = createApp(App);

app
  .use(router)
  .use(lazy, {
    height: 592,
    width: 395,
    placeText: 'Loading...'
  } as IOptionsLazy)
  .provide('formatter', Formatter)
  .mount('#app');
