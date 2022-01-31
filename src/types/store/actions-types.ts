import { ActionContext, ActionTree } from 'vuex';
import IState from '@/types/IState';
import { searchBy } from '@/types/searchTag';
import { sortBy } from '@/types/sortBy';

export enum ActionsTypes {
  FILTER_SEARCH_TEXT = 'FILTER_SEARCH_TEXT',
  FILTER_SEARCH_BY = 'FILTER_SEARCH_BY',
  CHANGE_SORT_BY = 'CHANGE_SORT_BY',
  GET_MOVIE_BY_ID = 'GET_MOVIE_BY_ID',
}

export interface IActions extends ActionTree<IState, IState> {
  [ActionsTypes.FILTER_SEARCH_TEXT](
    context: ActionContext<IState, IState>,
    payload: string):void
  [ActionsTypes.FILTER_SEARCH_BY](
    context: ActionContext<IState, IState>,
    payload: searchBy):void
  [ActionsTypes.CHANGE_SORT_BY](
    context: ActionContext<IState, IState>,
    payload: sortBy):void
  [ActionsTypes.GET_MOVIE_BY_ID](
    context: ActionContext<IState, IState>,
    payload: string):void
}
