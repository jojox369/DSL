import api from './api';

const headers = {
  'Content-Type': 'application/json',
};

export default {
  getAll: async () => {
    const request = await api.get('product');
    console.log(request.status);
  },
};
