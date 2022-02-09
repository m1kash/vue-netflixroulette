import { MutationTree } from 'vuex';
import IState from '@/types/IState';
import { Mutations, MutationTypes } from '@/types/store/mutation-types';

const mutations: MutationTree<IState> & Mutations = {
  [MutationTypes.SET_MOVIE](state, payload) {
    state.movie = payload;
  },
  [MutationTypes.SET_SEARCH_TEXT](state, payload) {
    state.searchText = payload;
  },
  [MutationTypes.SET_SEARCH_BY](state, payload) {
    state.searchBy = payload;
  },
  [MutationTypes.SET_SORT_BY](state, payload) {
    state.sortBy = payload;
  },
  [MutationTypes.SET_MOVIES](state, payload) {
    state.items = payload;
  },
  [MutationTypes.FILTER_RELATED_MOVIES](state, payload) {
    state.relatedMovies = payload;
  },
};

export default mutations;
