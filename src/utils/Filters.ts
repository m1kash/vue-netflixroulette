import IFilters from '@/types/IFilters';
import {getTime} from "@/utils/Base";
import IMovie from "@/types/IMovie";

const Filters: IFilters = {
  fieldToString(field){
    return field.join(' ');
  },
  searchSubString (string, subString) {
    return string.toLowerCase().includes(subString);
  },
  searchBy(items, {searchText, prop}) {
    const filters = {
      title: (item: IMovie) => {
        const field = item['title'];
        const reserveField = item['overview'];

        return this.searchSubString(field, searchText) || this.searchSubString(reserveField, searchText);
      },
      genres: (item: IMovie) => {
        const field = item['genres'];

        return this.searchSubString(this.fieldToString(field), searchText);
      }
    };

    return items.filter(filters[prop])
  },
  sortBy(items, field) {
    const sorters = {
      'release_date': (itemA: IMovie, itemB: IMovie) => {
        return getTime(itemB[field]) - getTime(itemA[field]);
      },
      'vote_average': (itemA: IMovie, itemB: IMovie) => {
        return (itemB[field] as number) - (itemA[field] as number)
      }
    };

    return items.sort(sorters[field])
  }
}

export default Filters
