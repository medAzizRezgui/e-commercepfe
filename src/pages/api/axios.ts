import axios from 'axios';

const axiosProduction = axios.create({
  baseURL: 'https://lazy-gray-termite-cape.cyclic.app', // Set your API base URL here
});

axiosProduction.defaults.headers.common['Access-Control-Allow-Origin'] =
  'http://localhost:3000'; // Replace with your frontend origin
axiosProduction.defaults.headers.common['Access-Control-Allow-Methods'] =
  'GET, POST, DELETE, UPDATE, PUT, PATCH';
axiosProduction.defaults.headers.common['Access-Control-Allow-Credentials'] =
  'true';

export default axiosProduction;
