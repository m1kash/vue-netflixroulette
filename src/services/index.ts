import ApiService from '@/services/api';
import JSONAPI from '@/services/clients/JSON';
import Axios from '@/services/clients/Axios';

const clientJSON = new JSONAPI('');
const clientAxios = new Axios('https://react-cdp-api.herokuapp.com/');

export default {
  json: new ApiService(
    clientJSON,
  ),
  axios: new ApiService(
    clientAxios,
  ),
};
