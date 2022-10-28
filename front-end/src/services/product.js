import api from '.';

const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export default getProducts;
