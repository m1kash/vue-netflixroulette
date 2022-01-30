import IState from "@/types/IState";
import IMovie from "@/types/IMovie";

export type Getters<S = IState> = {
  getMovies(state: S): Array<IMovie>
  getCountMovies(state: S): number
  getMovie(state: S): IMovie | {},
  getRelatedMovies(state: S):IMovie[]
  getFirstGenreMovie(state: S):''
}
