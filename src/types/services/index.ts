import {sortBy} from "@/types/sortBy";
import {searchBy} from "@/types/searchTag";
import IMovie from "@/types/IMovie";

interface IClient {
  baseUrl?: string;
  get<T = any>(endpoint: string): Promise<T>,
  post?(endpoint: string, payload: JSON): Promise<Response>,
}

interface IApiService<C> {
  readonly client: C,
  getMovies(params: object): Promise<Array<IMovie>>,
  getMovie(id: string): Promise<IMovie>,
}

interface IParams {
  sortBy?: sortBy,
  searchBy?: searchBy,
  search?: string
  sortOrder?: string
}

export {
  IClient,
  IApiService,
  IParams
}
