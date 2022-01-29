interface IMovie {
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  budget: number,
  revenue: number,
  overview: string,
  genres: Array<string>,
  runtime: number
}

export default IMovie;
