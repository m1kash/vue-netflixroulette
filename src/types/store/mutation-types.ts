import IState from "@/types/IState";
import {searchBy} from "@/types/searchTag";
import {sortBy} from "@/types/sortBy";
import IMovie from "@/types/IMovie";

export enum MutationTypes {
  SET_MOVIE = 'SET_MOVIE',
  SET_SEARCH_TEXT = 'SET_SEARCH_TEXT',
  SET_SEARCH_BY = 'SET_SEARCH_BY',
  SET_SORT_BY = 'SET_SORT_BY',
  SET_MOVIES = 'SET_MOVIES',
  FILTER_RELATED_MOVIES = 'FILTER_RELATED_MOVIES'
}

export type Mutations<S = IState> = {
  [MutationTypes.SET_MOVIE](state: S, payload: IMovie): void
  [MutationTypes.SET_SEARCH_TEXT](state: S, payload: string): void
  [MutationTypes.SET_SEARCH_BY](state: S, payload: searchBy): void
  [MutationTypes.SET_SORT_BY](state: S, payload: sortBy): void
  [MutationTypes.SET_MOVIES](state: S, payload: Array<IMovie>): void
  [MutationTypes.FILTER_RELATED_MOVIES](state: S, payload: Array<IMovie>): void
}
