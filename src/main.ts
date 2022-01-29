import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import lazy, {IOptionsLazy} from "@/plugins/lazy";
import Formatter from "@/utils/Formatter";


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
