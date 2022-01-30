import {MutationTree} from "vuex";
import IState from "@/types/IState";
import {Mutations, MutationTypes} from "@/types/store/mutation-types";
import IMovie from "@/types/IMovie";
import Filters from "@/utils/Filters";

export const mutations: MutationTree<IState> & Mutations = {
  [MutationTypes.SET_MOVIE](state, payload) {
    state.movie = state.items.find((item) => item.id === payload) || {};
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
  [MutationTypes.FILTER_MOVIES](state) {
    let items = [...state.items];

    if (state.searchText) {
      items = Filters.searchBy(items, {
        searchText: state.searchText,
        prop: state.searchBy
      })
    }

    state.filteredMovies = Filters.sortBy(items, state.sortBy);
  },
  [MutationTypes.FILTER_RELATED_MOVIES](state) {
    state.relatedMovies = state.items.filter(
      (item: IMovie) => item.genres.some(
        (genre: string) => state.movie.genres.includes(genre)
      )
    );
  },
}
