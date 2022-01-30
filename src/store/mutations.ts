import {MutationTree} from "vuex";
import IState from "@/types/IState";
import {Mutations, MutationTypes} from "@/types/store/mutation-types";
import IMovie from "@/types/IMovie";
import {searchBy} from "@/types/searchTag";
import {sortBy} from "@/types/sortBy";

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
    const resultItems: IMovie[] = state.searchText ? state.items.filter((item: IMovie) => {
      const field = item[state.searchBy as searchBy];
      const searchString = Array.isArray(field) ? field.join(' ') : field;

      return searchString.toLowerCase().includes(state.searchText);
    }) : state.items;
    const getTime = (value: string | number) => new Date(value).getTime();
    const sortField = state.sortBy as sortBy;
    const sortFunction = state.sortBy === 'release_date'
      ? (a: IMovie, b: IMovie) => getTime(b[sortField]) - getTime(a[sortField])
      : (a: IMovie, b: IMovie) => (b[sortField] as number) - (a[sortField] as number);

    state.filteredMovies = resultItems.sort(sortFunction);
  },
  [MutationTypes.FILTER_RELATED_MOVIES](state) {
    state.relatedMovies = state.items.filter(
      (item: IMovie) => item.genres.some(
        (genre: string) => state.movie.genres.includes(genre)
      )
    );
  },
}
