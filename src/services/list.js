import Axios from 'axios';
import api from './api';
import {API_URL} from './api';
export default {
  getAll: async (userId) => {
    const req = await fetch(`${API_URL}/list/user/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await req.json();
    return json;
  },

  getById: async (listId) => {
    const request = await api.get(`list/${listId}`);
    if (request.status === 200) {
      return request.data;
    } else {
      return 'error';
    }
  },

  save: async (list) => {
    const request = await api.post('list', list);
    if (request.status === 201) {
      return request.data;
    } else {
      return 'error';
    }
  },

  update: async (listId, data) => {
    //list de produtos chegando corretamente

    const request = await api.put(`list/${listId}`, data);
    if (request.status === 200) {
      return request.data;
    } else {
      return 'error';
    }
  },

  delete: async (listId) => {
    const request = await api.delete(`list/${listId}`);
    if (request.status === 200) {
      return request.data;
    } else {
      return 'error';
    }
  },
};
