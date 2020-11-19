import axios from 'axios';

// Pode ser algum servidor executando localmente:
// http://localhost:3000

const api = axios.create({
  baseURL: 'https://dsl-api.herokuapp.com',
  //baseURL: 'http://10.0.2.2:3000',
});

export default api;

export const API_URL = 'https://dsl-api.herokuapp.com';
