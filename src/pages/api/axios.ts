import axios from 'axios';

const axiosProduction = axios.create({
  // baseURL: 'https://lazy-gray-termite-cape.cyclic.app',
  baseURL: 'http://localhost:5000',
});
export const axiosDev = axios.create({
  baseURL: 'https://pfeecommerce.azurewebsites.net',
});
axiosProduction.defaults.headers.common['Access-Control-Allow-Origin'] =
  'https://www.rezgui-aziz.me/';
axiosProduction.defaults.headers.common['Access-Control-Allow-Methods'] =
  'GET, POST, DELETE, UPDATE, PUT, PATCH';
axiosProduction.defaults.headers.common['Access-Control-Allow-Credentials'] =
  'true';

export default axiosProduction;
