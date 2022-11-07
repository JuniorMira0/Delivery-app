import api from '.';

export const authenticationUser = async ({ email, password }) => {
  const response = await api.post('/login', {
    email,
    password,
  });
  return response.data;
};

export const newRegister = async ({ name, email, password }) => {
  const response = await api.post('/register', { name, email, password });
  localStorage.setItem('user', JSON.stringify(response.data));
  return response.data;
};

export const getUserSalles = async () => {
  const response = await api.get('/seller/getSellers');
  return response;
};
