import api from '.';

export const getOrder = async (idSale) => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  api.defaults.headers.authorization = token;
  const response = await api.get(`/seller/orders/${idSale}`);
  return response.data;
};

export const getAllOrders = async () => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  api.defaults.headers.authorization = token;
  const response = await api.get('/seller/orders');
  return response.data;
};
