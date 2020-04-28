import axios from 'axios';

const api = axios.create({
  baseURL: 'https://plannoapi.azurewebsites.net/',
});

export default api;
