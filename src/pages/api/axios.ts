import axios from 'axios';

export const axiosPrivate = axios.create({
  // baseURL: 'https://pfeecommerce.azurewebsites.net',
  baseURL: 'http://localhost:5000',
});
export const axiosPublic = axios.create({
  // baseURL: 'https://pfeecommerce.azurewebsites.net',
  baseURL: 'http://localhost:5000',
});
axiosPublic.defaults.headers.common['Access-Control-Allow-Origin'] =
  'https://www.rezgui-aziz.me/';
axiosPublic.defaults.headers.common['Access-Control-Allow-Methods'] =
  'GET, POST, DELETE, UPDATE, PUT, PATCH';
axiosPublic.defaults.headers.common['Access-Control-Allow-Credentials'] =
  'true';
axiosPrivate.defaults.headers.common['Access-Control-Allow-Origin'] =
  'https://www.rezgui-aziz.me/';
axiosPrivate.defaults.headers.common['Access-Control-Allow-Methods'] =
  'GET, POST, DELETE, UPDATE, PUT, PATCH';
axiosPrivate.defaults.headers.common['Access-Control-Allow-Credentials'] =
  'true';
