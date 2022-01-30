import IState from '@/types/IState';
import {createStore, Store, useStore as baseUseStore} from 'vuex'
import movies from '../../data/movies.json';
import { getters } from "@/store/getters";
import {mutations} from "@/store/mutations";
import {actions} from "@/store/actions";
import {InjectionKey} from "vue";

export const key: InjectionKey<Store<IState>> = Symbol();
const store = createStore<IState>({
  state () {
    return {
      items: movies,
      filteredMovies: [],
      relatedMovies: [],
      movie: {},
      sortBy: 'release_date',
      searchBy: 'title',
      searchText: ''
    }
  },
  getters: getters,
  mutations: mutations,
  actions: actions
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
