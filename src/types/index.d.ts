import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

declare global {
  namespace NodeJS {
    interface Global {
      [name: string]: any;
    }
  }
}
