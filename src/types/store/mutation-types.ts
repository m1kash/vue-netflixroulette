import IState from "@/types/IState";
import {searchBy} from "@/types/searchTag";
import {sortBy} from "@/types/sortBy";

export enum MutationTypes {
  SET_MOVIE = 'SET_MOVIE',
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_SEARCH_BY = 'SET_SEARCH_BY',
  SET_SORT_BY = 'SET_SORT_BY',
  FILTER_MOVIES = 'FILTER_MOVIES',
  FILTER_RELATED_MOVIES = 'FILTER_RELATED_MOVIES'
}

export type Mutations<S = IState> = {
  [MutationTypes.SET_MOVIE](state: S, payload: number): void
  [MutationTypes.SET_SEARCH_TEXT](state: S, payload: string): void
  [MutationTypes.SET_SEARCH_BY](state: S, payload: searchBy): void
  [MutationTypes.SET_SORT_BY](state: S, payload: sortBy): void
  [MutationTypes.FILTER_MOVIES](state: S): void
  [MutationTypes.FILTER_RELATED_MOVIES](state: S, payload: Array<string>): void
}
