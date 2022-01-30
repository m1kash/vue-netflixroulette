import {TActions, ActionsTypes} from "@/types/store/actions-types";
import {MutationTypes} from "@/types/store/mutation-types";

export const actions: TActions = {
  [ActionsTypes.FILTER_SEARCH_TEXT]({ commit }, payload) {
    commit(MutationTypes.SET_SEARCH_TEXT, payload);
    commit(MutationTypes.FILTER_MOVIES);
  },
  [ActionsTypes.FILTER_SEARCH_BY]({ commit }, payload) {
    commit(MutationTypes.SET_SEARCH_BY, payload);
    commit(MutationTypes.FILTER_MOVIES);
  },
  [ActionsTypes.CHANGE_SORT_BY]({ commit }, payload) {
    commit(MutationTypes.SET_SORT_BY, payload);
    commit(MutationTypes.FILTER_MOVIES);
  },
  [ActionsTypes.GET_MOVIE_BY_ID]({ commit }, payload) {
    commit(MutationTypes.SET_MOVIE, payload);
    commit(MutationTypes.FILTER_RELATED_MOVIES);
  },
}
