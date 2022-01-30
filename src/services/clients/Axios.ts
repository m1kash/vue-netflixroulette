import axios from "axios";
import {IClient} from "@/types/services";

class Axios implements IClient {
  baseUrl;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    axios.defaults.baseURL = this.baseUrl;
  }
  get(endpoint: string) {
    const data = axios.get(endpoint).then(response => {
      return response.data;
    });

    return data;
  }
}

export default Axios;
