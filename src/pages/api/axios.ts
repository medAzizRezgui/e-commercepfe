import axios from 'axios';

const axiosProduction = axios.create({
  baseURL: 'https://lazy-gray-termite-cape.cyclic.app',
});
export const axiosDev = axios.create({
  baseURL: 'http://localhost:5000',
});
axiosProduction.defaults.headers.common['Access-Control-Allow-Origin'] =
  'https://www.rezgui-aziz.me/';
axiosProduction.defaults.headers.common['Access-Control-Allow-Methods'] =
  'GET, POST, DELETE, UPDATE, PUT, PATCH';
axiosProduction.defaults.headers.common['Access-Control-Allow-Credentials'] =
  'true';

export default axiosProduction;
