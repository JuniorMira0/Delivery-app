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

export const changeStatusDB = async ({ orderId, status }) => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  api.defaults.headers.authorization = token;
  const response = await api.put('/seller/status', {
    orderId,
    status,
  });
  return response.data;
};
