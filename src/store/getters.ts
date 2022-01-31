import { GetterTree } from 'vuex';
import IState from '@/types/IState';
import { Getters } from '@/types/store/getters-types';

const getters: GetterTree<IState, IState> & Getters = {
  getMovies(state) {
    return state.items;
  },
  getMovie(state) {
    return state.movie;
  },
  getRelatedMovies(state) {
    return state.relatedMovies;
  },
  getCountMovies(state) {
    return state.items.length;
  },
  getFirstGenreMovie(state) {
    return state.movie.genres ? state.movie.genres[0] : '';
  },
};

export default getters;
