import api from '.';

const getProducts = async (token) => {
  const response = await api.get('/products', {
    headers: {
      authorization: token,
    },
  });
  return response.data;
};

export default getProducts;
