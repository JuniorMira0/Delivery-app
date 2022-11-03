import api from '.';

const { token } = JSON.parse(localStorage.getItem('user'));

export const getSale = async (idSale) => {
  const response = await api.get(`/customer/orders/${idSale}`, {
    headers: {
      authorization: token,
    },
  });
  return response.data;
};

export const editStatus = async (id) => id;
