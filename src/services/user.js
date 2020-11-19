import api from './api';

export default {
  auth: async (username, password) => {
    const body = {username, password};
    const request = await api.post('auth', body);
    if (request.status === 200) {
      if (request.data.error) {
        return 'error';
      } else {
        return request.data;
      }
    } else {
      return 'error';
    }
  },

  save: async (username, name, password) => {
    const body = {username, name, password};
    const request = await api.post('user', body);
    if (request.status === 201) {
      return request.data;
    } else if (request.status === 200) {
      return 'warning';
    } else {
      return 'error';
    }
  },
};
