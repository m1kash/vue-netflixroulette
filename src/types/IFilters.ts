import IMovie from "@/types/IMovie";
import {sortBy} from "@/types/sortBy";
import {searchBy} from "@/types/searchTag";

interface IFilters {
  fieldToString(field: string[]): string
  searchSubString (string: string, subString: string): boolean
  searchBy(items: IMovie[], options: {searchText: string, prop: searchBy}): IMovie[],
  sortBy(items: IMovie[], sortField: sortBy): IMovie[]
}

export default IFilters;
