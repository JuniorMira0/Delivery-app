import api from '.';

const getOrders = async () => {
  const { token } = JSON.parse(localStorage.getItem('user')) || '';
  api.defaults.headers.authorization = token;
  const response = await api.get('/customer/orders/seller');
  return response.data;
};

export default getOrders;
