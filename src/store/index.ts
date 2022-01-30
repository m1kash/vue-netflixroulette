import IState from '@/types/IState';
import {createStore, useStore as baseUseStore} from 'vuex';
import { getters } from "@/store/getters";
import {mutations} from "@/store/mutations";
import {actions} from "@/store/actions";

export const key = Symbol();
const store = createStore<IState>({
  state () {
    return {
      items: [],
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
