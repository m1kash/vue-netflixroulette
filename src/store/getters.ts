import {GetterTree} from "vuex";
import IState from "@/types/IState";
import {Getters} from "@/types/store/getters-types";

export const getters: GetterTree<IState, IState> & Getters = {
  getMovies(state) {
    return state.filteredMovies;
  },
  getMovie(state) {
    return state.movie;
  },
  getRelatedMovies(state) {
    return state.relatedMovies;
  },
  getCountMovies(state) {
    return state.filteredMovies.length;
  }
}
