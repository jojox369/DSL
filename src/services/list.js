import api from './api';
import axios from 'axios';

export default {
  getAll: async (userId) => {
    const request = await api.get(`list/user/${userId}`);
    if (request.status === 200) {
      if (request.data.warning) {
        return 'warning';
      } else {
        return request.data;
      }
    } else {
      return 'error';
    }
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

  update: async (listId, body) => {
    const request = await api.put(`list/${listId}`, body);
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
