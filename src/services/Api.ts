import axios from 'axios';

const api = axios.create({
  baseURL: 'uri de sua API',
});

export default api;
