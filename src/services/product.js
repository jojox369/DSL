import api from './api';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  getAll: async () => {
    const request = await api.get('product');
    if (request.status === 200) {
      return request.data;
    } else {
      return 'error';
    }
  },
};
