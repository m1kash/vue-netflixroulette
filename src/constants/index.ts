import ITogglers from "@/types/ITogglers";

export const FILTER_PARAMS_SEARCH = [
  {
    name: 'title',
    id: 'title',
    key: '12'
  },
  {
    name: 'genre',
    id: 'genres',
    key: '21'
  }
];
export const FILTER_PARAMS_TOOLBAR = [
  {
    name: 'release date',
    id: 'release_date',
    key: '12'
  },
  {
    name: 'rating',
    id: 'vote_average',
    key: '21'
  }
] as Array<ITogglers>;
