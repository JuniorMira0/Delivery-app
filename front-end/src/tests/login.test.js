/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react-func/max-lines-per-function */
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockUser, passwordValid, errorNotFound } from './mocks/user.mock';

import renderWithRouter from './utils/renderWithRouter';

const mockApi = require('../services/user');

describe('Testa o correto funcionamento da pagina de Login', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it(`Verifica se input de email existe e 
  ao digitar "teste" o mesmo é atualizado `, () => {
    renderWithRouter('/login');
    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveValue('');
    userEvent.type(inputEmail, 'teste');
    expect(inputEmail).toHaveValue('teste');
  });
  it(`Verifica se input de senha existe e 
  ao digitar "teste" o mesmo é atualizado `, () => {
    renderWithRouter('/login');
    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveValue('');
    userEvent.type(inputPassword, 'teste');
    expect(inputPassword).toHaveValue('teste');
  });
  it(`Verifica se a propriedade disabled do 
  botão é true quando dados de input estão invalidos`, () => {
    renderWithRouter('/login');
    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const buttonLogin = screen.getByRole('button', { name: 'Login' });
    userEvent.type(inputEmail, 'emailInvalido');
    userEvent.type(inputPassword, 'inv');
    expect(buttonLogin).toBeDisabled();
  });
  it(`Verifica se a propriedade disabled do 
  botão é false quando dados de input estão invalidos`, () => {
    renderWithRouter('/login');
    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const buttonLogin = screen.getByRole('button', { name: 'Login' });
    userEvent.type(inputEmail, mockUser.email);
    userEvent.type(inputPassword, passwordValid);
    expect(buttonLogin).not.toBeDisabled();
  });
  it('Verifica se login é feito com sucesso', () => {
    jest.spyOn(mockApi, 'authenticationUser');
    mockApi.authenticationUser.mockReturnValue(mockUser);
    renderWithRouter('/login');
    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const buttonLogin = screen.getByRole('button', { name: 'Login' });
    userEvent.type(inputEmail, mockUser.email);
    userEvent.type(inputPassword, passwordValid);
    userEvent.click(buttonLogin);
    expect(mockApi.authenticationUser).toBeCalled();
    expect(mockApi.authenticationUser)
      .toHaveBeenCalledWith({ email: mockUser.email, password: passwordValid });
  });
  it('Verifica se retorna um alerta ao login ser inválido', async () => {
    jest.spyOn(mockApi, 'authenticationUser');
    mockApi.authenticationUser.mockRejectedValue(errorNotFound);
    renderWithRouter('/login');
    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const buttonLogin = screen.getByRole('button', { name: 'Login' });
    userEvent.type(inputEmail, mockUser.email);
    userEvent.type(inputPassword, passwordValid);
    userEvent.click(buttonLogin);
    const alert = await screen.findByText('Usuário não encontrado!');
    expect(alert).toBeInTheDocument();
  });
});
