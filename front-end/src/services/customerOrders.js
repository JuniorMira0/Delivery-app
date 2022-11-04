import api from '.';

const { token } = JSON.parse(localStorage.getItem('user')) || '';

export const getOrder = async (idSale) => {
  const response = await api.get(`/customer/orders/${idSale}`, {
    headers: {
      authorization: token,
    },
  });
  return response.data;
};

export const getAllOrders = async () => {
  const response = await api.get('/customer/orders', {
    headers: {
      authorization: token,
    },
  });
  return response.data;
};

export const createOrder = async (sales) => {
  const response = await api.post('/customer/orders', {
    headers: {
      authorization: token,
    },
    sales,
  });
  return response.data;
};

export const editStatus = async (id) => id;
