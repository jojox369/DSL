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

  getById: async (id) => {
    const request = await api.get(`user/${id}`);
    console.log(request.data);
  },
};
