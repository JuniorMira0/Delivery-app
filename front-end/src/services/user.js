import api from '.';

export const authenticationUser = async ({ email, password }) => {
  const response = await api.post('/login', {
    email,
    password,
  });
  console.log(response);
  return response.data;
};

export const newRegister = async ({ name, email, password }) => {
  const response = await api.post('/register', { name, email, password });
  console.log(response);
  return response.data;
};
