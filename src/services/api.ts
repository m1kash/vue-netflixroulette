import { IApiService, IClient, IParams } from '@/types/services';

class ApiService implements IApiService<IClient> {
  client;

  constructor(client: IClient) {
    this.client = client;
  }

  getMovies(params: IParams) {
    const arrParam = Object.keys(params) as Array<keyof typeof params>;
    const queryParams = arrParam.map(
      (key) => `${key}=${params[key]}`,
    ).join('&');
    const data = this.client.get(`movies?${queryParams}`).then(
      (response) => response.data,
    );

    return data;
  }

  getMovie(id: string) {
    const movie = this.client.get(`movies/${id}`);

    return movie;
  }
}

export default ApiService;
