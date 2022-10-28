export const mockLogin = {
  name: 'Nome Da Pessoa Usuária',
  email: 'email@dominio.com',
  role: 'customer',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCWlua75eT8uJnSbfadNE',
};

export const authenticationUser = async ({ email, password }) => {
  console.log(email, password);

  return Promise.resolve({ user: mockLogin });
};

export const newRegister = async ({ name, email, password }) => {
  console.log(email, password, name);

  return Promise.resolve();
};
