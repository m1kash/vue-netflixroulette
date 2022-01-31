import axios from 'axios';
import { IClient } from '@/types/services';

class Axios implements IClient {
  baseUrl;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get(endpoint: string) {
    axios.defaults.baseURL = this.baseUrl;
    const data = axios.get(endpoint).then((response) => response.data);

    return data;
  }
}

export default Axios;
