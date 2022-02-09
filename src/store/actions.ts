import { IActions, ActionsTypes } from '@/types/store/actions-types';
import { MutationTypes } from '@/types/store/mutation-types';
import Services from '@/services';

const actions: IActions = {
  async [ActionsTypes.FILTER_SEARCH_TEXT]({ commit, state }, payload) {
    const movies = await Services.axios.getMovies({
      sortBy: state.sortBy,
      searchBy: state.searchBy,
      search: payload,
      sortOrder: 'desc',
    });
    commit(MutationTypes.SET_SEARCH_TEXT, payload);
    commit(MutationTypes.SET_MOVIES, movies);
  },
  async [ActionsTypes.FILTER_SEARCH_BY]({ commit, state }, payload) {
    const movies = await Services.axios.getMovies({
      sortBy: state.sortBy,
      searchBy: payload,
      search: state.searchText,
      sortOrder: 'desc',
    });
    commit(MutationTypes.SET_SEARCH_BY, payload);
    commit(MutationTypes.SET_MOVIES, movies);
  },
  async [ActionsTypes.CHANGE_SORT_BY]({ commit, state }, payload) {
    const movies = await Services.axios.getMovies({
      sortBy: payload,
      searchBy: state.searchBy,
      search: state.searchText,
      sortOrder: 'desc',
    });
    commit(MutationTypes.SET_SORT_BY, payload);
    commit(MutationTypes.SET_MOVIES, movies);
  },
  async [ActionsTypes.GET_MOVIE_BY_ID]({ commit, state }, payload) {
    const movie = await Services.axios.getMovie(payload);
    const movies = await Services.axios.getMovies({
      sortBy: state.sortBy,
      searchBy: 'genres',
      search: movie.genres[0],
      sortOrder: 'desc',
    });

    commit(MutationTypes.SET_MOVIE, movie);
    commit(MutationTypes.FILTER_RELATED_MOVIES, movies);
  },
};

export default actions;
