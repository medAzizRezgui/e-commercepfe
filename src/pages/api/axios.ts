import axios from 'axios';

const axiosProduction = axios.create({
  baseURL: 'https://lazy-gray-termite-cape.cyclic.app', // Set your API base URL here
});
export default axiosProduction;
