import api from './api';

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
};
