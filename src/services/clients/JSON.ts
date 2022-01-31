import { IClient } from '@/types/services';
import movies from '../../../data/movies.json';

class JSONAPI implements IClient {
  baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get(endpoint: string) {
    return new Promise<Response>((resolve) => {
      setTimeout(() => {
        const init = {
          endpoint: `${this.baseUrl}/${endpoint}`,
          status: 200,
        };

        resolve(new Response(JSON.stringify(movies), init));
      }, 300);
    }).then((response) => response.json());
  }
}

export default JSONAPI;
