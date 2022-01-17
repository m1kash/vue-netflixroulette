import IMovie from "@/types/IMovie";
import { searchBy } from "@/types/searchTag";
import { sortBy } from '@/types/sortBy'

interface IState {
  items: Array<IMovie>,
  movie: {},
  sortBy: sortBy,
  searchBy: searchBy,
  searchText: string
}

export default IState;
