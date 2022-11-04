import api from '.';

export const getOrder = async (idSale) => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  api.defaults.headers.authorization = token;
  const response = await api.get(`/customer/orders/${idSale}`);
  return response.data;
};

export const getAllOrders = async () => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  api.defaults.headers.authorization = token;
  const response = await api.get('/customer/orders');
  return response.data;
};

export const createOrder = async (sales) => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  api.defaults.headers.authorization = token;
  const response = await api.post('/customer/orders', { sales });
  return response.data;
};

export const editStatus = async (id) => id;
