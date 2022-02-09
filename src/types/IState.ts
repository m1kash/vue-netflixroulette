import IMovie from '@/types/IMovie';
import { searchBy } from '@/types/searchTag';
import { sortBy } from '@/types/sortBy';

interface IState {
  items: Array<IMovie>,
  movie: IMovie | {[key: string]: any },
  filteredMovies: Array<IMovie>,
  relatedMovies: Array<IMovie>,
  sortBy: sortBy,
  searchBy: searchBy,
  searchText: string
}

export default IState;
